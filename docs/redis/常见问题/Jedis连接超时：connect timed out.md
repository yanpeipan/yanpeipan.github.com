---
title: Jedis连接超时：connect timed out
tags:
  - Redis
  - Jedis
  - JedisConnectionException
---
# 问题现象
在使用Jedis Client连接Redis Service时抛出异常：
```java
redis.clients.jedis.exceptions.JedisConnectionException:
	java.net.SocketTimeoutException: connect timed out
```
# 问题解析
## 1. Jedis连接超时设置的过短
```java
public Jedis(String host, int port, int connectionTimeout, int soTimeout) {
    super(host, port, connectionTimeout, soTimeout);
}
```
## 2. tcp-backlog满，造成新的连接失败
Redis发生阻塞，造成tcp-backlog已满，新的连接失败
## 3. 客户端与服务端网络故障
使用**telnet**测试连通性 