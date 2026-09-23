# Vue 3 Calculator

使用 **Vue 3 + Vite + 原生 CSS** 實作的簡易計算機。

## 開發

```bash
npm install
npm run dev
```

## 建置

```bash
npm run build
npm run preview
```

## Vue 3 遷移

- 從舊的全域 CDN 寫法改為 Vite 專案
- 使用 Vue 3 Composition API 與 `<script setup>`
- 將計算狀態改為 `ref`
- 將計算機按鍵改為語意化的 `button`
- 保留原本的計算機 UI 與 CSS 風格
- 加入 GitHub Pages 自動部署 workflow

GitHub Pages： https://karachicken.github.io/vue2-calculate/
