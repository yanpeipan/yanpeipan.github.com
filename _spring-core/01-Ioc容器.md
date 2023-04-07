---
title: IoC容器
toc: true
toc_sticky: true
tags:
- Spring
---

## 1.1 Spring IoC容器和Beans
是通过使用类的直接构造或诸如服务定位器模式之类的机制来控制其依赖项的实例化或位置的Bean本身的逆过程（因此称为Control Inversion）.

`org.springframework.beans`和`org.springframework.context`是Spring Framework的IoC容器的基础包. 

`BeanFactory`提供了配置框架和基础功能，能够管理任何类型的对象.

`ApplicationContext`是`BeanFactory`的子接口. 它增加更多企业级功能：

* 与Spring的AOP功能轻松集成
* 消息资源处理（用于国际化）
* 活动发布
* 应用层特定的上下文，例如Web应用程序中使用的`WebApplicationContext` .

在Spring中，**构成应用程序主干并由Spring IoC容器管理的对象称为bean. Bean是由Spring IoC容器实例化，组装和以其他方式管理的对象**. 否则，bean仅仅是应用程序中许多对象之一. Bean及其之间的依赖关系反映在容器使用的配置元数据中.



## 1.2 容器概述

`org.springframework.context.ApplicationContext`接口表示Spring IoC容器，并负责实例化，配置和组装Bean.

Spring提供了`ApplicationContext`接口的几种实现：

* AnnotationConfigApplicationContext
* AnnotationConfigWebApplicationContext
* ClassPathXmlApplicationContext
* FileSystemXmlapplicationcontext
* XmlWebApplicationContext

### 1.2.1 元数据配置

创建应用组件之间协作的行为通常称为装配（wiring），装配Bean的方式：

* 基于XML的
* 基于注解的配置
* 基于 Java 的配置

Spring通过应用上下文（ Application Context） 装载bean的定义并把它们组装起来。 Spring应用上下文全权负责对象的创建和组装。

### 1.2.2 实例化容器		

```java
@SpringBootApplication(scanBasePackages = {"com.p.y"}, exclude = DruidDataSourceAutoConfigure.class)
public class StartApplication {

    public static void main(String[] args) {
        SpringApplication.run(StartApplication.class, args);
    }
}
```

### 1.2.3 使用容器

```java
// create and configure beans
ApplicationContext context = new ClassPathXmlApplicationContext("services.xml", "daos.xml");

// retrieve configured instance
PetStoreService service = context.getBean("petStore", PetStoreService.class);

// use configured instance
List<String> userList = service.getUsernameList();
```

## 1.3 Bean
Spring IoC容器管理一个或多个bean。这些bean是使用提供给容器的配置元数据创建的，在容器本身内，这些bean定义表示为`BeanDefinition`对象，其中包含（除其他信息外）以下元数据：

* 包限定的类名称：通常，定义了Bean的实际实现类.
* Bean行为配置元素，用于声明Bean在容器中的行为（作用域，生命周期回调等）.
* 引用其他bean进行其工作所需的bean. 这些引用也称为协作者或依赖项.
*  要在新创建的对象中设置的其他配置设置-例如，池的大小限制或在管理连接池的Bean中使用的连接数.

该元数据转换为构成每个bean定义的一组属性. 下表描述了这些属性：

| Property | 在...中解释 |
| -------- | -------- |
| 类     |  实例化Beans    |
| 名称     |   命名Beans   |
|  作用域 | Bean 作用域 |
| 构造函数参数 | 依赖注入   |
| 属性 | 依赖注入 |
|  自动装载模式  |  自动装配协作Beans  |
| 延迟初始化模式 |   延迟初始化Beans   |
|  初始化方法  |  初始化回调  |
|  销毁方式  | 销毁回调 |

ApplicationContext实现还允许注册在容器外部（由用户）创建的现有对象. 这是通过通过`getBeanFactory()`方法访问`ApplicationContext`的`BeanFactory`来完成的，该方法返回`BeanFactory`的实现 `DefaultListableBeanFactory`. `DefaultListableBeanFactory`通过`registerSingleton(..)`和`registerBeanDefinition(..)`方法支持此注册. 但是，典型的应用程序只能与通过常规bean定义元数据定义的bean一起使用.
### 1.3.1 命名Beans
每个bean具有一个或多个标识符. 这些标识符在承载Bean的容器内必须唯一. 一个bean通常只有一个标识符. 但是，如果需要多个，则可以将多余的别名视为别名.

