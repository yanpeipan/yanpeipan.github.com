---
title: Jedis客户端缓冲区异常：Unexpected end of stream
tags:
  - Redis
  - Jedis
  - JedisConnectionException
---
# 问题现象
使用Jedis连接池，客户端缓冲区异常：Unexpected end of stream
```java
redis.clients.jedis.exceptions.JedisConnectionException: Unexpected end of stream.  
    at redis.clients.util.RedisInputStream.ensureFill(RedisInputStream.java:199)  
    at redis.clients.util.RedisInputStream.readByte(RedisInputStream.java:40)  
    at redis.clients.jedis.Protocol.process(Protocol.java:151)  
    at redis.clients.jedis.Protocol.read(Protocol.java:215)  
    at redis.clients.jedis.Connection.readProtocolWithCheckingBroken(Connection.java:340)  
    at redis.clients.jedis.Connection.getBinaryBulkReply(Connection.java:259)  
    at redis.clients.jedis.Connection.getBulkReply(Connection.java:248)  
    at redis.clients.jedis.Jedis.get(Jedis.java:153)
```
# 问题排查
## 1. 多个线程共用一个Jedis连接
```java
new Thread(new Runnable() {
    public void run() {
        jedis.get("hello");
    }
}).start();

new Thread(new Runnable() {
    public void run() {
        jedis.get("world");
    }
}).start();
```
## 2. 客户端缓冲区已满，导致熔断
Redis 普通客户端请求超过`client-output-buffer-limit`限制，导致连接断开的问题
Redis有三种客户端缓冲区：
- 普通客户端缓冲区(normal)
- slave客户端缓冲区(slave)
- 发布订阅缓冲区(pubsub)
```bash
# 默认配置
client-output-buffer-limit normal 0 0 0
client-output-buffer-limit slave 256mb 64mb 60
client-output-buffer-limit pubsub 8mb 2mb 60
```
可以采用临时解决办法:
```bash
config set client-output-buffer-limit "normal 0 0 0 slave 8294967296 2147483648 60 pubsub 33554432 8388608 60"
```
## 3. 连接空闲，被主动关闭
Redis Service在空闲`timeout`后主动`FIN`关闭连接。客户端从连接池拿到已经被断开的连接，导致异常：
```java
try {  
    jedis.get("helo")  
    Thread.sleep(3000)  
    jedis.get("hello")  
} catch (ex: Exception) {  
    ex.printStackTrace
}
```
```bash
127.0.0.1:6379> config get timeout
1) "timeout"  
2) "2"
```
在大并发场景下，不推荐开启`testOnBorrow`。参照[[JedisPool连接池参数配置]]