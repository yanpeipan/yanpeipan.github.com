---
title: 验证，数据绑定，类型转换
excerpt: Spring通常用来开发Web应用
last_modified_at: '2020-04-27'
toc: true
toc_sticky: true
tags:
- Spring
---

## 3.1 Validator接口

```java
public interface Validator {
    boolean supports(Class<?> clazz);

    void validate(Object target, Errors errors);
}
```

例子

```java
public class CustomerValidator implements Validator {

    private final Validator addressValidator;

    public CustomerValidator(Validator addressValidator) {
        if (addressValidator == null) {
            throw new IllegalArgumentException("The supplied [Validator] is " +
                "required and must not be null.");
        }
        if (!addressValidator.supports(Address.class)) {
            throw new IllegalArgumentException("The supplied [Validator] must " +
                "support the validation of [Address] instances.");
        }
        this.addressValidator = addressValidator;
    }

    /**
     * This Validator validates Customer instances, and any subclasses of Customer too
     */
    public boolean supports(Class clazz) {
        return Customer.class.isAssignableFrom(clazz);
    }

    public void validate(Object target, Errors errors) {
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "firstName", "field.required");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "surname", "field.required");
        Customer customer = (Customer) target;
        try {
            errors.pushNestedPath("address");
            ValidationUtils.invokeValidator(this.addressValidator, customer.getAddress(), errors);
        } finally {
            errors.popNestedPath();
        }
    }
}
```

## 3.2. 解析编码 到 Error 消息

MessageCodesResolver确定Errors接口注册哪些错误代码。默认情况下，使用DefaultMessageCodesResolver。

`rejectValue("age", "too.darn.old") `第一个包括字段名称，第二个包括字段类型。

## 3.3 Bean操作和BeanWrapper

`org.springframework.beans`包遵循JavaBeans标准。JavaBean是一个具有默认无参构造函数并遵循命名约定的类，例如，名为bingoMadness的属性将具有一个setter方法`setBingoMadness（..）`和一个getter方法`getBingoMadness（）`

beans包中一个非常重要的类是`BeanWrapper`接口及其对应的实现（`BeanWrapperImpl`）。引用自javadoc的话，`BeanWrapper`提供了设置和获取属性值（逐个或批量），获取属性描述符和查询属性是否可读或可写等功能。此外，`BeanWrapper`还支持嵌套属性，使得可以对子属性进行无限深度的属性设置。`BeanWrapper`还支持添加标准的JavaBeans `PropertyChangeListeners`和`VetoableChangeListeners`，而无需在目标类中编写支持代码。最后但并非最不重要的是，BeanWrapper提供了对设置索引属性的支持。`BeanWrapper`通常不直接由应用程序代码使用，而是由`DataBinder`和`BeanFactory`使用。

### 3.3.1. 设置和获取基本和嵌套属性

```
BeanWrapper company = new BeanWrapperImpl(new Company());
// setting the company name..
company.setPropertyValue("name", "Some Company Inc.");
// ... can also be done like this:
PropertyValue value = new PropertyValue("name", "Some Company Inc.");
company.setPropertyValue(value);

// ok, let's create the director and tie it to the company:
BeanWrapper jim = new BeanWrapperImpl(new Employee());
jim.setPropertyValue("name", "Jim Stravinsky");
company.setPropertyValue("managingDirector", jim.getWrappedInstance());

// retrieving the salary of the managingDirector through the company
Float salary = (Float) company.getPropertyValue("managingDirector.salary");


```

### 3.3.2. 内置的PropertyEditor实现

在使用BeanWrapper设置属性值时，它会使用适当的`PropertyEditor`将字符串值转换为正确的属性类型。
Spring中使用属性编辑的一些示例：

1. Spring中使用属性编辑的一些示例
2. 在Spring的MVC框架中解析HTTP请求参数

Spring拥有许多内置的`PropertyEditor`实现，以方便使用。它们都位于`org.springframework.beans.propertyeditors`包中。

下表描述了Spring提供的各种PropertyEditor实现：

