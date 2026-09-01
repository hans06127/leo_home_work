<script setup lang="ts">
definePageMeta({
  title: '民眾意見信箱處理'
})

const mockData = {
  title: '檢舉進口貨品標示疑義',
  caseNo: 'PO1140001',
  sourceUnit: '民眾意見信箱',
  category: '檢舉案件',
  tags: ['民眾意見', '檢舉'],
  receivedAt: '114/06/18 09:20',
  sender: '王OO',
  contact: 'example@mail.com',
  content: '民眾反映進口商品產地標示疑義，請協助確認案件內容、來源資料及後續處理流程。'
}

const workflowSteps = [
  {
    id: 'receive',
    title: '收件',
    unit: '綜合規劃組',
    status: '完成'
  },
  {
    id: 'assign',
    title: '分案',
    unit: '案件管理者',
    status: '進行中'
  },
  {
    id: 'reply',
    title: '回覆',
    unit: '承辦人員',
    status: '待處理'
  }
]

const searchQuery = ref('')
const activeInfoCollapse = ref('case')
const activeSidebarCollapse = ref(['basic', 'contact'])

const caseInfoSummaryList = computed(() => [
  {
    key: 'tags',
    title: '標籤',
    tags: mockData.tags
  },
  {
    key: 'breadcrumb',
    title: '案件類型',
    value: `${mockData.sourceUnit} > ${mockData.category}`,
    icon: 'mark_email_unread'
  }
])

const caseInfoDetailList = computed(() => [
  {
    key: 'sourceUnit',
    title: '來源單位',
    value: mockData.sourceUnit
  }
])
</script>

<template>
  <section class="system-page-slot public-opinion-view">
    <app-page-header-search
      v-model:search-query="searchQuery"
      layout-variant="withTitle"
      :title="mockData.title"
      title-icon="mark_email_unread"
      search-placeholder="請輸入案號、主旨或關鍵字"
    />

    <app-case-info-panel
      v-model="activeInfoCollapse"
      :summary-list="caseInfoSummaryList"
      :detail-list="caseInfoDetailList"
    />

    <div class="public-opinion-view__body app-page__body app-page__body--has-sidebar">
      <div class="public-opinion-view__sidebar">
        <el-collapse v-model="activeSidebarCollapse">
          <el-collapse-item title="案件資料" name="basic">
            <div class="public-opinion-view__sidebar-field">
              <span>案件編號</span>
              <strong>{{ mockData.caseNo }}</strong>
            </div>
            <div class="public-opinion-view__sidebar-field">
              <span>收件時間</span>
              <strong>{{ mockData.receivedAt }}</strong>
            </div>
          </el-collapse-item>
          <el-collapse-item title="聯絡資訊" name="contact">
            <div class="public-opinion-view__sidebar-field">
              <span>陳情人</span>
              <strong>{{ mockData.sender }}</strong>
            </div>
            <div class="public-opinion-view__sidebar-field">
              <span>Email</span>
              <strong>{{ mockData.contact }}</strong>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>

      <div class="public-opinion-view__main app-page__main">
        <div class="public-opinion-view__process">
          <template v-for="(step, index) in workflowSteps" :key="step.id">
            <div class="public-opinion-view__process-step">
              <span class="material-symbols-rounded" aria-hidden="true">task_alt</span>
              <div>
                <strong>{{ step.title }}</strong>
                <span>{{ step.unit }}｜{{ step.status }}</span>
              </div>
            </div>
            <span
              v-if="index < workflowSteps.length - 1"
              class="material-symbols-rounded public-opinion-view__process-arrow"
              aria-hidden="true"
            >
              chevron_right
            </span>
          </template>
        </div>

        <section class="public-opinion-view__content-box">
          <h2>民眾意見信箱內容</h2>
          <p>{{ mockData.content }}</p>
        </section>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.public-opinion-view {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__body {
    gap: 20px;
  }

  &__sidebar {
    width: var(--app-page-sidebar-width);
    min-width: var(--app-page-sidebar-width);
    padding: 16px;
    background-color: var(--bg-tree);
    border-radius: 10px;

    :deep(.el-collapse) {
      border: 0;
      background: transparent;
    }

    :deep(.el-collapse-item__header) {
      background: transparent;
      font-weight: 700;
      color: var(--primary);
    }

    :deep(.el-collapse-item__wrap) {
      background: transparent;
      border-bottom: 0;
    }

    :deep(.el-collapse-item__content) {
      padding-bottom: 12px;
    }
  }

  &__sidebar-field {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 10px;
    font-size: 13px;

    span {
      font-weight: 600;
      color: var(--tx-mid);
    }

    strong {
      font-weight: 600;
      color: var(--tx-main);
      overflow-wrap: anywhere;
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__process {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 12px 16px;
    background-color: var(--bg-page);
    border: 1px solid var(--bdr);
    border-radius: 6px;
  }

  &__process-step {
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    font-size: 13px;

    > span {
      color: var(--primary);
      font-variation-settings: 'FILL' 1;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    strong {
      color: var(--tx-main);
    }

    div span {
      color: var(--tx-mid);
    }
  }

  &__process-arrow {
    color: var(--teal);
  }

  &__content-box {
    min-height: 360px;
    padding: 20px 22px;
    background-color: var(--bg-white);
    border: 1px solid var(--bdr);
    border-radius: 6px;

    h2 {
      margin: 0 0 12px;
      font-size: 18px;
      color: var(--teal);
    }

    p {
      margin: 0;
      font-size: 16px;
      line-height: 1.9;
      white-space: pre-line;
      overflow-wrap: anywhere;
    }
  }

  @media (max-width: 991px) {
    &__sidebar {
      width: 100%;
      min-width: 0;
    }
  }
}
</style>