在基于XML的配置元数据中，可以使用id属性和/或name属性来指定bean标识符. id属性可让您精确指定一个id. 还可以在指定它们name属性指定别名，并由逗号（ , ），分号（ ; ）或空白分隔。如果未明确提供name或id ，则容器将为该bean生成一个唯一的名称. 

```java
@Bean({"nameA", "aliasNameA"})
```

### 1.3.2 实例化Beans
定义使用静态工厂方法创建的bean时，请使用class属性指定包含static工厂方法的类，并使用名为factory-method的属性指定工厂方法本身的名称. 

#### 使用构造函数实例化

#### 使用静态工厂类方法实例化

#### 使用工厂类方法实例化

#### 确定运行时类型

推荐使用`BeanFactory.getType`


## 1.4 依赖

### 1.4.1 依赖注入
依赖注入（DI）是一个过程，通过该过程，对象只能通过构造函数参数，工厂方法的参数或在构造或创建对象实例后在对象实例上设置的属性来定义其依赖关系（即，与它们一起工作的其他对象）。

DI存在两个主要变体： 基于构造函数的依赖注入和基于Setter的依赖注入 .

可以使用`@ConstructorProperties` JDK注释显式命名构造函数参数：
```java
public class ExampleBean {

    // Fields omitted

    @ConstructorProperties({"years", "ultimateAnswer"})
    public ExampleBean(int years, String ultimateAnswer) {
        this.years = years;
        this.ultimateAnswer = ultimateAnswer;
    }
}
```

### 1.4.2 依赖和配置的详情



### 1.4.3 depends-on

有时bean之间的依赖性不太直接，depends-on属性可以显式地强制初始化一个或多个使用该元素的bean之前的bean

```java
@Compoent
@DependsOn({"manager", "accountDao"})
public Class ExampleBean {}
```

### 1.4.4 延迟初始化Beans
ApplicationContext实现会急于创建和配置所有单例 bean. 通常，这种预初始化是可取的，因为与数小时甚至数天后相比，会立即发现配置或周​​围环境中的错误. 如果不希望使用此行为，则可以通过将bean定义标记为延迟初始化来防止单例bean的预实例化. 延迟初始化的bean告诉IoC容器在首次请求时而不是在启动时创建一个bean实例

### 1.4.5 自动装配协作 Beans
Spring容器可以自动装配协作bean之间的关系. 您可以通过检查ApplicationContext的内容，让Spring为您的bean自动解决协作者（其他bean）

### 1.4.6 方法注入
容器中的大多数bean是singletons，当bean的生命周期不同时会出现问题.解决方案是放弃某些控制反转. 通过实现ApplicationContextAware接口，并通过对容器 进行getBean("B")调用，可以使Bean A知道容器 ，每次bean A需要它时都请求（通常是新的）Bean B实例
```java
public class CommandManager implements ApplicationContextAware {

    private ApplicationContext applicationContext;

    public Object process(Map commandState) {
        // grab a new instance of the appropriate Command
        Command command = createCommand();
        // set the state on the (hopefully brand new) Command instance
        command.setState(commandState);
        return command.execute();
    }

    protected Command createCommand() {
        // notice the Spring API dependency!
        return this.applicationContext.getBean("command", Command.class);
    }

    public void setApplicationContext(
            ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }
}
```

* `@Lockup`是容器重写容器管理的Bean上的方法并返回容器中另一个命名Bean的查找结果的能力
* 任意的方法替换，实现`org.springframework.beans.factory.support.MethodReplacer`接口的类提供了新的方法定义


## 1.5 Bean作用域
Spring框架支持六个作用域:


| Scope | Description |
| -------- | -------- |
| singleton     | （默认）将每个Spring IoC容器的单个bean定义作用域限定为单个对象实例. |
|  prototype    | 将单个bean定义的作用域限定为任意数量的对象实例.     |
|  request    |  将单个bean定义的作用域限定为单个HTTP请求的生命周期. |
|   session   |  将单个bean定义的作用域限定为单个HTTP会话的生命周期 |
|  application    |  将单个bean定义的作用域限定为ServletContext的生命周期.    |
|  websocket    |   单个bean定义的作用域限定为WebSocket的生命周期.   |

自定义Scope，要将自定义范围集成到Spring容器中，需要实现`org.springframework.beans.factory.config.Scope`接口

##  1.6 Customizing the Nature of a Bean

Spring框架提供了许多接口，可用于自定义Bean的性质. 本节将它们分组如下：

* Lifecycle Callbacks
* ApplicationContextAware and BeanNameAware
* Other Aware Interfaces

