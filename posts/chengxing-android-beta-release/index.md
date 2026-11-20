---
title: "程星博客第三方安卓内测版发布"
date: 2026-05-01T11:21:22Z
createTime: 2026/05/01 19:21:22
tags:
  - 第三方
categories:
  - 程星
  - 开源项目
author: 喊不醒的睡神
permalink: /posts/chengxing-android-beta-release/
---

根据我多年（其实根本没开发过 (´_ ゝ `)）的开发经验，开发一款安卓原生 APP 需要用到很长的时间，如果用网页的话时间只是短一些

是这款软件可以让你网页到软件只需要 10 分钟的时间把网页打包成 APP

这款软件是由 github 大佬 shiahonb777 开发

[https://github.com/shiahonb777/web-to-app/releases](https://github.com/shiahonb777/web-to-app/releases)

只需要选择点 apk 结尾的文件就行。如果下载不了的话，我这里也有一个 2.0.0 的[web-to-app-2.0.0.beta.e.APK](https://gitee.com/hbxdss/temporary-warehouse/releases/download/halo-attachments-v1/web-to-app-2.0.0.beta.e.APK)

接下来的内容文章你就不再赘述了，直接看我 b 站视频就行

视频：主线路（网页到安卓APP，B 站同名视频）

<iframe src="//player.bilibili.com/player.html?isOutside=true&amp;aid=116499025035439&amp;bvid=BV1tbRgB1EVp&amp;cid=38009111276&amp;p=1" width="100%" height="450px" frameborder="0" allowfullscreen="true" framespacing="0" style="display: inline-block"></iframe>

# 最终成品下载地址

下载地址

[程星博客_v0.0.0.APK](https://gitee.com/hbxdss/temporary-warehouse/releases/download/halo-attachments-v1/%E7%A8%8B%E6%98%9F%E5%8D%9A%E5%AE%A2_v0.0.0.APK)

程星资源

软件需要激活后使用，bug 非常多。建议等后续更新

程星博客注册邀请码：hbxdss

激活码：hbxdss

# 豆包生成的2048 65536

```

2048 终极版（65536）

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }
  body {
    background: #faf8ef;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    color: #776e65;
  }
  .title {
    font-size: 32px;
    margin: 10px 0;
  }
  .score {
    font-size: 24px;
    margin-bottom: 10px;
  }
  .info {
    font-size: 15px;
    text-align: center;
    margin-bottom: 12px;
    line-height: 1.4;
  }
  #grid {
    display: grid;
    grid-template-columns: repeat(4, 90px);
    grid-template-rows: repeat(4, 90px);
    gap: 8px;
    background: #bbada0;
    padding: 8px;
    border-radius: 8px;
  }
  .cell {
    background: #cdc1b4;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: bold;
    border-radius: 6px;
  }
  .c-2      { background: #eee4da; }
  .c-4      { background: #ede0c8; }
  .c-8      { background: #f2b179; color: #fff; }
  .c-16     { background: #f59563; color: #fff; }
  .c-32     { background: #f67c5f; color: #fff; }
  .c-64     { background: #f65e3b; color: #fff; }
  .c-128    { background: #edcf72; color: #fff; }
  .c-256    { background: #edcc61; color: #fff; }
  .c-512    { background: #edc850; color: #fff; }
  .c-1024   { background: #edc53f; font-size: 22px; color: #fff; }
  .c-2048   { background: #edc22e; font-size: 22px; color: #fff; }
  .c-4096   { background: #edb92e; font-size: 20px; color: #fff; }
  .c-8192   { background: #edb02e; font-size: 20px; color: #fff; }
  .c-16384  { background: #eda72e; font-size: 18px; color: #fff; }
  .c-32768  { background: #ed9e2e; font-size: 18px; color: #fff; }
  .c-65536  { background: #ed952e; font-size: 18px; color: #fff; }
  #msg {
    margin-top: 12px;
    font-size: 22px;
    font-weight: bold;
    height: 26px;
    text-align: center;
  }
  #restart {
    margin-top: 12px;
    padding: 10px 20px;
    background: #8f7a66;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;
  }

2048 终极版
得分：0

  电脑：↑↓←→ 方向键
  手机：上下左右滑动
  目标：合成 65536！

重新开始

  const size = 4;
  let grid = [];
  let score = 0;
  let changed = false;

  function init() {
    grid = Array(size).fill().map(() => Array(size).fill(0));
    score = 0;
    document.getElementById('msg').textContent = '';
    addRand();
    addRand();
    update();
  }

  function addRand() {
    let empty = [];
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (grid[i][j] === 0) empty.push([i, j]);
      }
    }
    if (empty.length === 0) return;
    let [r, c] = empty[Math.floor(Math.random() * empty.length)];
    grid[r][c] = Math.random() < 0.9 ? 2 : 4;
  }

  function update() {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const cell = document.getElementById(`c${i}-${j}`);
        const val = grid[i][j];
        cell.textContent = val || '';
        cell.className = 'cell' + (val ? ' c-' + val : '');
      }
    }
    document.getElementById('score').textContent = score;
  }

  function slide(row) {
    let arr = row.filter(v => v);
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        arr[i] *= 2;
        score += arr[i];
        arr.splice(i + 1, 1);
      }
    }
    while (arr.length < size) arr.push(0);
    return arr;
  }

  function left() {
    let changed = false;
    for (let i = 0; i < size; i++) {
      const row = grid[i];
      const newRow = slide(row);
      for (let j = 0; j < size; j++) if (row[j] !== newRow[j]) changed = true;
      grid[i] = newRow;
    }
    return changed;
  }

  function right() {
    for (let i = 0; i < size; i++) grid[i].reverse();
    const c = left();
    for (let i = 0; i < size; i++) grid[i].reverse();
    return c;
  }

  function up() {
    let c = false;
    for (let j = 0; j < size; j++) {
      const col = [grid[0][j], grid[1][j], grid[2][j], grid[3][j]];
      const n = slide(col);
      for (let i = 0; i < size; i++) if (grid[i][j] !== n[i]) c = true, grid[i][j] = n[i];
    }
    return c;
  }

  function down() {
    for (let i = 0; i < size; i++) grid[i] = grid[i].reverse();
    const c = up();
    for (let i = 0; i < size; i++) grid[i] = grid[i].reverse();
    return c;
  }

  init();

  // 键盘
  document.addEventListener('keydown', e => {
    const msg = document.getElementById('msg').textContent;
    if (msg.includes('无敌') || msg.includes('结束')) return;
    switch (e.key) {
      case 'ArrowLeft': left(); break;
      case 'ArrowRight': right(); break;
      case 'ArrowUp': up(); break;
      case 'ArrowDown': down(); break;
      default: return;
    }
    if (changed) { addRand(); update(); }
  });

  // 触屏
  let touchStartX, touchStartY;
  document.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, false);
  document.addEventListener('touchend', e => {
    const msg = document.getElementById('msg').textContent;
    if (msg.includes('无敌') || msg.includes('结束')) return;

    let dx = e.changedTouches[0].clientX - touchStartX;
    let dy = e.changedTouches[0].clientY - touchStartY;

    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > 20) right();
      else if (dx < -20) left();
    } else {
      if (dy > 20) down();
      else if (dy < -20) up();
    }
    addRand();
    update();
  });

```
