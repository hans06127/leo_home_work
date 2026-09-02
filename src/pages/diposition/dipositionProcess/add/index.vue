<script lang="ts" setup>
const mockData = {}

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

// 取得目前步驟在處理流程中的索引
const currentStepIndex = computed(() =>
  formData.form.processingFlow.findIndex((item) => item.seq === formData.currentStep.seq)
)

// 點擊步驟
const handleStepClick = (item: IDipositionProcessItem): void => {
  formData.currentStep = item
}
</script>

<template>
  <section class="system-page-slot diposition-process-add">
    <!-- TODO: form 補相關屬性 -->
    <el-form :model="formData.form">
      <div class="diposition-process-add__header">
        <div class="diposition-process-add__header-title">
          <span class="material-symbols-rounded" aria-hidden="true">docs</span>
          <h1 class="diposition-process-add__title">新增處理程序</h1>
        </div>
        <div class="diposition-process-add__header-actions">
          <el-button color="#0f3f85" size="large">
            <span class="material-symbols-rounded" aria-hidden="true">file_copy</span>
            <span>複製既有程序</span>
          </el-button>
          <el-button size="large">
            <span class="material-symbols-rounded" aria-hidden="true">attach_file</span>
            <span>上傳附件</span>
          </el-button>
        </div>
      </div>

      <div class="diposition-process-add__form-panel">
        <system-form-list>
          <div class="system-form__row system-form__row--half">
            <div class="system-form__title system-form__title--required">
              <p>程序標題</p>
            </div>
            <div class="system-form__field">
              <div class="system-form__item">
                <el-form-item prop="title" required>
                  <el-input v-model="formData.form.title"></el-input>
                </el-form-item>
              </div>
            </div>
          </div>

          <div class="system-form__row system-form__row--half">
            <system-form-list>
              <div class="system-form__row">
                <div class="system-form__title system-form__title--required">
                  <p>進出口</p>
                </div>
                <div class="system-form__field">
                  <div class="system-form__item">
                    <el-form-item prop="tradeType" required>
                      <el-select aria-label="進出口" v-model="formData.form.tradeType"></el-select>
                    </el-form-item>
                  </div>
                </div>
              </div>
              <div class="system-form__row">
                <div class="system-form__title system-form__title--required">
                  <p>第二層樣態</p>
                </div>
                <div class="system-form__field">
                  <div class="system-form__item">
                    <el-form-item prop="secondLevelCategory" required>
                      <el-select
                        aria-label="第二層樣態"
                        v-model="formData.form.secondLevelCategory"
                      ></el-select>
                    </el-form-item>
                  </div>
                </div>
              </div>
              <div class="system-form__row">
                <div class="system-form__title system-form__title--required">
                  <p>第三層樣態</p>
                </div>
                <div class="system-form__field">
                  <div class="system-form__item">
                    <el-form-item prop="thirdLevelCategory" required>
                      <el-select
                        aria-label="第三層樣態"
                        v-model="formData.form.thirdLevelCategory"
                      ></el-select>
                    </el-form-item>
                  </div>
                </div>
              </div>
            </system-form-list>
          </div>

          <div class="system-form__row system-form__row--half">
            <div class="system-form__title system-form__title--required">
              <p>注意事項</p>
            </div>
            <div class="system-form__field">
              <div class="system-form__item">
                <el-form-item prop="notes" required>
                  <el-input v-model="formData.form.notes"></el-input>
                </el-form-item>
              </div>
            </div>
          </div>

          <div class="system-form__row system-form__row--half">
            <div class="system-form__title system-form__title--required">
              <p>重點說明</p>
            </div>
            <div class="system-form__field">
              <div class="system-form__item">
                <el-form-item prop="keyPoints" required>
                  <el-input v-model="formData.form.keyPoints"></el-input>
                </el-form-item>
              </div>
            </div>
          </div>

          <div class="system-form__row system-form__row--full">
            <div class="system-form__field">
              <div class="system-form__item">
                <el-form-item prop="isActive">
                  <el-switch v-model="formData.form.isActive" active-text="啟用"></el-switch>
                </el-form-item>
              </div>
            </div>
          </div>
        </system-form-list>
      </div>

      <div class="diposition-process-add__process">
        <div>
          <el-button color="#3049a2" size="large">
            <span class="material-symbols-rounded" aria-hidden="true">add</span>
            <span>新增步驟</span>
          </el-button>

          <div class="diposition-process-add__step-list">
            <template v-for="(item, index) in formData.form.processingFlow" :key="item.seq">
              <div
                :class="[
                  'diposition-process-add__step',
                  {
                    'diposition-process-add__step--active': formData.currentStep.seq === item.seq
                  }
                ]"
                @click="handleStepClick(item)"
              >
                <span
                  class="material-symbols-rounded diposition-process-add__step-icon"
                  aria-hidden="true"
                >
                  drag_indicator
                </span>
                <div class="diposition-process-add__step-body">
                  <span class="diposition-process-add__step-seq">Step{{ item.seq }}</span>
                  <span class="diposition-process-add__step-title">{{ item.title }}</span>
                </div>
              </div>
              <div
                v-if="index < formData.form.processingFlow.length - 1"
                class="diposition-process-add__step-connector"
                aria-hidden="true"
              >
                ↓
              </div>
            </template>
          </div>
        </div>
        <div class="diposition-process-add__step-editor">
          <system-form-list>
            <div class="system-form__row system-form__row--full">
              <div class="diposition-process-add__step-editor-header">
                <span class="diposition-process-add__step-editor-seq">
                  Step {{ formData.currentStep.seq }}
                </span>
                <el-input v-model="formData.currentStep.title"></el-input>
              </div>
            </div>

            <el-divider />

            <div class="system-form__row system-form__row--full">
              <div class="system-form__title">
                <p>說明</p>
              </div>
              <div class="system-form__field">
                <div class="system-form__item">
                  <el-form-item :prop="`processingFlow.${currentStepIndex}.description`">
                    <el-input type="textarea" v-model="formData.currentStep.description"></el-input>
                  </el-form-item>
                </div>
              </div>
            </div>

            <div class="system-form__row system-form__row--full">
              <div class="system-form__title">
                <p>確認項目</p>
              </div>
              <div class="system-form__field">
                <div class="system-form__item">
                  <el-form-item :prop="`processingFlow.${currentStepIndex}.confirmation`">
                    <el-input
                      type="textarea"
                      v-model="formData.currentStep.confirmation"
                    ></el-input>
                  </el-form-item>
                </div>
              </div>
            </div>
          </system-form-list>
        </div>
      </div>
    </el-form>
  </section>
</template>

<style lang="scss" scoped>
.diposition-process-add {
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

  &__form-panel {
    background-color: #edf5f7;
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
    gap: 8px;
    padding: 12px 20px;
    background-color: #fff;
    border: 1px solid #cbcbcb;
    border-radius: 4px;
    cursor: pointer;

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
  }

  &__step-seq {
    font-size: 16px;
    font-weight: bold;
    color: var(--primary);
  }

  &__step-title {
    font-size: 14px;
    font-weight: 500;
    color: #2f3d50;
  }

  &__step-editor {
    background-color: #edf5f7;
    border: 1px solid #cbcbcb;
    border-radius: 10px;
    padding: 12px;
  }

  &__step-editor-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  }

  &__step-editor-seq {
    flex-shrink: 0;
    font-size: 16px;
    font-weight: bold;
    color: var(--primary);
  }

  @media (max-width: 900px) {
    &__process {
      grid-template-columns: 1fr;
    }
  }
}
</style>
