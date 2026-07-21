<script setup lang="ts">
import { ElMessage } from 'element-plus'

definePageMeta({
  title: '首頁'
})

const mockData = [
  {
    title: '處分案例',
    img: 'icon-001.png',
    link: '/cases',
    subtitle: '違規產地標示不明',
    id: '000-001'
  },
  {
    title: '海關答聯單',
    img: 'icon-002.png',
    link: '/customsReplies',
    subtitle: '通關疑義公文與白聯單查詢',
    id: '000-002'
  },
  {
    title: '聲明異議/訴願/行政訴訟',
    img: 'icon-003.png',
    link: '',
    subtitle: '',
    id: '000-003'
  },
  {
    title: '民眾意見信箱處理',
    img: 'icon-004.png',
    link: '',
    subtitle: '民眾陳情及意見回覆紀錄',
    id: '000-004'
  }
]

const mockNewList = [
  {
    title: '114年度貿易法規教育訓練開放報名',
    date: '111/06/20',
    type: '公告',
    id: '000-001',
    description: '請各單位業務同仁踴躍報名參加，報名截止日為7月10日。'
  },
  {
    title: '「原產地認定標準」修正草案預告',
    date: '111/06/15',
    type: '公告',
    id: '000-002',
    description: '修正重點為簡易加工之實質轉型認定基準，歡迎提供意見。'
  },
  {
    title: '海關稅則查詢系統維護通知',
    date: '111/04/02',
    type: '宣導',
    id: '000-003',
    description: '系統將於本週六凌晨進行例行維護，屆時將暫停服務2小時。'
  }
]

const searchQuery = ref('')

const search = () => {
  console.log('search', searchQuery.value)
}

const goTo = (link: string) => {
  if (!link) {
    ElMessage({
      message: '尚未開放',
      type: 'warning'
    })
    return
  }
  if (link.startsWith('http')) {
    window.open(link, '_blank', 'noopener,noreferrer')
    return
  }

  navigateTo(link)
}
</script>

<template>
  <section class="system-page-slot home" aria-label="首頁">
    <h1 class="home__title">貿易業務知識資料庫</h1>
    <app-page-header-search
      layout-variant="compact"
      v-model:search-query="searchQuery"
      class="home__search"
      search-placeholder="請輸入關鍵字"
      action-icon="tune"
      @search="search"
    />
    <div class="home__card-list">
      <div v-for="item in mockData" :key="item.title" class="home-card" @click="goTo(item.link)">
        <div class="home-card__title">{{ item.title }}</div>
        <div class="home-card__subtitle">{{ item.subtitle }}</div>
        <div class="home-card__footer">
          <div class="home-card__image">
            <img :src="`/images/${item.img}`" :alt="item.title" />
          </div>
          <div class="home-card__icon">
            <span class="material-symbols-rounded">arrow_circle_right</span>
          </div>
        </div>
      </div>
    </div>
    <div class="home__news-header">
      <div class="home__news-title">最新發布訊息</div>
      <div class="home__news-more" text>
        <span>更多</span>
        <span class="material-symbols-rounded">chevron_right</span>
      </div>
    </div>
    <div class="home__news-list">
      <div v-for="item in mockNewList" :key="item.id" class="home-news-card">
        <div class="home-news-card__header">
          <span class="home-news-card__type">{{ item.type }}</span>
          <span class="home-news-card__date">{{ item.date }}</span>
        </div>
        <div class="home-news-card__title">{{ item.title }}</div>
        <div class="home-news-card__description">{{ item.description }}</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  padding: 36px 80px;
  border-radius: 28px;
  overflow-x: hidden;
  backdrop-filter: blur(36px) saturate(110%);
  -webkit-backdrop-filter: blur(36px) saturate(110%);
  border: 2px solid var(--bg-white);
  box-shadow: 0 20px 60px rgba(30, 60, 100, 0.1);
  background:
    rgba(255, 255, 255, 0.62) padding-box,
    linear-gradient(120deg, var(--grad-start), var(--grad-end)) border-box;

  &__title {
    margin: 0 0 24px;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    background: var(--grad);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  &__search {
    width: min(100%, 680px);
  }

  &__card-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 22px;
    width: 100%;
    margin-top: 35px;
  }

  &__news-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 10px 0;
  }

  &__news-title {
    font-size: 14px;
    font-weight: 700;
    color: var(--tx-main);
  }

  &__news-more {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 13px;
    color: var(--tx-mid);
    cursor: pointer;

    &:hover {
      color: var(--primary);
    }
  }

  &__news-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    width: 100%;
  }

  @media (max-width: 760px) {
    justify-content: flex-start;
    padding: 28px 20px;
    border-radius: 20px;

    &__title {
      font-size: 26px;
    }

    &__card-list {
      grid-template-columns: 1fr;
      gap: 14px;
      margin-top: 24px;
    }

    &__news-list {
      grid-template-columns: 1fr;
    }
  }
}

.home-card {
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--bg-white);
  border-radius: 18px;
  padding: 22px 22px 20px;
  min-height: 188px;
  cursor: pointer;
  transition:
    box-shadow 0.2s ease,
    transform 0.17s ease,
    background 0.6s ease;
  position: relative;
  box-shadow: 0 1px 4px rgba(44, 63, 90, 0.09);
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 18px rgba(44, 63, 90, 0.14);
    background:
      linear-gradient(var(--bg-white), var(--bg-white)) padding-box,
      linear-gradient(120deg, var(--grad-start), var(--grad-end), var(--grad-start)) border-box;
    background-size:
      100% 100%,
      300% 300%;
    animation: homeCardBorderFlow 3s ease infinite;

    img {
      transform: scale(1.08) translateY(-2px);
    }

    .home-card__icon {
      span {
        color: var(--primary);
        font-variation-settings: 'FILL' 1;
      }
    }
  }

  &__title {
    font-size: 18px;
    font-weight: 700;
    color: var(--tx-main);
    margin-bottom: 4px;
    line-height: 1.4;
  }

  &__subtitle {
    font-size: 13.5px;
    color: var(--tx-mid);
    line-height: 1.5;
  }

  &__footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 14px;
  }

  &__image {
    width: 80px;
    height: 80px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.25s ease;
    }
  }

  &__icon {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 40px;
    height: 40px;
    flex-shrink: 0;

    span {
      position: relative;
      flex-shrink: 0;
      color: #cdcdcd;
      transform: rotate(-45deg);
    }
  }
}

.home-news-card {
  flex: 1;
  min-width: 0;
  background: var(--bg-white);
  border-radius: 4px;
  padding: 16px 16px;
  box-shadow: 0 1px 4px rgba(44, 63, 90, 0.09);
  cursor: pointer;
  transition: box-shadow 0.12s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(44, 63, 90, 0.15);
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  &__type {
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
    padding: 3px 12px;
    border-radius: 20px;
    border: 1px solid var(--teal);
    color: var(--teal);
    background: none;
  }

  &__date {
    font-size: 11px;
    color: var(--tx-light);
  }

  &__title {
    font-size: 14px;
    font-weight: 600;
    color: var(--tx-main);
    margin-bottom: 4px;
    line-height: 1.4;
  }

  &__description {
    font-size: 12px;
    color: var(--tx-light);
    line-height: 1.5;
  }
}

@keyframes homeCardBorderFlow {
  0% {
    background-position:
      0 0,
      0% 50%;
  }

  50% {
    background-position:
      0 0,
      100% 50%;
  }

  100% {
    background-position:
      0 0,
      0% 50%;
  }
}
</style>
