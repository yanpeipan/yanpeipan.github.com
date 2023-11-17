---
title: Lettuce间歇性发生：RedisCommandTimeoutException
tags:
  - Redis
  - Lettuce
  - RedisCommandTimeoutException
---

| 场景                              | Lettuce客户端影响 | 优化策略 |
| --------------------------------- | ----------------- | -------- |
| 网络故障10min+ |  15minClient才能恢复                  |  基于TCP_USER_TIMEOUT的TCP探活检测        |
|         |                   | 应用层添加ping检测包的方式         |
# 问题现象
```java
io.lettuce.core.RedisCommandTimeoutException: Command timed out after 1 minute(s)
```
# 问题分析
当网络故障或断电等硬件问题导致的Redis Service宕机，或者SLB负载均衡导致后端地址变化时，未返回RST到Lettuce客户端，就会导致客户端在925.6秒（根据tcp_retries2）之内使用一个断开的连接。
参考Lettuce社区：[Add support for disconnect on timeout to recover early from no `RST` packet failures](https://github.com/lettuce-io/lettuce-core/issues/2082)
# 解决方案
## 1. 配置TCP_USER_TIMEOUT
Lettuce提供了TCP_USER_TIMEOUT配置参数，可以检测超时时间
注：需要`4.1.65.Final版本及以上
```java
       // customize your netty
        ClientResources clientResources = ClientResources.builder()
                .nettyCustomizer(new NettyCustomizer() {
                    @Override
                    public void afterBootstrapInitialized(Bootstrap bootstrap) {
                        if (EpollProvider.isAvailable()) {
                            // TCP_USER_TIMEOUT >= TCP_KEEPIDLE + TCP_KEEPINTVL * TCP_KEEPCNT
                            // https://blog.cloudflare.com/when-tcp-sockets-refuse-to-die/
                            bootstrap.option(EpollChannelOption.TCP_USER_TIMEOUT, tcpUserTimeout);
                        }
                    }
                })
                .build();


       // create your socket options
       SocketOptions socketOptions = SocketOptions.builder()
                .connectTimeout(connectTimeout)
                .keepAlive(SocketOptions.KeepAliveOptions.builder()
                        .enable()
                        .idle(Duration.ofSeconds(5))
                        .interval(Duration.ofSeconds(1))
                        .count(3)
                        .build())
                .build();
         
```
## 2. 定制Lettuce
```java
LettuceConnectionFactory lettuceConnectionFactory = (LettuceConnectionFactory) redisTemplate.getConnectionFactory();
lettuceConnectionFactory.setDatabase(2);
redisTemplate.setConnectionFactory(lettuceConnectionFactory );
lettuceConnectionFactory.resetConnection();
```
