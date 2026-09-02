<script setup lang="ts">
const layoutVariantClassMap: Record<AppPageHeaderLayoutVariant, string> = {
  compact: 'compact',
  withTitle: 'with-title'
}

const props = withDefaults(
  defineProps<{
    layoutVariant?: AppPageHeaderLayoutVariant
    title?: string
    titleIcon?: string
    hasQuery?: boolean
    searchQuery?: string
    searchPlaceholder?: string
    searchIcon?: string
  }>(),
  {
    layoutVariant: 'withTitle',
    title: '',
    titleIcon: '',
    hasQuery: true,
    searchQuery: '',
    searchPlaceholder: '請輸入關鍵字',
    searchIcon: 'search'
  }
)

// 依版型產生容器的 BEM modifier class
const containerClass = computed(() => [
  'app-page-header-search',
  `app-page-header-search--${layoutVariantClassMap[props.layoutVariant]}`
])

const emit = defineEmits<{
  (e: 'update:searchQuery', value: string): void
  (e: 'search'): void
}>()

// 將搜尋文字同步回父層
const handleSearchQueryUpdate = (value: string): void => {
  emit('update:searchQuery', value)
}

// 清空父層的搜尋文字
const handleClearSearchQuery = (): void => {
  emit('update:searchQuery', '')
}

// 通知父層執行搜尋
const handleSearch = (): void => {
  emit('search')
}
</script>

<template>
  <div :class="containerClass">
    <div class="app-page-header-search__title" v-if="props.title || props.titleIcon">
      <span class="material-symbols-rounded" aria-hidden="true" v-if="props.titleIcon">
        {{ props.titleIcon }}
      </span>
      <h1 v-if="props.title" class="app-page-header-search__heading">{{ props.title }}</h1>
    </div>
    <div v-if="props.hasQuery" class="app-page-header-search__search-field">
      <span class="material-symbols-rounded app-page-header-search__search-icon" aria-hidden="true">
        {{ props.searchIcon }}
      </span>
      <el-input
        :model-value="props.searchQuery"
        aria-label="搜尋關鍵字"
        :placeholder="props.searchPlaceholder"
        @update:model-value="handleSearchQueryUpdate"
        @keyup.enter="handleSearch"
      />

      <!-- 垂直分隔線 -->
      <span class="app-page-header-search__divider"></span>
      <el-button
        v-if="props.searchQuery"
        circle
        color="#e7ebff"
        aria-label="清除搜尋關鍵字"
        class="app-page-header-search__action-button app-page-header-search__action-button--clear"
        @click="handleClearSearchQuery"
      >
        <span class="material-symbols-rounded" aria-hidden="true">close</span>
      </el-button>

      <!--TODO: 應該是主題的漸層 -->
      <el-button
        color="#304ca0"
        circle
        aria-label="搜尋"
        class="app-page-header-search__action-button"
        @click="handleSearch"
      >
        <span class="material-symbols-rounded"> tune </span>
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-page-header-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  &__title {
    display: flex;
    align-items: center;
    color: #2e6096;
  }

  &__heading {
    margin-left: 10px;
    font-size: 24px;
  }

  &__search-field {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 420px;
    padding: 6px 10px;
    border: 1px solid #cbcbcb;
    border-radius: 50px;
    background-color: var(--bg-white);

    &:hover {
      border-color: var(--primary);
      box-shadow: #2c3f5a26 0px 4px 12px;
    }

    .el-input {
      flex: 1;
      min-width: 140px;

      :deep(.el-input__wrapper) {
        box-shadow: none !important;

        input:focus {
          border: 3px solid #c8d5e9;
          border-radius: 8px;
        }
      }
    }
  }

  &__action-button {
    &--clear {
      color: var(--tx-main);
    }
  }

  &__divider {
    width: 1px;
    height: 20px;
    background-color: #cbcbcb;
    margin-right: 8px;
  }

  &__search-icon {
    color: #354356;
    background-color: #e7ebff;
    border-radius: 50%;
    padding: 5px;
  }

  &--compact {
    .app-page-header-search__search-field {
      max-width: 100%;
    }
  }

  &--with-title {
    .app-page-header-search__search-field {
      max-width: 520px;
    }
  }
}
</style>
