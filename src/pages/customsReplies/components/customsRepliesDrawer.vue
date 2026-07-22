<script lang="ts" setup>
import dayjs from 'dayjs'

const drawerData = reactive({
  isShowed: false,
  id: '',
  data: <ICustomsRepliesDrawerData>{
    id: '',
    // 標題
    title: '',
    // 發文字號
    documentNumber: '',
    // 處分對象
    dispositionTarget: '',
    // 處分日期
    dispositionDate: '',
    // 更新日期
    updatedDate: '',
    // 涉及法規
    relatedLaws: '',
    // 關鍵貨品
    keyProducts: '',
    // 罰款
    penalty: '',
    // tag
    penaltyTag: '',
    // 相關附件
    files: [],
    // 關聯案例
    relatedCases: [],
    // 其他備註
    remarks: '',
    // 主旨
    direction: '',
    // 說明
    subject: ''
  }
})

const openDrawer = (settings: ICustomsRepliesDrawerSettings) => {
  drawerData.isShowed = true

  drawerData.id = settings.data.id
  drawerData.data = {
    id: '001',
    // 標題
    title: '未依規定標示產定:未見標示',
    // 發文字號
    documentNumber: '貿管理字第114704321號',
    // 處分對象
    dispositionTarget: 'OOO食品公司',
    // 處分日期
    dispositionDate: '114-11-25',
    // 更新日期
    updatedDate: '114-11-25',
    // 涉及法規
    relatedLaws: '',
    // 關鍵貨品
    keyProducts: '',
    // 罰款
    penalty: '處以罰緩12萬',
    // tag
    penaltyTag: '從輕',
    // 相關附件
    files: [
      {
        name: '海關來文.pdf',
        description: '海關來文'
      },
      {
        name: '產發署研議.pdf',
        description: '產發署研議'
      },
      {
        name: '本署回復.pdf',
        description: '本署回復'
      }
    ],
    // 關聯案例
    relatedCases: [
      {
        id: '1',
        title: '海關答聯單處理案例1'
      },
      {
        id: '2',
        title: '海關答聯單處理案例2'
      },
      {
        id: '3',
        title: '海關答聯單處理案例3'
      }
    ],
    // 其他備註
    remarks: '',
    // 說明
    subject:
      '**貴公司（統一編號：____________，代表人：________）報運出口高頻治具線等貨品1批至泰國，產地標示不實，違反貿易法第17條第2款規定，依同法第28條第1項第6款規定處以新臺幣（下同）12萬元罰鍰，請查照。',
    // 主旨
    direction: `依據財政部關務署基隆關114年10月（略）日基普五字第11410（略）號函、114年11月7日基普五字第11410（略）號函及貴公司114年10月（略）日說明函辦理。
   貴公司114年1月3日向財政部關務署基隆關報運出口高頻治具線等貨品1批（第AW/14/345/MA083號出口報單），統計方式為81（已完稅進口之外貨轉售出口），經查驗結果，外箱標示「MADE IN TAIWAN」字樣，貨品本體或內包裝皆未見產地標示，據貴公司說明，自承前揭項次貨物產地為CHINA，違反貿易法，移請本署核處。
   依據貿易法第17條第2款規定，出進口人不得有產地標示不實之行為。依貿易法第28條規定，本署得予警告、處新臺幣6萬元以上300萬元以下罰鍰或停止其1個月以上1年以下出輸、輸入或輸出入貨品；其情節重大者，本署並得廢止其出進廠商登記。
   四、貴公司前揭函以，案貨原始部分包裝同時包含國貨及洋貨，實際產地為MADE IN TAIWAN/CHINA，故報單以G5/02與G3/81之統計方式作區分；因承辦人員首次辦理出口報關，經驗不足，致部分外貨包裝漏標示「MADE IN CHINA」。`
  }
}

const closeDrawer = (done?: unknown) => {
  drawerData.data = {
    id: '',
    title: '',
    documentNumber: '',
    dispositionTarget: '',
    dispositionDate: '',
    updatedDate: '',
    relatedLaws: '',
    keyProducts: '',
    penalty: '',
    penaltyTag: '',
    files: [],
    relatedCases: [],
    remarks: '',
    subject: '',
    direction: ''
  }

  drawerData.isShowed = false
  if (typeof done === 'function') done()
}

const convertRocDate = (date: string, format: 'zh' | 'dot' = 'zh') => {
  if (!date) return ''

  const [yearText = '', month = '01', day = '01'] = date.split('-')
  const year = Number(yearText)
  if (!year) return date

  // 3 碼年份視為民國年（例如 114-11-25）
  const isRocInput = yearText.length <= 3
  const adYear = isRocInput ? year + 1911 : year
  const parsed = dayjs(`${adYear}-${month}-${day}`)

  if (!parsed.isValid()) return date

  const rocYear = parsed.year() - 1911
  if (format === 'dot') {
    return `${rocYear}.${parsed.format('MM.DD')}`
  }

  return `${rocYear}年${parsed.format('MM月DD日')}`
}

defineExpose({
  openDrawer
})
</script>