### 1.6.1 生命周期回调
为了与容器对bean生命周期的管理进行交互，可以实现Spring `InitializingBean`和`DisposableBean`接口. 容器为前者调用`afterPropertiesSet()`并为后者调用`destroy()` ，以使Bean在初始化和销毁Bean时执行某些操作.

组合生命周期机制：
* `InitializingBean`和`DisposableBean`回调接口

* 自定义`init()` and `destroy()` 方法

* `@PostConstruct`和`@PreDestroy`批注 . 

  您可以结合使用这些机制来控制给定的bean.

JSR-250 `@PostConstruct`和`@PreDestroy`批注通常被认为是在现代Spring应用程序中接收生命周期回调的最佳实践. 使用这些注释意味着您的bean没有耦合到特定于Spring的接口.

初始化顺序：

* `@PostConstruct`
* `InitializingBean`回调接口的`afterPropertiesSet()`方法
* 自定义`init()`方法

销毁顺序：

* `@PreDestroy`
* `DisposableBean`回调接口的`destroy()`方法
* 自定义`destroy()`方法

#### 启动和停止回调

任何Spring管理的对象都可以实现`Lifecycle`接口	。当ApplicationContext本身接收到启动和停止信号时（例如，对于运行时的停止/重新启动场景），它将把这些调用级联到在该上下文中定义的所有`Lifecycle`实现. 它通过委派给`	`来做到这一点。为了对特定bean的自动启动（包括启动阶段）进行细粒度的控制，请考虑改为实现`org.springframework.context.SmartLifecycle`

#### 在非Web 应用优雅的停止Spring Ioc 容器

如果您在非Web应用程序环境中（例如，在富客户端桌面环境中）使用Spring的IoC容器，要注册关闭挂钩，请调用在`ConfigurableApplicationContext`接口上声明的`registerShutdownHook()`方法

```java
public static void main(final String[] args) throws Exception {
    ConfigurableApplicationContext ctx = new ClassPathXmlApplicationContext("beans.xml");
    ctx.registerShutdownHook();
}
```

### 1.6.2 ApplicationContextAware  & BeanNameAware

当ApplicationContext创建实现org.springframework.context.ApplicationContextAware接口的对象实例时，该实例将获得对该ApplicationContext的引用. 以下清单显示了ApplicationContextAware接口的定义：
```java
public interface ApplicationContextAware {

    void setApplicationContext(ApplicationContext applicationContext) throws BeansException;
}
```
当ApplicationContext创建实现org.springframework.beans.factory.BeanNameAware接口的类时，该类将获得对在其关联的对象定义中定义的名称的引用
```java
public interface BeanNameAware {
    void setBeanName(String name) throws BeansException;
}
```

### 1.6.3 Other Aware Interfaces


| 名称 | 注入依赖 | 在...中解释 |
| -------- | -------- | -------- |
| ApplicationContextAware     | 声明`ApplicationContext`     | `ApplicationContextAware``BeanNameAware`     |
| ApplicationEventPublisherAware    | 封闭在ApplicationContext的事件发布     |    `ApplicationContext`额外的功能   |
|  BeanClassLoaderAware    | 用于加载Bean的类加载器     |   Instantiating Beans   |
|  BeanFactoryAware    | 声明`BeanFactory`     | `ApplicationContextAware`  `BeanNameAware`   |
| BootstrapContextAware     |   容器在其中运行的资源适配器`BootstrapContext` .通常仅在支持JCA的`ApplicationContext`实例中可用.   |   JCA CCI   |
| LoadTimeWeaverAware     |   定义的编织器，用于在加载时处理类定义   | 	Load-time Weaving with AspectJ in the Spring Framework     |
| MessageSourceAware  | 解决消息的已配置策略（支持参数化和国际化）.     |  `ApplicationContext`额外的功能    |
| NotificationPublisherAware     |   Spring JMX通知发布者.   |  Notifications    |
|  ResourceLoaderAware    |   配置的加载程序，用于对资源的低级别访问.   | Resources     |
| ServletConfigAware     |  容器在其中运行的当前ServletConfig .  |   Spring MVC   |
|  ServletContextAware    |  容器在其中运行的当前ServletContext    |  Spring MVC    |


## 1.7 继承Bean定义
子bean定义从父定义继承配置数据. 子定义可以覆盖某些值或根据需要添加其他值. 使用父bean和子bean定义可以节省很多输入. 实际上，这是一种模板形式.

