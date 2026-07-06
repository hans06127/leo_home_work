<script setup lang="ts">
definePageMeta({
  title: '首頁'
})

const mackData = [
  {
    title: '申請專案輸入',
    icon: 'post_add',
    link: '/cases',
    subtitle: '新增/查詢專案輸入申請案件'
  },
  {
    title: '處分案例',
    icon: 'work_history',
    link: '/cases',
    subtitle: '違規產地標示不明'
  },
  {
    title: '海關答聯單',
    icon: 'anchor',
    link: '/cases',
    subtitle: '通關疑義公文與白聯單查詢'
  },
  {
    title: '貿易法規重要函文/函釋',
    icon: 'balance',
    link: '/cases',
    subtitle: '重要法規函釋彙整查詢'
  },
  {
    title: '聲明異議/訴願/行政訴訟',
    icon: 'record_voice_over',
    link: '/cases',
    subtitle: ''
  },
  {
    title: '民眾意見信箱處理',
    icon: 'mail',
    link: '/cases',
    subtitle: '民眾陳情及意見回覆紀錄'
  },
  {
    title: '立法院質詢書面及回應',
    icon: 'chat',
    link: '/cases',
    subtitle: '書面質詢與回應彙整'
  },
  {
    title: '重要大書記',
    icon: 'star',
    link: '/cases',
    subtitle: '重大政策與事件時間軸'
  }
]

const mackNewList = [
  {
    title: '進出口....',
    date: '111年12月15日',
    type: '文件異動',
    id: '/cases',
    description: '我是內文1'
  },
  {
    title: '修正.....',
    date: '111年12月15日',
    type: '系統通知',
    id: '/cases',
    description: '我是內文2'
  },
  {
    title: '修正.....',
    date: '111年12月15日',
    type: '系統通知',
    id: '/cases',
    description: '我是內文3'
  },
  {
    title: '修正.....',
    date: '111年12月15日',
    type: '系統通知',
    id: '/cases',
    description: '我是內文4'
  }
]

const mackLinkList = [
  {
    title: '經濟部國際貿易署',
    link: 'https://www.trade.gov.tw/'
  },
  {
    title: '經濟部智慧財產局',
    link: 'https://www.tipo.gov.tw/'
  },
  {
    title: '經濟部商業司',
    link: 'https://www.moea.gov.tw/MNS/doit/home/Home.aspx'
  },
  {
    title: '經濟部標準檢驗局',
    link: 'https://www.bsmi.gov.tw/wSite/mp?mp=1'
  }
]

const goTo = (link: string) => {
  if (link.startsWith('http')) {
    window.open(link, '_blank', 'noopener,noreferrer')
    return
  }

  navigateTo(link)
}
</script>

