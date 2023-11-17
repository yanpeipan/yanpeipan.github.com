---
title: Lettuce连接Cluster集群实例时，规格变更的异常处理
tags:
  - Redis
  - Lettuce
  - Redis-Cluster
---
# 问题现象
使用lettuce连接Cluster集群实例，实例执行规格变更后，分片数有变化时，部分槽位（Slot）会迁移到新分片上，当客户端连接到新分片时会出现以下异常问题：
```
java.lang.IllegalArgumentException: Connection to 100.123.70.194:6379 not allowed. This connection point is not known in the cluster view exceptionStackTrace
```
参考Lettuce社区：[Connection to X not allowed. This connection point is not known in the cluster view](https://github.com/lettuce-io/lettuce-core/issues/731)

# 问题分析
**Cluster集群规格变更原理：**

客户端根据RESP2协议的内容，启动后从Cluster集群获取节点拓扑信息（Cluster Nodes），并将其拓扑关系维护在客户端的内存数据结构中。

对于数据访问，客户端会根据Key值按照CRC16算法进行Hash计算Slot信息，根据内存中保存的节点拓扑关系和Slot的对应信息进行请求自动路由。

在扩容/缩容过程中，当实例分片数发生变化时，存在节点拓扑关系和Slot对应信息的变化，需要客户端进行拓扑关系的自动更新，否则可能造成请求路由失败或者路由位置错误等，造成客户端访问报错。

# 解决方案
## 方案1 开启Cluster集群自动刷新拓扑配置（推荐）

```java
 ClusterTopologyRefreshOptions topologyRefreshOptions = ClusterTopologyRefreshOptions.builder()
             // 每隔time毫秒周期性刷新
            .enablePeriodicRefresh(Duration.ofMillis(time))
	     // MOVED重定向, ASK重定向, 重连, 未知节点(since 5.1), 槽位不在当前所有分片中(since 5.2),当出现这五种情况时会触发自适应刷新 
            .enableAllAdaptiveRefreshTriggers()
            .build();

ClusterClientOptions clusterClientOptions = ClusterClientOptions.builder()
            // Redis命令超时时间, 超时后才会使用新的拓扑信息重新建立连接
            .timeoutOptions(TimeoutOptions.enabled(Duration.ofSeconds(timeout)))
            .topologyRefreshOptions(topologyRefreshOptions)
            .build();
```
## 方案2 关闭“验证集群节点成员资格开关”
```java
ClusterClientOptions clusterClientOptions = ClusterClientOptions.builder()  
        .validateClusterNodeMembership(false)  
        .build();
```