如果您有一个（父）bean定义仅打算用作模板，并且此定义指定了一个类，则必须确保将abstract属性设置为true ，否则应用程序上下文将实际上（试图）预先实例化abstract bean.

## 1.8 容器扩展点
通常，应用程序开发人员无需为ApplicationContext实现类提供子类. 相反，可以通过插入特殊集成接口的实现来扩展Spring IoC容器.

### 1.8.1 BeanPostProcessor
`BeanPostProcessor`接口定义了回调方法，您可以实现这些回调方法以提供自己的（或覆盖容器的默认值）实例化逻辑，依赖项解析逻辑等.配置多个`BeanPostProcessor`实例，并且可以通过设置`order`属性来控制这些`BeanPostProcessor`实例的执行顺序

```java
public class InstantiationTracingBeanPostProcessor implements BeanPostProcessor {

    // simply return the instantiated bean as-is
    public Object postProcessBeforeInitialization(Object bean, String beanName) {
        return bean; // we could potentially return any object reference here...
    }

    public Object postProcessAfterInitialization(Object bean, String beanName) {
        System.out.println("Bean '" + beanName + "' created : " + bean.toString());
        return bean;
    }
}
```
### 1.8.2 BeanFactoryPostProcessor
与`BeanPostProcessor`一个重要不同：`BeanFactoryPostProcessor`操作bean配置元数据，例如：`PropertySourcesPlaceholderConfigurer`从外部Properties文件配置修改属性的元数据. 将要替换的值指定为${property-name}形式的占位符

### 1.8.3 FactoryBean
可以为本身就是工厂的对象实现org.springframework.beans.factory.FactoryBean接口.
## 1.9 基于注解的容器配置
通过使用相关类，方法或字段声明上的注释，开发人员无需使用XML来描述bean的连接，而是将配置移入组件类本身.

### 1.9.1 @Required
@Required批注适用于bean属性设置器方法，如以下示例所示：
```java
@Required
public void setMovieFinder(MovieFinder movieFinder) {
    this.movieFinder = movieFinder;
}
```

### 1.9.2 @Autowired
可以使用JSR 330的@Inject注释代替Spring的@Autowired注释
您可以将@Autowired注释应用于构造函数，如以下示例所示：

```java
@Autowired
public MovieRecommender(CustomerPreferenceDao customerPreferenceDao) {
    this.customerPreferenceDao = customerPreferenceDao;
}
```
还可以将@Autowired批注应用于传统的 setter方法
还可以将注释应用于具有任意名称和多个参数的方法
也可以将@Autowired应用于字段
还可以通过将@Autowired注释添加到需要该类型数组的字段或方法

```java
@Autowired
private MovieCatalog[] movieCatalogs;
```
也可以使用@Autowired的接口是众所周知的可解析依赖:`BeanFactory`,` ApplicationContext`, `Environment`, `ResourceLoader`, `ApplicationEventPublisher`，`MessageSource`

### 1.9.3 @Primary
@Primary表示当多个bean是自动装配到单值依赖项的候选对象时，应优先考虑特定的bean. 如果候选中恰好存在一个主bean，则它将成为自动装配的值.

### 1.9.4 @Qualifier
可以将限定符值与特定的参数相关联，从而缩小类型匹配的范围，以便为每个参数选择特定的bean

JSR-250 @Resource批注，该批注的语义定义是通过其唯一名称标识特定目标组件，而声明的类型与匹配过程无关.

创建自己的自定义限定符注释:
```java
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Qualifier
public @interface Genre {

    String value();
}
```

可以定义自定义限定符批注，该批注除了简单value属性之外或代替简单value属性，都接受命名属性. 如果随后在要自动装配的字段或参数上指定了多个属性值，则bean定义必须与所有此类属性值匹配才能被视为自动装配候选
```java
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Qualifier
public @interface MovieQualifier {

    String genre();

    Format format();
}
```

```java
    @Autowired
    @MovieQualifier(format=Format.VHS, genre="Action")
    private MovieCatalog actionVhsCatalog;
```

### 1.9.5 Generics 
除了@Qualifier批注之外，您还可以将Java泛型类型用作资格的隐式形式. 例如，假设您具有以下配置：
```java
@Autowired
private Store<String> s1; // <String> qualifier, injects the stringStore bean

@Autowired
private Store<Integer> s2; // <Integer> qualifier, injects the integerStore bean
```

### 1.9.6 CustomAutowireConfigurer
`customautowiresfigurer`是一个`BeanFactoryPostProcessor`，它允许您注册自己的自定义限定符注释类型，即使它们没有使用Spring的`@Qualifier`注释

