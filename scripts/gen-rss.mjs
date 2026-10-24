/**
 * 基于 posts 源文件，自动生成 rss.xml 到 dist 目录
 *
 * 环境变量（GitHub Actions 会注入，本地开发用默认值）：
 *   SITE_HOSTNAME - 站点域名（如 https://username.github.io/blog）
 *   BASE          - 子路径（如 /blog/），默认 /
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resolve = path.resolve
const dirname = path.dirname

const SITE_HOSTNAME = process.env.SITE_HOSTNAME || 'https://sleeping-god.example.com'
const BASE = process.env.BASE || '/'

const SITE = {
  title: '喊不醒的睡神',
  description: '苟日睡，日日睡，又日睡',
  url: SITE_HOSTNAME,
  language: 'zh-CN',
  copyright: '© 喊不醒的睡神',
  ttl: 60,
}

const distDir = path.resolve('docs/.vuepress/dist')
const postsDir = path.resolve('docs/posts')
const outputPath = path.join(distDir, 'rss.xml')

// 确保 dist 目录存在
if (!fs.existsSync(distDir)) {
  console.error('❌ dist 目录不存在，请先运行 vuepress build')
  process.exit(1)
}

// 读取所有文章
const postFiles = fs.existsSync(postsDir)
  ? fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
  : []

const posts = postFiles
  .map(file => {
    const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8')
    const { data, content } = matter(raw)
    const date = data.date ? new Date(data.date) : new Date()
    // 用 permalink 构建绝对 URL
    const permalink = data.permalink || `/posts/${path.basename(file, '.md')}/`
    // permalink 可能是 /posts/xxx/，如果 BASE 不是 / 且不是以 BASE 开头，需要补
    let absPath = permalink
    if (BASE !== '/' && !absPath.startsWith(BASE)) {
      absPath = BASE.replace(/\/$/, '') + permalink
    }
    const link = `${SITE_HOSTNAME}${absPath}`
    const pubDate = date.toUTCString()

    // 取正文前 200 字作为摘要（去掉 markdown 语法）
    const rawDesc = (data.description || content || '')
      .replace(/```[\s\S]*?```/g, '')
      .replace(/!\[.*?\]\(.*?\)/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[#>*_`~-]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
    const description = rawDesc.length > 200 ? rawDesc.slice(0, 200) + '...' : rawDesc

    return {
      title: data.title || path.basename(file, '.md'),
      link,
      pubDate,
      isoDate: date.toISOString(),
      description,
      categories: data.tags || data.category ? [...(data.category ? [data.category] : []), ...(data.tags || [])] : [],
    }
  })
  .sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate))

// 生成 XML
function escapeXml(str) {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

const now = new Date().toUTCString()
const lastBuildDate = now

const items = posts.map(p => `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${escapeXml(p.link)}</link>
      <guid isPermaLink="true">${escapeXml(p.link)}</guid>
      <pubDate>${p.pubDate}</pubDate>
      <description>${escapeXml(p.description)}</description>${p.categories.map(c => `
      <category>${escapeXml(c)}</category>`).join('')}
    </item>`).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE.title)}</title>
    <link>${escapeXml(SITE.url)}</link>
    <description>${escapeXml(SITE.description)}</description>
    <language>${SITE.language}</language>
    <copyright>${escapeXml(SITE.copyright)}</copyright>
    <ttl>${SITE.ttl}</ttl>
    <atom:link href="${escapeXml(SITE.url)}/rss.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${items}
  </channel>
</rss>`

fs.writeFileSync(outputPath, xml, 'utf-8')
// 同时输出到 public 目录，dev 模式下也能通过 /rss.xml 访问
const publicRss = resolve(__dirname, '..', 'docs', '.vuepress', 'public', 'rss.xml')
fs.mkdirSync(dirname(publicRss), { recursive: true })
fs.writeFileSync(publicRss, xml, 'utf-8')
console.log(`✅ RSS 生成成功：${posts.length} 篇文章`)
console.log(`   dist: ${outputPath}`)
console.log(`   public: ${publicRss}`)
console.log(`   SITE_HOSTNAME=${SITE_HOSTNAME} BASE=${BASE}`)
