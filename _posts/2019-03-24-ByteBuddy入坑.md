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

## 选择合适的套件

|              |          基线 |         Byte Buddy |              cglib |          Javassist | Java proxy         |
| :----------- | ------------: | -----------------: | -----------------: | -----------------: | ------------------ |
| 简单的类创建 | 0.003 (0.001) |    142.772 (1.390) |   515.174 (26.753) |    193.733 (4.430) | 70.712 (0.645)     |
| 接口实现     | 0.004 (0.001) | 1'126.364 (10.328) |   960.527 (11.788) | 1'070.766 (59.865) | 1'060.766 (12.231) |
| 方法调用     | 0.002 (0.001) |      0.002 (0.001) |      0.003 (0.001) |      0.011 (0.001) | 0.008 (0.001)      |
| 类型扩展     | 0.004 (0.001) |    885.983 (7.901) | 1'632.730 (52.737) |    683.478 (6.735) | 5'408.329 (52.437) |
| 父类方法调用 | 0.004 (0.001) |      0.004 (0.001) |      0.021 (0.001) |      0.025 (0.001) | 0.004 (0.001)      |

* Byte Buddy 提供了功能和便利
* Byte Buddy 提供了一种具有表现力的领域特定语言，允许通过编写简单的 Java 代码和使用强大的类型为你自己的代码创建非常自定义的运行时类
* Byte Buddy 还具有非常开放的定制性，并不限制开箱即用的功能
* 代码生成库在生成快速代码和快速生成代码之间面临着折衷。Byte Buddy 的主要侧重点在于以最少的运行时生成代码



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

## 加载类

Byte Buddy提供了几种类加载策略（ClassLoadingStrategy.Default.）：

* `WRAPPER`创建一个新的包装 `ClassLoader`
* `CHILD_FIRST` 策略创建一个类似于第一个子类优先的类加载器
* `INJECTION` 策略使用反射注入动态类型

## 重新加载类

ClassReloadingStrategy

`ClassReloadingStrategy.fromInstalledAgent()`

## 创建 Java Agents

```java
class ToStringAgent {
  public static void premain(String arguments, Instrumentation instrumentation) {
    new AgentBuilder.Default()
        .type(isAnnotatedWith(ToString.class))
        .transform(new AgentBuilder.Transformer() {
      @Override
      public DynamicType.Builder transform(DynamicType.Builder builder,
                                              TypeDescription typeDescription,
                                              ClassLoader classloader) {
        return builder.method(named("toString"))
                      .intercept(FixedValue.value("transformed"));
      }
    }).installOn(instrumentation);
  }
}
```

## 泛型

Byte Buddy按照Java编程语言定义的方式处理泛型类型。Java运行时不考虑泛型类型，因为它只处理泛型类型的擦除。



# 属性和方法

## 固定值

```java
new ByteBuddy()
  .subclass(Foo.class)
  .method(isDeclaredBy(Foo.class)).intercept(FixedValue.value(0))
  .make();
```

## 委托方法调用

```java
class Source {
  public String hello(String name) { return null; }
}

class Target {
  public static String hello(String name) {
    return "Hello " + name + "!";
  }
}

String helloWorld = new ByteBuddy()
  .subclass(Source.class)
  .method(named("hello")).intercept(MethodDelegation.to(Target.class))
  .make()
  .load(getClass().getClassLoader())
  .getLoaded()
  .newInstance()
  .hello("World");
```

## 调用超类方法

```java
new ByteBuddy()
  .subclass(Object.class, ConstructorStrategy.Default.IMITATE_SUPER_TYPE)
  .make()
```

## 调用默认方法

```java
interface First {
  default String qux() { return "FOO"; }
}

interface Second {
  default String qux() { return "BAR"; }
}

new ByteBuddy(ClassFileVersion.JAVA_V8)
  .subclass(Object.class)
  .implement(First.class)
  .implement(Second.class)
  .method(named("qux")).intercept(DefaultMethodCall.prioritize(First.class))
  .make()
```

## 调用特定方法