| Class                     | Explanation                                                  |
| :------------------------ | :----------------------------------------------------------- |
| `ByteArrayPropertyEditor` | byte 数组的编辑器，将字符串转换为对应的 byte 表示。由 BeanWrapperImpl 默认注册。 |
| `ClassEditor`             | 将表示类的字符串解析为实际的类和反之。当类未找到时，将抛出 IllegalArgumentException。默认由 BeanWrapperImpl 注册。 |
| `CustomBooleanEditor`     | Boolean 属性可定制的属性编辑器。默认由 BeanWrapperImpl 注册，但可以通过注册自定义实例来覆盖默认实例。 |
| `CustomCollectionEditor`  | 集合的属性编辑器，将任何源集合转换为给定目标集合类型。       |
| `CustomDateEditor`        | java.util.Date 可定制的属性编辑器，支持自定义的 DateFormat。默认未注册，需要用户根据需要注册。 |
| `CustomNumberEditor`      | 任何 Number 子类（例如 Integer、Long、Float 或 Double）可定制的属性编辑器。默认由 BeanWrapperImpl 注册，但可以通过注册自定义实例来覆盖默认实例。 |
| `FileEditor`              | 将字符串解析为 java.io.File 对象。由 BeanWrapperImpl 默认注册。 |
| `InputStreamEditor`       | 一种单向属性编辑器，可以接收一个字符串并通过中间的 ResourceEditor 和 Resource 生成 InputStream，以便可以将 InputStream 属性直接设置为字符串。注意，默认使用不会为您关闭 InputStream。由 BeanWrapperImpl 默认注册。 |
| `LocaleEditor`            | 可以将字符串解析为 Locale 对象和反之（字符串格式为 [language]*[country]*[variant]，与 Locale 的 toString() 方法相同）。也接受空格作为分隔符，作为下划线的替代。由 BeanWrapperImpl 默认注册。 |
| `PatternEditor`           | 可以将字符串解析为 java.util.regex.Pattern 对象和反之。      |
| `PropertiesEditor`        | 可以将字符串（格式化为 java.util.Properties 类的 javadoc 中定义的格式）转换为 Properties 对象。由 BeanWrapperImpl 默认注册。 |
| `StringTrimmerEditor`     | 截取字符串的属性编辑器。可选地允许将空字符串转换为 null 值。默认未注册，需要用户根据需要注册。 |
| `URLEditor`               | 可以将 URL 的字符串表示解析为实际的 URL 对象。由 BeanWrapperImpl 默认注册。 |

Spring使用`java.beans.PropertyEditorManager`来设置可能需要的属性编辑器的搜索路径。搜索路径还包括sun.bean.editors，其中包括用于诸如Font、Color和大多数基本类型的`PropertyEditor`实现。

使用`PropertyEditorRegistrar`

```java
public final class CustomPropertyEditorRegistrar implements PropertyEditorRegistrar {

    public void registerCustomEditors(PropertyEditorRegistry registry) {

        // it is expected that new PropertyEditor instances are created
        registry.registerCustomEditor(ExoticType.class, new ExoticTypeEditor());

        // you could register as many custom property editors as are required here...
    }
}
```

对于那些使用Spring的MVC Web框架的人来说，使用`PropertyEditorRegistrar`与数据绑定Web控制器结合使用可以非常方便

```java
@Controller
public class RegisterUserController {

    private final PropertyEditorRegistrar customPropertyEditorRegistrar;

    RegisterUserController(PropertyEditorRegistrar propertyEditorRegistrar) {
        this.customPropertyEditorRegistrar = propertyEditorRegistrar;
    }

    @InitBinder
    void initBinder(WebDataBinder binder) {
        this.customPropertyEditorRegistrar.registerCustomEditors(binder);
    }

    // other methods related to registering a User
}
```

## 3.4. Spring类型转换 

`core.convert`包提供了一种通用的类型转换系统。该系统定义了一个SPI来实现类型转换逻辑和一个API来在运行时执行类型转换。在Spring容器中，您可以使用此系统作为`PropertyEditor`实现的替代方案，将外部化的bean属性值字符串转换为所需的属性类型。您还可以在应用程序中任何需要类型转换的地方使用公共API。

### 3.4.1 转换器SPI

实现类型转换逻辑的SPI是简单且强类型的，以下是接口定义：

```java
package org.springframework.core.convert.converter;

public interface Converter<S, T> {

    T convert(S source);
}
```

3.4.2 使用`ConverterFactory`

当您需要将整个类层次结构的转换逻辑集中到一起时（例如，从字符串转换为枚举对象时），可以实现`ConverterFactory`

