<script setup lang="ts">
definePageMeta({
  title: '裁罰案例'
})

const tabs = [
  { label: '出口', value: 'export' },
  { label: '進口', value: 'import' }
]

const mockTabData: Record<DispositionTabKey, IDispositionMenuSourceCategory[]> = {
  export: [
    {
      categoryId: '1',
      categoryName: '產地',
      icon: 'inventory_2',
      list: [
        {
          title: '標示不實產定(加強管理)',
          id: '1-1',
          items: [
            {
              // 案例名稱例
              id: '1-1-1',
              caseName: '',
              // 發文字號
              replyNumber: '',
              // 處分日期
              penaltyDate: '',
              dispositionTarget: '',
              isFavorite: true,
              tags: {
                category1: ['輸美'],
                category2: ['從輕', '初犯'],
                category3: []
              },
              subject:
                '**貴公司所輸美國之「**」(產地標示為「**」)一案，經查係屬標示不實，依據「**」第**條第**款規定，處以新臺幣**元整之罰鍰。',
              relatedCases: ['OOO處分案例1', 'OOO處分案例2', 'OOO處分案例3']
            }
          ]
        },
        {
          title: '標示不實產定(一般貨品)',
          id: '1-2',
          items: []
        },
        {
          title: '標示至人誤認產地之虞',
          id: '1-3',
          items: []
        },
        {
          title: '未依規定標示產地',
          id: '1-4',
          items: []
        }
      ]
    },
    {
      categoryId: '2',
      categoryName: '商標',
      icon: 'verified',
      list: [
        {
          title: '產地標示不實',
          id: '2-1',
          items: []
        },
        {
          title: '誤認產地',
          id: '2-2',
          items: []
        }
      ]
    }
  ],

  import: [
    {
      categoryId: '',
      categoryName: '產品',
      list: [
        {
          title: '產地標示不實',
          items: []
        }
      ]
    }
  ]
}

const activeName = ref<DispositionTabKey>('export')
const openCategory = ref('')
const activeMenuItemIndex = ref('')
const searchQuery = ref('')

const getMenuItemIndex = (
  menu: IDispositionMenuSourceCategory,
  menuIndex: number,
  item: IDispositionMenuSourceItem,
  itemIndex: number
) => item.id || `${menu.categoryId || menuIndex + 1}-${itemIndex + 1}`

const currentMenus = computed(() =>
  mockTabData[activeName.value].map((menu, menuIndex) => ({
    categoryId: menu.categoryId,
    categoryName: menu.categoryName,
    icon: 'icon' in menu ? menu.icon : 'inventory_2',
    list: menu.list.map((item, itemIndex) => ({
      title: item.title,
      index: getMenuItemIndex(menu, menuIndex, item, itemIndex),
      count: 'items' in item ? item.items.length : 0
    }))
  }))
)

const triggerFirstItem = (category: IDispositionMenuCategory) => {
  const firstItem = category.list[0]
  if (!firstItem) {
    activeMenuItemIndex.value = ''
    return
  }

  activeMenuItemIndex.value = firstItem.index
}

const initFirstCategory = () => {
  const menus = currentMenus.value
  const firstCategory = menus[0]

  if (!firstCategory) {
    openCategory.value = ''
    activeMenuItemIndex.value = ''
    return
  }

  openCategory.value = firstCategory.categoryId
  triggerFirstItem(firstCategory)
}

const activeCategory = computed(() =>
  currentMenus.value.find((menu) => menu.categoryId === openCategory.value)
)

const activeMenuItem = computed(() =>
  activeCategory.value?.list.find((item) => item.index === activeMenuItemIndex.value)
)

const currentCategoryList = computed<IDispositionListItem[]>(() => {
  for (const [menuIndex, menu] of mockTabData[activeName.value].entries()) {
    const selectedItem = menu.list.find(
      (item, itemIndex) =>
        getMenuItemIndex(menu, menuIndex, item, itemIndex) === activeMenuItemIndex.value
    )
    if (selectedItem) return selectedItem.items
  }

  return []
})

const handleFavoriteClick = (item: IDispositionListItem) => {
  item.isFavorite = !item.isFavorite
}

watch(activeName, () => {
  initFirstCategory()
})

onMounted(() => {
  initFirstCategory()
})
</script>

