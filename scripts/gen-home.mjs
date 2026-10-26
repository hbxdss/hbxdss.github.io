// 扫描 posts/ 目录，把 README.md 里的 <RecentPosts /> 替换成真 HTML 列表
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import matter from 'gray-matter'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const POSTS_DIR = resolve(__dirname, '..', 'docs', 'posts')
const README = resolve(__dirname, '..', 'docs', 'README.md')

const EMOJI_MAP = {
  vuepress: '🌊', vue: '💚', vite: '⚡', typescript: '🎯', react: '⚛️',
  node: '🟢', 前端: '🖥️', 后端: '🔧', 随笔: '📝', 生活: '☕',
}
function pickEmoji(title, tags = []) {
  const hay = (title + ' ' + tags.join(' ')).toLowerCase()
  for (const [kw, emoji] of Object.entries(EMOJI_MAP)) {
    if (hay.includes(kw.toLowerCase())) return emoji
  }
  return '📄'
}

function loadPosts(n = 5) {
  if (!existsSync(POSTS_DIR)) return []
  const files = []
  for (const entry of readdirSync(POSTS_DIR, { withFileTypes: true })) {
    if (entry.name.startsWith('_')) continue
    if (entry.isFile() && entry.name.endsWith('.md')) files.push(entry.name)
    else if (entry.isDirectory() && existsSync(resolve(POSTS_DIR, entry.name, 'index.md'))) files.push(`${entry.name}/index.md`)
  }
  return files.map(file => {
    const raw = readFileSync(resolve(POSTS_DIR, file), 'utf-8')
    const { data } = matter(raw)
    const slug = file.endsWith('index.md') ? file.replace(/\/index\.md$/, '') : file.replace(/\.md$/, '')
      const date = data.date ? new Date(data.date).toISOString().slice(0, 10) : ''
      return {
        title: String(data.title ?? slug),
        date,
        path: String(data.permalink ?? `/posts/${slug}/`),
        emoji: pickEmoji(String(data.title ?? ''), Array.isArray(data.tags) ? data.tags : []),
      }
    })
    .filter(p => p.date)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, n)
}

const posts = loadPosts(5)

const listHtml = posts.length
  ? `<ul class="vp-recent-posts">
${posts.map(p => `  <li><a href="${p.path}">${p.emoji} ${p.title}</a><span class="date">${p.date}</span></li>`).join('\n')}
</ul>`
  : `<p class="empty">暂无文章，敬请期待 ✨</p>`

let readme = readFileSync(README, 'utf-8')
const before = readme.length
readme = readme.replace(
  /<RecentPosts\b[^>]*>[\s\S]*?<\/RecentPosts>|<RecentPosts\b[^>]*\/?>|<ul class="vp-recent-posts">[\s\S]*?<\/ul>/g,
  listHtml
)
const after = readme.length

if (before !== after) {
  writeFileSync(README, readme, 'utf-8')
  console.log(`\n✅ gen-home: 注入 ${posts.length} 篇最近文章 → README.md (${before} → ${after} bytes)`)
  posts.forEach(p => console.log(`   ${p.date}  ${p.emoji} ${p.title}`))
} else {
  console.log(`ℹ️  README.md 已是最新 (${posts.length} 篇文章，无需更新)`)
}
