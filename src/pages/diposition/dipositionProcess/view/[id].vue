<script lang="ts" setup>
// on mounted
onMounted(() => {
  pageInit()
})

// page refs
const pageData = reactive({
  isLoading: true
})

// page methods
// 初始化頁面資料
const pageInit = (): void => {
  pageData.isLoading = false
}

const processingFlow = <IDipositionProcessItem[]>[
  {
    seq: 1,
    title: '111',
    description: '222',
    confirmation: '333'
  },
  {
    seq: 2,
    title: 'aaa',
    description: 'bbb',
    confirmation: 'ccc'
  }
]

const formData = reactive({
  form: <IDipositionProcessSaveForm>{
    // 程序標題
    title: '',
    // 進出口
    tradeType: '',
    // 第二層樣態
    secondLevelCategory: '',
    // 第三層樣態
    thirdLevelCategory: '',
    // 重點說明
    keyPoints: '',
    // 注意事項
    notes: '',
    // 處理流程
    processingFlow,
    // 是否啟用
    isActive: true
  },
  // 當前步驟
  currentStep: <IDipositionProcessItem>processingFlow[0]
})

// 點擊步驟
const handleStepClick = (item: IDipositionProcessItem): void => {
  formData.currentStep = item
}
</script>

<template>
  <section class="system-page-slot diposition-process-view">
    <div class="diposition-process-view__header">
      <div class="diposition-process-view__header-title">
        <span class="material-symbols-rounded" aria-hidden="true">docs</span>
        <h1 class="diposition-process-view__title">處理程序檢視</h1>
      </div>
      <div class="diposition-process-view__header-actions">
        <el-button size="large">
          <span class="material-symbols-rounded" aria-hidden="true">attach_file</span>
          <span>附件</span>
          <span>
            <!-- TODO: count -->
          </span>
        </el-button>
      </div>
    </div>

    <div class="diposition-process-view__summary">
      <div class="diposition-process-view__notices">
        <div class="diposition-process-view__notice diposition-process-view__notice--notes">
          <div class="diposition-process-view__notice-label">注意事項：</div>
          <div class="diposition-process-view__notice-content"></div>
        </div>
        <div class="diposition-process-view__notice diposition-process-view__notice--key-points">
          <div class="diposition-process-view__notice-label">重點說明：</div>
          <div class="diposition-process-view__notice-content"></div>
        </div>
      </div>

      <div class="diposition-process-view__context">
        <div class="diposition-process-view__category">
          <span class="material-symbols-rounded" aria-hidden="true"> bookmark</span>
          處分案例>
          {{ formData.form.tradeType }}> {{ formData.form.secondLevelCategory }}>
          {{ formData.form.thirdLevelCategory }}
        </div>
        <div class="diposition-process-view__meta">
          <div class="diposition-process-view__meta-item">
            <span class="diposition-process-view__meta-label">最後更新</span>
            <span class="diposition-process-view__meta-value">
              <!-- {{ formData.form. }} -->
            </span>
          </div>
          <div class="diposition-process-view__meta-item">
            <span class="diposition-process-view__meta-label">異動人員</span>
            <span class="diposition-process-view__meta-value">
              <!-- {{ formData.form. }} -->
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="diposition-process-view__process">
      <div>
        <el-button color="#3049a2" size="large">
          <span class="material-symbols-rounded" aria-hidden="true">add</span>
          <span>新增步驟</span>
        </el-button>

        <div class="diposition-process-view__step-list">
          <template v-for="(item, index) in formData.form.processingFlow" :key="item.seq">
            <button
              type="button"
              :class="[
                'diposition-process-view__step',
                {
                  'diposition-process-view__step--active': formData.currentStep.seq === item.seq
                }
              ]"
              :aria-pressed="formData.currentStep.seq === item.seq"
              @click="handleStepClick(item)"
            >
              <span
                class="material-symbols-rounded diposition-process-view__step-icon"
                aria-hidden="true"
              >
                drag_indicator
              </span>
              <span class="diposition-process-view__step-body">
                <span class="diposition-process-view__step-seq">Step{{ item.seq }}</span>
                <span class="diposition-process-view__step-title">{{ item.title }}</span>
              </span>
            </button>
            <div
              v-if="index < formData.form.processingFlow.length - 1"
              class="diposition-process-view__step-connector"
              aria-hidden="true"
            >
              ↓
            </div>
          </template>
        </div>
      </div>
      <div class="diposition-process-view__editor">
        <system-form-list>
          <div class="system-form__row system-form__row--full">
            <div class="diposition-process-view__editor-header">
              <span class="diposition-process-view__editor-seq">
                Step {{ formData.currentStep.seq }}
              </span>
              <div class="diposition-process-view__text">
                {{ formData.currentStep.title || '-' }}
              </div>
            </div>
          </div>

          <el-divider />

          <div class="system-form__row system-form__row--full">
            <div class="system-form__title">
              <p>說明</p>
            </div>
            <div class="system-form__field">
              <div class="system-form__item">
                <div class="diposition-process-view__text diposition-process-view__text--multiline">
                  {{ formData.currentStep.description || '-' }}
                </div>
              </div>
            </div>
          </div>

          <div class="system-form__row system-form__row--full">
            <div class="system-form__title">
              <p>確認項目</p>
            </div>
            <div class="system-form__field">
              <div class="system-form__item">
                <div class="diposition-process-view__text diposition-process-view__text--multiline">
                  {{ formData.currentStep.confirmation || '-' }}
                </div>
              </div>
            </div>
          </div>
        </system-form-list>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.diposition-process-view {
  &__header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  &__header-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    font-weight: 500;
  }

  &__title {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
  }

  &__header-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__summary {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__notices {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
    margin-bottom: 16px;
  }

  &__notice {
    display: flex;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 5px;
    border-left: 4px solid;

    &--notes {
      border-color: #ff4d4d;
      background-color: #fff0f0;
      color: #ff4d4d;
    }

    &--key-points {
      border-color: #0f3f85;
      background-color: #eff6ff;
      color: #0f3f85;
    }
  }

  &__notice-label {
    flex-shrink: 0;
    font-weight: bold;
  }

  &__notice-content {
    min-width: 0;
    line-height: 1.6;
    overflow-wrap: anywhere;
  }

  &__context {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }

  &__category {
    display: flex;
    align-items: center;
    min-width: 0;
    font-size: 12px;
    color: #313f52;
    font-weight: bold;
    overflow-wrap: anywhere;

    .material-symbols-rounded {
      font-variation-settings: 'FILL' 1;
    }
  }

  &__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  &__meta-label {
    font-size: 12px;
    color: #a6acb4;
  }

  &__text {
    min-height: 40px;
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #d0d5dd;
    border-radius: 4px;
    background-color: #fff;
    color: #2f3d50;
    line-height: 1.6;
    overflow-wrap: anywhere;
  }

  &__text--multiline {
    white-space: pre-line;
  }

  &__process {
    display: grid;
    grid-template-columns: 200px minmax(0, 1fr);
    gap: 15px;
    margin-top: 16px;
  }

  &__step-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;
  }

  &__step {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 8px;
    padding: 12px 20px;
    background-color: #fff;
    border: 1px solid #cbcbcb;
    border-radius: 4px;
    color: inherit;
    cursor: pointer;
    font: inherit;
    text-align: left;

    &:hover {
      background-color: #f5f5f5;
    }

    &--active {
      border: 2px dashed #2c8086;
      background-color: #e6f7ff;
    }
  }

  &__step-connector {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #919ba4;
    line-height: 1;
  }

  &__step-icon {
    font-size: 20px;
  }

  &__step-body {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  &__step-seq {
    font-size: 16px;
    font-weight: bold;
    color: #0f3f85;
  }

  &__step-title {
    font-size: 14px;
    font-weight: 500;
    color: #2f3d50;
    overflow-wrap: anywhere;
  }

  &__editor {
    background-color: #edf5f7;
    border: 1px solid #cbcbcb;
    border-radius: 10px;
    padding: 12px;
  }

  &__editor-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  }

  &__editor-seq {
    flex-shrink: 0;
    font-size: 16px;
    font-weight: bold;
    color: #0f3f85;
  }

  @media (max-width: 900px) {
    &__notices {
      grid-template-columns: 1fr;
    }

    &__process {
      grid-template-columns: 1fr;
    }
  }
}
</style>
