---
title: TypeScript 类型体操入门
date: 2026-10-20T00:00:00.000Z
tags:
  - TypeScript
  - 类型
  - 前端
categories:
  - 前端技术
description: 从基础到高阶，带你一步步掌握 TypeScript 的类型操作技巧，解锁类型体操的奥秘。
author: 睡神
createTime: 2026/10/23 20:32:47
permalink: /posts/7vk3vma6/
---

## 什么是类型体操？

类型体操就是利用 TypeScript 的类型系统进行各种"花式"类型变换。虽然听起来像是炫技，但实际工作中合理运用类型体操可以大幅提升代码的类型安全性。

## 基础操作

### Conditional Types（条件类型）

```ts
type IsString<T> = T extends string ? true : false

type A = IsString<'hello'>  // true
type B = IsString<123>      // false
```

### Infer（推断）

```ts
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never

type R = ReturnType<() => string>  // string
```

## 实战：手写 DeepReadonly

```ts
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object
    ? DeepReadonly<T[P]>
    : T[P]
}
```

## 小结

类型体操并不难，关键是多练多积累。推荐去 [type-challenges](https://github.com/type-challenges/type-challenges) 刷题。
