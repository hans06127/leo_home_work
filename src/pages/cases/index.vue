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

type TabKey = keyof typeof mockTabData

const activeName = ref<TabKey>('export')
const openCategory = ref('')
const activeMenuItemIndex = ref('')
const searchQuery = ref('')

type MenuItem = {
  index: string
  title: string
}

type MenuCategory = {
  categoryId: string
  list: MenuItem[]
}

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

const selectMenuItem = (itemIndex: string) => {
  activeMenuItemIndex.value = itemIndex
  handleSearcher(itemIndex)
}

const triggerFirstItem = (category: MenuCategory) => {
  const firstItem = category.list[0]
  if (!firstItem) {
    activeMenuItemIndex.value = ''
    return
  }

  selectMenuItem(firstItem.index)
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

const handleCategoryOpen = (menuIndex: string) => {
  const category = currentMenus.value[Number(menuIndex) - 1]
  if (!category) return

  openCategory.value = category.categoryId
  triggerFirstItem(category)
}

const handleMenuSelect = (itemIndex: string) => {
  selectMenuItem(itemIndex)
  const category = currentMenus.value.find((menu) =>
    menu.list.some((item) => item.index === itemIndex)
  )
  if (category) openCategory.value = category.categoryId
}

const handleSearcher = (item: string) => {
  console.log('item', item)
}

const search = () => {
  console.log('search', searchQuery.value)
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
    <div class="cases">
      <app-page-header-search
        layout-variant="withTitle"
        title="處分案例"
        title-icon="work_history"
        v-model:search-query="searchQuery"
        search-placeholder="請輸入關鍵字"
        action-icon="tune"
        @search="search"
      />
      <div class="cases__body">
        <div class="cases__sidebar">
          <!-- 左側處分樣態 -->
          <el-radio-group
            v-model="activeName"
            size="large"
            class="cases__sidebar-radio-group"
            fill="var(--primary)"
          >
            <el-radio-button :value="tab.value" v-for="tab in tabs" :key="tab.value">
              {{ tab.label }}
            </el-radio-button>
          </el-radio-group>

          <div class="case-sidebar-nav">
            <div class="case-sidebar-nav__header">主要類別</div>
            <el-menu
              :default-active="activeMenuItemIndex"
              :default-openeds="['1']"
              :key="activeName"
              @open="handleCategoryOpen"
              @select="handleMenuSelect"
            >
              <el-sub-menu
                v-for="(menu, index) in currentMenus"
                :index="String(index + 1)"
                :key="menu.categoryId"
                :class="[
                  'case-sidebar-nav__category',
                  { 'case-sidebar-nav__category--active': openCategory === menu.categoryId }
                ]"
              >
                <template #title>
                  <div class="case-sidebar-nav__category-title">
                    <span class="material-symbols-rounded"> {{ menu.icon }} </span>
                    <span class="case-sidebar-nav__category-label">
                      {{ menu.categoryName }}
                    </span>
                    <span class="case-sidebar-nav__category-count">{{ menu.list.length }}</span>
                  </div>
                </template>

                <el-menu-item v-for="item in menu.list" :key="item.title" :index="item.index">
                  <div class="case-sidebar-nav__item">
                    <span>
                      {{ item.title }}
                    </span>
                    <span>
                      {{ item.count }}
                    </span>
                  </div>
                </el-menu-item>
              </el-sub-menu>
            </el-menu>
          </div>
        </div>
        <div class="cases__content">
          <!-- 右側內文 -->
          <div>套用組件</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.system-page-slot {
  display: flex;
}

.cases {
  --cases-sidebar-width: 260px;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;

  &__body {
    display: grid;
    grid-template-columns: var(--cases-sidebar-width) minmax(0, 1fr);
    gap: 15px;
    flex: 1;
    min-height: 0;
    padding: 10px;
  }

  &__sidebar {
    background-color: var(--bg-tree);
    min-height: 0;
    padding: 20px;
    border-radius: 10px 0 0 10px;
  }

  &__sidebar-radio-group {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    gap: 10px;

    :deep(.el-radio-button) {
      width: 100%;
    }

    :deep(.el-radio-button__inner) {
      display: block;
      width: 100%;
      border-radius: 20px !important;
      text-align: center;
    }
  }
}

.case-sidebar-nav {
  padding: 10px 0;

  :deep(.el-menu) {
    background-color: transparent !important;
    border-right: 0;
  }

  :deep(.el-menu--inline) {
    padding-left: 10px !important;
    margin-top: 5px;
  }

  :deep(.el-menu-item) {
    padding-left: 8px !important;
    padding-right: 0 !important;

    border-left: 1px solid var(--bdr);
    color: #647284;
    height: 40px;
    position: relative;
  }

  :deep(.el-menu-item.is-active) {
    &::before {
      content: '';
      position: absolute;
      left: -1.5px;
      top: 4px;
      bottom: 4px;
      width: 2.5px;
      background: var(--primary);
    }

    .case-sidebar-nav__item {
      background-color: var(--bg-white) !important;
      font-weight: 600;

      :first-child {
        color: #0f3f89 !important;
      }
    }
  }

  :deep(.el-sub-menu__title) {
    color: #533d50;
    height: 44px;
    font-size: 15px;
    font-weight: 600;
    padding: 0 35px 0 0 !important;
    box-sizing: border-box;
  }

  &__header {
    font-size: 12px;
    font-weight: 700;
    color: var(--tx-light);
    letter-spacing: 0.3px;
    padding-top: 10px;
  }

  &__category {
    &--active {
      :deep(.el-sub-menu__title) {
        color: #0f3f89;
        font-weight: 600;
        background-color: var(--bg-white);
        border: 1.5px solid #0f3f89;
        border-radius: 4px;
      }
    }
  }

  &__category-title {
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 0;
    gap: 8px;
    padding-left: 5px;

    :first-child {
      font-variation-settings: 'FILL' 1;
    }
  }

  &__category-label {
    flex: 1;
    min-width: 0;
  }

  &__category-count {
    font-size: 12px;
    color: var(--tx-light);
    margin-left: auto;
    flex-shrink: 0;
  }

  &__item {
    width: 100%;
    height: 20px;
    box-sizing: content-box;
    padding: 8px 10px !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
  }
}
</style>
