<script lang="ts" setup>
const mockData = {
  steps: [
    {
      id: 1,
      title: '海關來文',
      date: '2025/10/14',
      step: 1,
      data: {
        title: '海關來文',
        // 發文日期
        createDate: '2025/10/14',
        // 發文文號
        documentNumber: 'ATEG1140027',
        // 來文
        incomingLetter: {
          // 發文機關
          senderType: '海關來文',
          senderUnit: '基隆關桃園分關南崁業務課',
          senderSubUnit: '',
          // 聯絡人
          contact: '郭OO',
          // 電話
          contactTel: '03-3558888',
          // 承辦人
          handler: '吳OO',
          // 電話號碼
          handlerTel: '03-3558220',
          // 電傳號碼
          handlerFax: '',
          // 案情摘要
          caseSummary: `一、________股份有限公司（統一編號：________，下稱出口人）報運出口貨物1批（出口報單AT/BC/14/________號）至美國，依出口人說明案貨為出口人設計並持有模具及核心技術之專業檢測儀器，出口人於中國廣東珠海地區設有台灣投資設立之關係企業，負責執行產品之部分組裝及焊接程序。該廠之生產作業依出口人提供之設計圖面、製成規範及品質標準執行，並由台灣總公司派員監督及驗證。案貨之重要原件閃光燈管由出口人向________股份有限公司採購（料號：173.012），提供給中國合作工廠進行組裝後進口至台灣，並於台灣完成功能檢測與最終包裝作業後再出口。

                        二、本案出口貨品與原進口貨品之稅則號別前6位碼相異；惟其加工製程作業是否符合貴管原產地證明書及加工證明書管理辦法第5條第3項規定，屬簡易加工，視為非實質轉型？

                        三、檢附本案出口報單、進口報單、型錄、說明書及貨品之生產加工流程相關資料影本各1份（計36頁），請依關稅法第12條規定嚴守秘密。

                        四、本案貨物尚未放行，因事涉貴管規定及商民權益，請儘速惠復，俾憑辦理。`
        },
        // 回文
        outgoingLetter: {
          // 發文機關
          senderType: '',
          senderUnit: '',
          // 聯絡人
          contact: '',
          // 電話
          contactTel: '',
          // 承辦人
          handler: '',
          // 電話號碼
          handlerTel: '',
          // 電傳號碼
          handlerFax: '',
          // 案情摘要
          caseSummary: ''
        }
      }
    },
    {
      id: 2,
      title: '產發署研議',
      date: '2025/10/25',
      step: 2,
      data: {
        title: '產發署研議',
        // 發文日期
        createDate: '114/10/25',
        // 發文文號
        documentNumber: '1140681763',
        // 來文
        incomingLetter: {
          // 發文機關
          senderType: '發文',
          senderUnit: '經濟部國際貿易署',
          senderSubUnit: '國際貿易署',
          // 聯絡人
          contact: '余副組長OO',
          // 電話
          contactTel: '(02)2397-1111',
          contactFax: '(02)2397-2222',
          // 承辦人
          handler: '',
          // 電話號碼
          handlerTel: '',
          //   分機
          handlerExt: '',
          // 電傳號碼
          handlerFax: '',
          // 案情摘要
          caseSummary: `一、________股份有限公司（下稱出口人）於114年10月7日向財政部關務署基隆關桃園分關報運出口貨品1批至美國（第AT/BC/1號出口報單），對輸出貨品是否屬原產地證明書及加工證明書管理辦法第5條第3項所稱「實質轉型」，有疑義。

                        二、出口人說明案貨為出口人設計並持有有模具及核心技術之專業檢測儀器，出口人於中國廣東珠海地區設有台灣投資設立之關係企業，負責執行產品之部分組裝及焊接程序。該廠之生產作業依出口人提供之設計圖面、製成規範及品質標準執行，並由台灣總公司派員監督及驗證。案貨之重要原件閃光燈管由出口人向________股份有限公司購買，提供給中國合作工廠進行組裝後進口至台灣，並於台灣完成功能檢測與最終包裝作業後再出口。

                        三、本案出口貨品與原進口貨品之稅則號別前6位碼相異；惟檢本案是否符合實質轉型之相關規定，仍請貴署依權責核復，俾憑辦理。`
        },
        // 回文
        outgoingLetter: {
          // 發文機關
          senderType: '回文',
          senderUnit: '經濟部產業發展署',
          senderSubUnit: '電子資訊產業組蔡OO組長',
          // 聯絡人
          contact: '蔡忠平副組長',
          // 電話
          contactTel: '(02)2754-1255',
          contactExt: '202',
          contactFax: '(02)2754-0000',
          // 承辦人
          handler: '',
          // 電話號碼
          handlerTel: '',
          //   分機
          handlerExt: '',
          // 電傳號碼
          handlerFax: '',
          // 案情摘要
          caseSummary:
            '1. 本案貨品之關鍵組件（外殼模具、電路圖、PC板佈線圖、氙氣燈管等）由台灣板橋廠提供至中國關係企業進行電路板插件加工、鎖PC板螺絲及測試。\n2. 半成品運回台灣板橋廠進行精密調測、組立、鎖本體螺絲、複測及包裝出貨。\n3. 因本案出口產品於國內僅進行測試及組立，係屬「原產地證明書及加工證明書管理辦法」第5條第3項（簡易加工）範疇。至於是否符合實質轉型，仍請貿易署依權責卓處。'
        }
      }
    },
    {
      id: 3,
      title: '本署回復',
      date: '2025/10/28',
      step: 3,
      data: {
        title: '本署回復',
        // 發文日期
        createDate: '2025/10/28',
        // 發文文號
        documentNumber: 'ATEG1140027',
        // 來文
        incomingLetter: {
          // 發文機關
          senderType: '海關來文',
          senderUnit: '基隆關桃園分關南崁業務課',
          senderSubUnit: '',
          // 聯絡人
          contact: '郭O男',
          // 電話
          contactTel: '03-3558888',
          contactFax: '',
          // 承辦人
          handler: '吳O儒',
          // 電話號碼
          handlerTel: '03-3559999',
          //   分機
          handlerExt: '316',
          // 電傳號碼
          handlerFax: '03-32558888',
          // 案情摘要
          caseSummary: `一、________股份有限公司（統一編號：________，下稱出口人）報運出口貨物1批（出口報單AT/BC/14/________號）至美國，依出口人說明案貨為出口人設計並持有模具及核心技術之專業檢測儀器，出口人於中國廣東珠海地區設有台灣投資設立之關係企業，負責執行產品之部分組裝及焊接程序。

                        二、本案出口貨品與原進口貨品之稅則號別前6位碼相異；惟其加工製程作業是否符合貴管原產地證明書及加工證明書管理辦法第5條第3項規定，屬簡易加工，視為非實質轉型？

                        三、本案貨物尚未放行，因事涉貴管規定及商民權益，請儘速惠復，俾憑辦理。`
        },
        // 回文
        outgoingLetter: {
          // 發文機關
          senderType: '本署回復',
          senderUnit: '經濟部國際貿易署貿易管理課',
          senderSubUnit: '',
          // 聯絡人
          contact: '余副組長O芳',
          // 電話
          contactTel: '(02)2397-7502',
          // 承辦人
          handler: '彭O',
          // 電話號碼
          handlerTel: '(02)2397-7502',
          //   分機
          handlerExt: '529',
          // 電傳號碼
          handlerFax: '',
          // 案情摘要
          caseSummary:
            '依據產業發展署之研議意見，本案出口貨品於國內僅進行測試與組立，屬於「原產地證明書及加工證明書管理辦法」第5條第3項之簡易加工範疇，不符實質轉型規定。爰此回復基隆關。'
        }
      }
    }
  ],
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
  relatedCases: [
    {
      id: 1,
      title: '海關答聯單處理案例1'
    },
    {
      id: 2,
      title: '海關答聯單處理案例2'
    },
    {
      id: 3,
      title: '海關答聯單處理案例3'
    }
  ]
}

