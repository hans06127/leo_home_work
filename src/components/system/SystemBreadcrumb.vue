<script setup lang="ts">
import { featureCards } from '@/constants/navigation'

interface BreadcrumbItem {
  label: string
  to?: string
}

const route = useRoute()

const sectionLabels: Record<string, string> = {
  casesManager: '案例管理'
}

const actionLabels: Record<string, string> = {
  add: '新增',
  delete: '刪除',
  edit: '修改',
  view: '檢視'
}

const breadcrumbs = computed<BreadcrumbItem[]>(() => {
  const segments = route.path.split('/').filter(Boolean)
  const moduleItem = featureCards.find(({ to }) => to === `/${segments[0]}`)

  if (!moduleItem) return []

  const items: BreadcrumbItem[] = [
    { label: '首頁', to: '/home' },
    { label: moduleItem.title, to: moduleItem.to }
  ]
  const section = segments[1]
  const sectionLabel =
    section && (sectionLabels[section] ?? (section.endsWith('Process') ? '處理程序管理' : ''))

  if (sectionLabel) {
    items.push({ label: sectionLabel, to: `${moduleItem.to}/${section}` })
  }

  const action = sectionLabel ? segments[2] : section
  const actionLabel = action ? actionLabels[action] : undefined

  if (actionLabel) items.push({ label: actionLabel })

  return items
})
</script>

<template>
  <nav v-if="breadcrumbs.length" class="system-breadcrumb" aria-label="麵包屑">
    <ol class="system-breadcrumb__list">
      <li v-for="(item, index) in breadcrumbs" :key="item.label" class="system-breadcrumb__item">
        <NuxtLink
          v-if="index < breadcrumbs.length - 1 && item.to"
          class="system-breadcrumb__link"
          :to="item.to"
        >
          {{ item.label }}
        </NuxtLink>
        <span v-else class="system-breadcrumb__current" aria-current="page">{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped lang="scss">
.system-breadcrumb {
  margin-bottom: 12px;
  overflow-x: auto;
  color: var(--tx-mid);
  font-size: 14px;

  &__list {
    display: flex;
    align-items: center;
    min-width: max-content;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    display: flex;
    align-items: center;

    & + &::before {
      margin: 0 8px;
      color: var(--tx-light);
      content: '>';
    }
  }

  &__link {
    color: var(--primary);
    text-decoration: none;

    &:hover,
    &:focus-visible {
      text-decoration: underline;
    }
  }

  &__current {
    color: var(--tx-main);
    font-weight: 600;
  }
}
</style>
