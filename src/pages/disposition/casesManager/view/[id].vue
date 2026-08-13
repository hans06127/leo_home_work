<script setup lang="ts">
definePageMeta({
  title: '案例完整詳情'
})

const mockData = {
  title: '管理字第114704321號 — 案例完整詳情',
  documentNumber: '管理字第114704321號',
  dispositionDate: '2024-06-01',
  dispositionTarget: 'OOOO公司',
  updateDate: '2024-06-15',
  penalty: '除以罰鍰12萬',
  relatedLaws: '違反貿易法第17條第2款規定，第28條第1項第6款規定',
  keyProducts: '食品',
  importExportType: '出口',
  correspondingPattern: '出口 > 產品 > 產地標示不實',
  penaltyTag: ['從輕', '初次違規'],
  files: [
    { name: '處分書.pdf', url: '/files/處分書.pdf', description: 'OOO說明書' },
    { name: '相關文件.docx', url: '/files/相關文件.docx', description: 'OOO調查資料' }
  ],
  relatedCases: [
    { id: 1, title: '案例 A' },
    { id: 2, title: '案例 B' },
    { id: 3, title: '案例 C' }
  ],
  subject:
    '**貴公司（統一編號：____________，代表人：________）報運出口高頻治具線等貨品1批至泰國，產地標示不實，違反貿易法第17條第2款規定，依同法第28條第1項第6款規定處以新臺幣（下同）12萬元罰鍰，請查照。',
  description: `    
      1.依據財政部關務署基隆關114年10月基普五字第11410（略）號函及貴公司114年10月說明函辦理。
      2.貴公司114年1月3日向基隆關報運出口高頻治具線等貨品1批（第AW/14/345/MA083號出口報單），外箱標示「MADE IN TAIWAN」字樣，貨品本體或內包裝皆未見產地標示，貴公司自承前揭項次貨物產地為CHINA，違反貿易法，移請本署核處。
      3.依貿易法第17條第2款規定，出進口人不得有產地標示不實之行為。依第28條規定，本署得予警告、處新臺幣6萬元以上300萬元以下罰鍰。
      4.貴公司說明案貨原始部分包裝同時包含國貨及洋貨，實際產地為MADE IN TAIWAN/CHINA；因承辦人員首次辦理出口報關，經驗不足，致部分外貨包裝漏標示「MADE IN CHINA」。
      5.本案貨品產地為中國大陸，外箱標示「MADE IN TAIWAN」，產地標示不實。貴公司為經營貿易業務之出進口廠商，對於輸出法規之遵循應負相當之注意義務而未注意，違反貿易法規定不得有產地標示不實之行為屬實，依據「輸出貨品未依規定標示產地或產地標示不實處分原則」項次4規定，處以新臺幣12萬元罰鍰。 本處分所裁決之罰鍰，請於文到次日起30日內匯入本署中央銀行國庫局(0000022)「經濟部國際貿易署罰金罰鍰戶」（帳號04262001016005），匯款時請註明貴公司名稱，並於備註欄內註明本署發文日期及字號。請依規定期限內繳納，逾限期未繳者，將依規定移送行政執行署強制執行。 貴公司對本處分如有異議，得於收受本處分書之次日起30日內，以工商憑證登入本署建置之線上聲明異議系統，並以數位簽章簽署，或以紙本向本署聲明異議。異議書應載明：（一）異議人及代表人之姓名、住所；（二）本處分書文號；（三）異議之事實及理由；（四）有關證件或證據；（五）年、月、日（如附件1）。 檢附貿易法第17條及第28條規定、輸出貨品未依規定標示產地或產地標示不實處分原則、輸出貨品未依規定標示產地或產地標示不實案件處理原則（如附件2），請參。 為保障貴公司出口權益及避免再次觸法，請指派相關業務管理階層人員參加本署辦理之輸出入管理說明會，相關資訊將於活動辦理前公布於本署經貿資訊網（路徑：新聞與公告/本署活動訊息/活動訊息）；或透過加入本署臉書、Line取得說明會資訊，本署屆時亦將發函通知。本案貨品產地為中國大陸，外箱標示「MADE IN TAIWAN」，產地標示不實。貴公司為經營貿易業務之出進口廠商，對於輸出法規之遵循應負相當之注意義務而未注意，違反貿易法規定不得有產地標示不實之行為屬實，依據「輸出貨品未依規定標示產地或產地標示不實處分原則」項次4規定，處以新臺幣12萬元罰鍰。 本處分所裁決之罰鍰，請於文到次日起30日內匯入本署中央銀行國庫局(0000022)「經濟部國際貿易署罰金罰鍰戶」（帳號04262001016005），匯款時請註明貴公司名稱，並於備註欄內註明本署發文日期及字號。請依規定期限內繳納，逾限期未繳者，將依規定移送行政執行署強制執行。 貴公司對本處分如有異議，得於收受本處分書之次日起30日內，以工商憑證登入本署建置之線上聲明異議系統，並以數位簽章簽署，或以紙本向本署聲明異議。異議書應載明：（一）異議人及代表人之姓名、住所；（二）本處分書文號；（三）異議之事實及理由；（四）有關證件或證據；（五）年、月、日（如附件1）。 檢附貿易法第17條及第28條規定、輸出貨品未依規定標示產地或產地標示不實處分原則、輸出貨品未依規定標示產地或產地標示不實案件處理原則（如附件2），請參。 為保障貴公司出口權益及避免再次觸法，請指派相關業務管理階層人員參加本署辦理之輸出入管理說明會，相關資訊將於活動辦理前公布於本署經貿資訊網（路徑：新聞與公告/本署活動訊息/活動訊息）；或透過加入本署臉書、Line取得說明會資訊，本署屆時亦將發函通知。`,
  note: '如有不服本處分，依訴願法第14條規定，得於本處分書送達之次日起30日內，繕具訴願書，向本部提起訴願。'
}
</script>

