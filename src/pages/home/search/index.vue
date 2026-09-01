<script lang="ts" setup>
definePageMeta({
  title: '全站搜尋'
})

const searchQuery = ref('')
const activeTrade = ref('export')
const activeCategory = ref('all')

const tabs = [
  { label: '出口', value: 'export' },
  { label: '進口', value: 'import' }
]

const mockFilter_module = [
  { code: 'all', name: '全部' },
  { code: 'diposition', name: '處分案例' },
  { code: 'customReplyForm', name: '海關達聯單' },
  { code: 'majorEvents', name: '聲明異議、訴願與行政訴訟' },
  { code: 'publicMailbox', name: '民眾意見信箱處理' }
]

const mockFilter_tags = {
  // 法規管制
  regulatoryControl: [
    { code: 'exportToUs', name: '輸美' },
    { code: 'cites', name: 'CITES' },
    { code: 'certificateOfOrigin', name: '產證' },
    { code: 'importRegulation', name: '輸入規定' },
    { code: 'controlledGoods', name: '管制貨品' }
  ],
  // 案件結果
  caseResult: [
    { code: 'noDisposition', name: '不予議處' },
    { code: 'mitigated', name: '從輕' },
    { code: 'fine', name: '罰緩' },
    { code: 'revokeDisposition', name: '撤銷處分' },
    { code: 'revokeQualification', name: '撤銷資格' },
    { code: 'disposition', name: '處分' },
    { code: 'rejected', name: '駁回' },
    { code: 'approved', name: '同意' },
    { code: 'disapproved', name: '不同意' }
  ],
  // 案件特性
  caseFeature: [
    { code: 'continuedDisposition', name: '處份接續' },
    { code: 'repeatOffense', name: '再犯' },
    { code: 'recidivism', name: '累犯' },
    { code: 'jointIntent', name: '共同犯意' },
    { code: 'multipleBatches', name: '多批' }
  ],
  // 商品分類
  productCategory: [
    { code: 'chinaFood', name: '大陸食品' },
    { code: 'chinaGoods', name: '大陸物品' },
    { code: 'textiles', name: '紡織品' },
    { code: 'oilsAndFats', name: '油脂' },
    { code: 'agriculturalProducts', name: '農產品' },
    { code: 'industrialProducts', name: '工業產品' }
  ]
}
const categories = [{ index: 'all', title: '全部', count: 0 }]

const isFilterOpen = ref(false)
const toggleCount = ref(0)
const pageClickCount = ref(0)
const mountedState = ref(false)

const fromData = reactive({
  searchQuery: {
    text: [] as string[],
    modules: ['all'],
    tags: [],
    dateRange: [] as string[]
  },
  activeTrade: 'export',
  activeCategory: 'all',
  list: []
})

// 切換進階搜尋條件的展開狀態
const handleFilterToggle = () => {
  toggleCount.value += 1
  console.log('handleFilterToggle')
  isFilterOpen.value = !isFilterOpen.value
}

// 記錄頁面捕獲階段的點擊次數
const handlePageCaptureClick = () => {
  pageClickCount.value += 1
}

onMounted(() => {
  mountedState.value = true
})
</script>

