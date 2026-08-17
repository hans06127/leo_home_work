<script lang="ts" setup>
definePageMeta({
  title: '審核',
  formsCacheKeepKeys: ['homeReview']
})

const mockData = {
  id: '',
  tradeType: '出口',
  secondLevelCategory: '',
  thirdLevelCategory: '',
  processingFlow: '',
  dispatchPrefix: '管理',
  dispatchNumber: '114704321',
  replyPrefix: '',
  replyNumber: '',
  penaltyDate: '2024-06-01',
  occurrenceDate: '2024-01-03',
  caseStatus: '',
  caseName: '高頻治具線產地標示不實案',
  productName: '高頻治具線',
  penaltyAmount: '120000',
  relatedRegulations: [],
  tags: {
    category1: ['從輕'],
    category2: ['初次違規'],
    category3: []
  },
  subject:
    '**貴公司（統一編號：____________，代表人：________）報運出口高頻治具線等貨品1批至泰國，產地標示不實，違反貿易法第17條第2款規定，依同法第28條第1項第6款規定處以新臺幣（下同）12萬元罰鍰，請查照。',
  caseDescription: `1.依據財政部關務署基隆關114年10月基普五字第11410（略）號函及貴公司114年10月說明函辦理。
2.貴公司114年1月3日向基隆關報運出口高頻治具線等貨品1批（第AW/14/345/MA083號出口報單），外箱標示「MADE IN TAIWAN」字樣，貨品本體或內包裝皆未見產地標示，貴公司自承前揭項次貨物產地為CHINA，違反貿易法，移請本署核處。
3.依貿易法第17條第2款規定，出進口人不得有產地標示不實之行為。依第28條規定，本署得予警告、處新臺幣6萬元以上300萬元以下罰鍰。
4.貴公司說明案貨原始部分包裝同時包含國貨及洋貨，實際產地為MADE IN TAIWAN/CHINA；因承辦人員首次辦理出口報關，經驗不足，致部分外貨包裝漏標示「MADE IN CHINA」。
5.本案貨品產地為中國大陸，外箱標示「MADE IN TAIWAN」，產地標示不實。貴公司為經營貿易業務之出進口廠商，對於輸出法規之遵循應負相當之注意義務而未注意，違反貿易法規定不得有產地標示不實之行為屬實，依據「輸出貨品未依規定標示產地或產地標示不實處分原則」項次4規定，處以新臺幣12萬元罰鍰。`,
  relatedCase: [
    { id: 1, title: '案例 A' },
    { id: 2, title: '案例 B' },
    { id: 3, title: '案例 C' }
  ],
  attachmentCount: [
    { name: '處分書.pdf', url: '/files/處分書.pdf', description: 'OOO說明書' },
    { name: '相關文件.docx', url: '/files/相關文件.docx', description: 'OOO調查資料' }
  ],
  caseHistory: [
    {
      id: '1',
      casesName: '一般程序處理',
      version: 'v1.0',
      date: '2024-06-01'
    },
    {
      id: '2',
      casesName: '一般程序處理',
      version: 'v2.0',
      date: '2024-06-15'
    }
  ]
}

onMounted(() => {
  {
    formData.form = mockData
  }
})

const formData = reactive({
  form: <IReviewApprove>{
    id: '',
    // 進出口
    tradeType: '',
    // 第二層樣態
    secondLevelCategory: '',
    // 第三層樣態
    thirdLevelCategory: '',
    // 處理流程
    processingFlow: '',
    // 發文字號-字首
    dispatchPrefix: '',
    // 發文字號-號碼
    dispatchNumber: '',
    // 回文字號-字首
    replyPrefix: '',
    // 回文字號-號碼
    replyNumber: '',
    // 處分日期
    penaltyDate: '',
    // 發生日期
    occurrenceDate: '',
    // 註銷/銷毀
    caseStatus: '',
    // 案例名稱
    caseName: '',
    // 商品
    productName: '',
    // 裁罰金額(元)
    penaltyAmount: '',
    // 涉及法規 (複選，儲存選中的法規 ID 或名稱)
    relatedRegulations: [],
    //案例標籤
    tags: {
      // 標籤分類1
      category1: [],
      // 標籤分類2
      category2: [],
      // 標籤分類3
      category3: []
    },
    // 主旨
    subject: '',
    // 案例說明
    caseDescription: '',

    // 關聯案例
    relatedCase: [],
    //   上傳附件
    attachmentCount: [],
    // 歷史處理程序
    caseHistory: <IReviewApproveHistory[]>[]
  }
})

const collapseState = reactive({
  relatedCases: '1',
  attachments: '1',
  caseInfo: '1'
})

const caseInfoSummaryList = computed(() => [
  {
    key: 'tags',
    title: '標籤',
    tags: formData.form.tags.category1
  },
  {
    key: 'penaltyAmount',
    title: '裁罰金額(元)',
    value: `罰鍰$${formData.form.penaltyAmount}`
  },
  {
    key: 'productName',
    title: '商品',
    value: formData.form.productName
  },
  {
    key: 'secondLevelCategory',
    title: '對應樣態',
    value: formData.form.secondLevelCategory
  }
])

