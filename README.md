# JavaScript Calculator

使用 **HTML、CSS、原生 JavaScript** 製作的簡易計算機，不依賴 Vue、React、Vite 或其他前端框架。

## Features

- 基本四則運算：加、減、乘、除
- 小數運算
- 連續運算
- 清除（C）
- 刪除最後一位（←）
- 鍵盤操作
- 除以 0 的錯誤處理
- 響應式版面
- 純靜態檔案，可直接部署到 GitHub Pages

## 專案結構

```text
js-calculator/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── calculator.js
├── .github/
│   └── workflows/
│       └── deploy.yml
└── README.md
```

## 技術

- HTML5
- CSS3
- JavaScript (ES6+)
- GitHub Actions
- GitHub Pages

## 執行

不需要安裝 Node.js 或 npm。

直接用瀏覽器開啟 `index.html` 即可，也可以使用 VS Code 的 Live Server 等靜態伺服器預覽。

## JavaScript 設計

計算機使用簡單的狀態管理：

- `current`：目前輸入的數值
- `stored`：暫存的第一個運算元
- `operator`：目前選擇的運算
- `waiting`：是否等待下一個運算元

運算透過 `operations` 對應表處理：

```js
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};
```

## GitHub Pages

Repository 更名為 `js-calculator` 後，預期網址為：

https://karachicken.github.io/js-calculator/

Repository 名稱需要在 GitHub 的 **Settings → General → Repository name** 手動改為 `js-calculator`。

## License

目前未指定 License。