```java
public class SampleClass {
  public SampleClass(int unusedValue) {
    super();
  }
}
new ByteBuddy()
  .subclass(Object.class, ConstructorStrategy.Default.NO_CONSTRUCTORS)
  .defineConstructor(Arrays.<Class<?>>asList(int.class), Visibility.PUBLIC)
  .intercept(MethodCall.invoke(Object.class.getDeclaredConstructor()))
  .make()
```

##  访问属性

```java
class UserType {
  public String doSomething() { return null; }
}

interface Interceptor {
  String doSomethingElse();
}

interface InterceptionAccessor {
  Interceptor getInterceptor();
  void setInterceptor(Interceptor interceptor);
}

interface InstanceCreator {
  Object makeInstance();
}
Class<? extends UserType> dynamicUserType = new ByteBuddy()
  .subclass(UserType.class)
    .method(not(isDeclaredBy(Object.class)))
    .intercept(MethodDelegation.toField("interceptor"))
  .defineField("interceptor", Interceptor.class, Visibility.PRIVATE)
  .implement(InterceptionAccessor.class).intercept(FieldAccessor.ofBeanProperty())
  .make()
  .load(getClass().getClassLoader())
  .getLoaded();
InstanceCreator factory = new ByteBuddy()
  .subclass(InstanceCreator.class)
    .method(not(isDeclaredBy(Object.class)))
    .intercept(MethodDelegation.construct(dynamicUserType))
  .make()
  .load(dynamicUserType.getClassLoader())
  .getLoaded().newInstance();
class HelloWorldInterceptor implements Interceptor {
  @Override
  public String doSomethingElse() {
    return "Hello World!";
  }
}

UserType userType = (UserType) factory.makeInstance();
((InterceptionAccessor) userType).setInterceptor(new HelloWorldInterceptor());
```



# 注解

```java
@Retention(RetentionPolicy.RUNTIME)
@interface RuntimeDefinition { }

class RuntimeDefinitionImpl implements RuntimeDefinition {
  @Override
  public Class<? extends Annotation> annotationType() {
    return RuntimeDefinition.class;
  }
}

new ByteBuddy()
  .subclass(Object.class)
  .annotateType(new RuntimeDefinitionImpl())
  .make();

new ByteBuddy()
  .subclass(Object.class)
    .annotateType(new RuntimeDefinitionImpl())
  .method(named("toString"))
    .intercept(SuperMethodCall.INSTANCE)
    .annotateMethod(new RuntimeDefinitionImpl())
  .defineField("foo", Object.class)
    .annotateField(new RuntimeDefinitionImpl())
```

## 属性附加器

```java
class AnnotatedMethod {
  @SomeAnnotation
  void bar() { }
}
new ByteBuddy()
  .subclass(AnnotatedMethod.class)
  .method(named("bar"))
  .intercept(StubMethod.INSTANCE)
  .attribute(MethodAttributeAppender.ForInstrumentedMethod.INSTANCE)
```



# 自定义工具

创建自定义字节代码可以通过直接访问ASM的API来实现，ASM是一个底层字节代码库，byte Buddy是在它的基础上构建的

任何Java类文件都是由几个段组成的。其核心细分大致如下:

* 基础数据: 类文件引用类的名称、超类的名称及其实现的接口。此外，类文件包含不同的元数据，例如类的Java版本号、它的注释或编译器为创建类而处理的源文件的名称。

* 常量池: 类的常量池是由该类的成员或注释引用的值的集合。在这些值中，常量池存储由类源代码中的某个文字表达式创建的原始值和字符串。此外，常量池存储类中使用的所有类型和方法的名称。

* 字段列表: Java类文件包含在该类中声明的所有字段的列表。除了字段的类型、名称和修饰符之外，类文件还存储每个字段的注释。

* 方法列表: 与字段列表类似，Java类文件包含所有已声明方法的列表。除了字段之外，非抽象方法还由描述方法主体的字节编码指令数组来描述。这些指令代表了所谓的Java字节码。

跟踪所有这些信息会使手工汇编Java字节码变得乏味且容易出错，这就是为什么byte Buddy提供了一种简化的抽象。在Byte Buddy中，任何堆栈指令都包含在StackManipulation接口的实现中。