const caseInfoDetailList = computed(() => [
  {
    key: 'dispatchNumber',
    title: '發文字號',
    value: `${formData.form.dispatchPrefix}${formData.form.dispatchNumber}`
  },
  {
    key: 'penaltyDate',
    title: '處分日期',
    value: formData.form.penaltyDate
  },
  {
    key: 'occurrenceDate',
    title: '發生日期',
    value: formData.form.occurrenceDate
  },
  {
    key: 'dispositionTarget',
    title: '處分對象',
    value: formData.form.dispositionTarget
  },
  {
    key: 'productName',
    title: '關鍵貨品',
    value: formData.form.productName
  },
  {
    key: 'penaltyAmount',
    title: '裁罰金額(元)',
    value: formData.form.penaltyAmount
  },
  {
    key: 'relatedRegulations',
    title: '涉及法規',
    value: formData.form.relatedRegulations.join('、')
  },
  {
    key: 'secondLevelCategory',
    title: '對應樣態',
    value: formData.form.secondLevelCategory
  }
])
</script>

<template>
  <section class="system-page-slot review-approve" aria-label="審核">
    <div>
      <div class="review-approve__header">
        <div class="review-approve__title">{{ formData.form.caseName }}</div>
        <div class="review-approve__history">
          <div
            v-for="(item, index) in formData.form.caseHistory"
            :key="item.id"
            :class="[
              'review-approve__history-item',
              {
                'review-approve__history-item--new': index === formData.form.caseHistory.length - 1
              }
            ]"
          >
            <span
              class="review-approve__history-status"
              :class="{
                'review-approve__history-status--new':
                  index === formData.form.caseHistory.length - 1
              }"
            >
              {{ index === formData.form.caseHistory.length - 1 ? 'NEW' : 'initial' }}
            </span>
            <span>{{ item.casesName }}</span>
            <span>{{ item.version }}</span>
            <span class="material-symbols-rounded" aria-hidden="true">search</span>
          </div>
        </div>
      </div>
      <app-case-info-panel
        v-model="collapseState.caseInfo"
        :summary-list="caseInfoSummaryList"
        :detail-list="caseInfoDetailList"
      />
    </div>
    <div class="review-approve__body">
      <div class="review-approve__sidebar">
        <div class="review-approve__sidebar-panel">
          <el-collapse v-model="collapseState.relatedCases">
            <el-collapse-item title="關聯案例" name="1">
              <div
                v-for="relatedCase in formData.form.relatedCase"
                :key="relatedCase?.id"
                class="review-approve__related-case-item"
              >
                <span class="material-symbols-rounded" aria-hidden="true">link</span>
                <span>{{ relatedCase?.title }} </span>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>

        <div class="review-approve__sidebar-panel">
          <el-collapse v-model="collapseState.attachments">
            <el-collapse-item title="相關附件" name="1">
              <div
                v-for="attachment in formData.form.attachmentCount"
                :key="attachment?.url || attachment?.name"
                class="review-approve__attachment"
              >
                <span>{{ attachment?.name }}</span>
                <span class="material-symbols-rounded" aria-hidden="true">download</span>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
      <div class="review-approve__main">
        <section class="review-approve__document-section">
          <h2 class="review-approve__document-heading">主旨:</h2>
          <div class="review-approve__document-body">{{ formData.form.subject }}</div>
        </section>
        <section class="review-approve__document-section">
          <h2 class="review-approve__document-heading">案例說明:</h2>
          <div class="review-approve__document-body">{{ formData.form.caseDescription }}</div>
        </section>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.review-approve {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
  }

  &__title {
    min-width: 0;
    font-size: 20px;
    font-weight: bold;
    overflow-wrap: anywhere;
  }

  &__history {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__history-item {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border-radius: 6px;
    gap: 8px;
    background-color: #f5fbf9;
    border: 2px solid #e1e1e1;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;

    &--new {
      background-color: #fff8de;
      border-color: #ffdf7c;
    }
  }

  &__history-status {
    color: #6b7783;

    &--new {
      font-weight: bold;
      color: #b45309;
      font-style: italic;
    }
  }

  &__body {
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(0, 8fr);
    gap: 20px;
    width: 100%;
    align-items: start;
  }

  &__sidebar {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__sidebar-panel {
    background-color: #ebf1f7;
    padding: 0 12px;
    border-radius: 6px;
    border: solid 1px #d3e4f5;

    :deep(.el-collapse-item__wrap) {
      background-color: initial;
    }

    :deep(.el-collapse-item__content) {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
    }

    :deep(.el-collapse-item__header) {
      background-color: initial;
    }
  }

  &__related-case-item,
  &__attachment {
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    gap: 8px;
    padding: 8px 12px;
    background-color: #fff;
    color: #184689;
    border: 2px solid #e1e2e2;
    cursor: pointer;
  }

  &__attachment {
    justify-content: space-between;
    cursor: default;
  }

  &__main {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__document-section {
    padding: 20px;
    border: 1px solid #e1e1e1;
    border-radius: 6px;
    line-height: 2;
    font-size: 14px;
  }

  &__document-heading {
    margin: 0 0 10px;
    font-size: 14px;
    font-weight: bold;
    color: #0f3f85;
  }

  &__document-body {
    overflow-wrap: anywhere;
    white-space: pre-line;
  }

  @media (max-width: 768px) {
    &__body {
      grid-template-columns: 1fr;
    }
  }
}
</style>
