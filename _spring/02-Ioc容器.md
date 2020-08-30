---
title: IoC容器
toc: true
---

## Spring IoC Container and Beans
是通过使用类的直接构造或诸如服务定位器模式之类的机制来控制其依赖项的实例化或位置的Bean本身的逆过程（因此称为Control Inversion）.

`org.springframework.beans`和`org.springframework.context`包是Spring Framework的IoC容器的基础. 

`BeanFactory`接口提供了一种高级配置机制，能够管理任何类型的对象.

`ApplicationContext`是`BeanFactory`的子接口. 它增加了：

* 与Spring的AOP功能轻松集成
* 消息资源处理（用于国际化）
* 活动发布
* 应用层特定的上下文，例如Web应用程序中使用的WebApplicationContext .

在Spring中，**构成应用程序主干并由Spring IoC容器管理的对象称为bean. Bean是由Spring IoC容器实例化，组装和以其他方式管理的对象**. 否则，bean仅仅是应用程序中许多对象之一. Bean及其之间的依赖关系反映在容器使用的配置元数据中.

## Container
org.springframework.context.ApplicationContext接口表示Spring IoC容器，并负责实例化，配置和组装Bean.Spring提供了ApplicationContext接口的几种实现：

* AnnotationConfigApplicationContext
* AnnotationConfigWebApplicationContext
* ClassPathXmlApplicationContext
* FileSystemXmlapplicationcontext
* XmlWebApplicationContext

##  配置Metadata
创建应用组件之间协作的行为通常称为装配（wiring），装配Bean的方式：

* XML
* JAVA

Spring通过应用上下文（ Application Context） 装载bean的定义并把它们组装起来。 Spring应用上下文全权负责对象的创建和组装。

## Bean
Spring IoC容器管理一个或多个bean。这些bean是使用提供给容器的配置元数据创建的，在容器本身内，这些bean定义表示为`BeanDefinition`对象，其中包含（除其他信息外）以下元数据：

* 包限定的类名称：通常，定义了Bean的实际实现类.
* Bean行为配置元素，用于声明Bean在容器中的行为（作用域，生命周期回调等）.
* 引用其他bean进行其工作所需的bean. 这些引用也称为协作者或依赖项.
*  要在新创建的对象中设置的其他配置设置-例如，池的大小限制或在管理连接池的Bean中使用的连接数.

该元数据转换为构成每个bean定义的一组属性. 下表描述了这些属性：

| Property | 在...中解释 | 
| -------- | -------- |
| Class     |  Instantiating Beans    |
| Name     |   Naming Beans   | 
|  Scope    |  Bean Scopes    | 
| Constructor arguments     | Dependency Injection     | 
| Properties     |  Dependency Injection    | 
|  Autowiring mode    |  Autowiring Collaborators    | 
| Lazy initialization mode     |   Lazy-initialized Beans   | 
|  Initialization method    |  Initialization Callbacks    | 
|  Destruction method    |  Destruction Callbacks    | 

ApplicationContext实现还允许注册在容器外部（由用户）创建的现有对象. 这是通过通过`getBeanFactory()`方法访问`ApplicationContext`的`BeanFactory`来完成的，该方法返回`BeanFactory`的实现 `DefaultListableBeanFactory`. `DefaultListableBeanFactory`通过`registerSingleton(..)`和`registerBeanDefinition(..)`方法支持此注册. 但是，典型的应用程序只能与通过常规bean定义元数据定义的bean一起使用.
### Naming Beans
每个bean具有一个或多个标识符. 这些标识符在承载Bean的容器内必须唯一. 一个bean通常只有一个标识符. 但是，如果需要多个，则可以将多余的别名视为别名.

在基于XML的配置元数据中，可以使用id属性和/或name属性来指定bean标识符. id属性可让您精确指定一个id. 还可以在指定它们name属性指定别名，并由逗号（ , ），分号（ ; ）或空白分隔。如果未明确提供name或id ，则容器将为该bean生成一个唯一的名称. 

### Instantiating Beans
定义使用静态工厂方法创建的bean时，请使用class属性指定包含static工厂方法的类，并使用名为factory-method的属性指定工厂方法本身的名称. 


## Dependencies

### Dependency Injection
依赖注入（DI）是一个过程，通过该过程，对象只能通过构造函数参数，工厂方法的参数或在构造或创建对象实例后在对象实例上设置的属性来定义其依赖关系（即，与它们一起工作的其他对象）。

DI存在两个主要变体： 基于构造函数的依赖注入和基于Setter的依赖注入 .