### 1.9.7 @Resource
Spring还通过对字段或bean属性设置器方法使用JSR-250 `@Resource`批注（ `javax.annotation.Resource` ）支持注入.` @Resource`查找主类型匹配而不是特定的命名bean

### 1.9.8 @Value
@Value通常用于注入外部属性：Spring提供了一个默认的宽松内嵌值解析器.
当@Value包含SpEL表达式时，该值将在运行时动态计算

```java
public MovieRecommender(@Value("#{systemProperties['user.catalog'] + 'Catalog' }") String catalog) {}
```

###  1.9.9 @PostConstruct @PreDestroy
`CommonAnnotationBeanPostProcessor`不仅可以识别`@Resource`注释，还可以识别JSR-250生命周期注释：` javax.annotation.PostConstruct`和`javax.annotation.PreDestroy` . 在Spring 2.5中引入了对这些注释的支持，为初始化回调和破坏回调中描述的生命周期回调机制提供了一种替代方法 .

## 1.10 扫描类路径来管理组件
通过扫描类路径来隐式检测候选组件的选项. 候选组件是与过滤条件匹配的类，并在容器中注册了相应的Bean定义. 这消除了使用XML进行bean注册的需要. 相反，您可以使用批注（例如@Component ），AspectJ类型表达式或您自己的自定义过滤条件来选择哪些类已向容器注册了bean定义.

### 1.10.1 @Component
Spring提供了进一步的`@Component`型注释： `@Component` ， `@Service` 和`@Controller` . `@Component`是任何Spring托管组件的通用. `@Repository` ， `@Service`和`@Controller`是`@Component`的特化。

### 1.10.2 元注释 & 组合注释
元注释是可以应用于另一个注释的注释. 
```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Component 
public @interface Service {

    // ...
}
```
组合注释，例如，Spring MVC中的@RestController批注由@Controller和@ResponseBody组成

此外，组合注释可以选择从元注释中重新声明属性，以允许自定义. Spring的@SessionScope批注将作用域名称硬编码为session但仍允许自定义proxyMode
```java
@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Scope(WebApplicationContext.SCOPE_SESSION)
public @interface SessionScope {

    /**
     * Alias for {@link Scope#proxyMode}.
     * <p>Defaults to {@link ScopedProxyMode#TARGET_CLASS}.
     */
    @AliasFor(annotation = Scope.class)
    ScopedProxyMode proxyMode() default ScopedProxyMode.TARGET_CLASS;

}
```

### 1.10.3 自动检测类型和注册Bean定义

### @ComponentScan

要自动检测这些类并注册相应的bean，需要将@ComponentScan添加到@Configuration类中，其中basePackages属性是这两个类的公共父包.
```java
@Configuration
@ComponentScan(basePackages = "org.example")
public class AppConfig  {
    // ...
}
```

### 1.10.4 @Filter自定义扫描

过滤器类型


| 过滤器类型 | 范例表达	 | 描述 |
| -------- | -------- | -------- |
| 注释（默认）     | org.example.SomeAnnotation     | 在目标组件中的类型级别上存在或元存在的注释.     |
|  assignable    | org.example.SomeClass     |   目标组件可分配给（扩展或实现）的类（或接口）.   |
|  aspectj    |   org.example..\*Service+   |   目标组件要匹配的AspectJ类型表达式.   |
|  regex    |  org\.example\.Default.*    |  要与目标组件的类名匹配的正则表达式.    |
|  custom    |  org.example.MyTypeFilter    |  `org.springframework.core.type.TypeFilter`接口的自定义实现  |

```java
@Configuration
@ComponentScan(basePackages = "org.example",
        includeFilters = @Filter(type = FilterType.REGEX, pattern = ".*Stub.*Repository"),
        excludeFilters = @Filter(Repository.class))
public class AppConfig {
    ...
}
```

### 1.10.5 在组件内定义Bean元数据
Spring组件还可以将bean定义元数据贡献给容器. 
```java
@Component
public class FactoryMethodComponent {

    private static int i;

    @Bean
    @Qualifier("public")
    public TestBean publicInstance() {
        return new TestBean("publicInstance");
    }

    // use of a custom qualifier and autowiring of method parameters
    @Bean
    protected TestBean protectedInstance(
            @Qualifier("public") TestBean spouse,
            @Value("#{privateInstance.age}") String country) {
        TestBean tb = new TestBean("protectedInstance", 1);
        tb.setSpouse(spouse);
        tb.setCountry(country);
        return tb;
    }

    @Bean
    private TestBean privateInstance() {
        return new TestBean("privateInstance", i++);
    }

    @Bean
    @RequestScope
    public TestBean requestScopedInstance() {
        return new TestBean("requestScopedInstance", 3);
    }
}
```

