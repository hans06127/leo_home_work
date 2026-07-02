# Frontend Style Guide

此專案用來練習 EIP 類型後台頁面切版。新增頁面時，先沿用既有 layout、spacing、tokens，再依頁面需求擴充。

## Component Naming

- Vue 檔名使用 PascalCase，例如 `SystemSearchForm.vue`。
- Template 內建議使用 kebab-case，例如 `<system-search-form />`。
- 這是 Vue/Nuxt 原生支援的命名轉換，不需要另外設定。
- 若要自動匯入元件，請放在 `src/components` 或 `src/layouts/components`。目前 `nuxt.config.ts` 已設定這兩個路徑。

## CSS Naming

- 頁面與元件樣式遵循 BEM。
- Block 使用頁面或元件名稱，例如 `.cases-page`、`.system-top-bar`。
- Element 使用 `__`，例如 `.cases-page__header`。
- Modifier 使用 `--`，例如 `.cases-page__category-row--active`。
- 避免依賴標籤或深層選擇器控制主要版面，讓每一頁都能獨立練習切版。

## Shared Classes

- 可跨頁共用的底層類別以 `system` 開頭。
- 目前可用：
  - `.system-layout`
  - `.system-section`
  - `.system-panel`
  - `.system-card`
  - `.system-button`
  - `.system-button--primary`
  - `.system-button--success`
  - `.system-button--ghost`
- 新增共用類別時，先確認是否真的會被多個頁面使用。只服務單頁的樣式請放在該頁 block 底下。

## SCSS File Placement

- tokens：`src/assets/styles/abstracts/_tokens.scss`
- reset：`src/assets/styles/base/_reset.scss`
- layout：`src/assets/styles/layout/*`
- shared components：`src/assets/styles/components/*`
- page styles：`src/assets/styles/pages/*`

新增 SCSS 後記得在 `src/assets/styles/main.scss` 匯入。