可以使用`@ConstructorProperties` JDK注释显式命名构造函数参数：
```
public class ExampleBean {

    // Fields omitted

    @ConstructorProperties({"years", "ultimateAnswer"})
    public ExampleBean(int years, String ultimateAnswer) {
        this.years = years;
        this.ultimateAnswer = ultimateAnswer;
    }
}
```


### depends-on
有时bean之间的依赖性不太直接，depends-on属性可以显式地强制初始化一个或多个使用该元素的bean之前的bean
### Lazy-initialized Beans
ApplicationContext实现会急于创建和配置所有单例 bean. 通常，这种预初始化是可取的，因为与数小时甚至数天后相比，会立即发现配置或周​​围环境中的错误. 如果不希望使用此行为，则可以通过将bean定义标记为延迟初始化来防止单例bean的预实例化. 延迟初始化的bean告诉IoC容器在首次请求时而不是在启动时创建一个bean实例

### Autowiring Collaborators
Spring容器可以自动装配协作bean之间的关系. 您可以通过检查ApplicationContext的内容，让Spring为您的bean自动解决协作者（其他bean）

### Method Injection
容器中的大多数bean是singletons，当bean的生命周期不同时会出现问题.解决方案是放弃某些控制反转. 通过实现ApplicationContextAware接口，并通过对容器 进行getBean("B")调用，可以使Bean A知道容器 ，每次bean A需要它时都请求（通常是新的）Bean B实例
```
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

* 查找方法注入是容器重写容器管理的Bean上的方法并返回容器中另一个命名Bean的查找结果的能力
* 任意的方法替换，实现`org.springframework.beans.factory.support.MethodReplacer`接口的类提供了新的方法定义


## Bean Scopes
Spring框架支持六个范围:


| Scope | Description |
| -------- | -------- |
| singleton     | （默认）将每个Spring IoC容器的单个bean定义范围限定为单个对象实例.    |
|  prototype    | 将单个bean定义的作用域限定为任意数量的对象实例.     |
|  request    |  将单个bean定义的范围限定为单个HTTP请求的生命周期.    |
|   session   |  将单个bean定义的范围限定为单个HTTP会话的生命周期    |
|  application    |  将单个bean定义的作用域限定为ServletContext的生命周期.    |
|  websocket    |   单个bean定义的作用域限定为WebSocket的生命周期.   |

自定义Scope，要将自定义范围集成到Spring容器中，需要实现`org.springframework.beans.factory.config.Scope`接口

##  Customizing the Nature of a Bean

Spring框架提供了许多接口，可用于自定义Bean的性质. 本节将它们分组如下：

* Lifecycle Callbacks
* ApplicationContextAware and BeanNameAware
* Other Aware Interfaces

### Lifecycle Callbacks
为了与容器对bean生命周期的管理进行交互，可以实现Spring `InitializingBean`和`DisposableBean`接口. 容器为前者调用`afterPropertiesSet()`并为后者调用`destroy()` ，以使Bean在初始化和销毁Bean时执行某些操作.

	

组合生命周期机制：
* InitializingBean和DisposableBean回调接口
* Custom init() and destroy() methods
* @PostConstruct和@PreDestroy批注 . 您可以结合使用这些机制来控制给定的bean.

JSR-250 @PostConstruct和@PreDestroy批注通常被认为是在现代Spring应用程序中接收生命周期回调的最佳实践. 使用这些注释意味着您的bean没有耦合到特定于Spring的接口.

任何Spring管理的对象都可以实现`Lifecycle`接口。当ApplicationContext本身接收到启动和停止信号时（例如，对于运行时的停止/重新启动场景），它将把这些调用级联到在该上下文中定义的所有`Lifecycle`实现. 它通过委派给`LifecycleProcessor`来做到这一点。为了对特定bean的自动启动（包括启动阶段）进行细粒度的控制，请考虑改为实现`org.springframework.context.SmartLifecycle`

如果您在非Web应用程序环境中（例如，在富客户端桌面环境中）使用Spring的IoC容器，要注册关闭挂钩，请调用在`ConfigurableApplicationContext`接口上声明的`registerShutdownHook()`方法
```
public static void main(final String[] args) throws Exception {
    ConfigurableApplicationContext ctx = new ClassPathXmlApplicationContext("beans.xml");
    ctx.registerShutdownHook();
}
```

### ApplicationContextAware  & BeanNameAware
当ApplicationContext创建实现org.springframework.context.ApplicationContextAware接口的对象实例时，该实例将获得对该ApplicationContext的引用. 以下清单显示了ApplicationContextAware接口的定义：
```
public interface ApplicationContextAware {

