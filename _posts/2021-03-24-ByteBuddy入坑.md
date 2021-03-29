---
title: "ByteBuddy入坑"
description: "ByteBuddy入坑"
category: Spring
tags: [Java, Spring, ByteBuddy, 字节码]
toc: true
---

Byte Buddy是一个代码生成和操作库，用于在Java应用程序运行时创建和修改Java类，无需编译器的帮助。与Java类库附带的代码生成实用程序不同，Byte Buddy允许创建任意类，并且不限于实现用于创建运行时代理的接口。此外，Byte Buddy提供了一个方便的API，可以使用Java代理或在构建过程中手动更改类。



[bytebuddy](https://bytebuddy.net/#/)

[Byte Buddy 教程](https://notes.diguage.com/byte-buddy-tutorial/)



# ByteBuddy

Byte Buddy is a code generation and manipulation library for creating and modifying Java classes during the runtime of a Java application and without the help of a compiler. Other than the code generation utilities that ship with the Java Class Library, Byte Buddy allows the creation of arbitrary classes and is not limited to implementing interfaces for the creation of runtime proxies. Furthermore, Byte Buddy offers a convenient API for changing classes either manually, using a Java agent or during a build.

## 为什么需要在运行时生成代码？

运行时代码生成允许我们模拟一些只有使用动态编程语言编程才有的特性，而且不丢失 Java 的静态类型检查。这样，我们就可以两全其美并且还可以提高运行时性能。



# 创建类

## 领域特定语言和不变性

领域特定语言Byte Buddy 中，几乎所有的类都被构建成不可变的

## 重定义或重定基

* subclass: 指定父类
* redefine（type redefinition）：重新定义类，当重定义一个类时，Byte Buddy 可以对一个已有的类添加属性和方法，或者删除已经存在的方法实现。如果使用其他的方法实现替换已经存在的方法实现，则原来存在的方法实现就会消失。

* rebase（type rebasing）：重定基底，当重定基底一个类时，Byte Buddy 保存基底类所有方法的实现（添加后缀 $original）。

```java
class Foo {
  String bar() { return "bar"; }
}

class Foo {
  String bar() { return "foo" + bar$original(); }
  private String bar$original() { return "bar"; }
}
```

