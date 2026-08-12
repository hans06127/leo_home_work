# Trade Knowledge Nuxt Practice

Nuxt 4 + Vue 3 + Element Plus + MSW 的前端切版練習專案。此專案目前只保留 EIP 類型頁面的共用 layout，中央內容區留白，方便逐頁練習切版。

## Environment

- Node.js `22.22.3`
- Nuxt `4.4.8`
- Vue `3.5.39`
- MSW `2.14.6`

## Setup

```bash
npm install
npm run dev
```

## Layout

- 共用 layout：`src/layouts/SystemMainLayout.vue`
- 上方系統列：`src/layouts/components/SystemTopBar.vue`
- 頁面內容區：由 `<slot />` 呈現，目前首頁與案例頁都保留空白。

新增頁面時，只需要在 `src/pages` 建立頁面內容；外框會自動套用共用 layout。

## Component Naming

Vue/Nuxt 支援 PascalCase 元件與 kebab-case template tag 的對應：

```vue
<!-- file: SystemSearchForm.vue -->
<system-search-form />
```

目前 `nuxt.config.ts` 已設定自動掃描：

- `src/components`
- `src/layouts/components`

## Frontend Style Guide

CSS 命名、BEM 規則與 `system` 共用類別規範請看 `docs/frontend-style-guide.md`。