const currentStep = ref(1)
const currentStepData = computed(() => _.find(mockData.steps, { step: currentStep.value }))
type Letter = NonNullable<typeof currentStepData.value>['data']['incomingLetter']

const currentLetters = computed(() => {
  const data = currentStepData.value?.data
  if (!data) return []

  return [
    {
      id: 'incoming',
      data: data.incomingLetter,
      summaryLabel: '案情摘要及提問'
    },
    ...(currentStepData.value?.step !== 1
      ? [
          {
            id: 'outgoing',
            data: data.outgoingLetter,
            summaryLabel: '權責機關答覆'
          }
        ]
      : [])
  ]
})

const letterFields = (letterId: string, letter: Letter) =>
  [
    {
      label: letterId === 'incoming' ? '發文單位：' : '回文單位：',
      value: letter.senderSubUnit,
      always: false
    },
    { label: '聯絡人：', value: letter.contact, always: true },
    {
      label: '電話號碼：',
      value: `${letter.contactTel}${letter.contactExt ? `#${letter.contactExt}` : ''}`,
      always: true
    },
    { label: '電傳號碼：', value: letter.contactFax },
    { label: '承辦人：', value: letter.handler },
    {
      label: '承辦電話：',
      value: letter.handlerTel
        ? `${letter.handlerTel}${letter.handlerExt ? `#${letter.handlerExt}` : ''}`
        : ''
    },
    { label: '電傳號碼：', value: letter.handlerFax }
  ].filter((field) => field.always || field.value)

