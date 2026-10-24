import { writeFileSync, existsSync, readFileSync } from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const robotsPath = join(resolve(__dirname, '..', 'docs', '.vuepress', 'dist'), 'robots.txt')
const HOSTNAME = 'https://sleeping-god.example.com'

// 直接重写，避免 sitemap 插件或 public 目录版本叠加造成重复
const content = `User-agent: *
Allow: /

Sitemap: ${HOSTNAME}/sitemap.xml
`

writeFileSync(robotsPath, content, 'utf-8')
console.log('✅ robots.txt rewritten')
