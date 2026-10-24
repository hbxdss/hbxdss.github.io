// 给 sitemap.xml 的每个 <url> 补 <lastmod> 字段
// VuePress sitemap 插件默认不生成 lastmod，需要手动补
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import matter from 'gray-matter'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST_DIR = resolve(__dirname, '..', 'docs', '.vuepress', 'dist')
const SITEMAP = join(DIST_DIR, 'sitemap.xml')
const POSTS_DIR = resolve(__dirname, '..', 'docs', 'posts')

// 收集文章 permalink → ISO date 映射
const postDateMap = new Map()
if (existsSync(POSTS_DIR)) {
  for (const f of readdirSync(POSTS_DIR)) {
    if (!f.endsWith('.md')) continue
    const raw = readFileSync(join(POSTS_DIR, f), 'utf-8')
    const { data } = matter(raw)
    if (data.permalink && data.date) {
      const isoDate = new Date(data.date).toISOString().slice(0, 10)
      postDateMap.set(data.permalink, isoDate)
    }
  }
}

if (!existsSync(SITEMAP)) {
  console.log('⚠️  sitemap.xml 不存在，跳过 lastmod 注入')
  process.exit(0)
}

let xml = readFileSync(SITEMAP, 'utf-8')
const HOSTNAME = 'https://sleeping-god.example.com'

xml = xml.replace(/<url>([\s\S]*?)<\/url>/g, (block) => {
  const locMatch = block.match(/<loc>([^<]+)<\/loc>/)
  if (!locMatch) return block
  const url = locMatch[1]

  let lastmod = new Date().toISOString().slice(0, 10)
  for (const [permalink, date] of postDateMap) {
    if (url === `${HOSTNAME}${permalink}` || url.endsWith(permalink)) {
      lastmod = date
      break
    }
  }

  if (block.includes('<lastmod>')) return block
  const changefreqMatch = block.match(/<\/changefreq>/)
  if (changefreqMatch) {
    return block.replace('</changefreq>', `</changefreq><lastmod>${lastmod}</lastmod>`)
  }
  return block.replace('</url>', `<lastmod>${lastmod}</lastmod></url>`)
})

writeFileSync(SITEMAP, xml, 'utf-8')
console.log('✅ fix-sitemap: 已为所有 URL 补充 <lastmod> 字段')