    void setApplicationContext(ApplicationContext applicationContext) throws BeansException;
}
```
当ApplicationContext创建实现org.springframework.beans.factory.BeanNameAware接口的类时，该类将获得对在其关联的对象定义中定义的名称的引用
```
public interface BeanNameAware {
    void setBeanName(String name) throws BeansException;
}
```

### Other Aware Interfaces


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


## 继承Bean定义
子bean定义从父定义继承配置数据. 子定义可以覆盖某些值或根据需要添加其他值. 使用父bean和子bean定义可以节省很多输入. 实际上，这是一种模板形式.

如果您有一个（父）bean定义仅打算用作模板，并且此定义指定了一个类，则必须确保将abstract属性设置为true ，否则应用程序上下文将实际上（试图）预先实例化abstract bean.

## 容器扩展点
通常，应用程序开发人员无需为ApplicationContext实现类提供子类. 相反，可以通过插入特殊集成接口的实现来扩展Spring IoC容器.

### BeanPostProcessor
`BeanPostProcessor`接口定义了回调方法，您可以实现这些回调方法以提供自己的（或覆盖容器的默认值）实例化逻辑，依赖项解析逻辑等.配置多个`BeanPostProcessor`实例，并且可以通过设置`order`属性来控制这些`BeanPostProcessor`实例的执行顺序
```
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
### BeanFactoryPostProcessor
与`BeanPostProcessor`一个重要不同：`BeanFactoryPostProcessor`操作bean配置元数据，例如：`PropertySourcesPlaceholderConfigurer`从外部Properties文件配置修改属性的元数据. 将要替换的值指定为${property-name}形式的占位符

### FactoryBean
可以为本身就是工厂的对象实现org.springframework.beans.factory.FactoryBean接口.
## 基于注解的容器配置
通过使用相关类，方法或字段声明上的注释，开发人员无需使用XML来描述bean的连接，而是将配置移入组件类本身.

### @Required
@Required批注适用于bean属性设置器方法，如以下示例所示：
```
@Required
public void setMovieFinder(MovieFinder movieFinder) {
    this.movieFinder = movieFinder;
}
```

### @Autowired
可以使用JSR 330的@Inject注释代替Spring的@Autowired注释
您可以将@Autowired注释应用于构造函数，如以下示例所示：
```
@Autowired
public MovieRecommender(CustomerPreferenceDao customerPreferenceDao) {
    this.customerPreferenceDao = customerPreferenceDao;
}
```
还可以将@Autowired批注应用于传统的 setter方法
还可以将注释应用于具有任意名称和多个参数的方法
也可以将@Autowired应用于字段
还可以通过将@Autowired注释添加到需要该类型数组的字段或方法
```
@Autowired
private MovieCatalog[] movieCatalogs;
```
也可以使用@Autowired的接口是众所周知的可解析依赖:`BeanFactory`,` ApplicationContext`, `Environment`, `ResourceLoader`, `ApplicationEventPublisher`，`MessageSource`

### @Primary
@Primary表示当多个bean是自动装配到单值依赖项的候选对象时，应优先考虑特定的bean. 如果候选中恰好存在一个主bean，则它将成为自动装配的值.

### @Qualifier
可以将限定符值与特定的参数相关联，从而缩小类型匹配的范围，以便为每个参数选择特定的bean

JSR-250 @Resource批注，该批注的语义定义是通过其唯一名称标识特定目标组件，而声明的类型与匹配过程无关.

创建自己的自定义限定符注释:
```
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Qualifier
public @interface Genre {

    String value();
}
```

可以定义自定义限定符批注，该批注除了简单value属性之外或代替简单value属性，都接受命名属性. 如果随后在要自动装配的字段或参数上指定了多个属性值，则bean定义必须与所有此类属性值匹配才能被视为自动装配候选
```
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Qualifier
public @interface MovieQualifier {

    String genre();

    Format format();
}
```

```
    @Autowired
    @MovieQualifier(format=Format.VHS, genre="Action")
    private MovieCatalog actionVhsCatalog;
```

### Generics 
除了@Qualifier批注之外，您还可以将Java泛型类型用作资格的隐式形式. 例如，假设您具有以下配置：
```
@Autowired
private Store<String> s1; // <String> qualifier, injects the stringStore bean

@Autowired
private Store<Integer> s2; // <Integer> qualifier, injects the integerStore bean
```