<template>
  <section class="system-page-slot search-page app-page" @click.capture="handlePageCaptureClick">
    <div class="search-page__header search-page__search">
      <div class="search-page__search-row">
        <div class="search-page__main-title">全文檢索</div>
        <el-input-tag v-model="fromData.searchQuery.text" placeholder="Please input" size="large">
          <template #prefix>
            <span
              class="material-symbols-rounded search-page__main-icon search-page__main-icon--search"
            >
              search
            </span>
          </template>
          <template #suffix>
            <span
              class="material-symbols-rounded search-page__main-icon search-page__main-icon--close"
              v-if="fromData.searchQuery.text.length"
            >
              close
            </span>
            <button
              type="button"
              class="search-page__filter-toggle"
              :aria-expanded="isFilterOpen"
              aria-controls="search-page-filter"
              @click="handleFilterToggle"
            >
              <span
                class="material-symbols-rounded search-page__main-icon search-page__main-icon--tune"
                :class="{ 'search-page__main-icon--tune-active': isFilterOpen }"
              >
                tune
              </span>
            </button>
          </template>
        </el-input-tag>
      </div>

      <div class="search-page__result">
        與「
        <span>{{ fromData.searchQuery.text.join('、') }}</span>
        」相符的所有搜尋結果,查詢結果共計{{ fromData.list.length }}筆
      </div>
      <div
        id="search-page-filter"
        class="search-page__filter-collapse"
        :class="{ 'search-page__filter-collapse--open': isFilterOpen }"
        v-show="isFilterOpen"
        :aria-hidden="!isFilterOpen"
      >
        <div class="search-page__filter">
          <system-form-list>
            <div class="system-form__row system-form__row--full">
              <div class="system-form__title">
                <p>查詢模組</p>
              </div>
              <div class="system-form__field">
                <div class="system-form__item">
                  <el-form-item>
                    <el-checkbox-group v-model="fromData.searchQuery.modules">
                      <el-checkbox
                        v-for="item in mockFilter_module"
                        :key="item.code"
                        :label="item.code"
                      >
                        {{ item.name }}
                      </el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </div>
              </div>
            </div>

            <div class="system-form__row system-form__row--full">
              <div class="system-form__title">
                <p>案例標籤</p>
              </div>
              <div class="system-form__field">
                <div class="system-form__item">
                  <el-form-item>
                    <div class="search-page__filter-tags">
                      <div>
                        法規管制
                        <el-checkbox-group v-model="fromData.searchQuery.tags">
                          <el-checkbox
                            v-for="item in mockFilter_tags.regulatoryControl"
                            :key="item.code"
                            :label="item.code"
                          >
                            {{ item.name }}
                          </el-checkbox>
                        </el-checkbox-group>
                      </div>

                      <div>
                        案件結果
                        <el-checkbox-group v-model="fromData.searchQuery.tags">
                          <el-checkbox
                            v-for="item in mockFilter_tags.caseResult"
                            :key="item.code"
                            :label="item.code"
                          >
                            {{ item.name }}
                          </el-checkbox>
                        </el-checkbox-group>
                      </div>

                      <div>
                        案件特性
                        <el-checkbox-group v-model="fromData.searchQuery.tags">
                          <el-checkbox
                            v-for="item in mockFilter_tags.caseFeature"
                            :key="item.code"
                            :label="item.code"
                          >
                            {{ item.name }}
                          </el-checkbox>
                        </el-checkbox-group>
                      </div>

                      <div>
                        商品分類
                        <el-checkbox-group v-model="fromData.searchQuery.tags">
                          <el-checkbox
                            v-for="item in mockFilter_tags.productCategory"
                            :key="item.code"
                            :label="item.code"
                          >
                            {{ item.name }}
                          </el-checkbox>
                        </el-checkbox-group>
                      </div>
                    </div>
                  </el-form-item>
                </div>
              </div>
            </div>

            <div class="system-form__row system-form__row--half">
              <div class="system-form__title">
                <p>日期範圍</p>
              </div>
              <div class="system-form__field">
                <div class="system-form__item">
                  <el-form-item>
                    <el-select></el-select>
                  </el-form-item>
                </div>
              </div>
            </div>
            <div class="system-form__row system-form__row--half">
              <div class="system-form__title">
                <p>自訂起迄日</p>
              </div>
              <div class="system-form__field">
                <div class="system-form__item">
                  <el-form-item>
                    <el-date-picker
                      v-model="fromData.searchQuery.dateRange"
                      type="daterange"
                      start-placeholder="開始日期"
                      end-placeholder="結束日期"
                      value-format="YYYY-MM-DD"
                    />
                  </el-form-item>
                </div>
              </div>
            </div>
          </system-form-list>
          <div>
            <!-- 按鈕 -->
          </div>
        </div>
      </div>
    </div>

    <div class="search-page__body app-page__body app-page__body--has-sidebar">
      <app-page-sidebar
        v-model:active-tab="activeTrade"
        v-model:active-item="activeCategory"
        mode="list"
        header="搜尋類別"
        :tabs="tabs"
        :items="categories"
      />

      <main class="app-page__main">
        <h2 class="search-page__heading">
          <span class="material-symbols-rounded" aria-hidden="true">folder</span>
          <span>搜尋結果</span>
        </h2>

        <el-empty description="尚無搜尋結果" />
      </main>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.search-page {
  &__search {
    padding: 20px;
    border-radius: 10px;
    background-color: #ebf1f7;
  }

  &__search-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;

    :deep(.el-input__wrapper) {
      border-radius: 15px;
    }
  }

  &__main-title {
    flex: 0 0 auto;
    font-size: 24px;
    font-weight: 700;
    color: var(--primary);
  }

  &__main-icon {
    width: 35px;
    height: 35px;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 50%;

    &--search,
    &--close {
      background-color: #e7ebff;
      color: #2f3d50;
    }

    &--tune {
      background-color: #2f589a;
      color: #fff;
      cursor: pointer;
      transition: transform 0.24s ease;
    }

    &--tune-active {
      transform: rotate(180deg);
    }
  }

  &__filter-toggle {
    display: flex;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  &__filter-toggle:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }

  &__filter-collapse {
    display: grid;
    visibility: hidden;
    grid-template-rows: 0fr;
    transition:
      grid-template-rows 0.24s ease,
      visibility 0s linear 0.24s;

    &--open {
      visibility: visible;
      grid-template-rows: 1fr;
      transition-delay: 0s;
    }
  }

  &__filter {
    min-height: 0;
    overflow: hidden;
  }

  &__heading {
    display: flex;
    align-items: center;
    gap: 7px;
    margin: 0 0 12px;
    font-size: 20px;
    font-weight: 700;
    color: var(--primary);
  }

  &__debug {
    margin-bottom: 8px;
    color: #2f589a;
    font-size: 12px;
    font-weight: 600;
  }
}
</style>
