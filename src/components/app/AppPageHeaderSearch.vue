<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string
    titleIcon?: string
    hasQuery?: boolean
    searchQuery?: string
    searchPlaceholder?: string
    searchIcon?: string
    actionIcon?: string
    actionButtonColor?: string
  }>(),
  {
    title: '',
    titleIcon: '',
    hasQuery: true,
    searchPlaceholder: '請輸入關鍵字',
    searchIcon: 'search',
    actionIcon: 'tune',
    actionButtonColor: '#2f3d50'
  }
)

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
  <div class="app-page-header-search">
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
      />
      <el-button
        type="primary"
        text
        size="small"
        :style="{ color: props.actionButtonColor }"
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
  padding: 5px 10px;
  border-radius: 50px;
  background-color: var(--bg-white);
  border: 1px solid #cbcbcb;

  &:hover {
    border-color: var(--primary);
    box-shadow: #2c3f5a26 0px 4px 12px;
  }

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
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 2px 10px;

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

  &__search-icon {
    color: #354356;
    background-color: #e7ebff;
    border-radius: 50%;
    padding: 5px;
  }
}
</style>