### CustomAutowireConfigurer
`customautowiresfigurer`是一个`BeanFactoryPostProcessor`，它允许您注册自己的自定义限定符注释类型，即使它们没有使用Spring的`@Qualifier`注释

### @Resource
Spring还通过对字段或bean属性设置器方法使用JSR-250 @Resource批注（ javax.annotation.Resource ）支持注入. @Resource查找主类型匹配而不是特定的命名bean

### @Value
@Value通常用于注入外部属性：Spring提供了一个默认的宽松内嵌值解析器.
当@Value包含SpEL表达式时，该值将在运行时动态计算

```
public MovieRecommender(@Value("#{systemProperties['user.catalog'] + 'Catalog' }") String catalog) {}
```

###  @PostConstruct @PreDestroy
`CommonAnnotationBeanPostProcessor`不仅可以识别`@Resource`注释，还可以识别JSR-250生命周期注释：` javax.annotation.PostConstruct`和`javax.annotation.PreDestroy` . 在Spring 2.5中引入了对这些注释的支持，为初始化回调和破坏回调中描述的生命周期回调机制提供了一种替代方法 .

## 扫描类路径来管理组件
通过扫描类路径来隐式检测候选组件的选项. 候选组件是与过滤条件匹配的类，并在容器中注册了相应的Bean定义. 这消除了使用XML进行bean注册的需要. 相反，您可以使用批注（例如@Component ），AspectJ类型表达式或您自己的自定义过滤条件来选择哪些类已向容器注册了bean定义.

### @Component
Spring提供了进一步的@Component型注释： @Component ， @Service @Controller和@Controller . @Component是任何Spring托管组件的通用@Component型. @Repository ， @Service @Controller和@Controller是@Component的特化

### 元注释 & 组合注释
元注释是可以应用于另一个注释的注释. 
```
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
```
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

### @ComponentScan

要自动检测这些类并注册相应的bean，需要将@ComponentScan添加到@Configuration类中，其中basePackages属性是这两个类的公共父包.
```
@Configuration
@ComponentScan(basePackages = "org.example")
public class AppConfig  {
    // ...
}
```

### @Filter

过滤器类型


| 过滤器类型 | 范例表达	 | 描述 |
| -------- | -------- | -------- |
| 注释（默认）     | org.example.SomeAnnotation     | 在目标组件中的类型级别上存在或元存在的注释.     |
|  assignable    | org.example.SomeClass     |   目标组件可分配给（扩展或实现）的类（或接口）.   |
|  aspectj    |   org.example..\*Service+   |   目标组件要匹配的AspectJ类型表达式.   |
|  regex    |  org\.example\.Default.*    |  要与目标组件的类名匹配的正则表达式.    |
|  custom    |  org.example.MyTypeFilter    |  `org.springframework.core.type.TypeFilter`接口的自定义实现  |

```
@Configuration
@ComponentScan(basePackages = "org.example",
        includeFilters = @Filter(type = FilterType.REGEX, pattern = ".*Stub.*Repository"),
        excludeFilters = @Filter(Repository.class))
public class AppConfig {
    ...
}
```

### Metadata Bean
Spring组件还可以将bean定义元数据贡献给容器. 
```
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

### 自动检测组件命名
在扫描过程中自动检测到组件时，该组件的Bean名称由该扫描程序已知的`BeanNameGenerator`策略生成. 缺省bean名称生成器将返回未大写的非限定类名称

### @Scope
自动检测到的组件的默认且最常见的作用域是singleton . 但是，有时您需要使用@Scope批注指定的其他范围. 您可以在批注中提供范围的名称，

### @Qualifier
@Qualifier批注和自定义限定符批注的使用，以在解析自动装配候选时提供细粒度的控制

### 生产候选组件索引
尽管类路径扫描非常快，但可以通过在编译时创建候选静态列表来提高大型应用程序的启动性能. 在这种模式下，作为组件扫描目标的所有模块都必须使用此机制.
```
<dependencies>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context-indexer</artifactId>
        <version>5.2.7.RELEASE</version>
        <optional>true</optional>
    </dependency>
</dependencies>
```

### JSR 330
从Spring 3.0开始，Spring提供对JSR-330标准注释（依赖注入）的支持.
```
<dependency>
    <groupId>javax.inject</groupId>
    <artifactId>javax.inject</artifactId>
    <version>1</version>
