<script setup lang="ts">
definePageMeta({
  title: '裁罰案例'
})

const tabs = [
  { label: '出口', value: 'export' },
  { label: '進口', value: 'import' }
]

const mockTabData = {
  export: [
    {
      categoryId: '1',
      categoryName: '產品',
      icon: 'inventory_2',
      list: [
        {
          title: '產地標示不實',
          id: '1-1',
          items: []
        },
        {
          title: '誤認產地',
          id: '1-2',
          items: []
        },
        {
          title: '國貨標示他國',
          id: '1-3',
          items: []
        },
        {
          title: '他國產地標示台灣',
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
          datas: []
        }
      ]
    }
  ]
}

const activeName = ref<DipositionCasesManagerTabKey>('export')
const openCategory = ref('')
const activeMenuItemIndex = ref('')
const searchQuery = ref('')

const currentMenus = computed(() =>
  mockTabData[activeName.value].map((menu, menuIndex) => ({
    categoryId: menu.categoryId,
    categoryName: menu.categoryName,
    icon: 'icon' in menu ? menu.icon : 'inventory_2',
    list: menu.list.map((item, itemIndex) => ({
      title: item.title,
      index:
        'id' in item && item.id ? item.id : `${menu.categoryId || menuIndex + 1}-${itemIndex + 1}`,
      count: 'items' in item ? item.items.length : 'datas' in item ? item.datas.length : 0
    }))
  }))
)

const triggerFirstItem = (category: IDipositionCasesManagerMenuCategory) => {
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
            <span>{{ activeMenuItem?.title || activeCategory?.categoryName }}</span>
          </div>
          <div class="cases__results">
            <div class="case-manager-card">
              <div class="case-manager-card__meta">
                <div class="case-manager-card__field"></div>
                <div class="case-manager-card__field"></div>
                <div class="case-manager-card__field"></div>
                <div class="case-manager-card__field"></div>
              </div>
              <div class="case-manager-card__summary"></div>
              <div class="case-manager-card__related"></div>
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

.case-manager-card {
  padding: 18px 24px;
  background-color: var(--bg-white);
  border: 1px solid #cbcbcb;
  border-radius: 5px;

  &__meta {
    display: grid;
    grid-template-columns: 72px 1fr 72px 1fr;
    gap: 5px 10px;
    margin-bottom: 12px;
    font-size: 14px;
  }

  &__field,
  &__summary,
  &__related {
    min-height: 20px;
  }

  &__summary {
    margin-bottom: 12px;
  }
}
</style>