### 1.10.6 自动检测组件命名
在扫描过程中自动检测到组件时，该组件的Bean名称由该扫描程序已知的`BeanNameGenerator`策略生成. 缺省bean名称生成器将返回未大写的非限定类名称	

```java
public interface BeanNameGenerator {

	/**
	 * Generate a bean name for the given bean definition.
	 * @param definition the bean definition to generate a name for
	 * @param registry the bean definition registry that the given definition
	 * is supposed to be registered with
	 * @return the generated bean name
	 */
	String generateBeanName(BeanDefinition d	efinition, BeanDefinitionRegistry registry);

}
```

### 1.10.7 为自动检测到的组件提供作用域
自动检测到的组件的默认且最常见的作用域是`singleton` . 但是，有时您需要使用`@Scope`批注指定的其他范围. 您可以在批注中提供范围的名称，

```java
@Configuration
@ComponentScan(basePackages = "org.example", scopeResolver = MyScopeResolver.class)
public class AppConfig {
    // ...
}
```

### 1.10.8 提供带有注解的限定元数据
`@Qualifier`注解和自定义限定符批注的使用，以在解析自动装配候选时提供细粒度的控制

### 1.10.9 生成候选组件索引
尽管类路径扫描非常快，但可以通过在编译时创建候选静态列表来提高大型应用程序的启动性能. 在这种模式下，作为组件扫描目标的所有模块都必须使用此机制.
```xml
<dependencies>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context-indexer</artifactId>
        <version>5.2.7.RELEASE</version>
        <optional>true</optional>
    </dependency>
</dependencies>
```

## 1.11 JSR 330

从Spring 3.0开始，Spring提供对JSR-330标准注释（依赖注入）的支持.
```xml
<dependency>
    <groupId>javax.inject</groupId>
    <artifactId>javax.inject</artifactId>
    <version>1</version>
</dependency>
```
####  1.11.1 @Inject  @Named
可以使用`@javax.inject.Inject`代替`@Autowired` ，如果要为应注入的依赖项使用限定名称，则应使用`@Named`批注

#### 1.11.2 @Named@ManagedBean
可以使用`@javax.inject.Named`或`javax.annotation.ManagedBean`代替@Component ，如以下示例所示：

```java
import javax.inject.Inject;
import javax.inject.Named;

@Named("movieListener")  // @ManagedBean("movieListener") could be used as well
public class SimpleMovieLister {

    private MovieFinder movieFinder;

    @Inject
    public void setMovieFinder(MovieFinder movieFinder) {
        this.movieFinder = movieFinder;
    }

    // ...
}
```

### 1.11.3 JSR-330标准注解的限制

| Spring              | javax.inject.*        | 限制和注释                                                   |
| ------------------- | --------------------- | ------------------------------------------------------------ |
| @Autowired          | @Inject               | `@Inject`没有`required`属性。可以用`Optional`替代：`@Inject private Optional<SomeBean> someBean;` |
| @Component          | @Named / @ManagedBean | JSR-330没有提供组合模式，只有命名组件                        |
| @Scope("singleton") | @Singleton            | JSR-330默认作用域是类似Spring的 `prototype`。但在Spring 容器内与默认作用域`singleton`一致。`javax.inject.@Scope`作用于注解上，用于创建自定义注解。 |
| @Qualifier          | @Qualifier / @Named   | `javax.inject.Qualifier`是用于自定义限定的元注解。可与`javax.inject.Named`关联使用。 |
| @Value              | -                     |                                                              |
| @Required           | -                     |                                                              |
| @Lazy               | -                     |                                                              |
| ObjectFactory       | Provider              | `Provider`可与`ObjectFactory`相互替代，可与Spring的@Autowired结合使用，或者与无注解的构造函数和setter方法结合使用。 |



## 1.12 基于JAVA的容器配置

###  1.12.1 @Bean & @Configuration
Spring的新Java配置支持中的主要工件是@Configuration @Bean类和@Bean方法.

### 1.12.2 使用AnnotationConfigApplicationContext实例化Spring容器
Spring 3.0中引入的Spring的AnnotationConfigApplicationContext . 这种通用的ApplicationContext实现不仅可以接受@Configuration类作为输入，还可以接受普通的@Component类以及带有JSR-330元数据注释的类.

