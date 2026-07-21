<script lang="ts" setup>
const mockData = [
  {
    category: '專案(擋關)',
    categoryId: '1',
    list: [
      {
        documentNumber: 'ATEG1140027',
        documentDate: '114/10/14',
        issuingAgency: '基隆關桃園分關南崁業務課',
        relatedLaws: '專業檢測儀器',
        caseSummary: 'OOO股份有限公司',
        cases: '原產地證明書及加工證明書管理辦法第5條第3項（實質轉型）',
        description:
          '某股份有限公司（出口人）報運出口貨物乙批至美國（出口報單第AT/BC/14/^^^^^^號）。依出口人說明，案貨為出口人設計並持有模具及核心技術之專業檢測儀器。出口人於中國廣東珠海地區設有台灣投資設立之關係企業，負責執行產品之部分組裝及焊接程序。',
        relatedCases: [{ id: 1, title: 'OOO處份案例' }]
      }
    ]
  },
  {
    category: 'CITES',
    categoryId: '2',
    list: []
  },
  {
    category: '實質轉型',
    categoryId: '3',
    list: []
  },
  {
    category: '產地標示',
    categoryId: '4',
    list: []
  },
  {
    category: '其他',
    categoryId: '5',
    list: []
  }
]

const searchQuery = ref('')
const currentCategory = ref<any>(mockData[0])

const search = () => {
  console.log('search', searchQuery.value)
}

const handleCategoryClick = (categoryId: string) => {
  const selectedCategory = _.find(mockData, (category: any) => category.categoryId === categoryId)
  currentCategory.value = selectedCategory
}
</script>

<template>
  <section class="system-page-slot customs-replies">
    <app-page-header-search
      layout-variant="withTitle"
      title="海關答聯單處理"
      title-icon="anchor"
      v-model:search-query="searchQuery"
      search-placeholder="請輸入關鍵字"
      action-icon="tune"
      @search="search"
    />
    <div class="customs-replies__content">
      <div class="customs-replies__sidebar">
        <div class="customs-replies__sidebar-header">答聯單態樣</div>
        <ul class="customs-replies__sidebar-list">
          <li v-for="category in mockData" :key="category.categoryId">
            <button
              type="button"
              :class="[
                'customs-replies__sidebar-item',
                {
                  'customs-replies__sidebar-item--active':
                    category.categoryId === currentCategory.categoryId
                }
              ]"
              @click="handleCategoryClick(category.categoryId)"
            >
              <span class="material-symbols-rounded"> folder </span>
              <span class="customs-replies__sidebar-item-name">
                {{ category.category }}
              </span>
              <span class="customs-replies__sidebar-item-count">
                {{ category.list.length }}
              </span>
            </button>
          </li>
        </ul>
      </div>
      <div class="customs-replies__main">
        <div class="customs-replies__main-header">
          <span class="material-symbols-rounded"> folder </span>
          {{ currentCategory.category }}
        </div>
        <div class="customs-replies__results">
          <div
            v-for="item in currentCategory.list"
            :key="item.documentNumber"
            class="customs-reply-card"
          >
            <div class="customs-reply-card__meta">
              <span class="customs-reply-card__meta-label">發文文號：</span>
              <span class="customs-reply-card__meta-value">
                {{ item.documentNumber }}
              </span>
              <span class="customs-reply-card__meta-label">發文日期：</span>
              <span class="customs-reply-card__meta-value">
                {{ item.documentDate }}
              </span>
              <span class="customs-reply-card__meta-label">發文機關：</span>
              <span class="customs-reply-card__meta-value">
                {{ item.issuingAgency }}
              </span>
              <span class="customs-reply-card__meta-label">關鍵貨品：</span>
              <span class="customs-reply-card__meta-value">
                {{ item.relatedLaws }}
              </span>
              <span class="customs-reply-card__meta-label">處分對象：</span>
              <span class="customs-reply-card__meta-value">
                {{ item.caseSummary }}
              </span>
              <span class="customs-reply-card__meta-label">涉及法規：</span>
              <span class="customs-reply-card__meta-value">
                {{ item.cases }}
              </span>
            </div>
            <div class="customs-reply-card__summary">
              <div class="customs-reply-card__summary-title">案情摘要</div>
              <div class="customs-reply-card__summary-text">
                {{ item.description }}
              </div>
            </div>
            <div class="customs-reply-card__related-cases">
              <div class="customs-reply-card__related-label">關聯案例：</div>
              <div class="customs-reply-card__related-list">
                <div
                  v-for="caseItem in item.relatedCases"
                  :key="caseItem.id"
                  class="customs-reply-card__related-item"
                >
                  <span class="material-symbols-rounded customs-reply-card__related-icon">
                    link
                  </span>
                  <span>{{ caseItem.title }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.customs-replies {
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  gap: 20px;

  &__content {
    display: flex;
    gap: 20px;
  }

  &__sidebar {
    display: flex;
    flex-direction: column;
    width: 260px;
    padding: 20px;
    background-color: var(--bg-tree);
    border-radius: 10px;
  }

  &__sidebar-header {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    color: var(--tx-main);
  }

  &__sidebar-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__sidebar-item {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    margin-bottom: 2px;
    padding: 14px 10px;
    background: transparent;
    border: 0;
    border-radius: 5px;
    font-family: inherit;
    font-size: 15px;
    text-align: left;
    color: var(--tx-main);
    cursor: pointer;

    &--active {
      background-color: var(--bg-white);
      border: 1px solid var(--primary);
      font-weight: bold;
      color: var(--primary);

      .customs-replies__sidebar-item-count {
        background-color: var(--primary);
        color: var(--bg-white);
      }
    }
  }

  &__sidebar-item-name {
    flex: 1;
  }

  &__sidebar-item-count {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    background-color: #e1e1e1;
    border-radius: 50%;
    font-weight: bold;
    color: var(--tx-main);
  }

  &__main {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  &__main-header {
    display: flex;
    align-items: center;
    flex: 1;
    gap: 7px;
    margin-bottom: 12px;
    font-size: 20px;
    font-weight: 700;
    color: var(--primary);
  }

  &__results {
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-height: 400px;
  }
}

.customs-reply-card {
  padding: 18px 24px;
  background-color: var(--bg-white);
  border: 1px solid #cbcbcb;
  border-radius: 5px;
  cursor: pointer;

  &__meta {
    display: grid;
    grid-template-columns: 72px 1fr 72px 1fr;
    gap: 5px 10px;
    margin-bottom: 12px;
    font-size: 14px;
  }

  &__meta-label {
    font-weight: 600;
    white-space: nowrap;
    color: var(--tx-mid);
  }

  &__meta-value {
    color: var(--tx-main);
  }

  &__summary {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 12px;
    font-size: 14px;
  }

  &__summary-title {
    margin: 0 0 6px;
    font-size: 14px;
    font-weight: 700;
    color: var(--tx-main);
  }

  &__summary-text {
    font-size: 14px;
    line-height: 1.72;
    color: var(--tx-main);
  }

  &__related-cases {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
  }

  &__related-label {
    margin: 0 0 6px;
    font-weight: 700;
    color: var(--tx-main);
  }

  &__related-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
  }

  &__related-item {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 16px;
    border: 1px solid #b9ccea;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    color: var(--blue);
  }

  &__related-icon {
    font-size: 20px;
    font-variation-settings:
      'wght' 400,
      'opsz' 20;
  }
}
</style>
