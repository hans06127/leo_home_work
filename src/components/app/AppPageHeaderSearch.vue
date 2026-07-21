<script setup lang="ts">
type LayoutVariant = 'compact' | 'withTitle'
type ActionTone = 'main' | 'primary' | 'subtle'

const props = withDefaults(
  defineProps<{
    layoutVariant?: LayoutVariant
    title?: string
    titleIcon?: string
    hasQuery?: boolean
    searchQuery?: string
    searchPlaceholder?: string
    searchIcon?: string
    actionIcon?: string
    showAction?: boolean
    actionTone?: ActionTone
  }>(),
  {
    layoutVariant: 'withTitle',
    title: '',
    titleIcon: '',
    hasQuery: true,
    searchQuery: '',
    searchPlaceholder: '請輸入關鍵字',
    searchIcon: 'search',
    actionIcon: 'tune',
    showAction: true,
    actionTone: 'main'
  }
)

const containerClass = computed(() => [
  'app-page-header-search',
  `app-page-header-search--${props.layoutVariant}`
])

const actionClass = computed(() => [
  'app-page-header-search__action-button',
  `app-page-header-search__action-button--${props.actionTone}`
])

const emit = defineEmits<{
  (e: 'update:searchQuery', value: string): void
  (e: 'search'): void
}>()

const handleSearchQueryUpdate = (value: string) => {
  emit('update:searchQuery', value)
}

const handleSearch = () => {
  emit('search')
}
</script>

<template>
  <div :class="containerClass">
    <div class="app-page-header-search__title" v-if="props.title || props.titleIcon">
      <span class="material-symbols-rounded" v-if="props.titleIcon"> {{ props.titleIcon }} </span>
      <h1 v-if="props.title">{{ props.title }}</h1>
    </div>
    <div v-if="props.hasQuery" class="app-page-header-search__input-wrap">
      <span class="material-symbols-rounded app-page-header-search__search-icon">
        {{ props.searchIcon }}
      </span>
      <el-input
        :model-value="props.searchQuery"
        :placeholder="props.searchPlaceholder"
        @update:model-value="handleSearchQueryUpdate"
        @keyup.enter="handleSearch"
      />
      <el-button
        v-if="props.showAction"
        type="primary"
        text
        size="small"
        :class="actionClass"
        @click="handleSearch"
      >
        <span class="material-symbols-rounded">{{ props.actionIcon }}</span>
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

    h1 {
      margin-left: 10px;
      font-size: 24px;
    }
  }

  &__input-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
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

    .app-page-header-search__action-button {
      border-left: 2px solid #cbcbcb;
      border-radius: initial;

      &--main {
        color: var(--tx-main);
      }

      &--primary {
        color: var(--primary);
      }

      &--subtle {
        color: var(--tx-mid);
      }
    }
  }

  &__search-icon {
    color: #354356;
    background-color: #e7ebff;
    border-radius: 50%;
    padding: 5px;
  }

  &--compact {
    .app-page-header-search__input-wrap {
      max-width: 100%;
    }
  }

  &--withTitle {
    .app-page-header-search__input-wrap {
      max-width: 520px;
    }
  }
}
</style>
