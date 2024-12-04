---
title: 在終端機也能使用 VScode 的 Live Server!
published: 2024-09-29
description: ''
image: 'live_server_icon.webp'
tags: [dev,web]
category: 'dev'
draft: false 
language: ''
---

# 前言
最近開始學習使用 LunarVim 開發，所以變得整個開發環境都在 terminal 解決

因為現在幾乎都用 `vue` 或 `pnpm` ，不會有太多機會直接寫 `html` 

但 [我的個人網站](https://osga.lol) 其實是一個純 `html` 的模板

所以剛好今天更新的時候發現！我該怎麼即時預覽我的html？

想到之前使用 `VScode` 時，都會直接使用 `Live Server` ，但其實 CLI 上也有 `Live Server` 😆

# 安裝

```bash
npm install -g live-server
```

:::note
記得先安裝 `node.js`
:::

啪💥，結束了哈哈，就是這麼簡單

# 使用

在你要使用的 `index.html` 目錄底下
輸入
```bash
live-server
```

![](demo.png)

他會自動找該目錄的 `index.html` ，並且跑在 `8080` ports 底下

就是這麼簡單，可以輕鬆在 terminal 開發了！

