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

根据我多年（其实根本没开发过 (´\_ ゝ `)）的开发经验，开发一款安卓原生 APP 需要用到很长的时间，如果用网页的话时间只是短一些是这款软件可以让你网页到软件只需要 10 分钟的时间把网页打包成 APP这款软件是由 github 大佬 shiahonb777 开发<https://github.com/shiahonb777/web-to-app/releases>只需要选择点 apk 结尾的文件就行。如果下载不了的话，我这里也有一个 2.0.0 的[web-to-app-2.0.0.beta.e.APKweb-to-app-2.0.0.beta.e.APK](https://gitee.com/hbxdss/temporary-warehouse/releases/download/halo-attachments-v1/web-to-app-2.0.0.beta.e.APK)接下来的内容文章你就不再赘述了，直接看我 b 站视频就行

# 最终成品下载地址

下载地址

程星博客\_v0.0.0.APK

程星资源

软件需要激活后使用，bug 非常多。建议等后续更新程星博客注册邀请码：hbxdss激活码：hbxdss

# 豆包生成的~~2048~~ 65536

```
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>2048 终极版（65536）</title>
<style>
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
</style>
</head>
<body>

<div class="title">2048 终极版</div>
<div class="score" id="score">得分：0</div>

<div class="info">
  电脑：↑↓←→ 方向键<br>
  手机：上下左右滑动<br>
  目标：合成 65536！
</div>

<div id="grid"></div>
<div id="msg"></div>
<button id="restart">重新开始</button>

<script>
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
    for (let i = 0; i < size; i++)
      for (let j = 0; j < size; j++)
        if (!grid[i][j]) empty.push([i, j]);
    if (!empty.length) return;
    let [i, j] = empty[Math.random() * empty.length | 0];
    grid[i][j] = Math.random() < 0.9 ? 2 : 4;
  }

  function update() {
    const g = document.getElementById('grid');
    g.innerHTML = '';
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let div = document.createElement('div');
        div.className = 'cell';
        if (grid[i][j]) {
          div.classList.add('c-' + grid[i][j]);
          div.textContent = grid[i][j];
        }
        g.appendChild(div);
      }
    }
    document.getElementById('score').textContent = '得分：' + score;
    checkWinLose();
  }

  function slide(arr) {
    let a = arr.filter(v => v);
    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] === a[i + 1]) {
        a[i] *= 2;
        score += a[i];
        a[i + 1] = 0;
      }
    }
    a = a.filter(v => v);
    while (a.length < size) a.push(0);
    return a;
  }

  function left() {
    changed = false;
    for (let i = 0; i < size; i++) {
      let before = [...grid[i]];
      grid[i] = slide(grid[i]);
      if (grid[i].join() !== before.join()) changed = true;
    }
  }
  function right() {
    changed = false;
    for (let i = 0; i < size; i++) {
      let before = [...grid[i]];
      grid[i] = slide(grid[i].reverse()).reverse();
      if (grid[i].join() !== before.join()) changed = true;
    }
  }
  function up() {
    changed = false;
    for (let j = 0; j < size; j++) {
      let col = [];
      for (let i = 0; i < size; i++) col.push(grid[i][j]);
      let before = [...col];
      col = slide(col);
      if (col.join() !== before.join()) changed = true;
      for (let i = 0; i < size; i++) grid[i][j] = col[i];
    }
  }
  function down() {
    changed = false;
    for (let j = 0; j < size; j++) {
      let col = [];
      for (let i = 0; i < size; i++) col.push(grid[i][j]);
      let before = [...col];
      col = slide(col.reverse()).reverse();
      if (col.join() !== before.join()) changed = true;
      for (let i = 0; i < size; i++) grid[i][j] = col[i];
    }
  }

  function canMove() {
    for (let i = 0; i < size; i++)
      for (let j = 0; j < size; j++) {
        if (!grid[i][j]) return true;
        if (j < size - 1 && grid[i][j] === grid[i][j+1]) return true;
        if (i < size - 1 && grid[i][j] === grid[i+1][j]) return true;
      }
    return false;
  }

  function checkWinLose() {
    let msg = document.getElementById('msg');
    for (let r of grid) {
      if (r.includes(65536)) {
        msg.textContent = '🎉 你合成了 65536，无敌！';
        return;
      }
    }
    if (!canMove()) msg.textContent = '💥 游戏结束';
    else msg.textContent = '';
  }

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
    if (changed) { addRand(); update(); }
  }, false);

  document.getElementById('restart').onclick = init;
  init();
</script>
</body>
</html>
```