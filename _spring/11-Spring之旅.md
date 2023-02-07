---
title: 第1章 Spring之旅
excerpt: Spring 可以 做 很多 事情， 它为 企业 级 开发 提供 给了 丰富 的 功能， 但是 这些 功能 的 底层 都 依赖于 它的 两个 核心
  特性， 也就是 依赖 注入（ dependency injection， DI） 和 面向 切面 编程（ aspect- oriented programming，
  AOP）
last_modified_at: '2020-04-27'
toc: true
tags:
- Java
- Spring
---

## 1.1 简化Java开发
关键策略：

* 基于POJO的轻量级和最小侵入性编程；
*  通过依赖注入和面向接口实现松耦合； 
*  基于切面和惯例进行声明式编程； 
*  通过切面和模板减少样板式代码；

### 1.1.1 激发POJO的潜
Spring赋予POJO魔力的方式之一就是通过DI来装配它们
### 1.1.2 依赖注入
耦合具有两面性（two- headed beast）。 一方面， 紧密耦合的代码难以测试、 难以复 用、 难以 理解，并且典型地表现出“ 打地鼠” 式的bug 特性（修复 一个 bug， 将会出现 一个或者 更多新的 bug）。 另一方面， 一定程度的耦合又是必须的—— 完全没有耦合的代码什么也做不了。

构造器注入（constructor injection）：
```
public class AA implements A {

	private Quest quest;
		
	public AA(Quest quest) {
		this.quest = quest;
	}
}
```
创建应用组件之间协作的行为通常称为装配（wiring），装配Bean的方式：

* XML
* JAVA

Spring通过应用上下文（ Application Context） 装载bean的定义并把它们组装起来。 Spring应用上下文全权负责对象的创建和组装。
### 1.1.3 应用切面
DI能够让相互协作的软件组件保持松散耦合，而面向切面编程（aspect-orientedprogramming，AOP）允许你把遍布应用各处的功能分离出来形成可重用的组件。

面向切面编程往往被定义为促使软件系统实现关注点的分离一项技术。系统组件还经常承担着额外的职责。诸如日志、事务管理和安全这样的系统服务经常融入到自身具有核心业务逻辑的组件中去，这些系统服务通常被称为横切关注点，因为它们会跨越系统的多个组件。

关注点分散道多个组件中，带的双重的复杂性：

* 实现系统关注点功能的代码将会重复出现在多个组件中。
* 组件会因为那些与自身核心业务无关的代码而变得混乱。

AOP能够使这些服务模块化，并以声明的方式将它们应用到它们需要影响的组件中去：高内聚，更关注自身业务，屏蔽系统服务复杂性。

将关注点与核心业务逻辑相分离，AOP能够确保POJO的简单性。

### 1.1.4 使用模板消除样板式代码
Spring旨在通过模板封装来消除样板式代码（boilerplate code）。
```java
try {
	conn = dataSource.getConnection();
	stmt = conn.prepareStatement("select id, firstname from employee where id=?");
	stmt.setLong(1, id);
	rs = stmt.executeQuery();
	if (rs.next()) {
	}
} catch(SQLException e) {
} finally {
	if (rs != null) {
		try {
			rs.close();
		} catch(SQLException e) {}
	}
		if (stmt != null) {
		try {
			stmt.close();
		} catch(SQLException e) {}
	}
		if (conn != null) {
		try {
			conn.close();
		} catch(SQLException e) {}
	}
}
```

JdbcTemplate
```
jdbcTemplate.queryForObject(
	"select id, firstname from employee where id=?", 
	new RowMapper<Employee>() {},
	id
);
```

## 1.2 容纳你的Bean
容器（container）是Spring的核心，Spring容器负责创建，装配，并管理对象的整个生命周期。

容器实现：
* bean工厂（BeanFactory）最简单容器，基本ID支持
* 应用上下文（ApplicationContext）基于BeanFactory构建，并提供应用框架级别的服务

### 1.2.1 使用应用上下文
* AnnotationConfigApplicationContext
* AnnotationConfigWebApplicationContext
* ClassPathXmlApplicationContext
* FileSystemXmlapplicationcontext
* XmlWebApplicationContext

注：Spring Boot默认使用AnnotationConfigServletWebServerApplicationContext
### 1.2.2 bean的生命周期
![]({{ 'assets/image/Bean在Spring容器从创建到销毁.png' | relative_url }})

3. 如果bean实现了BeanNameAware接口，Spring将bean的ID传递给setBeanName()方法；
4. 如果bean实现了BeanFactoryAware接口，Spring将调用setBeanFactory()方法，将BeanFactory容器实例传入；
5. 如果bean实现了ApplicationContextAware接口，Spring将调用setApplicationContext()方法，将bean所在的应用上下文的引用传入进来；
6. 如果bean实现了BeanPostProcessor接口，Spring将调用它们的postProcessBeforeInitialization()方法；
7. 如果bean实现了InitializingBean接口，Spring将调用它们的afterPropertiesSet()方法。类似地，如果bean使用initmethod声明了初始化方法，该方法也会被调用；
8. 如果bean实现了BeanPostProcessor接口，Spring将调用它们的postProcessAfterInitialization()方法；
9. 如果bean实现了DisposableBean接口，Spring将调用它的destroy()接口方法。同样，如果bean使用destroymethod声明了销毁方法，该方法也会被调用。

实践：在静态方法中获取Bean

```java
public class BeanUtil implements ApplicationContextAware {

    /***
     * Spring应用上下文环境
     */
    private static ApplicationContext applicationContext;

    public static ApplicationContext getApplicationContext() {
        return applicationContext;
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        BeanUtil.applicationContext = applicationContext;
    }
}
```
