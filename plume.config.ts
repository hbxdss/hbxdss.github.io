import { defineThemeConfig } from 'vuepress-theme-plume'

/**
 * Plume 主题热更新配置文件
 * 修改此文件无需重启开发服务器即可生效
 */
export default defineThemeConfig({
  // ====== 个人资料（侧边栏顶部卡片） ======
  profile: {
    name: '喊不醒的睡神',
    avatar: '/avatar.jpg',
    description: '苟日睡，日日睡，又日睡 💤',
    circle: true,
    location: '云端',
    organization: '梦境研究所',
  },

  // ====== 社交链接（用 Simple Icons 完整名称避免 plume 中断渲染） ======
  // plume 默认 navbarSocialInclude = ['github','twitter','discord','facebook']
  // 会过滤掉不在列表里的 icon，必须显式设为空数组禁用过滤！
  navbarSocialInclude: [],
  social: [
    { icon: 'simple-icons:tencentqq', link: 'https://qm.qq.com/q/c5m5DdX01a', ariaLabel: 'QQ 群聊' },
    { icon: 'simple-icons:bilibili',  link: 'https://space.bilibili.com/1463163420', ariaLabel: '哔哩哔哩' },
    { icon: 'simple-icons:tiktok',    link: 'https://www.douyin.com/user/MS4wLjABAAAAwUtPJyQ7sVlPUByxlg-UYDiJzT5j827mRyRmJwRcdkA', ariaLabel: '抖音' },
    { icon: 'simple-icons:gmail',     link: 'mailto:hbxdss@qq.com', ariaLabel: '邮箱' },
    { icon: 'simple-icons:github',    link: 'https://github.com/hbxdss', ariaLabel: 'GitHub' },
    { icon: 'simple-icons:gitee',     link: 'https://gitee.com/hbxdss', ariaLabel: 'Gitee' },
    { icon: 'simple-icons:rss',       link: '/rss.xml', ariaLabel: 'RSS 订阅' },
  ],

  // ====== 导航栏 ======
  navbar: [
    { text: '首页', link: '/', icon: 'mdi:home' },
    { text: '博客', link: '/posts/', icon: 'mdi:file-document-outline' },
    { text: '标签', link: '/posts/tags/', icon: 'mdi:tag-multiple' },
    { text: '归档', link: '/posts/archives/', icon: 'mdi:archive-outline' },
    { text: '友链', link: '/friend-links/', icon: 'mdi:link-variant' },
    { text: '关于', link: '/about/', icon: 'mdi:account-circle-outline' },
  ],

  // ====== 侧边栏（移除博客左侧"分类"） ======
  sidebar: {},

  // ====== 集合：博客 ======
  collections: [
    {
      type: 'post',
      dir: 'posts',
      title: '博客',
      link: '/posts/',
      linkPrefix: '/posts/',
      postCover: 'right',
      autoFrontmatter: {
        permalink: true,
      },
      profile: {
        avatar: '/avatar.jpg',
        name: '喊不醒的睡神',
        description: '苟日睡，日日睡，又日睡 💤',
        circle: true,
        layout: 'right',
      },
    },
  ],

  // ====== 主题：夜间模式 ======
  darkMode: true,

  // ====== 全站公告 ======
  bulletin: {
    id: 'sleepgod-welcome',
    layout: 'top-right',
    border: true,
    lifetime: 'session',
    title: '📢 网站公告',
    contentType: 'markdown',
    content: '欢迎来到**喊不醒的睡神**的博客 💤 本站持续更新中，敬请期待更多精彩内容！\n\n欢迎加入 [QQ 群](https://qm.qq.com/q/c5m5DdX01a) 交流，订阅 [RSS](/rss.xml) 获取最新动态。',
  },

  // ====== 文章页配置 ======
  pageMeta: {
    author: true,
    date: true,
    updated: true,
    category: true,
    tag: true,
    readingTime: true,
  },

  // ====== 页脚（保留科技酱署名） ======
  footer: {
    message: '苟日睡，日日睡，又日睡',
    copyright: '© 喊不醒的睡神 · 此博客由 <a href="https://docs.asoe.cn" target="_blank" rel="noopener" style="color: var(--vp-c-brand-1);">科技酱</a> 帮助开发',
  },

  // ====== 滚动行为 ======
  scrollbar: 'smooth',

  // ====== 全站 ======
  lastUpdated: true,
})