简单实例化

```java
public static void main(String[] args) {
    ApplicationContext ctx = new AnnotationConfigApplicationContext(AppConfig.class);
    MyService myService = ctx.getBean(MyService.class);
    myService.doStuff();
}
```

使用`register(Class<?>…)`以编程方式创建容器

```java
public static void main(String[] args) {
    AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();
    ctx.register(AppConfig.class, OtherConfig.class);
    ctx.register(AdditionalConfig.class);
    ctx.refresh();
    MyService myService = ctx.getBean(MyService.class);
    myService.doStuff();
}
```

使用`scan(String…)`开启组件扫描

```java
@Configuration
@ComponentScan(basePackages = "com.acme") 
public class AppConfig  {
    ...
}
```

使用`AnnotationConfigWebApplicationContext`支持 Web 应用

```
public static void main(String[] args) {
    ApplicationContext ctx = new AnnotationConfigWebApplicationContext(AppConfig.class);
    MyService myService = ctx.getBean(MyService.class);
    myService.doStuff();
}
```

### 1.12.3 使用@Bean注解

@Bean是方法级别的注释

```java
@Configuration
public class AppConfig {

    @Bean({"dataSource", "subsystemA-dataSource", "subsystemB-dataSource"}, initMethod = "init", destroyMethod = "cleanup")
    @Description("Provides a basic example of a bean")
		@SessionScope
    public Thing thing() {
        return new Thing();
    }
}
```
### 1.12.4 使用@Configuration注解
@Configuration是类级别的注释，指示对象是Bean定义的源

@Lookup

查找方法注入是一项高级功能，在单例作用域的bean依赖于原型作用域的bean的情况下，这很有用

```java
@Configuration
public class AppConfig {

    @Bean
    public ClientService clientService1() {
        ClientServiceImpl clientService = new ClientServiceImpl();
        clientService.setClientDao(clientDao());
        return clientService;
    }

    @Bean
    public ClientService clientService2() {
        ClientServiceImpl clientService = new ClientServiceImpl();
        clientService.setClientDao(clientDao());
        return clientService;
    }

    @Bean
    public ClientDao clientDao() {
        return new ClientDaoImpl();
    }
}
```

所有`@Configuration`在启动时CGLIB会生成代理子类，在父方法创建一个实例之前，会检查容器是否有缓存的Bean。所以，在 Spring 默认会生成单例Bean。

### 1.12.5 组合基于Java的配置

##### 使用@Import注解

与Spring XML文件中使用<import/>元素来帮助模块化配置一样， @Import @Bean批注允许从另一个配置类加载@Bean定义

```java
@Configuration
public class ConfigA {

    @Bean
    public A a() {
        return new A();
    }
}

@Configuration
@Import(ConfigA.class)
public class ConfigB {

    @Bean
    public B b() {
        return new B();
    }
}
```

##### 有条件的引入`@Configuration`类或`@Bean`方法

`@Profile`或者更灵活的`@Conditional`

继承实现 `Condition` 接口方法`matches(…)`

##### 组合Java 和 XML配置

```java
@Configuration
@ImportResource("classpath:/com/acme/properties-config.xml")
public class AppConfig {
    @Value("${jdbc.url}")
    private String url;s
}
```

## 1.13 Environment抽象

Environment接口是集成在容器中的抽象，它对应用程序环境的两个关键方面进行建模： profile和properties .

### 1.13.1 Bean 定义配置文件

```java
@Bean(destroyMethod="")
public DataSource dataSource() throws Exception {
    Context ctx = new InitialContext();
    return (DataSource) ctx.lookup("java:comp/env/jdbc/datasource");
}
```

#### 使用@Profile

@Profile批注可让您指示一个或多个指定的配置文件处于活动状态时有资格注册的组件.

#### 激活一个profile

```java
AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();
ctx.getEnvironment().setActiveProfiles("profile1", "profile2");
ctx.register(SomeConfig.class, StandaloneDataConfig.class, JndiDataConfig.class);
ctx.refresh();
```
声明：
```java
    -Dspring.profiles.active="profile1,profile2"
```

配置表达式支持的操作符

- `!`: 逻辑非
- `&`: 逻辑与
- `|`: 逻辑或

作为元注解创建自定义注解

```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Profile("production")
public @interface Production {
}
```

#### 默认Profile

```java
@Configuration
@Profile("default")
public class DefaultDataConfig {

    @Bean
    public DataSource dataSource() {
        return new EmbeddedDatabaseBuilder()
            .setType(EmbeddedDatabaseType.HSQL)
            .addScript("classpath:com/bank/config/sql/schema.sql")
            .build();
    }
}
```

