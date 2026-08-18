<script setup lang="ts">
definePageMeta({
  title: '民眾意見信箱處理查詢'
})

const mockData = reactive<IPublicOpinionMailCategory[]>([
  {
    id: '000-111',
    title: '待處理',
    list: [
      {
        id: 'PO1140001',
        title: '檢舉進口貨品標示疑義',
        caseNo: 'PO1140001',
        receiveDate: '114/06/18',
        sourceUnit: '民眾意見信箱',
        category: '檢舉案件',
        secondLevelCategory: '進口',
        thirdLevelCategory: '產地標示',
        modifierDate: '114-11-25',
        modifier: '王大明',
        isFavorite: true,
        status: '待分案',
        summary: '民眾反映進口商品產地標示疑義，請協助確認後續處理流程。',
        tags: {
          category1: ['大陸食品'],
          category2: ['檢舉案件', '待分案']
        }
      },
      {
        id: 'PO1140002',
        title: '諮詢貨品輸出規定',
        caseNo: 'PO1140002',
        receiveDate: '114/06/20',
        sourceUnit: '民眾意見信箱',
        category: '一般諮詢',
        secondLevelCategory: '出口',
        thirdLevelCategory: '程序諮詢',
        modifierDate: '114-11-24',
        modifier: '李小華',
        isFavorite: false,
        status: '承辦中',
        summary: '民眾詢問特定貨品輸出是否需申請許可及相關文件。',
        tags: {
          category1: ['程序案件'],
          category2: ['一般諮詢', '承辦中']
        }
      }
    ]
  },
  {
    id: '000-222',
    title: '已結案',
    list: [
      {
        id: 'PO1140003',
        title: '反映系統資料查詢問題',
        caseNo: 'PO1140003',
        receiveDate: '114/05/28',
        sourceUnit: '民眾意見信箱',
        category: '系統回饋',
        secondLevelCategory: '系統',
        thirdLevelCategory: '查詢功能',
        modifierDate: '114-11-20',
        modifier: '陳雅婷',
        isFavorite: false,
        status: '已結案',
        summary: '民眾反映查詢資料欄位顯示不完整，已完成回覆。',
        tags: {
          category1: ['系統回饋'],
          category2: ['已結案']
        }
      }
    ]
  }
])

const searchQuery = ref('')
const activeCategoryId = ref(mockData[0]?.id ?? '')

const sidebarItems = computed(() =>
  mockData.map((category) => ({
    index: category.id,
    title: category.title,
    count: category.list.length
  }))
)

const currentCategory = computed<IPublicOpinionMailCategory>(
  () =>
    mockData.find((category) => category.id === activeCategoryId.value) ??
    mockData[0] ?? {
      id: '',
      title: '',
      list: []
    }
)

const filteredCases = computed(() => {
  const query = searchQuery.value.trim()
  if (!query) return currentCategory.value.list

  return currentCategory.value.list.filter((item) =>
    _.some([item.title, item.caseNo, item.category, item.summary], (value: string) =>
      _.includes(value, query)
    )
  )
})

const handleFavoriteClick = (item: IPublicOpinionMailCase) => {
  item.isFavorite = !item.isFavorite
}
</script>

