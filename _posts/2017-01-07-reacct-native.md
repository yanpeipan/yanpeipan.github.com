---
layout: post
title: "Reacct Native"
description: ""
category:
tags: [Reacct Native, App]
---
{% include JB/setup %}
---

<nav>
  * 目录
  {:toc}
</nav>

  总结近段时间以来的经验（深坑）。

# 搭建开发环境
  文档已经非常详尽， 暂不赘述。

---

# 知识点

## JavaScript
>
1. [`React`](https://facebook.github.io/react/): React是由Facebook和Instagram开发的用于构建用户界面的JS库，在MVC架构中属于V. A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES
2. [`JSX`](https://jsx.github.io/) is a statically-typed, object-oriented programming language designed to run on modern web browsers
3. [`Redux`](http://redux.js.org/) 状态容器，提供可预测的状态管理。Predictable state container for JavaScript apps
4. [`Fetch`](https://github.github.io/fetch/) is a Promise-based mechanism for programatically making web requests in the browser
5. [`Flux`](http://facebook.github.io/flux/) APPLICATION ARCHITECTURE FOR BUILDING USER INTERFACES
6. [ES6](http://www.ecma-international.org/ecma-262/6.0/index.html) ECMAScript® 2015 Language Specification

## Testing
>
1. [`Jest`](http://facebook.github.io/jest/) Jest is a JavaScript testing framework, used by Facebook to test all JavaScript code including React applications.

## Development
>
1. [`Nuclide`](https://nuclide.io/) A unified developer experience for web and mobile development
2. [`Flow`](https://flowtype.org/) A STATIC TYPE CHECKER FOR JAVASCRIPT

---

# Redux异步

>
Javascript语言的执行环境是”单线程”（single thread）。
>
Thund定义：编译器的"传名调用"实现，往往是将参数放到一个临时函数之中，再将这个临时函数传入函数体。这个临时函数就叫做 Thunk 函数。求值策略（即函数的参数到底应该何时求值）：传值调用（call by value)，传名调用（call by name)。
>
Promise对象是CommonJS工作组提出的一种规范，目的是为异步操作提供统一接口。
>
`Optimistic updates`，是指不等待请求成功，在发送请求的同时立即渲染数据。

## Redux-thunk

> Thunk middleware for Redux

## redux-promise

> FSA-compliant promise middleware for Redux.

## redux-promise-middleware

> Redux middleware for resolving and rejecting promises with conditional `optimistic updates`

## redux-loop

> A library that ports Elm's effect system to Redux

## redux-sage

> An alternative side effect model for Redux apps

---

# Alias in React Native
>
令人厌烦的引入方式：`import themes from '../../config/themes';`

## use @providesModule
>
在文件头部引入注释, 了解更多：[FBJS](https://github.com/facebook/fbjs)
```Javascript
/**
 * @providesModule login
 */
```

## Use Babel Plugins
>
[Babel](http://babeljs.io/) is a JavaScript compiler.
```bash
npm install --g babel-cli
npm install --save babel babel-plugin-module-resolver
```
.babelrc文件
```json
{
  "presets": ["react-native"],
  "plugins": [
    ["module-resolver", {
      "root": ["./js"],
      "alias": {
      }
    }]
  ]
}
```
.flowconfig文件（兼容Flow）
```
module.name_mapper='themes' -> '<PROJECT_ROOT>/js/themes'
module.name_mapper='actions' -> '<PROJECT_ROOT>/js/actions'
module.name_mapper='tabs' -> '<PROJECT_ROOT>/js/tabs'
module.name_mapper='reducers' -> '<PROJECT_ROOT>/js/reducers'
```
Atom安装`autocomplete-modules`插件，并启用`babel-plugin-module-resolver`。启动：`npm start -- --reset-cache`

---

# 参考资料
1. [ECMAScript 6 入门](http://es6.ruanyifeng.com/)
2. [Thunk 函数的含义和用法](http://www.ruanyifeng.com/blog/2015/05/thunk.html)
3. [Redux异步方案选型](https://segmentfault.com/a/1190000007248878)
4. [有Promise了为什么还要用Thunk？](https://github.com/thunks/thunks/issues/1)
5. [awesome-react-native](https://github.com/jondot/awesome-react-native)
