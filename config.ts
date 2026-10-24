import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

// ======= GitHub Pages 部署适配 =======
// 如果用 username.github.io 仓库，base 保持 '/'
// 如果用其他仓库名，base 设为 '/仓库名/'（例如 '/my-blog/'）
// 本地开发时设 BASE=/ pnpm run docs:dev 即可，不设也能用 '/'
// 这里用环境变量 BASE 自动适配，GitHub Actions 里会注入
const BASE = process.env.BASE || '/'

const SITE_HOSTNAME = process.env.SITE_HOSTNAME || 'https://sleeping-god.example.com'

// 默认社交分享图（opengraph / twitter card 用）
const OG_IMAGE = `${SITE_HOSTNAME}/og-image.png`

const SITE_NAME = '喊不醒的睡神'
const SITE_DESC = '苟日睡，日日睡，又日睡'

const JSON_LD_WEBSITE = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Website',
  name: SITE_NAME,
  alternateName: 'Sleep God Blog',
  url: SITE_HOSTNAME,
  description: SITE_DESC + ' — 一个分享前端、TypeScript、Vite、VuePress 等技术的中文博客。',
  inLanguage: 'zh-CN',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_HOSTNAME}/posts/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
})

const JSON_LD_ORG = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_HOSTNAME,
  logo: `${SITE_HOSTNAME}/favicon.svg`,
  sameAs: [
    // 这里填你的社交账号链接
    // 'https://github.com/yourname',
    // 'https://twitter.com/yourname',
  ],
})

export default defineUserConfig({
  // ====== 基础配置 ======
  lang: 'zh-CN',
  title: SITE_NAME,
  titleTemplate: `:title · ${SITE_NAME}`,
  description: SITE_DESC,
  base: BASE,
  shouldPrefetch: true,
  shouldPreload: (file, type) => {
    return type === 'font'
  },

  // ====== 站点元信息（全站 head） ======
  head: [
    // —— 基础 meta ——
    ['meta', { name: 'keywords', content: '喊不醒的睡神,博客,技术分享,前端,Vue,TypeScript,Vite,VuePress' }],
    ['meta', { name: 'author', content: '睡神' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'theme-color', content: '#7c5cff' }],
    // —— Open Graph（社交分享）——
    ['meta', { property: 'og:site_name', content: SITE_NAME }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:description', content: SITE_DESC }],
    ['meta', { property: 'og:image', content: OG_IMAGE }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    // —— Twitter Card ——
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: SITE_NAME }],
    ['meta', { name: 'twitter:description', content: SITE_DESC }],
    ['meta', { name: 'twitter:image', content: OG_IMAGE }],
    // —— 链接关系 ——
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: `${SITE_NAME} RSS`, href: '/rss.xml' }],
    ['link', { rel: 'canonical', href: SITE_HOSTNAME }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    // —— JSON-LD 结构化数据 ——
    ['script', { type: 'application/ld+json' }, JSON_LD_WEBSITE],
    ['script', { type: 'application/ld+json' }, JSON_LD_ORG],
  ],

  // ====== 打包工具 ======
  bundler: viteBundler(),

  // ====== 主题 ======
  theme: plumeTheme({
    configFile: 'plume.config.ts',
    externalLinkIcon: true,
    plugins: {
      seo: {
        hostname: SITE_HOSTNAME,
        author: { name: '睡神' },
        twitterID: '',
        defaultImage: OG_IMAGE,
        autoDescription: true,
      },
      sitemap: {
        hostname: SITE_HOSTNAME,
        changefreq: 'weekly',
        priority: 0.8,
        excludePaths: ['/404.html'],
      },
    },
  }),
})
