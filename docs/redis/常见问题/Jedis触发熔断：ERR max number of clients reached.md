---
title: Jedis触发熔断：ERR max number of clients reached
tags:
  - Jedis
  - Redis
  - JedisDataException
---

## 问题现象
如果Redis Service连接数超过`maxclients`（默认为10000）阈值则会触发熔断，抛出以下异常：
```java
redis.exceptions.connectionerror: max number of clients reached

redis.clients.jedis.exceptions.JedisDataException: ERR max number of clients reached
```

## 解决方案
### 1. 调整最大连接数
调整Redis Service的最大连接数：
```bash
config set maxclients 65535
```
注意：检查Redis Service能够打开的最大文件描述符数量：
```bash
# 查看Redis Service能够打开的最大文件描述符数量
cat /proc/`redis-pid`/limits | grep 'Max open files'

# 统计Redis Service进程打开的文件描述符数量
ll /proc/`redis-pid`/fd | wc -l
```
### 2. 降低空闲超时时间
Redis Service通过**timeout**来设置客户端的空闲超时，默认值为0表示永不关闭，设置一个合理的参数可以让服务端主动关闭闲置的连接。
注：为了提高性能，Redis不一定会精确地按照**timeout**参数值的时间来断开符合条件的空闲连接，例如设置**timeout**参数值为10s，但空闲连接可能在12s后，服务器中新增很多连接时才会被断开。如需降低这个延迟，可适当增大**hz**参数的值，提高负责断开超时连接等定时任务的运行频率。
### 3. 定位和优化客户端问题
查找客户端的原因：扩容/连接池配置/慢查询