<template>
  <section class="system-page-slot case-view">
    <div class="case-view__title">
      <span class="material-symbols-rounded">work_history</span>
      <h1>{{ mockData.title }}</h1>
    </div>
    <div class="case-view__meta">
      <div class="case-view__meta-item">
        <span class="case-view__meta-label">發文字號：</span>
        <span class="case-view__meta-value">{{ mockData.documentNumber }}</span>
      </div>
      <div class="case-view__meta-item">
        <span class="case-view__meta-label">處分日期：</span>
        <span class="case-view__meta-value">{{ mockData.dispositionDate }}</span>
      </div>
      <div class="case-view__meta-item">
        <span class="case-view__meta-label">處分對象：</span>
        <span class="case-view__meta-value">{{ mockData.dispositionTarget }}</span>
      </div>
      <div class="case-view__meta-item">
        <span class="case-view__meta-label">更新日期：</span>
        <span class="case-view__meta-value">{{ mockData.updateDate }}</span>
      </div>
      <div class="case-view__meta-item">
        <span class="case-view__meta-label">罰款：</span>
        <span class="case-view__meta-value">{{ mockData.penalty }}</span>
      </div>
    </div>

    <el-divider />

    <div class="case-view__file-list">
      <span class="case-view__file-label">相關附件：</span>
      <div class="case-view__file-items">
        <div class="case-view__file" v-for="file in mockData.files" :key="file.name">
          <span class="material-symbols-rounded case-view__file-icon">attach_file</span>
          <div class="case-view__file-info">
            <span>{{ file.name }}</span>
            <span>{{ file.description }}</span>
          </div>
        </div>
      </div>
    </div>

    <el-divider />

    <div class="case-view__related-case">
      <span class="case-view__related-case-label">關聯案例：</span>
      <div class="case-view__related-case-list">
        <div
          class="case-view__related-case-item"
          v-for="caseItem in mockData.relatedCases"
          :key="caseItem.id"
        >
          <span class="material-symbols-rounded case-view__related-icon"> link </span>
          <span>
            {{ caseItem.title }}
          </span>
        </div>
      </div>
    </div>
    <div class="case-view__detail">
      <div class="case-view__content">
        <div class="case-view__process">
          <span class="material-symbols-rounded case-view__process-icon"> account_tree </span>
          <span>處理流程：</span>
          <span>一般處理流程v2.0</span>
          <span class="material-symbols-rounded case-view__process-arrow"> chevron_right </span>
        </div>
        <div class="case-view__document">
          <div class="case-view__document-section">
            <div class="case-view__document-heading">主旨</div>
            <div class="case-view__document-body">{{ mockData.subject }}</div>
          </div>

          <div class="case-view__document-section">
            <div class="case-view__document-heading">說明</div>
            <div class="case-view__document-body">{{ mockData.description }}</div>
          </div>
          <div class="case-view__document-section">
            <div class="case-view__document-heading">附記</div>
            <div class="case-view__document-body">{{ mockData.note }}</div>
          </div>
        </div>
      </div>
      <aside class="case-view__info">
        <h2 class="case-view__info-title">案件資訊</h2>
        <div class="case-view__info-item">
          <div class="case-view__info-label">處分對象</div>
          <div class="case-view__info-value">{{ mockData.dispositionTarget }}</div>
        </div>
        <div class="case-view__info-item">
          <div class="case-view__info-label">涉及法規</div>
          <div class="case-view__info-value">{{ mockData.relatedLaws }}</div>
        </div>
        <div class="case-view__info-item">
          <div class="case-view__info-label">關鍵貨品</div>
          <div class="case-view__info-value">{{ mockData.keyProducts }}</div>
        </div>
        <div class="case-view__info-item">
          <div class="case-view__info-label">進出口別</div>
          <div class="case-view__info-value">{{ mockData.importExportType }}</div>
        </div>

        <el-divider />

        <div class="case-view__info-bottom">
          <span class="case-view__info-update-date">更新日期 {{ mockData.updateDate }}</span>
          <span class="case-view__info-penalty-tag" v-for="tag in mockData.penaltyTag" :key="tag">
            {{ tag }}
          </span>
          <span class="case-view__info-penalty">{{ mockData.penalty }}</span>
        </div>
      </aside>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.case-view {
  padding: 20px 20px 20px 0;

  &__title {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--teal);
    padding: 8px 30px;
    background: linear-gradient(90deg, var(--grad-start) 0%, var(--grad-end) 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;

    h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 700;
      line-height: 1.4;
    }
  }

  &__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px 20px;
  }

  &__meta-item {
    display: flex;
    gap: 10px;
    font-size: 14px;

    &:not(:last-child)::after {
      content: '|';
      margin-left: 8px;
      color: var(--tx-mid);
    }
  }

  &__meta-value {
    color: var(--tx-main);
    font-weight: 600;
  }

  &__info {
    grid-area: info;
    min-width: 0;
    padding: 14px 16px;
    border: 1px solid var(--bdr);
    border-radius: 10px;
  }

  &__info-title {
    display: inline-block;
    margin: 0 0 14px;
    padding: 3px 12px;
    border-radius: 20px;
    background-color: var(--teal);
    color: white;
    font-size: 14px;
    line-height: 1.4;
  }

  &__file-label,
  &__related-case-label {
    font-size: 12.5px;
    font-weight: 600;
    color: var(--tx-mid);
  }

  &__file-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
    padding: 0 20px;
    font-size: 14px;
  }

  &__file-items {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__file {
    display: inline-flex;
    align-items: center;
    min-width: 0;
    border: 1px solid #cbcbcb;
    padding: 7px 14px;
    border-radius: 4px;
    gap: 8px;
    cursor: pointer;
    text-align: left;
  }

  &__file-info {
    display: flex;
    min-width: 0;
    flex-direction: column;

    span:first-child {
      font-size: 12px;
      font-weight: 600;
      color: var(--tx-main);
    }

    span:last-child {
      font-size: 10.5px;
      color: var(--tx-mid);
    }
  }

  &__file-icon {
    font-variation-settings: 'wght' 300;
  }

  &__related-case {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    padding: 0 20px;
  }

  &__related-case-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__related-case-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1px solid #b9ccea;
    padding: 7px 16px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    color: var(--blue);
    cursor: pointer;
  }

  &__related-icon {
    font-size: 14px;
  }

  &__detail {
    display: grid;
    grid-template-areas: 'content info';
    grid-template-columns: minmax(0, 1fr) minmax(200px, 260px);
    gap: 20px;
    align-items: start;
    padding: 0 20px;

    @media (max-width: 991px) {
      grid-template-areas:
        'info'
        'content';
      grid-template-columns: 1fr;
    }
  }

  &__content {
    grid-area: content;
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 16px;
  }

  &__process {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    padding: 9px 12px;
    align-items: center;
    gap: 10px;
    background-color: var(--bg-page);
    font-size: 12.5px;
    cursor: pointer;
  }

  &__process-icon {
    font-size: 16px;
    color: var(--primary);
    font-variation-settings: 'FILL' 1;
  }

  &__process-arrow {
    font-size: 20px;
    color: var(--teal);
  }

  :deep(.el-divider) {
    margin: 12px 0;
  }

  &__document {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: 10px;
    padding: 20px 22px;
    border: 1px solid var(--bdr);
    border-radius: 10px;
  }

  &__document-section {
    margin-bottom: 10px;
  }

  &__document-heading {
    margin-bottom: 10px;
    color: var(--teal);
    font-size: 14px;
    font-weight: 700;
  }

  &__document-body {
    font-size: 16px;
    line-height: 1.9;
    overflow-wrap: anywhere;
    white-space: pre-line;
  }

  &__info-item {
    margin-bottom: 10px;
    font-size: 14px;
  }

  &__info-label {
    color: var(--tx-light);
    font-size: 14px;
    font-weight: 600;
  }

  &__info-value {
    line-height: 1.9;
  }

  &__info-bottom {
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
  }

  &__info-update-date {
    background-color: var(--tag-new-bg);
    color: var(--green);
    padding: 4px 8px;
    font-weight: 700;
  }

  &__info-penalty-tag {
    display: inline-block;
    padding: 4px 10px;
    background-color: var(--green);
    font-size: 12px;
    font-weight: 700;
    color: var(--bg-white);
    border-radius: 20px;
  }

  &__info-penalty {
    padding: 4px 10px;
    font-weight: 700;
    color: var(--teal);
  }
}
</style>