改变默认 Profile 名 的方法

* `Environment.setDefaultProfiles()`
* `spring.profiles.default`属性

### 1.13.2 PropertySource抽象

```java
ApplicationContext ctx = new GenericApplicationContext();
Environment env = ctx.getEnvironment();
boolean containsMyProperty = env.containsProperty("my-property");
System.out.println("Does my environment contain the 'my-property' property? " + containsMyProperty);
```

`PropertySource`是简单键值对的抽象，`Environment`在一系列`PropertySource`对象中执行搜索，以确定属性是否在当前环境定义。

`StandardEnvironment`配置两个`PropertySource`对象，一个是 JVM系统属性`System.getProperties()`一个代表系统环境变量`System.getenv()`

对于一般`StandardServletEnvironment`，按照优先级排序

1. ServletConfig parameters (例如 `DispatcherServlet` 上下文)
2. ServletContext parameters  (web.xml context-param 条目)
3. JNDI environment variables (`java:comp/env/` 条目)
4. JVM system properties (`-D` 命令行参数)
5. JVM system environment (操作系统环境变量)

### 1.13.3 使用@PropertySource

`@PropertySource`注释为将`PropertySource`添加到Spring的`Environment`提供了一种方便的声明性机制.

```java
@Configuration
@PropertySource("classpath:/com/myco/app.properties")
public class AppConfig {

    @Autowired
    Environment env;

    @Bean
    public TestBean testBean() {
        TestBean testBean = new TestBean();
        testBean.setName(env.getProperty("testbean.name"));
        return testBean;
    }
}
```

### 1.13.4 占位符解析
由于Environment抽象是在整个容器中集成的，因此很容易通过它来路由占位符的解析

## 1.14 注册LoadTimeWeaver
Spring使用`LoadTimeWeaver`在将类加载到Java虚拟机（JVM）中时对其进行动态转换.

要启用加载时编织，可以将`@EnableLoadTimeWeaving`添加到您的@Configuration类之一，如以下示例所示：

```java
@Configuration
@EnableLoadTimeWeaving
public class AppConfig {
}
```

## 1.15 ApplicationContext附加功能
为了以更加面向框架的方式增强BeanFactory功能，上下文包还提供以下功能：

* 通过MessageSource界面访问i18n样式的消息.
* 通过ResourceLoader界面访问资源，例如URL和文件.
* 事件发布，即实现了豆ApplicationListener接口，通过使用的ApplicationEventPublisher接口.
* 加载多个（分层）上下文，使每个上下文都通过HierarchicalBeanFactory接口集中在一个特定层上，例如应用程序的Web层.

### 1.15.1 国际化
ApplicationContext接口扩展了一个称为MessageSource的接口，因此提供了国际化（" i18n"）功能. Spring还提供了HierarchicalMessageSource接口，该接口可以分层解析消息

Spring提供了两个MessageSource实现， ResourceBundleMessageSource和StaticMessageSource . 两者都实现HierarchicalMessageSource以便进行嵌套消息传递

### 1.15.2 事件
通过ApplicationEvent类和ApplicationListener接口提供ApplicationContext中的事件处理. 如果将实现ApplicationListener接口的bean部署到上下文中，则每次将ApplicationEvent发布到ApplicationContext ，都会通知该bean. 本质上，这是标准的Observer设计模式.


#### @EventListener
您可以使用@EventListener批注在托管Bean的任何公共方法上注册事件侦听器

####  @Async
如果希望特定的侦听器异步处理事件，则可以重用常规的@Async支持 . 以下示例显示了如何执行此操作：

#### @Order(42)
如果需要先调用一个侦听器，则可以将@Order批注添加到方法声明中，如以下示例所示：

### 泛型
还可以使用泛型来进一步定义事件的结构. 考虑使用`EntityCreatedEvent<T>` ，其中T是已创建的实际实体的类型. 
	
```java
@EventListener
public void onPersonCreated(EntityCreatedEvent<Person> event) {
    // ...
}
```
### ResourceLoader 	
应用程序上下文是ResourceLoader ，可用于加载Resource对象.

## 1.16 BeanFactory
BeanFactory API为Spring的IoC功能提供了基础. 它的特定合同主要用于与Spring的其他部分以及相关的第三方框架集成，并且其DefaultListableBeanFactory实现是更高级别的GenericApplicationContext容器中的关键委托.
