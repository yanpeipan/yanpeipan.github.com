---
title: Spring注解@Lazy最佳实践
description: 一致性算法
category: Spring
tags:
- Spring
toc: true
toc_sticky: true

---

# 1. 概述

`@Lazy`表明一个bean是否延迟初始化。

## 1.1 定义

```java
@Target({ElementType.TYPE, ElementType.METHOD, ElementType.CONSTRUCTOR, ElementType.PARAMETER, ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface Lazy {

	/**
	 * Whether lazy initialization should occur.
	 */
	boolean value() default true;

}
```

# 2. 实例