```java
package org.springframework.core.convert.converter;

public interface ConverterFactory<S, R> {

    <T extends R> Converter<S, T> getConverter(Class<T> targetType);
}	
```

示例：`StringToEnumConverterFactory`

```java
package org.springframework.core.convert.support;

final class StringToEnumConverterFactory implements ConverterFactory<String, Enum> {

    public <T extends Enum> Converter<String, T> getConverter(Class<T> targetType) {
        return new StringToEnumConverter(targetType);
    }

    private final class StringToEnumConverter<T extends Enum> implements Converter<String, T> {

        private Class<T> enumType;

        public StringToEnumConverter(Class<T> enumType) {
            this.enumType = enumType;
        }

        public T convert(String source) {
            return (T) Enum.valueOf(this.enumType, source.trim());
        }
    }
}
```

### 3.4.3. 使用 `GenericConverter`

当您需要一个复杂的`Converter`实现时，考虑使用`GenericConverter`接口。与`Converter`相比，`GenericConverter`具有更灵活但弱类型的签名，支持在多个源和目标类型之间进行转换。此外，`GenericConverter`提供了源和目标字段上下文，您可以在实现转换逻辑时使用它们。这样的上下文可以使类型转换受到字段注释或在字段签名上声明的泛型信息的驱动。

```java
package org.springframework.core.convert.converter;

public interface GenericConverter {

    public Set<ConvertiblePair> getConvertibleTypes();

    Object convert(Object source, TypeDescriptor sourceType, TypeDescriptor targetType);
}
```

#### 使用`ConditionalGenericConverter`

有时候，您希望一个转换器只在特定条件成立的情况下运行。例如，您可能只想在目标字段上存在特定注解时才运行转换器，或者您可能只想在目标类定义了特定方法（例如静态的valueOf方法）时才运行转换器。`ConditionalGenericConverter`是`GenericConverter`和`ConditionalConverter`接口的结合体，允许您定义这样的自定义匹配条件：

```java
public interface ConditionalConverter {

    boolean matches(TypeDescriptor sourceType, TypeDescriptor targetType);
}

public interface ConditionalGenericConverter extends GenericConverter, ConditionalConverter {
}
```

### 3.4.4. `ConversionService`接口

大多数`ConversionService`实现也实现了`ConverterRegistry`，该接口提供了一种用于注册转换器的SPI。在内部，`ConversionService`实现将其已注册的转换器委托给它们来执行类型转换逻辑。

在core.convert.support包中提供了一个强大的`ConversionService`实现。`GenericConversionService`是通用实现，适用于大多数环境。`ConversionServiceFactory`提供了一个方便的工厂，用于创建常见的`ConversionService`配置

```java
package org.springframework.core.convert;

public interface ConversionService {

    boolean canConvert(Class<?> sourceType, Class<?> targetType);

    <T> T convert(Object source, Class<T> targetType);

    boolean canConvert(TypeDescriptor sourceType, TypeDescriptor targetType);

    Object convert(Object source, TypeDescriptor sourceType, TypeDescriptor targetType);
}
```

### 3.4.5. 配置`ConversionService`

`ConversionService`是一个无状态对象，旨在在应用程序启动时实例化，然后在多个线程之间共享。在Spring应用程序中，通常为每个Spring容器（或`ApplicationContext`）配置一个`ConversionService`实例。Spring会获取该`ConversionService`，并在框架需要执行类型转换时使用它。您还可以将此`ConversionService`注入到任何一个bean中，并直接调用它。

在Spring MVC中使用： [Conversion and Formatting](https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc-config-conversion)