<template>
  <section class="system-page-slot">
    <div class="cases app-page">
      <app-page-header-search
        layout-variant="withTitle"
        title="處分案例"
        title-icon="work_history"
        v-model:search-query="searchQuery"
        search-placeholder="請輸入關鍵字"
        action-icon="tune"
      />
      <div class="cases__body app-page__body app-page__body--has-sidebar">
        <app-page-sidebar
          v-model:active-tab="activeName"
          v-model:active-item="activeMenuItemIndex"
          v-model:open-category="openCategory"
          header="主要類別"
          :tabs="tabs"
          :menus="currentMenus"
        />
        <div class="cases__main app-page__main">
          <div class="cases__main-header">
            <span class="material-symbols-rounded" aria-hidden="true"> folder </span>
            <!-- TODO:待確認 -->
            <span>{{ activeMenuItem?.title || activeCategory?.categoryName }}</span>
          </div>
          <div class="cases__results">
            <div
              class="cases-card"
              v-for="(item, index) in currentCategoryList"
              :key="item.id ?? `${activeMenuItemIndex}-${index}`"
            >
              <div class="cases-card__header">
                <div class="cases-card__header-top">
                  <div class="cases-card__header-path">
                    <span class="material-symbols-rounded" aria-hidden="true"> bookmark </span>
                    <span class="cases-card__header-path-text">
                      處分案例 >
                      {{ activeName === 'export' ? '出口' : '進口' }} >
                      {{ item.secondLevelCategory }} >
                      {{ item.thirdLevelCategory }}
                    </span>
                  </div>
                  <button
                    type="button"
                    :class="[
                      'cases-card__favorite',
                      { 'cases-card__favorite--active': item.isFavorite }
                    ]"
                    :aria-pressed="item.isFavorite"
                    :aria-label="item.isFavorite ? '取消收藏' : '加入收藏'"
                    @click="handleFavoriteClick(item)"
                  >
                    <span class="material-symbols-rounded" aria-hidden="true">favorite</span>
                  </button>
                </div>
                <!-- TODO:確認語意是否正確 -->
                <div class="cases-card__header-side">
                  <div class="cases-card__header-tags">
                    <!-- TODO: category要串聯 -->
                    <!-- TODO:顏色按照 category分組?-->
                    <!-- TODO: 確認標籤分類語意後，將 category1/category2 modifier 改成語意命名 -->
                    <span class="cases-card__tag-item cases-card__tag-item--category1">
                      {{ item.tags.category1.join(', ') }}
                    </span>
                    <span class="cases-card__tag-item cases-card__tag-item--category2">
                      {{ item.tags.category2.join(', ') }}
                    </span>
                  </div>
                  <div class="cases-card__header-meta">
                    <span class="cases-card__header-meta-label"> 最後更新 </span>
                    <span class="cases-card__header-meta-value">
                      {{ item.modifierDate }}
                    </span>
                  </div>
                  <div>
                    <span class="cases-card__header-meta-label"> 異動人員 </span>
                    <span class="cases-card__header-meta-value">
                      {{ item.modifier }}
                    </span>
                  </div>
                </div>
              </div>

              <el-divider></el-divider>
              <div class="cases-card__meta">
                <span class="cases-card__field-label"> 案例名稱： </span>
                <span class="cases-card__field-value"> {{ item.caseName }} </span>

                <span class="cases-card__field-label"> 發文字號： </span>
                <span class="cases-card__field-value">
                  {{ item.replyNumber }}
                </span>

                <span class="cases-card__field-label"> 處分日期： </span>
                <span class="cases-card__field-value">
                  {{ item.penaltyDate }}
                </span>

                <span class="cases-card__field-label"> 對象： </span>
                <span class="cases-card__field-value">
                  {{ item.dispositionTarget }}
                </span>
              </div>
              <el-divider></el-divider>
              <div class="cases-card__field">
                <span class="cases-card__field-label"> 貨品： </span>
                <span class="cases-card__field-value">
                  {{ item.productName }}
                </span>
              </div>

              <div class="cases-card__field">
                <span class="cases-card__field-label"> 涉及法規： </span>
                <span class="cases-card__field-value">
                  <!-- {{ item.relatedRegulations.join(', ') }} -->
                </span>
              </div>
              <div class="cases-card__field">
                <span class="cases-card__field-label"> 裁罰金額： </span>
                <span class="cases-card__field-value">
                  {{ item.penaltyAmount }}
                </span>
              </div>
              <el-divider></el-divider>
              <div class="cases-card__summary">
                <span class="cases-card__summary-label"> 主旨 </span>
                <span class="cases-card__summary-value">
                  {{ item.subject }}
                </span>
              </div>
              <div class="cases-card__related-cases">
                <span class="cases-card__summary-label"> 關聯案例： </span>
                <div
                  v-for="relatedCase in item.relatedCases ?? []"
                  :key="relatedCase"
                  class="cases-card__related-case"
                >
                  <span class="material-symbols-rounded" aria-hidden="true"> link </span>
                  <span> {{ relatedCase }} </span>
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
.cases {
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

.cases-card {
  padding: 18px 24px;
  background-color: var(--bg-white);
  border: 1px solid #cbcbcb;
  border-radius: 5px;

  &__header {
    display: flex;
    flex-direction: column;
  }

  &__header-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 5px;
    margin-bottom: 12px;
  }

  &__header-path {
    display: flex;
    align-items: center;
    gap: 5px;
    min-width: 0;
    font-size: 12px;
    color: #2f3d50;
    font-weight: 700;

    .material-symbols-rounded {
      // TODO:要漸層
      font-variation-settings: 'FILL' 1;
    }
  }

  &__header-path-text {
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

  &__header-side {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
  }

  &__header-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__tag-item {
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

  &__header-meta-label {
    color: #6e7885;
  }

  &__header-meta-value {
    color: #2f3d50;
    font-weight: 700;
  }

  &__meta {
    display: grid;
    grid-template-columns: 72px 1fr;
    gap: 5px;
    margin-bottom: 12px;
    font-size: 14px;
  }

  &__field-label {
    color: #969da7;
    font-weight: 700;
  }

  &__field-value {
    min-width: 0;
    overflow-wrap: anywhere;
    color: #2f3d50;
    font-weight: 700;
  }

  &__summary {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 12px;
  }

  &__summary-label {
    color: #969da7;
    font-weight: 700;
  }

  &__summary-value {
    min-width: 0;
    overflow-wrap: anywhere;
    white-space: pre-line;
    line-height: 1.72;
    font-weight: 600;
  }

  &__related-cases {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: #2f3d50;
  }

  &__related-case {
    padding: 4px 16px;
    border-radius: 4px;
    background-color: #f5f9ff;
    color: #0f3f85;
    border: 1px solid #dee4eb;
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
}

</style>