<template>
  <section class="system-page-slot public-opinion-mail app-page">
    <app-page-header-search
      v-model:search-query="searchQuery"
      layout-variant="withTitle"
      title="民眾意見信箱處理查詢"
      title-icon="mark_email_unread"
      search-placeholder="請輸入案號、主旨或關鍵字"
      action-icon="search"
      action-tone="primary"
    />

    <div class="public-opinion-mail__body app-page__body app-page__body--has-sidebar">
      <app-page-sidebar
        v-model:active-item="activeCategoryId"
        mode="list"
        header="案件狀態"
        :items="sidebarItems"
      />

      <div class="public-opinion-mail__main app-page__main">
        <h2 class="public-opinion-mail__category-heading">
          <span class="material-symbols-rounded" aria-hidden="true">folder</span>
          <span>{{ currentCategory.title }}</span>
        </h2>

        <div class="public-opinion-mail__results">
          <el-empty v-if="filteredCases.length === 0" description="查無資料" />
          <template v-else>
            <article v-for="item in filteredCases" :key="item.id" class="public-opinion-card">
              <header class="public-opinion-card__header">
                <div class="public-opinion-card__toolbar">
                  <div class="public-opinion-card__breadcrumb">
                    <span class="material-symbols-rounded" aria-hidden="true"> bookmark </span>
                    <span class="public-opinion-card__breadcrumb-text">
                      民眾意見信箱處理 >
                      {{ item.secondLevelCategory }} >
                      {{ item.thirdLevelCategory }}
                    </span>
                  </div>
                  <button
                    type="button"
                    :class="[
                      'public-opinion-card__favorite',
                      { 'public-opinion-card__favorite--active': item.isFavorite }
                    ]"
                    :aria-pressed="item.isFavorite"
                    :aria-label="item.isFavorite ? '取消收藏' : '加入收藏'"
                    @click="handleFavoriteClick(item)"
                  >
                    <span class="material-symbols-rounded" aria-hidden="true">favorite</span>
                  </button>
                </div>

                <div class="public-opinion-card__metadata">
                  <div class="public-opinion-card__tags">
                    <span class="public-opinion-card__tag public-opinion-card__tag--category1">
                      {{ item.tags.category1.join(', ') }}
                    </span>
                    <span class="public-opinion-card__tag public-opinion-card__tag--category2">
                      {{ item.tags.category2.join(', ') }}
                    </span>
                  </div>
                  <div class="public-opinion-card__meta">
                    <span class="public-opinion-card__meta-label"> 最後更新 </span>
                    <span class="public-opinion-card__meta-value">
                      {{ item.modifierDate }}
                    </span>
                  </div>
                  <div class="public-opinion-card__meta">
                    <span class="public-opinion-card__meta-label"> 異動人員 </span>
                    <span class="public-opinion-card__meta-value"> {{ item.modifier }} </span>
                  </div>
                </div>
              </header>

              <el-divider></el-divider>
              <div class="public-opinion-card__content">
                <p class="public-opinion-card__question">
                  <span
                    class="public-opinion-card__qa-label public-opinion-card__qa-label--question"
                  >
                    Q
                  </span>
                  {{ item.summary }}
                </p>
                <div class="public-opinion-card__answer">
                  <p class="public-opinion-card__answer-title">
                    <span
                      class="public-opinion-card__qa-label public-opinion-card__qa-label--answer"
                    >
                      A
                    </span>
                    <!-- TODO:待確認這個欄位是程序的最後一個回覆? -->
                    <!-- {{ item.answer }} -->
                    尚無回覆內容
                  </p>
                  <el-divider></el-divider>
                  <div class="public-opinion-card__answer-content">11123123</div>
                </div>
              </div>
            </article>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.public-opinion-mail {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__category-heading {
    display: flex;
    align-items: center;
    gap: 7px;
    margin: 0 0 12px;
    font-size: 20px;
    font-weight: 700;
    color: var(--primary);
  }

  &__results {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}

.public-opinion-card {
  padding: 18px 24px;
  background-color: var(--bg-white);
  border: 1px solid #cbcbcb;
  border-radius: 5px;

  &__header {
    display: flex;
    flex-direction: column;
  }

  &__toolbar {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 5px;
    margin-bottom: 12px;
  }

  &__breadcrumb {
    display: flex;
    align-items: center;
    gap: 5px;
    min-width: 0;
    font-size: 12px;
    color: #2f3d50;
    font-weight: 700;

    .material-symbols-rounded {
      font-variation-settings: 'FILL' 1;
    }
  }

  &__breadcrumb-text {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  &__favorite {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: 0;
    background: transparent;
    color: #cbcbcb;
    cursor: pointer;

    .material-symbols-rounded {
      font-variation-settings: 'FILL' 0;
    }

    &--active {
      .material-symbols-rounded {
        font-variation-settings: 'FILL' 1;
      }
    }
  }

  &__title {
    margin: 0 0 12px;
    overflow-wrap: anywhere;
    color: #2f3d50;
    font-size: 18px;
  }

  &__metadata {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    margin-bottom: 12px;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__tag {
    padding: 4px 10px;
    border-radius: 14px;
    font-size: 12px;
    font-weight: 700;

    &--category1 {
      background-color: #ffe5e5;
      color: #ff4d4d;
    }

    &--category2 {
      background-color: #e6e6e6;
      color: #555555;
    }
  }

  &__meta-label {
    color: #6e7885;
  }

  &__meta-value {
    color: #2f3d50;
    font-weight: 700;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__question {
    overflow-wrap: anywhere;
    white-space: pre-line;
    font-size: 18px;
    color: #2f3d50;
    font-weight: bold;
  }

  &__answer {
    padding: 8px 12px;
    background-color: #f5fbf9;
    border-radius: 5px;
    border: 1px solid #d7d7d7;
    font-size: 18px;
    color: #2c8086;
    font-weight: bold;
  }

  &__answer-title {
    margin: 0;
    font-size: 14px;
  }

  &__qa-label {
    width: 30px;
    height: 30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
    margin-right: 5px;
    font-size: 18px;

    &--question {
      background-color: #2f3d50;
    }

    &--answer {
      background-color: #2c8086;
    }
  }

  &__answer-content {
    overflow-wrap: anywhere;
    white-space: pre-line;
    font-size: 14px;
    color: #2f3d50;
    font-weight: 500;
    line-height: 1.9;
  }
}
</style>
