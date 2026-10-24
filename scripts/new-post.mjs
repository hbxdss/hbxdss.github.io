/**
 * 快速新建博文脚本
 * 用法：
 *   node scripts/new-post.mjs "文章标题"
 *   node scripts/new-post.mjs "博客搭建全流程" --tags VuePress --tags 博客 --category 前端
 *
 * 特点：
 *   - 自动生成 slug（英文转拼音/ASCII fallback）
 *   - 自动填今天日期
 *   - 自动生成 permalink
 *   - 如果同名文件已存在，自动在末尾加 -2, -3 ...
 */
import { writeFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs'
import { join, resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const POSTS_DIR = resolve(__dirname, '..', 'docs', 'posts')

// ======= 解析命令行参数 =======
const args = process.argv.slice(2)
if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
  console.log(`
📝 快速新建博文

用法：
  node scripts/new-post.mjs "文章标题" [选项]

选项：
  --tags <tag>         标签，可重复使用
  --category <cat>     分类，默认：未分类
  --slug <slug>        自定义 URL slug，默认自动从标题生成
  --permalink <path>   自定义 permalink（覆盖 --slug）

示例：
  node scripts/new-post.mjs "Vite 入门指南" --tags Vite --tags 前端
  node scripts/new-post.mjs "博客搭建" --category 技术
`)
  process.exit(0)
}

const title = args[0]
const opts = { tags: [], category: '未分类', slug: null, permalink: null }
for (let i = 1; i < args.length; i++) {
  const a = args[i]
  if (a === '--tags') opts.tags.push(args[++i])
  else if (a === '--category') opts.category = args[++i]
  else if (a === '--slug') opts.slug = args[++i]
  else if (a === '--permalink') opts.permalink = args[++i]
}

// ======= 生成 slug =======
// 尝试 slugify：中文保留拼音首字+随机后缀，英文直接 slugify
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w\u4e00-\u9fa5-]/g, '') // 保留中文和字母数字
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

let slug = opts.slug || slugify(title)
// 如果全是中文，加个短 hash 避免 URL 太丑
const hasNonAscii = /[^\x00-\x7F]/.test(slug)
if (hasNonAscii || slug.length > 40) {
  const hash = Math.random().toString(36).slice(2, 10)
  slug = `post-${hash}`
}

// ======= 处理文件冲突 =======
let fileName = `${slug}.md`
let filePath = join(POSTS_DIR, fileName)
let counter = 2
while (existsSync(filePath)) {
  fileName = `${slug}-${counter}.md`
  filePath = join(POSTS_DIR, fileName)
  counter++
}

// ======= 日期 =======
const today = new Date()
const dateStr = today.toISOString().slice(0, 10)

// ======= permalink =======
const permalink = opts.permalink || `/posts/${slug}/`

// ======= 生成 frontmatter =======
const tagsYaml = opts.tags.length > 0
  ? `tags:\n${opts.tags.map(t => `  - ${t}`).join('\n')}\n`
  : ''

const content = `---
title: ${title}
date: ${dateStr}
permalink: ${permalink}
category: ${opts.category}
${tagsYaml}---

<!-- 摘要 -->

<!-- 正文 -->

## 前言



## 正文



## 总结



---
> 作者：喊不醒的睡神 · 发布于 ${dateStr}
`

if (!existsSync(POSTS_DIR)) mkdirSync(POSTS_DIR, { recursive: true })
writeFileSync(filePath, content, 'utf-8')

console.log(`✅ 博文已创建：`)
console.log(`   📄 文件：docs/posts/${fileName}`)
console.log(`   🔗 URL： ${permalink}`)
console.log(`   📅 日期：${dateStr}`)
console.log(`\n现在打开文件开始写吧！然后运行：`)
console.log(`   pnpm.cmd run docs:dev    # 本地预览`)
console.log(`   pnpm.cmd run docs:build  # 构建上线`)
