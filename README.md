# 偉大的人類 — 通諭專題網站

教宗良十四世首篇通諭《Magnifica Humanitas／偉大的人類》——論在人工智慧時代守護人——中文沉浸式專題網站。

## 線上位置

```
events.mai-li.app/encyclical/magnifica-humanitas
```

## 檔案結構

```
encyclical/magnifica-humanitas/
├── index.html                  專題網站（沉浸式捲動專題）
├── og-image.png                社群分享主視覺圖（1200×630）
├── 偉大的人類-通諭全文.pdf      通諭全文 PDF（A4 · 93 頁 · 現代簡約風排版）
├── full-text/
│   └── index.html              通諭中文全文（245 段，含 224 條註釋）
└── pdf/
    ├── index.html              PDF 下載頁（含線上閱讀）
    └── cover-thumb.png         PDF 封面預覽圖
README.md                       本說明
```

整個網站是純靜態 HTML，唯一外部資源是 Google Fonts（思源宋體／黑體），不需任何建置流程。

## 三個頁面

- 專題頁：`events.mai-li.app/encyclical/magnifica-humanitas/`
- 全文頁：`events.mai-li.app/encyclical/magnifica-humanitas/full-text/`
- PDF 頁：`events.mai-li.app/encyclical/magnifica-humanitas/pdf/`
  （專題頁的導覽列、章節結尾與頁尾皆有連結指向全文頁與 PDF 頁）

## 部署到 Cloudflare Pages

### 方式 A — 連結 GitHub repo，自動部署（建議）

1. 先把本 repo 推上 GitHub（指令見下）。
2. 登入 Cloudflare 後台 → Workers & Pages → Create → Pages → Connect to Git。
3. 選擇 `encyclical-magnifica-humanitas` repo。
4. 建置設定：Framework preset 選 None、Build command 留空、Build output directory 填 `/`。
5. Save and Deploy，會得到一個 `xxx.pages.dev` 網址。
6. 該專案 → Custom domains → 新增 `events.mai-li.app`
   （`mai-li.app` 的 DNS 需託管在 Cloudflare）。

### 方式 B — 直接上傳

在 repo 根目錄執行：`npx wrangler pages deploy . --project-name=mai-li-events`

## 推送到 GitHub

```bash
gh repo create encyclical-magnifica-humanitas --public --source=. --push
```

## 日後新增其他通諭

在 `encyclical/` 底下新增資料夾即可，例如 `encyclical/<拉丁文名>/index.html`，
網址自動成為 `events.mai-li.app/encyclical/<拉丁文名>`。

## 重要聲明

本專題之通諭中文內容為 AI 翻譯之搶先版本，僅供教友先行了解與牧靈分享之用，
一切內容仍應以日後聖座（梵蒂岡）正式公布之官方中文譯本為準。
通諭於 2026 年 5 月 15 日由教宗良十四世簽署於羅馬聖伯多祿大殿，全文共 245 段。

---

本網頁的內容整理、企劃與程式開發，由 [麥力](https://www.facebook.com/mailimaili/) 主導完成。
