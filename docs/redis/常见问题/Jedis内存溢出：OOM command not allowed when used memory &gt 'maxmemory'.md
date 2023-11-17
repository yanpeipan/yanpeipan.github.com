---
title: Jedis内存溢出：OOM command not allowed when used memory > 'maxmemory'
tags:
  - Redis
  - Jedis
  - JedisDataException
---
# 问题现象
```java
redis.clients.jedis.exceptions.JedisDataException: OOM command not allowed when used memory > 'maxmemory'.
```
# 问题分析
Redis节点使用的内存，大于该实例配置的**maxmemory**。
```
info memory
# Memory  
# 已用内存
used_memory:1013760  
used_memory_human:990.00K  
# 给redis分配的内存
used_memory_rss:14737408  
used_memory_rss_human:14.05M  
used_memory_peak:2540352  
used_memory_peak_human:2.42M  
used_memory_peak_perc:39.91%  
used_memory_overhead:868272  
used_memory_startup:866008  
...
```
# 解决方案
## 1. 调整配置maxmeory
```
CONFIG SET maxmemory 2gb
```
## 2. 客户端缓冲区异常
使用了monitor、pub/sub使用不当
## 3. 修改缓存过期策略
默认的redis设置是非常保守的，即内存超限后就不在存储，可以把策略修改为LRU算法
```
CONFIG SET maxmemory-policy volatile-lru
```