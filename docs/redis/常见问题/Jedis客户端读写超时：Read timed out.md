---
title: Jedis客户端读写超时：Read timed out
tags:
  - Redis
  - Jedis
---
# 问题现象
```java
redis.clients.jedis.exceptions.JedisConnectionException: java.net.SocketTimeoutException: Read timed out
```
# 解决方案
问题原因可能有下列几种：
## 1. 读写超时设置的过短
```java
JedisPool(GenericObjectPoolConfig poolConfig, String host, int port, int timeout)
```
## 2. Redis Service发生阻塞
Redis是单线程操作，如果有大量慢查询或者淘汰KEY会阻塞其他命令执行，造成超时问题。
注意：Redis Slow Log是一个记录超过指定执行时间的查询的系统。执行时间不包括I/O操作，如与客户端对话、发送回复等，而只是实际执行命令所需的时间(这是命令执行的唯一阶段，线程被阻塞，同时不能为其他请求服务)。
## 3. 应用服务器过载过高(GC等)
## 4. Redis服务器负载过高

## 5. 网络不稳定