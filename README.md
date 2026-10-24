---
pageLayout: home
title: 首页
config:
  - type: hero
    full: true
    backgroundImage: https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=80
    hero:
      name: 喊不醒的睡神
      tagline: 苟日睡，日日睡，又日睡
      text: 爱睡觉的神，爱写代码的神
      actions:
        - text: 开始
          link: /posts/
          theme: brand
        - text: 关于
          link: /about/
          theme: alt
  - type: features
    features:
      - icon: mdi:code-tags
        title: 💻 技术分享
        details: 前端 · 后端 · 工程化，记录每一次学习与实践
      - icon: mdi:pencil-outline
        title: ✍️ 生活随笔
        details: 偶尔吐槽，偶尔感悟，认真地活着
      - icon: mdi:link-variant
        title: 🔗 开源友好
        details: 分享工具、库、教程，欢迎交流与 Star
  - type: custom
---

## 🆕 最近更新

<ul class="vp-recent-posts">
  <li><a href="/posts/8pksazqm/">🌊 VuePress + Plume 主题搭建全流程指南</a><span class="date">2026-10-23</span></li>
  <li><a href="/posts/7vk3vma6/">🎯 TypeScript 类型体操入门</a><span class="date">2026-10-20</span></li>
  <li><a href="/posts/6i4161t1/">⚡ 写给初学者的 Vite 原理</a><span class="date">2026-10-15</span></li>
</ul>

## 🧭 快速导航

<div class="vp-home-grid">
  <a class="vp-home-card" href="/posts/">
    <span class="icon">📚</span>
    <strong>全部文章</strong>
    <span>按时间倒序浏览所有博客</span>
  </a>
  <a class="vp-home-card" href="/posts/tags/">
    <span class="icon">🏷️</span>
    <strong>标签分类</strong>
    <span>按标签快速定位感兴趣的主题</span>
  </a>
  <a class="vp-home-card" href="/posts/archives/">
    <span class="icon">📅</span>
    <strong>时间归档</strong>
    <span>按年月回顾我的写作历程</span>
  </a>
  <a class="vp-home-card" href="/friend-links/">
    <span class="icon">🤝</span>
    <strong>友情链接</strong>
    <span>一群有趣的灵魂互相照亮</span>
  </a>
  <a class="vp-home-card" href="/about/">
    <span class="icon">🙋</span>
    <strong>关于我</strong>
    <span>这里有一点关于我的碎碎念</span>
  </a>
</div>

<style scoped>
.vp-recent-posts {
  list-style: none;
  padding: 0;
  margin: 0;
}
.vp-recent-posts li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px dashed var(--vp-c-divider);
}
.vp-recent-posts li:last-child { border-bottom: none; }
.vp-recent-posts a { font-weight: 500; }
.vp-recent-posts .date {
  font-size: 12px;
  color: var(--vp-c-text-2);
  font-variant-numeric: tabular-nums;
}
.vp-home-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 14px;
  margin-top: 8px;
}
.vp-home-card {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 18px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  text-decoration: none;
  transition: transform .15s ease, box-shadow .2s ease, border-color .2s ease;
}
.vp-home-card:hover {
  transform: translateY(-2px);
  border-color: var(--vp-brand);
  box-shadow: 0 6px 20px -8px rgb(0 0 0 / 20%);
}
.vp-home-card .icon {
  font-size: 22px;
  line-height: 1;
}
.vp-home-card strong {
  font-size: 15px;
  color: var(--vp-c-text-1);
}
.vp-home-card span:last-child {
  font-size: 12px;
  color: var(--vp-c-text-2);
}
</style>
