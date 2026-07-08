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
const openSubMenuIndex = ref('1')
const activeMenuItemIndex = ref('')
const searchQuery = ref('')

const getCurrentMenus = () => mockTabData[activeName.value] ?? []
const currentMenus = computed(() =>
  getCurrentMenus().map((menu, menuIndex) => ({
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

const triggerFirstItem = (category: { list: Array<{ index: string; title: string }> }) => {
  const firstItem = category.list[0]
  if (!firstItem) {
    activeMenuItemIndex.value = ''
    return
  }

  activeMenuItemIndex.value = firstItem.index
  handleSearcher(firstItem.index)
}

const initFirstCategory = () => {
  const menus = currentMenus.value
  const firstCategory = menus[0]

  if (!firstCategory) {
    openCategory.value = ''
    openSubMenuIndex.value = ''
    activeMenuItemIndex.value = ''
    return
  }

  openCategory.value = firstCategory.categoryId
  openSubMenuIndex.value = '1'
  triggerFirstItem(firstCategory)
}

const handleCategoryClick = (
  categoryId: string,
  menuIndex: number,
  category: { list: Array<{ index: string; title: string }> }
) => {
  openCategory.value = categoryId
  openSubMenuIndex.value = String(menuIndex + 1)
  triggerFirstItem(category)
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
  <section class="system-page-slot" aria-label="頁面內容">
    <div class="cases">
      <div class="cases__header">
        <div class="cases__header-title">
          <span class="material-symbols-rounded"> work_history </span>
          <h1>處分案例</h1>
        </div>
        <div class="cases__header-search">
          <span class="material-symbols-rounded cases__header-search-icon"> search </span>
          <el-input placeholder="請輸入關鍵字" v-model="searchQuery" />
          <el-button type="primary" @click="search" text size="small" color="#2f3d50">
            <span class="material-symbols-rounded">tune </span>
          </el-button>
        </div>
      </div>
      <div class="cases__body">
        <div class="cases__sidebar">
          <!-- 左側處分樣態 -->
          <el-radio-group
            v-model="activeName"
            size="large"
            class="cases__sidebar-radio-group"
            fill="#0f3f85"
          >
            <el-radio-button :value="tab.value" v-for="tab in tabs" :key="tab.value">
              {{ tab.label }}
            </el-radio-button>
          </el-radio-group>

          <div class="cases__sidebar-menu">
            <div class="cases__sidebar-menu-header">主要類別</div>
            <el-menu
              :default-active="activeMenuItemIndex"
              :default-openeds="openSubMenuIndex ? [openSubMenuIndex] : []"
              :unique-opened="true"
              :key="`${activeName}-${openSubMenuIndex}`"
            >
              <el-sub-menu
                v-for="(menu, index) in currentMenus"
                :index="String(index + 1)"
                :key="menu.categoryId"
                :class="[
                  'cases__sidebar-menu-category',
                  { 'cases__sidebar-menu-category--active': openCategory === menu.categoryId }
                ]"
              >
                <template #title>
                  <div
                    class="cases__sidebar-menu-category-title"
                    @click="handleCategoryClick(menu.categoryId, index, menu)"
                  >
                    <span class="material-symbols-rounded"> {{ menu.icon }} </span>
                    <span class="cases__sidebar-menu-category-label">
                      {{ menu.categoryName }}
                    </span>
                    <span class="cases__sidebar-menu-category-count">{{ menu.list.length }}</span>
                  </div>
                </template>

                <el-menu-item
                  v-for="item in menu.list"
                  :key="item.title"
                  :index="item.index"
                  @click="handleSearcher(item.index)"
                >
                  <div class="cases__sidebar-menu-item">
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

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 30px;

    @media (max-width: 991px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }

  &__header-title {
    display: flex;
    align-items: center;
    color: #2e6096;

    h1 {
      margin-left: 10px;
      font-size: 24px;
    }
  }

  &__header-search {
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #cbcbcb;
    border-radius: 20px;
    padding: 6px 10px;

    &:hover {
      border-color: #0f3f85;
      box-shadow: #2c3f5a26 0px 4px 12px;
    }

    .el-input {
      min-width: 200px;
      :deep(.el-input__wrapper) {
        box-shadow: none !important;

        input:focus {
          border: 3px solid #c8d5e9;
          border-radius: 8px;
        }
      }
    }

    .el-button {
      border-left: 2px solid #cbcbcb;
      border-radius: initial;
    }
  }

  &__header-search-icon {
    color: #354356;
    background-color: #e7ebff;
    border-radius: 50%;
    padding: 5px;
  }

  &__sidebar {
    background-color: #ebf1f7;
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

  &__sidebar-menu {
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

      border-left: 1px solid #d8e2ee;
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
        background: #0f3f85;
      }
      .cases__sidebar-menu-item {
        background-color: #ffffff !important;
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
  }

  &__sidebar-menu-header {
    font-size: 12px;
    font-weight: 700;
    color: #8898aa;
    letter-spacing: 0.3px;
    padding-top: 10px;
  }

  &__sidebar-menu-category {
    &--active {
      :deep(.el-sub-menu__title) {
        color: #0f3f89;
        font-weight: 600;
        background-color: #ffffff;
        border: 1.5px solid #0f3f89;
        border-radius: 4px;
      }
    }
  }

  &__sidebar-menu-category-title {
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

  &__sidebar-menu-category-label {
    flex: 1;
    min-width: 0;
  }

  &__sidebar-menu-category-count {
    font-size: 12px;
    color: #8898aa;
    margin-left: auto;
    flex-shrink: 0;
  }

  &__sidebar-menu-item {
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