</dependency>
```
####  @Inject  @Named
可以使用`@javax.inject.Inject`代替`@Autowired` ，如果要为应注入的依赖项使用限定名称，则应使用`@Named`批注

#### @ManagedBean
可以使用@javax.inject.Named或javax.annotation.ManagedBean代替@Component ，如以下示例所示：

## 基于JAVA的容器配置
###  @Bean   @Configuration
Spring的新Java配置支持中的主要工件是@Configuration @Bean类和@Bean方法.

### AnnotationConfigApplicationContext
Spring 3.0中引入的Spring的AnnotationConfigApplicationContext . 这种通用的ApplicationContext实现不仅可以接受@Configuration类作为输入，还可以接受普通的@Component类以及带有JSR-330元数据注释的类.
```
public static void main(String[] args) {
    ApplicationContext ctx = new AnnotationConfigApplicationContext(AppConfig.class);
    MyService myService = ctx.getBean(MyService.class);
    myService.doStuff();
}
```

### @Bean
@Bean是方法级别的注释

```
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
### Configuration
@Configuration是类级别的注释，指示对象是Bean定义的源
### @Lookup
查找方法注入是一项高级功能，在单例作用域的bean依赖于原型作用域的bean的情况下，这很有用

### @Import
与Spring XML文件中使用<import/>元素来帮助模块化配置一样， @Import @Bean批注允许从另一个配置类加载@Bean定义

## Environment抽象
Environment接口是集成在容器中的抽象，它对应用程序环境的两个关键方面进行建模： profile和properties .

### @Profile
@Profile批注可让您指示一个或多个指定的配置文件处于活动状态时有资格注册的组件.

激活一个profile
```
AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();
ctx.getEnvironment().setActiveProfiles("profile1", "profile2");
ctx.register(SomeConfig.class, StandaloneDataConfig.class, JndiDataConfig.class);
ctx.refresh();
```
声明：
```
    -Dspring.profiles.active="profile1,profile2"
```

### @PropertySource
@PropertySource注释为将PropertySource添加到Spring的Environment提供了一种方便的声明性机制.

```
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

### 占位符解析
由于Environment抽象是在整个容器中集成的，因此很容易通过它来路由占位符的解析

## LoadTimeWeaver
Spring使用LoadTimeWeaver在将类加载到Java虚拟机（JVM）中时对其进行动态转换.

要启用加载时编织，可以将@EnableLoadTimeWeaving添加到您的@Configuration类之一，如以下示例所示：

## ApplicationContext附加功能
为了以更加面向框架的方式增强BeanFactory功能，上下文包还提供以下功能：

* 通过MessageSource界面访问i18n样式的消息.
* 通过ResourceLoader界面访问资源，例如URL和文件.
* 事件发布，即实现了豆ApplicationListener接口，通过使用的ApplicationEventPublisher接口.
* 加载多个（分层）上下文，使每个上下文都通过HierarchicalBeanFactory接口集中在一个特定层上，例如应用程序的Web层.

### 国际化
ApplicationContext接口扩展了一个称为MessageSource的接口，因此提供了国际化（" i18n"）功能. Spring还提供了HierarchicalMessageSource接口，该接口可以分层解析消息

Spring提供了两个MessageSource实现， ResourceBundleMessageSource和StaticMessageSource . 两者都实现HierarchicalMessageSource以便进行嵌套消息传递

### 事件
通过ApplicationEvent类和ApplicationListener接口提供ApplicationContext中的事件处理. 如果将实现ApplicationListener接口的bean部署到上下文中，则每次将ApplicationEvent发布到ApplicationContext ，都会通知该bean. 本质上，这是标准的Observer设计模式.


#### @EventListener
您可以使用@EventListener批注在托管Bean的任何公共方法上注册事件侦听器

####  @Async
如果希望特定的侦听器异步处理事件，则可以重用常规的@Async支持 . 以下示例显示了如何执行此操作：

#### @Order(42)
如果需要先调用一个侦听器，则可以将@Order批注添加到方法声明中，如以下示例所示：

### 泛型
还可以使用泛型来进一步定义事件的结构. 考虑使用`EntityCreatedEvent<T>` ，其中T是已创建的实际实体的类型. 
	
```
@EventListener
public void onPersonCreated(EntityCreatedEvent<Person> event) {
    // ...
}
```
### ResourceLoader 	
应用程序上下文是ResourceLoader ，可用于加载Resource对象.

## BeanFactory
BeanFactory API为Spring的IoC功能提供了基础. 它的特定合同主要用于与Spring的其他部分以及相关的第三方框架集成，并且其DefaultListableBeanFactory实现是更高级别的GenericApplicationContext容器中的关键委托.