<template>
  <section class="system-page-slot home" aria-label="首頁">
    <div class="home__main">
      <div class="home__main-header">
        <p class="home__main-title">貿易業務知識資料庫</p>
      </div>
      <div class="home__main-content">
        <div v-for="item in mackData" :key="item.title" class="home__card" @click="goTo(item.link)">
          <div class="home__card-content">
            <span class="home__card-icon material-symbols-rounded">
              {{ item.icon }}
            </span>
            <span class="home__card-title">
              {{ item.title }}
            </span>
            <span class="home__card-subtitle">
              {{ item.subtitle }}
            </span>
          </div>
          <div class="home__card-link">
            <el-button class="home__card-action" circle color="#f0f5fc">
              <span class="material-symbols-rounded"> arrow_right_alt </span>
            </el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="home__sidebar">
      <div class="home__sidebar-section">
        <p class="home__sidebar-title">異動紀錄</p>
        <div
          v-for="item in mackNewList"
          :key="item.description"
          class="home__sidebar-item home__sidebar-item--news"
          @click="goTo(item.id)"
        >
          <div class="home__new-item-header">
            <span class="home__new-item-type">{{ item.type }}</span>
            <span class="home__new-item-date">{{ item.date }}</span>
          </div>
          <span class="home__new-item-title">{{ item.title }}</span
          ><span class="home__new-item-description">{{ item.description }}</span>
        </div>
      </div>
      <div class="home__sidebar-section">
        <p class="home__sidebar-title">常用連結</p>
        <div
          v-for="item in mackLinkList"
          :key="item.link"
          class="home__sidebar-item home__sidebar-item--link"
          @click="goTo(item.link)"
        >
          <span class="home__link-item-icon material-symbols-rounded"> link </span>
          <p class="home__link-item-title">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.home {
  display: grid;
  gap: 20px;
  margin-bottom: 30px;
  grid-template-columns: minmax(0, 7fr) minmax(0, 3fr);
  padding: 0 50px;

  @media (max-width: 1365px) {
    padding: 0;
  }

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }

  &__main {
    display: flex;
    flex-direction: column;
  }

  &__sidebar {
    display: flex;
    flex-direction: column;
    padding: 0px 20px;
  }

  &__main-header {
    margin-bottom: 16px;
  }

  &__main-title {
    font-size: 32px;
    font-weight: 700;
    color: #2457a7;
    padding-left: 10px;
    margin: 5px 0px;
  }

  &__main-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 991px) {
      grid-template-columns: 1fr;
    }
  }

  &__card {
    display: flex;
    position: relative;
    width: 100%;
    border-radius: 16px;
    padding: 20px 20px 20px;
    margin-bottom: 16px;
    background-color: #ffffff;
    border: 2px solid transparent;
    box-shadow: rgba(44, 63, 90, 0.09) 0px 1px 4px;

    &:hover {
      box-shadow: #2c3f5a26 0px 4px 12px;
      border: 2px solid #2f5d98;
      cursor: pointer;

      .home__card-action {
        background-color: #2f579a;

        span {
          color: #fff;
        }
      }
    }
  }

  &__card-action {
    .material-symbols-rounded {
      color: #657285;
      font-variation-settings:
        'wght' 200,
        'opsz' 20;
    }
  }

  &__card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  &__card-icon {
    height: 52px;
    width: 52px;
    font-size: 24px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2f579a;
    border-radius: 12px;
    margin-bottom: 14px;
  }

  &__card-title {
    font-size: 20px;
    font-weight: bold;
    color: #2f3d50;
    margin-bottom: 4px;
  }

  &__card-subtitle {
    display: block;
    min-height: 20px;
    font-size: 16px;
    line-height: 20px;
    color: #666;
  }

  &__card-link {
    position: absolute;
    right: 16px;
    top: 20px;
  }

  &__sidebar-title {
    font-size: 16px;
    font-weight: 700;
    color: #2c8086;
    margin-bottom: 11px;
  }

  &__sidebar-item {
    background-color: #ffffff;
    cursor: pointer;
  }

  &__sidebar-item--news {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 16px;
    margin-bottom: 16px;
    border-left: 5px solid #0f3f85;
    border-radius: 3px;

    &:hover {
      box-shadow: rgba(44, 63, 90, 0.15) 0px 4px 12px;
      border-style: solid;
      border-color: #0f3f85;
      border-width: 2px 2px 2px 5px;

      cursor: pointer;
    }
  }

  &__new-item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 4px;
  }

  &__new-item-type {
    font-size: 10px;
    color: #566578;
    background-color: #eef2fa;
    padding: 2px 7px;
    border-radius: 20px;
  }

  &__new-item-date {
    font-size: 12px;
    color: #88a5cb;
  }

  &__new-item-title {
    font-size: 14px;
    font-weight: 600;
    color: #2f3d50;
    margin-bottom: 3px;
    line-height: 1.4;
  }

  &__new-item-description {
    display: block;
    font-size: 12px;
    color: #8898aa;
    line-height: 1.4;
    min-height: 20px;
  }

  &__sidebar-item--link {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    padding: 8px 12px;
    border: 2px solid transparent;
    border-radius: 10px;

    &:hover {
      background-color: #e6f0fa;
      border: 2px solid #2f579a;
    }
  }

  &__link-item-icon {
    color: #2c8086;
    padding: 10px;
  }

  &__link-item-title {
    font-size: 16px;
    font-weight: 500;
    color: #2f3d50;
  }
}
</style>
