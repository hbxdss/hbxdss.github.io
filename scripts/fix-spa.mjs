// GitHub Pages SPA 路由修复
// VuePress 用 history 模式，但 GitHub Pages 找不到路由时会返回自己的 404
// 解决方案：把 index.html 复制为 404.html，让客户端路由接管
//
// 这是 GitHub Pages 官方推荐的 SPA 方案：
// https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site

import { copyFileSync, existsSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST_DIR = resolve(__dirname, '..', 'docs', '.vuepress', 'dist')
const indexHtml = join(DIST_DIR, 'index.html')
const notFound404 = join(DIST_DIR, '404.html')

if (!existsSync(indexHtml)) {
  console.log('⚠️  index.html 不存在，跳过 SPA fallback')
  process.exit(0)
}

copyFileSync(indexHtml, notFound404)
console.log('✅ fix-spa: 已将 index.html 复制为 404.html（GitHub Pages SPA 路由）')
