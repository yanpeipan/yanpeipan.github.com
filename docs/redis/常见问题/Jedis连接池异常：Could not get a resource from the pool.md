---
title: Jedis连接池异常：Could not get a resource from the pool
tags:
  - Redis
  - Jedis
  - JedisConnectionException
---
# 问题现象
在使用Jedis连接池JedisPool模式下，比较常见的报错如下：
```java
redis.clients.jedis.exceptions.JedisConnectionException: Could not get a resource from the pool
```
# 问题排查
## 3. 检查JedisPool连接池代码（主要原因）
如果连接数接近配置的上限，请分析是业务并发原因（maxTotal设置过小），或是没有正确使用JedisPool所致。

对于JedisPool连接池的操作，每次调用**jedisPool.getResource()**方法之后，需要调用**jedisPool.returnResource()**或者**jedis.close****()**进行释放，优先使用close()方法。

```java
try (Jedis jedis = getJedis()) {
	String result = jedis.set(key, val, "NX", "PX", expireMilliseconds);
}
```

## 2. 检查连接数是否超限

查看已建立的网络连接数是否超过JedisPool配置的上限。如果连接数接近配置的上限值，则建议重启服务观察。如果明显没有接近，排除连接数超限可能。
Unix/Linux系统使用：
```shell
netstat -an | grep 6379 | grep ESTABLISHED | wc -l
```
Windows系统使用：
```shell
netstat -an | find "6379" | find "ESTABLISHED" /C
```
## 1. 网络
* 核对IP地址配置
* 测试网络
## 4. 客户端TIME_WAIT是否过多
通过**ss -s**查看**time wait**链接是否过多。
如果**TIME_WAIT**过多，可以调整内核参数（/etc/sysctl.conf）：
```shell
##当出现SYN等待队列溢出时，启用cookies来处理，可防范少量SYN攻击
net.ipv4.tcp_syncookies = 1
##允许将TIME-WAIT sockets重新用于新的TCP连接
net.ipv4.tcp_tw_reuse = 1
##开启TCP连接中TIME-WAIT sockets的快速回收
net.ipv4.tcp_tw_recycle = 1
##修改系统默认的TIMEOUT时间
net.ipv4.tcp_fin_timeout = 30
```

调整后重启生效：`/sbin/sysctl -p`