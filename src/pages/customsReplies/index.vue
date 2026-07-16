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
            class="customs-replies__card"
          >
            <div class="customs-replies__meta">
              <span class="customs-replies__meta-label">發文文號：</span>
              <span class="customs-replies__meta-value">
                {{ item.documentNumber }}
              </span>
              <span class="customs-replies__meta-label">發文日期：</span>
              <span class="customs-replies__meta-value">
                {{ item.documentDate }}
              </span>
              <span class="customs-replies__meta-label">發文機關：</span>
              <span class="customs-replies__meta-value">
                {{ item.issuingAgency }}
              </span>
              <span class="customs-replies__meta-label">關鍵貨品：</span>
              <span class="customs-replies__meta-value">
                {{ item.relatedLaws }}
              </span>
              <span class="customs-replies__meta-label">處分對象：</span>
              <span class="customs-replies__meta-value">
                {{ item.caseSummary }}
              </span>
              <span class="customs-replies__meta-label">涉及法規：</span>
              <span class="customs-replies__meta-value">
                {{ item.cases }}
              </span>
            </div>
            <div class="customs-replies__summary">
              <div class="customs-replies__summary-title">案情摘要</div>
              <div class="customs-replies__summary-text">
                {{ item.description }}
              </div>
            </div>
            <div class="customs-replies__related-cases">
              <div class="customs-replies__related-cases-label">關聯案例：</div>
              <div class="customs-replies__related-cases-list">
                <div
                  v-for="caseItem in item.relatedCases"
                  :key="caseItem.id"
                  class="customs-replies__related-case"
                >
                  <span class="material-symbols-rounded customs-replies__related-case-icon">
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
  flex-direction: column;
  gap: 20px;
  flex: 1 1 0%;
  padding: 0 20px 20px;

  &__content {
    display: flex;
    gap: 20px;
  }

  &__sidebar {
    width: 260px;
    display: flex;
    flex-direction: column;
    background-color: #ebf1f7;

    padding: 20px;
    border-radius: 10px;
  }

  &__sidebar-header {
    display: flex;
    text-align: center;
    margin-bottom: 10px;
    justify-content: center;
    font-size: 18px;
    font-weight: 700;
    color: #2f3d50;
  }

  &__sidebar-list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  &__sidebar-item {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 14px 10px;
    border: 0;
    border-radius: 5px;
    margin-bottom: 2px;
    background: transparent;
    font-family: inherit;
    font-size: 15px;
    color: #2f3d50;
    text-align: left;
    cursor: pointer;

    &--active {
      background-color: #fff;
      color: #0f3f85;
      border: 1px solid #0f3f85;
      font-weight: bold;

      .customs-replies__sidebar-item-count {
        background-color: #0f3f85;
        color: #fff;
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
    color: #2f3d50;
  }

  &__main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &__main-header {
    display: flex;
    align-items: center;
    gap: 7px;
    flex: 1;
    font-size: 20px;
    font-weight: 700;
    color: #0f3f85;
    margin-bottom: 12px;
  }

  &__results {
    min-height: 400px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__card {
    padding: 18px 24px;
    background-color: #fff;
    border: 1px solid #cbcbcb;
    border-radius: 5px;
    cursor: pointer;
  }

  &__meta {
    display: grid;
    grid-template-columns: 72px 1fr 72px 1fr;
    gap: 5px 10px;
    margin-bottom: 12px;
    font-size: 14px;
  }

  &__meta-label {
    color: #566578;
    font-weight: 600;
    white-space: nowrap;
  }

  &__meta-value {
    color: #2f3d50;
  }

  &__summary {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 14px;
    margin-bottom: 12px;
  }

  &__summary-title {
    font-size: 14px;
    font-weight: 700;
    color: #2f3d50;
    margin: 0 0 6px;
  }

  &__summary-text {
    font-size: 14px;
    color: #2f3d50;
    line-height: 1.72;
  }

  &__related-cases {
    display: flex;
    align-items: center;
    font-size: 14px;
    gap: 6px;
  }

  &__related-cases-label {
    font-weight: 700;
    color: #2f3d50;
    margin: 0 0 6px;
  }

  &__related-cases-list {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    align-items: center;
  }

  &__related-case {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: #2457a7;
    font-weight: 500;
    padding: 7px 16px;
    border-radius: 4px;
    border: 1px solid #b9ccea;
  }

  &__related-case-icon {
    font-size: 20px;
    font-variation-settings:
      'wght' 400,
      'opsz' 20;
  }
}
</style>