const handleStepClick = (step: number) => {
  currentStep.value = step
}
</script>

<template>
  <section class="system-page-slot customs-replies-view">
    <app-page-header-search
      title="海關答聯單處理"
      title-icon="anchor"
      :has-query="false"
      action-icon="tune"
    />
    <div class="customs-replies-view__steps">
      <template v-for="(step, index) in mockData.steps" :key="step.id">
        <div class="customs-replies-view__step">
          <div
            :class="[
              'customs-replies-view__step-content',
              { 'customs-replies-view__step-content--active': currentStep === step.step }
            ]"
            @click="handleStepClick(step.step)"
          >
            <div class="customs-replies-view__step-label">Step{{ step.id }}.</div>
            <div class="customs-replies-view__step-title">{{ step.title }}</div>
            <div class="customs-replies-view__step-date">{{ step.date }}</div>
          </div>
        </div>
        <div v-if="index < mockData.steps.length - 1" class="customs-replies-view__step-connector">
          <span class="material-symbols-rounded customs-replies-view__step-arrow">east</span>
        </div>
      </template>
    </div>
    <el-divider />
    <div class="customs-replies-view__attachments">
      <span class="customs-replies-view__attachments-label">相關附件：</span>
      <div class="customs-replies-view__attachments-list">
        <div class="customs-replies-view__file" v-for="file in mockData.files" :key="file.name">
          <span class="material-symbols-rounded customs-replies-view__file-icon">attach_file</span>
          <div class="customs-replies-view__file-info">
            <span>{{ file.name }}</span>
            <span>{{ file.description }}</span>
          </div>
        </div>
      </div>
    </div>
    <el-divider />
    <div class="customs-replies-view__related-cases">
      <span class="customs-replies-view__related-cases-label">關聯案例：</span>
      <div class="customs-replies-view__related-cases-list">
        <div
          class="customs-replies-view__related-case"
          v-for="caseItem in mockData.relatedCases"
          :key="caseItem.id"
        >
          <span class="material-symbols-rounded customs-replies-view__related-icon"> link </span>
          <span>
            {{ caseItem.title }}
          </span>
        </div>
      </div>
    </div>
    <div class="customs-replies-view__content">
      <div class="customs-replies-view__content-header">
        <div class="customs-replies-view__content-header-item">
          <div class="customs-replies-view__content-header-label">發文文號：</div>
          <div class="customs-replies-view__content-header-value">
            {{ currentStepData?.data?.documentNumber }}
          </div>
        </div>
        <div
          class="customs-replies-view__content-header-item customs-replies-view__content-header-item--separated"
        >
          <div class="customs-replies-view__content-header-label">發文日期：</div>
          <div class="customs-replies-view__content-header-value">
            {{ currentStepData?.data?.createDate }}
          </div>
        </div>
      </div>

      <div class="customs-replies-view__letters">
        <div
          v-for="letter in currentLetters"
          :key="letter.id"
          class="customs-replies-view__letter-card"
        >
          <div class="customs-replies-view__letter-header">
            <div class="customs-replies-view__sender-type">
              {{ letter.data.senderType }}
            </div>
            <div class="customs-replies-view__sender-unit">
              {{ letter.data.senderUnit }}
            </div>
          </div>
          <div class="customs-replies-view__letter-meta">
            <template
              v-for="field in letterFields(letter.id, letter.data)"
              :key="field.label + field.value"
            >
              <div class="customs-replies-view__letter-meta-label">{{ field.label }}</div>
              <div class="customs-replies-view__letter-meta-value">
                {{ field.value }}
              </div>
            </template>
          </div>
          <el-divider />
          <div class="customs-replies-view__summary-label">{{ letter.summaryLabel }}</div>
          <div class="customs-replies-view__summary-text">
            {{ letter.data.caseSummary }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.customs-replies-view {
  &__steps {
    display: flex;
    align-items: stretch;
    padding: 0px 16px 12px;
    gap: 5px;
  }

  &__step {
    display: flex;
    align-items: center;
    flex: 1;
    min-width: 0;
  }

  &__step-arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #8898aa;
    font-variation-settings: 'wght' 100;
  }

  &__step-connector {
    width: 24px;
    flex: 0 0 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  &__step-content {
    display: flex;
    flex-flow: row;
    align-items: center;
    width: 100%;
    padding: 20px;
    border: 2px solid #cbcbcb;
    border-radius: 4px;
    gap: 4px;
    cursor: pointer;

    &--active {
      background-color: #eef0fa;
      border-color: #0f3f85;
    }
  }

  &__step-label {
    font-weight: 700;
    font-size: 16px;
    color: #2f3d50;
    font-style: italic;
  }

  &__step-title {
    font-size: 16px;
    font-weight: 700;
    color: #2f3d50;
  }

  &__step-date {
    font-size: 14px;
    color: #2f3d50;
    margin-top: 3px;
  }

  &__attachments-label,
  &__related-cases-label {
    font-size: 12.5px;
    font-weight: 600;
    color: #566578;
  }

  &__attachments {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
    padding: 0 20px;
    font-size: 14px;
  }

  &__attachments-list {
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
      color: #2f3d50;
    }

    span:last-child {
      font-size: 10.5px;
      color: #566578;
    }
  }

  &__file-icon {
    font-variation-settings: 'wght' 300;
  }

  &__related-cases {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    padding: 0 20px;
    margin-bottom: 14px;
  }

  &__related-cases-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__related-case {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1px solid #b9ccea;
    padding: 7px 16px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    color: #2457a7;
    cursor: pointer;
  }

  &__related-icon {
    font-size: 14px;
  }

  &__content {
    background-color: #f0f4f9;
    border-radius: 10px;
    padding: 20px;
    margin-top: 4px;
  }

  &__content-header {
    display: flex;
    align-items: center;
    font-size: 14px;
    border-radius: 4px;
    padding: 0px 16px;
    margin-bottom: 16px;
  }

  &__content-header-item {
    display: flex;
    align-items: center;
    gap: 6px;

    &--separated {
      border-left: 1px solid #d8e2ee;
      margin-left: 16px;
      padding-left: 16px;
    }
  }

  &__content-header-label,
  &__letter-meta-label {
    font-size: 14px;
    color: #566578;
  }

  &__letters {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
  }

  &__letter-card {
    min-width: 0;
    background-color: #fff;
    border: 1px solid #d8e2ee;
    border-radius: 10px;
    padding: 20px 22px;
  }

  &__letter-meta {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 5px 14px;
    margin-bottom: 14px;
    padding-bottom: 14px;
    font-size: 14px;
  }

  &__content-header-value,
  &__letter-meta-value {
    min-width: 0;
    color: #2f3d50;
    font-weight: 500;
    overflow-wrap: anywhere;
  }

  &__letter-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
  }

  &__sender-type {
    display: inline-flex;
    align-items: center;
    background-color: #0f3f85;
    color: #fff;
    padding: 3px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
  }

  &__sender-unit {
    font-size: 20px;
    color: #2f3d50;
    font-weight: 700;
  }

  &__summary-label {
    font-size: 14px;
    color: #2c8086;
    font-weight: 700;
    margin-bottom: 10px;
  }

  &__summary-text {
    font-size: 16px;
    line-height: 1.9;
    margin-bottom: 10px;
    white-space: pre-line;
    overflow-wrap: anywhere;
  }

  :deep(.el-divider) {
    margin: 18px 0 !important;
  }
}
</style>