```java
enum IntegerSum implements StackManipulation {
 
  INSTANCE; // singleton
 
  @Override
  public boolean isValid() {
    return true;
  }
 
  @Override
  public Size apply(MethodVisitor methodVisitor,
                    Implementation.Context implementationContext) {
    methodVisitor.visitInsn(Opcodes.IADD);
    return new Size(-1, 0);
  }
}

enum SumMethod implements ByteCodeAppender {
 
  INSTANCE; // singleton
 
  @Override
  public Size apply(MethodVisitor methodVisitor,
                    Implementation.Context implementationContext,
                    MethodDescription instrumentedMethod) {
    if (!instrumentedMethod.getReturnType().asErasure().represents(int.class)) {
      throw new IllegalArgumentException(instrumentedMethod + " must return int");
    }
    StackManipulation.Size operandStackSize = new StackManipulation.Compound(
      IntegerConstant.forValue(10),
      IntegerConstant.forValue(50),
      IntegerSum.INSTANCE,
      MethodReturn.INTEGER
    ).apply(methodVisitor, implementationContext);
    return new Size(operandStackSize.getMaximalSize(),
                    instrumentedMethod.getStackSize());
  }
}

enum SumImplementation implements Implementation {
 
  INSTANCE; // singleton
 
  @Override
  public InstrumentedType prepare(InstrumentedType instrumentedType) {
    return instrumentedType;
  }
 
  @Override
  public ByteCodeAppender appender(Target implementationTarget) {
    return SumMethod.INSTANCE;
  }
}

abstract class SumExample {
  public abstract int calculate();
}
 
new ByteBuddy()
  .subclass(SumExample.class)
    .method(named("calculate"))
    .intercept(SumImplementation.INSTANCE)
  .make()
```

### 创建自定义赋值器

```java
enum ToStringAssigner implements Assigner {
 
  INSTANCE; // singleton
 
  @Override
  public StackManipulation assign(TypeDescription.Generic source,
                                  TypeDescription.Generic target,
                                  Assigner.Typing typing) {
    if (!source.isPrimitive() && target.represents(String.class)) {
      MethodDescription toStringMethod = new TypeDescription.ForLoadedType(Object.class)
        .getDeclaredMethods()
        .filter(named("toString"))
        .getOnly();
      return MethodInvocation.invoke(toStringMethod).virtual(sourceType);
    } else {
      return StackManipulation.Illegal.INSTANCE;
    }
  }
}

new ByteBuddy()
  .subclass(Object.class)
  .method(named("toString"))
    .intercept(FixedValue.value(42)
      .withAssigner(new PrimitiveTypeAwareAssigner(ToStringAssigner.INSTANCE),
                    Assigner.Typing.STATIC))
  .make();
```

### 创建自定义参数绑定

```java
@Retention(RetentionPolicy.RUNTIME)
@interface StringValue {
  String value();
}

enum StringValueBinder
    implements TargetMethodAnnotationDrivenBinder.ParameterBinder<StringValue> {
 
  INSTANCE; // singleton
 
  @Override
  public Class<StringValue> getHandledType() {
    return StringValue.class;
  }
 
  @Override
  public MethodDelegationBinder.ParameterBinding<?> bind(AnnotationDescription.Loaded<StringValue> annotation,
                                                         MethodDescription source,
                                                         ParameterDescription target,
                                                         Implementation.Target implementationTarget,
                                                         Assigner assigner,
                                                         Assigner.Typing typing) {
    if (!target.getType().asErasure().represents(String.class)) {
      throw new IllegalStateException(target + " makes illegal use of @StringValue");
    }
    StackManipulation constant = new TextConstant(annotation.loadSilent().value());
    return new MethodDelegationBinder.ParameterBinding.Anonymous(constant);
  }
}

class ToStringInterceptor {
  public static String makeString(@StringValue("Hello!") String value) {
    return value;
  }
}
 
new ByteBuddy()
  .subclass(Object.class)
  .method(named("toString"))
    .intercept(MethodDelegation.withDefaultConfiguration()
      .withBinders(StringValueBinder.INSTANCE)
      .to(ToStringInterceptor.class))
  .make()
```