<template>
  <SystemDrawer
    v-model="drawerData.isShowed"
    title="案例詳情"
    close-label="關閉案例詳情"
    :before-close="closeDrawer"
    class="customs-replies-drawer"
    @back="closeDrawer"
  >
    <div class="customs-replies-drawer__body">
      <div class="customs-replies-drawer__header">
        <div class="customs-replies-drawer__title">{{ drawerData.data.title }}</div>
        <div class="customs-replies-drawer__tags">
          <div class="customs-replies-drawer__tag-update-date">
            更新日期 {{ convertRocDate(drawerData.data.updatedDate, 'dot') }}
          </div>
          <div class="customs-replies-drawer__tag-penalty-type">
            {{ drawerData.data.penaltyTag }}
          </div>
          <div class="customs-replies-drawer__tag-penalty">{{ drawerData.data.penalty }}</div>
        </div>
        <div class="customs-replies-drawer__info">
          <div class="customs-replies-drawer__info-label">發文字號：</div>
          <div class="customs-replies-drawer__info-value">{{ drawerData.data.documentNumber }}</div>
          <div class="customs-replies-drawer__info-label">處分日期：</div>
          <div class="customs-replies-drawer__info-value">
            {{ convertRocDate(drawerData.data.dispositionDate) }}
          </div>
          <div class="customs-replies-drawer__info-label">處分對象：</div>
          <div class="customs-replies-drawer__info-value">
            {{ drawerData.data.dispositionTarget }}
          </div>
          <div class="customs-replies-drawer__info-label">涉及法規:</div>
          <div class="customs-replies-drawer__info-value">{{ drawerData.data.relatedLaws }}</div>
          <div class="customs-replies-drawer__info-label">關鍵貨品:</div>
          <div class="customs-replies-drawer__info-value">{{ drawerData.data.keyProducts }}</div>
          <div class="customs-replies-drawer__info-label">其他備註:</div>
          <div class="customs-replies-drawer__info-value">{{ drawerData.data.remarks }}</div>
        </div>
        <div class="customs-replies-drawer__attachments">
          <div class="customs-replies-drawer__info-label">相關附件:</div>
          <div class="customs-replies-drawer__attachments-list">
            <el-button v-for="file in drawerData.data.files" :key="file?.name">
              <span class="material-symbols-rounded customs-replies-drawer__file-icon">
                attach_file
              </span>
              <span>{{ file?.name }}</span>
            </el-button>
          </div>
        </div>
        <div class="customs-replies-drawer__related-cases">
          <div class="customs-replies-drawer__info-label">關聯案例:</div>
          <div class="customs-replies-drawer__related-list">
            <el-button v-for="caseItem in drawerData.data.relatedCases" :key="caseItem.id">
              <span class="material-symbols-rounded customs-replies-drawer__related-icon">
                link
              </span>
              <span>{{ caseItem?.title }}</span>
            </el-button>
          </div>
        </div>
      </div>

      <el-divider />

      <div class="customs-replies-drawer__content-body">
        <div class="customs-replies-drawer__body-label">主旨：</div>
        <div class="customs-replies-drawer__body-text">{{ drawerData.data.subject }}</div>
        <div class="customs-replies-drawer__body-label">說明：</div>
        <div class="customs-replies-drawer__body-text">{{ drawerData.data.direction }}</div>
      </div>
    </div>
  </SystemDrawer>
</template>

<style lang="scss" scoped>
.customs-replies-drawer {
  &__title {
    font-size: 20px;
    font-weight: 700;
    color: var(--tx-main);
    margin-bottom: 9px;
  }

  &__tags {
    display: flex;
    gap: 10px;
    margin-bottom: 9px;
    align-items: center;
  }

  &__tag-update-date {
    font-size: 12px;
    font-weight: 700;
    color: var(--green);
    background-color: var(--tag-new-bg);
    border-radius: 2px;
    padding: 4px 8px;
  }

  &__tag-penalty-type {
    display: inline-flex;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    background-color: var(--green);
    border-radius: 20px;
    padding: 4px 10px;
  }

  &__tag-penalty {
    font-size: 12px;
    font-weight: 700;
    color: var(--green);
  }

  &__info {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 5px;
  }

  &__info-label {
    font-size: 12px;
    font-weight: 700;
    color: var(--tx-main);
  }

  &__info-value {
    font-size: 12px;
    color: var(--tx-main);
    overflow-wrap: anywhere;
  }

  &__attachments,
  &__related-cases {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 0px;
    font-size: 14px;
  }

  &__attachments > &__info-label,
  &__related-cases > &__info-label {
    flex: 0 0 auto;
    white-space: nowrap;
  }

  &__attachments-list,
  &__related-list {
    display: flex;
    flex: 1 1 auto;
    flex-wrap: nowrap;
    gap: 0px;
    min-width: 0;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
  }

  &__body-label {
    font-size: 14px;
    font-weight: 700;
    color: var(--tx-main);
    margin-top: 7px;
  }

  &__body-text {
    font-size: 16px;
    line-height: 1.85;
    color: var(--tx-main);
    white-space: pre-line;
    overflow-wrap: anywhere;
  }

  &__file-icon,
  &__related-icon {
    font-variation-settings: 'wght' 300;
  }

  :deep(.el-divider) {
    margin: 10px 0;
  }
}
</style>
