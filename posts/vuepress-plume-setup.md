---
title: VuePress + Plume 主题搭建全流程指南
date: 2026-10-23T00:00:00.000Z
tags:
  - VuePress
  - Plume
  - 博客
  - 教程
categories:
  - 博客搭建
description: >-
  从零到一，手把手带你用 VuePress 2 + Plume 主题搭建一个现代化的个人博客，包含
  SEO、Sitemap、RSS、友情链接、关于页面等全要素。
cover: https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200
author: 睡神
createTime: 2026/10/23 20:32:47
permalink: /posts/8pksazqm/
---

## 前言

最近想搭一个新的博客，对比了 Hexo、VitePress、Astro 之后，最终选择了 **VuePress 2 + Plume 主题**。理由很简单：

- VuePress 2 基于 Vue 3 + Vite，开发体验一流
- Plume 主题开箱即用，内置 SEO、Sitemap、评论、搜索
- 集合（Collections）概念让博客和文档可以无缝共存

这篇文章记录了完整的搭建过程，希望对你有帮助。

## 环境准备

### Node.js 版本

Plume 主题要求 Node.js `^20.19.0` 或 `>= 22.0.0`：

```bash
node -v  # 我用的是 v24.22.1
```

### 包管理器

推荐 pnpm，我用的是 `pnpm 12.15.0`：

```bash
corepack enable
pnpm -v
```

## 快速初始化

使用官方脚手架（交互式）：

```bash
pnpm create vuepress-theme-plume@latest
```

或者手动搭建，直接写 `package.json`：

```json
{
  "type": "module",
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
  "dependencies": {
    "vue": "^3.5.13",
    "vuepress": "2.0.0-rc.31",
    "vuepress-theme-plume": "1.0.0-rc.214",
    "@vuepress/bundler-vite": "2.0.0-rc.31"
  }
}
```

然后：

```bash
pnpm install
```

## 目录结构

推荐的目录布局：

```
blog/
├── docs/
│   ├── .vuepress/
│   │   ├── config.ts        # 主配置（需重启）
│   │   └── plume.config.ts  # 主题热更新配置
│   ├── posts/               # 博客文章（post 集合）
│   │   ├── vuepress-plume-setup.md
│   │   └── ...
│   ├── friend-links/        # 友情链接页
│   ├── about/               # 关于页
│   ├── public/              # 静态资源（robots.txt, favicon.svg）
│   └── README.md            # 首页
└── package.json
```

## 配置主文件

`docs/.vuepress/config.ts`：

```ts
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '睡神',
  description: '爱睡觉的神，爱写文章的神',
  base: '/',
  bundler: viteBundler(),
  theme: plumeTheme({
    configFile: 'plume.config.ts',
    plugins: {
      seo: { hostname: 'https://yourdomain.com' },
      sitemap: { hostname: 'https://yourdomain.com' },
    },
  }),
})
```

## 主题热更新配置

`docs/.vuepress/plume.config.ts`：

```ts
import { defineThemeConfig } from 'vuepress-theme-plume'

export default defineThemeConfig({
  profile: {
    name: '睡神',
    avatar: '/avatar.svg',
    description: '爱睡觉的神，爱写文章的神 💤',
  },
  navbar: [
    { text: '首页', link: '/' },
    { text: '博客', link: '/posts/' },
    { text: '友情链接', link: '/friend-links/' },
    { text: '关于我', link: '/about/' },
  ],
  collections: [
    { type: 'post', dir: 'posts', title: '博客' },
  ],
})
```

## 友情链接页

只需一个 Markdown 文件：

```markdown
---
pageLayout: friends
title: 友情链接
list:
  - name: Vue.js
    link: https://vuejs.org
    avatar: https://vuejs.org/images/logo.png
    desc: 渐进式 JavaScript 框架
---
欢迎来到友情链接页！
```

## SEO / Sitemap / RSS

### SEO & Sitemap

Plume 主题已内置 `@vuepress/plugin-seo` 和 `@vuepress/plugin-sitemap`，只要在 `plugins` 配置里加上 `hostname` 即可：

```ts
plugins: {
  seo: { hostname: 'https://yourdomain.com' },
  sitemap: { hostname: 'https://yourdomain.com', changefreq: 'weekly' },
},
```

### RSS

额外安装 `vuepress-plugin-rss`：

```ts
import { rssPlugin } from 'vuepress-plugin-rss'

export default defineUserConfig({
  plugins: [
    rssPlugin({
      baseUrl: 'https://yourdomain.com',
      siteTitle: '睡神',
      siteDescription: '爱睡觉的神，爱写文章的神',
      copyright: '睡神',
      language: 'zh-CN',
    }),
  ],
})
```

再在 `head` 里加一行：

```ts
['link', { rel: 'alternate', type: 'application/rss+xml', title: 'RSS', href: '/rss.xml' }],
```

## 站外链接新标签页

VuePress 的 Markdown 渲染器（基于 markdown-it）默认就会给外链加 `target="_blank"` 和 `rel="noopener noreferrer"`。

## robots.txt & favicon

在 `docs/public/` 目录下创建 `robots.txt`：

```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

## 开发 & 构建

```bash
pnpm run docs:dev       # 开发，访问 http://localhost:8080
pnpm run docs:build     # 构建静态产物
pnpm run docs:preview   # 预览构建产物
```

## 总结

这就是搭建 Plume 主题博客的完整流程了。如果还有什么疑问，欢迎留言～