在转换期间应用格式：[The `FormatterRegistry` SPI](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#format-FormatterRegistry-SPI) 

### 3.4.6 以编程方式使用`ConversionService`

对于大多数用例，可以使用指定`targetType`的`convert`方法，但它无法处理更复杂的类型，例如参数化元素的集合。例如，如果您想在编程方式下将`List<Integer>`转换为`List<String>`，则需要提供源类型和目标类型的正式定义

```java
DefaultConversionService cs = new DefaultConversionService();

List<Integer> input = ...
cs.convert(input,
    TypeDescriptor.forObject(input), // List<Integer> type descriptor
    TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(String.class)));
```

## 3.5. Spring字段格式化

现在考虑典型客户端环境（如Web或桌面应用程序）的类型转换需求。在这些环境中，通常需要将String转换为支持客户端回发过程，以及将其转换回String以支持视图渲染过程。此外，您还经常需要本地化String值。更通用的`core.convert Converter` SPI并没有直接解决这种格式化要求。为了直接解决这些问题，Spring提供了一种方便的`Formatter` SPI，为客户端环境提供了一个简单而强大的`PropertyEditor`实现替代方案。

### 3.5.1. `Formatter`SPI

```java
package org.springframework.format;

public interface Formatter<T> extends Printer<T>, Parser<T> {
}

public interface Printer<T> {

    String print(T fieldValue, Locale locale);
}

public interface Parser<T> {

    T parse(String clientValue, Locale locale) throws ParseException;
}
```

`DateFormatter` 示例：

```java
package org.springframework.format.datetime;

public final class DateFormatter implements Formatter<Date> {

    private String pattern;

    public DateFormatter(String pattern) {
        this.pattern = pattern;
    }

    public String print(Date date, Locale locale) {
        if (date == null) {
            return "";
        }
        return getDateFormat(locale).format(date);
    }

    public Date parse(String formatted, Locale locale) throws ParseException {
        if (formatted.length() == 0) {
            return null;
        }
        return getDateFormat(locale).parse(formatted);
    }

    protected DateFormat getDateFormat(Locale locale) {
        DateFormat dateFormat = new SimpleDateFormat(this.pattern, locale);
        dateFormat.setLenient(false);
        return dateFormat;
    }
}
```

### 3.5.2. 注解驱动格式化

字段格式化可以通过字段类型或注释进行配置。要将注释绑定到格式化程序，需实现`AnnotationFormatterFactory`。

```java
package org.springframework.format;

public interface AnnotationFormatterFactory<A extends Annotation> {

    Set<Class<?>> getFieldTypes();

    Printer<?> getPrinter(A annotation, Class<?> fieldType);

    Parser<?> getParser(A annotation, Class<?> fieldType);
}
```

`@NumberFormat`注解使用及其实现：

```java
public class MyModel {

    @NumberFormat(style=Style.CURRENCY)
    private BigDecimal decimal;
}


public final class NumberFormatAnnotationFormatterFactory
        implements AnnotationFormatterFactory<NumberFormat> {

    private static final Set<Class<?>> FIELD_TYPES = Set.of(Short.class,
            Integer.class, Long.class, Float.class, Double.class,
            BigDecimal.class, BigInteger.class);

    public Set<Class<?>> getFieldTypes() {
        return FIELD_TYPES;
    }

    public Printer<Number> getPrinter(NumberFormat annotation, Class<?> fieldType) {
        return configureFormatterFrom(annotation, fieldType);
    }

    public Parser<Number> getParser(NumberFormat annotation, Class<?> fieldType) {
        return configureFormatterFrom(annotation, fieldType);
    }

    private Formatter<Number> configureFormatterFrom(NumberFormat annotation, Class<?> fieldType) {
        if (!annotation.pattern().isEmpty()) {
            return new NumberStyleFormatter(annotation.pattern());
        }
        // else
        return switch(annotation.style()) {
            case Style.PERCENT -> new PercentStyleFormatter();
            case Style.CURRENCY -> new CurrencyStyleFormatter();
            default -> new NumberStyleFormatter();
        };
    }
}
```

### 3.5.3. `FormatterRegistry`SPI

`FormatterRegistry`是一个SPI，用于注册格式化程序和转换器。`FormattingConversionService`是`FormatterRegistry`的一种实现，适用于大多数环境。您可以编程或声明性地将此变体配置为Spring bean，例如使用`FormattingConversionServiceFactoryBean`。因为此实现还实现了`ConversionService`，所以您可以直接配置它以在Spring的DataBinder和Spring Expression Language（SpEL）中使用。

```java
package org.springframework.format;

public interface FormatterRegistry extends ConverterRegistry {

    void addPrinter(Printer<?> printer);

    void addParser(Parser<?> parser);

    void addFormatter(Formatter<?> formatter);

    void addFormatterForFieldType(Class<?> fieldType, Formatter<?> formatter);

    void addFormatterForFieldType(Class<?> fieldType, Printer<?> printer, Parser<?> parser);

    void addFormatterForFieldAnnotation(AnnotationFormatterFactory<? extends Annotation> annotationFormatterFactory);
}
```

`FormatterRegistry` SPI 允许您在中央位置配置格式化规则，而不是在控制器中重复配置。例如，您可能希望强制所有日期字段按特定方式格式化，或者希望具有特定注解的字段以特定方式格式化。使用共享的 `FormatterRegistry`，您只需要定义这些规则一次，它们将在需要格式化时应用。

### 3.5.4. `FormatterRegistrar`SPI

`FormatterRegistrar` 是一个用于通过 `FormatterRegistry` 注册格式化器和转换器的 SPI

```java
package org.springframework.format;

public interface FormatterRegistrar {

    void registerFormatters(FormatterRegistry registry);
}
```

当需要为一个给定的格式化类别（如日期格式化）注册多个相关的转换器和格式化器时，使用 `FormatterRegistrar `是很有用的。它还可以在声明式注册不足时很有用，例如当需要将格式化器索引到不同于其自己 `<T>` 的特定字段类型时，或者当注册 `Printer/Parser` 对时

### 3.5.5 在 Spring MVC配置格式化

[Conversion and Formatting](https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc-config-conversion)

## 3.6. 配置全局日期和时间格式

默认情况下，没有用 `@DateTimeFormat` 注解的日期和时间字段会使用 `DateFormat.SHORT` 样式将字符串转换为日期时间类型。如果您想要改变这种默认行为，可以定义自己的全局格式。

* org.springframework.format.datetime.standard.DateTimeFormatterRegistrar
* org.springframework.format.datetime.DateFormatterRegistrar

```java
@Configuration
public class AppConfig {

    @Bean
    public FormattingConversionService conversionService() {

        // Use the DefaultFormattingConversionService but do not register defaults
        DefaultFormattingConversionService conversionService =
            new DefaultFormattingConversionService(false);

        // Ensure @NumberFormat is still supported
        conversionService.addFormatterForFieldAnnotation(
            new NumberFormatAnnotationFormatterFactory());

        // Register JSR-310 date conversion with a specific global format
        DateTimeFormatterRegistrar dateTimeRegistrar = new DateTimeFormatterRegistrar();
        dateTimeRegistrar.setDateFormatter(DateTimeFormatter.ofPattern("yyyyMMdd"));
        dateTimeRegistrar.registerFormatters(conversionService);

        // Register date conversion with a specific global format
        DateFormatterRegistrar dateRegistrar = new DateFormatterRegistrar();
        dateRegistrar.setFormatter(new DateFormatter("yyyyMMdd"));
        dateRegistrar.registerFormatters(conversionService);

        return conversionService;
    }
}
```

## 3.7. Java Bean验证

Spring框架提供了对[Java Bean Validation](https://beanvalidation.org/)API的支持。

### 3.7.1. Bean Validation概述

`Bean Validation`提供了一种通过约束声明和元数据来进行验证的通用方式，适用于Java应用程序。要使用它，您需要使用声明性验证约束对领域模型属性进行注释，这些约束随后由运行时强制执行。它提供了内置约束，您还可以定义自己的自定义约束。

```java
public class PersonForm {

    @NotNull
    @Size(max=64)
    private String name;

    @Min(0)
    private int age;
}
```

API的通用信息，参阅：[Bean Validation](https://beanvalidation.org/)

特定约束信息，参阅：[Hibernate Validator](https://hibernate.org/validator/) 

### 3.7.2. 配置Bean验证提供程序

Spring为Bean验证API提供了完全支持，包括将Bean验证提供程序引导为Spring Bean。这允许您在应用程序中任何需要验证的地方注入`jakarta.validation.ValidatorFactory`或`jakarta.validation.Validator`

配置`LocalValidatorFactoryBean`为默认的验证器：

```java
@Configuration
public class AppConfig {

    @Bean
    public LocalValidatorFactoryBean validator() {
        return new LocalValidatorFactoryBean();
    }
}
```

#### 注入验证

`LocalValidatorFactoryBean`实现了`jakarta.validation. validatorfactory`和`jakarta.validation`，以及Spring的`org.springframework.validation.Validator`

可以直接注入`jakarta.validation.Validator`的引用，或者`org.springframework.validation.Validator`

```java
import jakarta.validation.Validator;

@Service
public class MyService {

    @Autowired
    private Validator validator;
}

import org.springframework.validation.Validator;

@Service
public class MyService {

    @Autowired
    private Validator validator;
}
```

