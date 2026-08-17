<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tabs?: IAppPageSidebarTab[]
    activeTab?: string
    header?: string
    menus?: IAppPageSidebarMenu[]
    items?: IAppPageSidebarItem[]
    activeItem?: string
    openCategory?: string
    mode?: 'menu' | 'list'
  }>(),
  {
    tabs: () => [],
    activeTab: '',
    header: '',
    menus: () => [],
    items: () => [],
    activeItem: '',
    openCategory: '',
    mode: 'menu'
  }
)

const emit = defineEmits<{
  (e: 'update:activeTab', value: string): void
  (e: 'update:activeItem', value: string): void
  (e: 'update:openCategory', value: string): void
}>()

const openMenuIndex = computed(() => {
  const index = props.menus.findIndex((menu) => menu.categoryId === props.openCategory)
  return index >= 0 ? String(index + 1) : '1'
})

const selectFirstItem = (menu: IAppPageSidebarMenu) => {
  const firstItem = menu.list[0]
  emit('update:activeItem', firstItem?.index || '')
}

const handleCategoryOpen = (menuIndex: string) => {
  const menu = props.menus[Number(menuIndex) - 1]
  if (!menu) return

  emit('update:openCategory', menu.categoryId)
  selectFirstItem(menu)
}

const handleMenuSelect = (itemIndex: string) => {
  emit('update:activeItem', itemIndex)

  const menu = props.menus.find((menu) => menu.list.some((item) => item.index === itemIndex))
  if (menu) emit('update:openCategory', menu.categoryId)
}
</script>

<template>
  <aside class="app-page-sidebar">
    <el-radio-group
      v-if="tabs.length"
      :model-value="activeTab"
      size="large"
      class="app-page-sidebar__tabs"
      fill="var(--primary)"
      @update:model-value="emit('update:activeTab', String($event))"
    >
      <el-radio-button v-for="tab in tabs" :key="tab.value" :value="tab.value">
        {{ tab.label }}
      </el-radio-button>
    </el-radio-group>

    <div v-if="header" class="app-page-sidebar__header">{{ header }}</div>

    <el-menu
      v-if="mode === 'menu'"
      :default-active="activeItem"
      :default-openeds="[openMenuIndex]"
      :key="`${activeTab}-${openCategory}`"
      class="app-page-sidebar__menu"
      @open="handleCategoryOpen"
      @select="handleMenuSelect"
    >
      <el-sub-menu
        v-for="(menu, index) in menus"
        :key="menu.categoryId || index"
        :index="String(index + 1)"
        :class="[
          'app-page-sidebar__category',
          { 'app-page-sidebar__category--active': openCategory === menu.categoryId }
        ]"
      >
        <template #title>
          <div class="app-page-sidebar__category-title">
            <span class="material-symbols-rounded app-page-sidebar__category-icon" aria-hidden="true">
              {{ menu.icon || 'inventory_2' }}
            </span>
            <span class="app-page-sidebar__category-label">{{ menu.categoryName }}</span>
            <span class="app-page-sidebar__category-count">{{ menu.list.length }}</span>
          </div>
        </template>

        <el-menu-item v-for="item in menu.list" :key="item.index" :index="item.index">
          <div class="app-page-sidebar__menu-item">
            <span class="app-page-sidebar__item-label">{{ item.title }}</span>
            <span class="app-page-sidebar__item-count">{{ item.count ?? 0 }}</span>
          </div>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>

    <ul v-else class="app-page-sidebar__list">
      <li v-for="item in items" :key="item.index">
        <button
          type="button"
          :class="[
            'app-page-sidebar__list-item',
            { 'app-page-sidebar__list-item--active': item.index === activeItem }
          ]"
          @click="emit('update:activeItem', item.index)"
        >
          <span class="material-symbols-rounded" aria-hidden="true">{{ item.icon || 'folder' }}</span>
          <span class="app-page-sidebar__item-label">{{ item.title }}</span>
          <span class="app-page-sidebar__list-count">{{ item.count ?? 0 }}</span>
        </button>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
.app-page-sidebar {
  display: flex;
  flex-direction: column;
  width: 260px;
  min-height: 0;
  padding: 20px;
  background-color: var(--bg-tree);
  border-radius: 10px;

  &__tabs {
    width: 100%;
    display: flex;

    :deep(.el-radio-button) {
      flex: 1;
      min-width: 0;
    }

    :deep(.el-radio-button__inner) {
      width: 100%;
    }
  }

  &__header {
    padding-top: 10px;
    margin-bottom: 10px;
    font-size: 12px;
    font-weight: 700;
    color: var(--tx-light);
    letter-spacing: 0.3px;
  }

  &__menu {
    background-color: transparent !important;
    border-right: 0;
  }

  :deep(.el-menu--inline) {
    padding-left: 10px !important;
    margin-top: 5px;
  }

  :deep(.el-menu-item) {
    position: relative;
    height: 40px;
    padding-left: 8px !important;
    padding-right: 0 !important;
    color: #647284;
    border-left: 1px solid var(--bdr);
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

    .app-page-sidebar__menu-item {
      background-color: var(--bg-white) !important;
      font-weight: 600;
    }

    .app-page-sidebar__item-label {
      color: #0f3f89 !important;
    }
  }

  :deep(.el-sub-menu__title) {
    height: 44px;
    padding: 0 35px 0 0 !important;
    box-sizing: border-box;
    font-size: 15px;
    font-weight: 600;
    color: #533d50;
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

  &__category-title,
  &__menu-item,
  &__list-item {
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 0;
  }

  &__category-title {
    gap: 8px;
    padding-left: 5px;
  }

  &__category-icon {
    font-variation-settings: 'FILL' 1;
  }

  &__category-label,
  &__item-label {
    flex: 1;
    min-width: 0;
    overflow-wrap: anywhere;
  }

  &__category-count,
  &__item-count {
    flex-shrink: 0;
    margin-left: auto;
    font-size: 12px;
    color: var(--tx-light);
  }

  &__menu-item {
    justify-content: space-between;
    height: 20px;
    padding: 8px 10px !important;
    border-radius: 5px;
    box-sizing: content-box;
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__list-item {
    gap: 10px;
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
      color: var(--primary);
      background-color: var(--bg-white);
      border: 1px solid var(--primary);
      font-weight: 700;

      .app-page-sidebar__list-count {
        color: var(--bg-white);
        background-color: var(--primary);
      }
    }
  }

  &__list-count {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    background-color: #e1e1e1;
    border-radius: 50%;
    font-weight: 700;
    color: var(--tx-main);
  }
}
</style>
