---
title: GBA街霸方块在线玩
date: 2025-12-23 09:10:00
categories:
  - 游戏
  - 小游戏在线玩
tags:
  - GBA
  - 街霸
  - 在线试玩
cover: /img/gba-puzzle-fighter-box.jpg
abbrlink: gbagame1
top_img: /img/gba-puzzle-fighter-box.jpg
# 聚焦横幅右侧的人物区域 (Chun-Li)
description: GBA街霸方块 在线玩，支持 WASD 操控、自动存档与即时存档。
---

<!-- more -->

<style>
/* 首页封面：优先显示顶部，并尝试完整呈现 */
[data-type="post"] .recent-post-item .post_cover img {
    object-position: top center !important;
    /* 如果您希望在首页完全不裁剪显示全图，可以取消下面这一行的注释 */
    /* object-fit: contain !important; background: #000; */
}
</style>


## 🎮 游戏画面

<div class="game-wrapper">
    <iframe src="/gba/street-fighter-puzzle/index.html" width="100%" height="600" frameborder="0" scrolling="no" allowfullscreen></iframe>
</div>

<div style="text-align: center; margin-top: 15px;">
    <a href="/gba/street-fighter-puzzle/index.html" target="_blank" class="fullscreen-btn">🚀 进入全屏模式 (解决卡顿/显示不全)</a>
</div>

<style>
.game-wrapper {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 70%;
    min-height: 450px;
    background: #000;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}
.game-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}
.fullscreen-btn {
    display: inline-block;
    background: linear-gradient(135deg, #ff3e3e 0%, #ff6b6b 100%);
    color: #fff !important;
    padding: 10px 25px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    box-shadow: 0 5px 15px rgba(255, 62, 62, 0.3);
    transition: all 0.3s ease;
}
.fullscreen-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 62, 62, 0.4);
}

@media screen and (max-width: 768px) {
    .game-wrapper {
        padding-bottom: 130% !important; /* Portrait mode extra height */
    }
}
@media screen and (max-width: 480px) {
    .game-wrapper {
        min-height: 520px;
    }
}
/* Landscape no-scroll fix for mobile */
@media screen and (orientation: landscape) and (max-height: 500px) {
    .game-wrapper {
        padding-bottom: 0 !important;
        height: 85vh !important;
        min-height: 280px !important;
    }
}
</style>

---

## 🛠️ 操作说明

| 动作 | 电脑按键 (默认) |
| :--- | :--- |
| **方向控制** | **W A S D** |
| **旋转/确认 (A)** | **K** 键 |
| **旋转/取消 (B)** | **J** 键 |
| **侧键 (L / R)** | **U / I** 键 |
| **开始 (Start)** | **Enter** 回车 |
| **选择 (Select)** | **V** 键 |

{% note blue 'far fa-lightbulb' %}
**按键提示**：如果按键（如 WASD）无法直接生效，请先点击一下游戏画面以激活输入。
**插件冲突**：如果您安装了 **Global Speed** 等视频/音频速度控制类浏览器扩展，请在游玩时将其**禁用**，否则 WASD 键会被插件抢占导致冲突。
**存档提示**：游戏支持**自动存档**与即时存档（右键菜单），存档保存在您的浏览器本地（建议使用 Chrome/Edge 浏览器以确保存档稳定）。
{% endnote %}

---

## 🌟 游戏特色
- **完美模拟**：基于 WASM 技术，还原原生掌机速度。
- **即时存读**：随时随地保存进度，不怕刷新页面。
- **自定义菜单**：支持金手指、截图和视频录屏。

祝你玩得愉快！
