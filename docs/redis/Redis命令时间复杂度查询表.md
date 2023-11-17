### String类型

|   |   |
|---|---|
|命令|时间复杂度|
|set|0(1)|
|get|0(1)|
|del|0(k)，k是键的个数|
|mset|0(k)，k是键的个数|
|mget|0(k)，k是键的个数|
|incr|0(1)|
|decr|0(1)|
|incryby|0(1)|
|decryby|0(1)|
|incrybyfloat|0(1)|
|append|0(1)|
|strlen|0(1)|
|setrange|0(n)，n为更改字符串长度|
|getrange|0(n)，n为获取字符串长度|

### Hash类型

|   |   |
|---|---|
|命令|时间复杂度|
|hset|0(1)|
|hget|0(1)|
|hdel|0(k)，k是键的个数|
|hlen|O(1)|
|hgetall|0(k)，k是field的个数|
|hmget|0(k)，k是field的个数|
|hmset|0(k)，k是field的个数|
|hexists|O(1)|
|hkeys|0(k)，k是field的个数|
|hvals|0(k)，k是field的个数|
|hsetnx|O(1)|
|hincrby|O(1)|
|hincrbyfloat|O(1)|
|hstrlen|O(1)|

### List列表

|   |   |
|---|---|
|命令|时间复杂度|
|rpush|0(k)，k是field的个数|
|lpush|0(k)，k是field的个数|
|linsert|0(n)，n是插入位置距离表头或表尾的距离|
|lrange|O(s+n)，s是start的偏移量，n是start到end的范围|
|lindex|O(n)，n是索引的偏移量|
|llen|O(1)|
|lpop|O(1)|
|rpop|O(1)|
|lrem|O(n)，n是列表的长度|
|ltrim|O(n)，n是要裁剪的元素总数|
|lset|O(n)，n是索引的偏移量|
|blpop|O(1)|

### Set集合

|   |   |
|---|---|
|命令|时间复杂度|
|sadd|O(k)，k为元素个数|
|srem|O(k)，k为元素个数|
|scard|O(1)|
|sismember|O(1)|
|srandmember|O(count)|
|spop|O(1)|
|smembers|O(n)，n为元素总数|
|sinter|O(m*k)，k为多个集合中元素较少的个数，m是键个数|
|suinon|O(k)，k为多个集合元素个数和|
|sdiff|O(k)，k为多个集合元素个数和|

### Zset有序集合

|   |   |
|---|---|
|命令|时间复杂度|
|zadd|O(k*log(n))，k为添加 成员个数，n为当前成员个数|
|zcard|O(1)|
|zscore|O(1)|
|zrank<br/><br/>zrevrank|O(log(n))，n为当前成员个数|
|zrem|O(k*log(n))，k为删除成员个数，n为当前成员个数|
|zincrby|O(log(n))，n为当前成员个数|
|zrange<br/><br/>zrevrange|O(log(n)+k)，k为要获取成员个数，n为当前成员个数|
|zrangebyscore<br/><br/>zrevrangebyscore|O(log(n)+k)，k为要获取成员个数，n为当前成员个数|
|zcount|O(log(n)+k)，k为要获取成员个数，n为当前成员个数|
|zremrangebyrank|O(log(n)+k)，k为要删除成员个数，n为当前成员个数|
|zremrangebyscore|O(log(n)+k)，k为要删除成员个数，n为当前成员个数|
|zinterstore|O(n*k) + O(m*log(m))，n是成员数最小的有序集合的成员个数，k是有序集合的个数，m是结果集中成员个数|
|zunionstore|O(n) + O(m*log(m))，n是所有有序集合成员个数和，m是结果集中成员个数|