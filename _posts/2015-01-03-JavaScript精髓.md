---
layout: post
title: "JavaScript精髓"
description: ""
category: 
tags: [JavaScript]
---
{% include JB/setup %}

# JavaScript基础

## JavaScript能做什么?

现在JavaScript能做的事情已经非常多了：

* 图形处理
* PDF生成
* 建立服务器
* 编译解释器
* 图形界面
* 数据库
* 各种测试工具
* 视频和音频播放和处理
* 通信
* 多人协作

* 做DNA分析：genome.js
* 在浏览器上模拟出一个Linux系统：JsLinux
* 在浏览器上模拟出一个Git版本控制系统：JS-Git
* 制作动画：Processing.js
* 物理效果模拟引擎：verlet-js
* 可编辑的在线发票生成器：Invoice
* 在线待办事宜列表：Todo List
* 为图片加效果(需要HTML5 canvas支持)：blend.js

当然JavaScript是作为脚本语言存在的，所以基本上它只是调用现有的底层API，也就是用其他低级语言所编写的模块，而JavaScript任务就是调用这些API去处理实际的问题。

## JavaScript由哪几部分组成？

尽管 ECMAScript 是一个重要的标准，但它并不是 JavaScript 唯一的部分，当然，也不是唯一被标准化的部分。实际上，一个完整的 JavaScript 实现是由以下 3 个不同部分组成的：

* 核心（ECMAScript）
* 文档对象模型（DOM）
* 浏览器对象模型（BOM）

## 什么是ECMAScript？

> ECMAScript是一种由Ecma国际（前身为欧洲计算机制造商协会）通过ECMA-262标准化的脚本程序设计语言。这种语言在万维网上应用广泛，它往往被称为JavaScript或JScript，但实际上后两者是ECMA-262标准的实现和扩展。

> ECMAScript 是标准化组织 ECMA（Ecma International - European association for standardizing information and communication systems）发布的脚本语言规范。现在大家常见的 JavaScript、微软的 JScript 以及 Adobe 的 ActionScript 等语言都是遵循这个规范的，属于 ECMAScript 语言的变体。每个 ECMAScript 规范的变体语言都可能增加自己额外的功能特性。

## 各浏览器执行的ECMAScript版本是什么情况？

许多程序，尤其是网页浏览器支持ECMAScript。浏览器中的ECMAScript实现添加了与文档对象模型的接口，可以通过脚本改变网页的内容、结构和样式。

## `parseInt('08')`在什么情况下等于0,什么情况下等于8？

`'8' is not an octal digit.`
ECMAScript 5 规范中 parseInt 函数部分不在允许实现环境把以 0 字符开始的字符串作为八进制数值了。

## setTimeout方法，如果第二个参数是0, 那么是立即执行吗？

setTimeout is simply like calling the funcion after delay has finished. Whenever a function is called it is not executed immediately, but queued so that it is executed after all the executing and currently queued eventhandlers finish first. setTimeout(,0) essentially means execute after all current functions in the present queue get executed. No guruantees can be made about how long it could take.

setImmediate is similar in this regard except that it doesn't use queue of functions. It checks queue of I/O eventhandlers. If all I/O events in the current snapshot are processed, it executes the callback. It queues them immedieately after the last I/O handler somewhat like process.nextTick. So it is faster.

> JavaScript引擎是单线程运行的,浏览器无论在什么时候都只且只有一个线程在运行JavaScript程序.

> 如果队列非空,引擎就从队列头取出一个任务,直到该任务处理完,即返回后引擎接着运行下一个任务,在任务没返回前队列中的其它任务是没法被执行的.

## switch（变量），变量和case语句当中出现的值等于===还是==？

## Undefined和Null的区别是什么？

## 什么情况下会产生意外的全局变量？

## 如何遍历数组？

## 在进行比较false=={}时，类型的转换过程是怎样的？

## 如果某个外部引用的Js文件出现运行时错误，后面的脚本还可以执行吗？

## 全局变量有什么弊端？

## 什么是严格模式？

## 哪个值不等于自己？

---

# 参考

[深入探讨 ECMAScript 规范第五版](http://www.ibm.com/developerworks/cn/web/1305_chengfu_ecmascript5/)\\
[Javascript 严格模式详解](http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html)\\
[parseInt](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt)\\
[javascript线程解释（setTimeout,setInterval你不知道的事）](http://www.iamued.com/qianduan/1645.html)\\
