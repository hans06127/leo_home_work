<script lang="ts" setup>
const mockData = <IMajorEventCategory[]>[
  {
    id: '1',
    name: '一般案例',
    list: [
      {
        id: '1',
        no: 'NO001',
        title: 'Sample Event',
        statusCode: 'active',
        status: '進行中',
        isFavorite: false,
        content: 'This is a sample event content.',
        isSpecial: true,
        createdDate: '2023-01-01',
        updatedDate: '2023-01-01',
        dept: 'Department A'
      }
    ]
  },
  {
    id: '2',
    name: '特殊案例',
    list: []
  }
]

const currentCategoryId = ref('')
const currentEvents = ref<IMajorEventItemForm[]>([])

const handleCategoryClick = (categoryId: string) => {
  currentCategoryId.value = categoryId
  currentEvents.value =
    _.find(mockData, (item: IMajorEventCategory) => item.id === categoryId)?.list || []
}

const handleFavoriteClick = (item: IMajorEventItemForm) => {
  item.isFavorite = !item.isFavorite
}
</script>

<template>
  <section class="system-page-slot major-events" aria-label="重要大事記">
    <div class="major-events__sidebar" aria-label="大事記分類">
      <ul class="major-events__category-list">
        <li v-for="category in mockData" :key="category.id" class="major-events__category">
          <button
            type="button"
            :class="[
              'major-events__category-button',
              { 'major-events__category-button--active': currentCategoryId === category.id }
            ]"
            :aria-pressed="currentCategoryId === category.id"
            @click="handleCategoryClick(category.id)"
          >
            <span class="material-symbols-rounded" aria-hidden="true">folder</span>
            <span class="major-events__category-name"> {{ category.name }}</span>
            <span class="major-events__category-count">{{ category.list.length }}</span>
          </button>
        </li>
      </ul>
    </div>
    <div class="major-events__main">
      <div class="major-events__summary-bar">
        <div>
          <span>搜尋結果：共找到</span>
          <span class="major-events__summary-count">{{ currentEvents.length }}</span>
          <span>筆大事記案件</span>
        </div>
        <div class="major-events__sort">
          <span>排序：</span>
          <el-select></el-select>
        </div>
      </div>
      <div class="major-events__list">
        <div v-for="item in currentEvents" :key="item.id" class="major-event-card">
          <div class="major-event-card__header">
            <div class="major-event-card__badges">
              <div
                :class="[
                  'major-event-card__status',
                  `major-event-card__status--${item.statusCode}`
                ]"
              >
                {{ item.status }}
              </div>
              <div class="major-event-card__special" v-if="item.isSpecial">特殊案件(限閱)</div>
            </div>
            <button
              type="button"
              :class="[
                'major-event-card__favorite',
                { 'major-event-card__favorite--active': item.isFavorite }
              ]"
              :aria-pressed="item.isFavorite"
              :aria-label="item.isFavorite ? '取消收藏' : '加入收藏'"
              @click="handleFavoriteClick(item)"
            >
              <span class="material-symbols-rounded" aria-hidden="true">favorite</span>
            </button>
          </div>

          <div class="major-event-card__title">{{ item.no }} - {{ item.title }}</div>
          <div class="major-event-card__content">{{ item.content }}</div>

          <el-divider />

          <div class="major-event-card__footer">
            <div class="major-event-card__meta">
              <span class="material-symbols-rounded" aria-hidden="true">dataset</span>
              <span>承辦單位：{{ item.dept }}</span>
            </div>
            <div class="major-event-card__meta">
              <span class="material-symbols-rounded" aria-hidden="true">calendar_month</span>
              <span>最後更新：{{ item.updatedDate }}</span>
            </div>
          </div>
          <div class="major-event-card__timeline">大事記時間軸</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.major-events {
  display: flex;
  gap: 20px;
  background-color: initial;

  &__sidebar {
    width: 200px;
    padding: 12px;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    background-color: var(--bg-white);
  }

  &__category-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__category-button {
    display: flex;
    align-items: center;
    gap: 5px;
    width: 100%;
    padding: 10px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: inherit;
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    cursor: pointer;

    &:hover,
    &--active {
      background-color: #f8fafc;
    }
  }

  &__category-name {
    flex: 1;
  }

  &__category-count {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #f1f5f9;
    font-size: 12px;
    text-align: center;
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
    min-width: 0;
  }

  &__summary-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 10px;
    background-color: var(--bg-white);
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    color: #64748b;
  }

  &__summary-count {
    font-weight: bold;
    color: #203349;
    padding: 0 5px;
  }

  &__sort {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;

    :deep(.el-select) {
      width: 140px;
      flex-shrink: 0;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 760px) {
    flex-direction: column;

    &__sidebar {
      width: 100%;
    }

    &__summary-bar {
      align-items: flex-start;
      flex-direction: column;
    }
  }
}

.major-event-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  background-color: var(--bg-white);

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__badges {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__status {
    font-size: 12px;
    border-radius: 6px;
    padding: 2px 10px;

    &--active {
      color: #059669;
      background-color: #ecfdf5;
      border: 1px solid #a7f3d0;
    }

    &--inactive {
      color: #635569;
      background-color: #f1f5f9;
    }
  }

  &__special {
    padding: 2px 10px;
    font-size: 10px;
    font-weight: 700;
    color: #dc2626;
    background-color: #fef2f2;
    border: 1px solid #fecaca;
    border-radius: 50px;
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
    cursor: pointer;

    &--active {
      span.material-symbols-rounded {
        color: #ef4444;
      }
    }

    .material-symbols-rounded {
      color: #cbd5e1;
      font-variation-settings: 'FILL' 1;
    }
  }

  &__title {
    font-size: 16px;
    font-weight: bold;
  }

  &__content {
    font-size: 14px;
    color: #64748b;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    font-size: 12px;
    color: #64748b;
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: 5px;

    .material-symbols-rounded {
      font-size: 16px;
    }
  }

  &__timeline {
    font-size: 12px;
    text-align: right;
  }

  .el-divider {
    margin: 2px 0 !important;
  }
}
</style>
