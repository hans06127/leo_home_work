<script lang="ts" setup>
const formData = reactive({
  form: <IDipositionSaveForm>{
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
    relatedCases: [],
    //   上傳附件
    attachmentCount: []
  }
})
</script>

<template>
  <section class="system-page-slot cases-add">
    <el-form :model="formData.form" class="cases-add__form">
      <div class="cases-add__header">
        <h1 class="cases-add__title">新增案例</h1>
        <div class="cases-add__actions">
          <el-button size="large">
            <span class="cases-add__action-content">
              <span class="material-symbols-rounded" aria-hidden="true"> Link</span>
              <span> 關聯案例 </span>
              <span> 0 </span>
            </span>
          </el-button>
          <el-button size="large">
            <span class="cases-add__action-content">
              <span class="material-symbols-rounded" aria-hidden="true"> Link</span>
              <span> 上傳附件 </span>
              <span>0</span>
            </span>
          </el-button>
        </div>
      </div>
      <div class="cases-add__body">
        <div class="cases-add__sidebar">
          <system-form-list>
            <div class="system-form__row system-form__row--full">
              <div class="system-form__title system-form__title--required">
                <p>進出口</p>
              </div>
              <div class="system-form__field">
                <div class="system-form__item">
                  <el-form-item prop="tradeType" required>
                    <el-radio-group
                      size="large"
                      fill="var(--primary)"
                      aria-label="進出口"
                      v-model="formData.form.tradeType"
                    >
                      <el-radio-button value="進口">進口</el-radio-button>
                      <el-radio-button value="出口">出口</el-radio-button>
                    </el-radio-group>
                  </el-form-item>
                </div>
              </div>
            </div>
            <div class="system-form__row system-form__row--full">
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
            <div class="system-form__row system-form__row--full">
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
            <div class="system-form__row system-form__row--full">
              <div class="system-form__title system-form__title--required">
                <p>處理流程</p>
              </div>
              <div class="system-form__field">
                <div class="system-form__item">
                  <el-form-item prop="processingFlow" required>
                    <div class="cases-add__process">
                      <el-select
                        class="cases-add__process-select"
                        aria-label="處理流程"
                        v-model="formData.form.processingFlow"
                      ></el-select>
                      <el-button aria-label="開啟處理流程">
                        <span class="material-symbols-rounded" aria-hidden="true">
                          open_in_new
                        </span>
                      </el-button>
                    </div>
                  </el-form-item>
                </div>
              </div>
            </div>
            <div class="system-form__row system-form__row--full">
              <div class="system-form__title">
                <p>發文字號</p>
              </div>
              <div class="system-form__field">
                <div class="system-form__item">
                  <el-form-item>
                    <div class="system-row-group">
                      <el-select
                        class="system-row--half"
                        aria-label="發文字號字首"
                        v-model="formData.form.dispatchPrefix"
                      ></el-select>
                      <el-input
                        class="system-row--half"
                        aria-label="發文字號號碼"
                        v-model="formData.form.dispatchNumber"
                      ></el-input>
                    </div>
                  </el-form-item>
                </div>
              </div>
            </div>
            <div class="system-form__row system-form__row--full">
              <div class="system-form__title">
                <p>回文字號</p>
              </div>
              <div class="system-form__field">
                <div class="system-form__item">
                  <el-form-item>
                    <div class="system-row-group">
                      <el-select
                        class="system-row--half"
                        aria-label="回文字號字首"
                        v-model="formData.form.replyPrefix"
                      ></el-select>
                      <el-input
                        class="system-row--half"
                        aria-label="回文字號號碼"
                        v-model="formData.form.replyNumber"
                      ></el-input>
                    </div>
                  </el-form-item>
                </div>
              </div>
            </div>
            <div class="system-form__row system-form__row--full">
              <div class="system-form__title">
                <p>處分日期</p>
              </div>
              <div class="system-form__field">
                <div class="system-form__item">
                  <el-form-item prop="penaltyDate">
                    <el-date-picker
                      class="system-form__date-picker"
                      aria-label="處分日期"
                      v-model="formData.form.penaltyDate"
                    ></el-date-picker>
                  </el-form-item>
                </div>
              </div>
            </div>
            <div class="system-form__row system-form__row--full">
              <div class="system-form__title">
                <p>發生日期</p>
              </div>
              <div class="system-form__field">
                <div class="system-form__item">
                  <el-form-item prop="occurrenceDate">
                    <el-date-picker
                      class="system-form__date-picker"
                      aria-label="發生日期"
                      v-model="formData.form.occurrenceDate"
                    ></el-date-picker>
                  </el-form-item>
                </div>
              </div>
            </div>
            <div class="system-form__row system-form__row--full">
              <div class="system-form__title">
                <p>註銷/銷毀</p>
              </div>
              <div class="system-form__field">
                <div class="system-form__item">
                  <el-form-item prop="caseStatus">
                    <el-radio-group aria-label="註銷或銷毀" v-model="formData.form.caseStatus">
                      <el-radio label="無">無</el-radio>
                      <el-radio label="註銷">註銷</el-radio>
                      <el-radio label="撤銷">撤銷</el-radio>
                    </el-radio-group>
                  </el-form-item>
                </div>
              </div>
            </div>
          </system-form-list>
        </div>
        <div class="cases-add__main">
          <system-form-list>
            <div class="system-form__row system-form__row--full">
              <div class="system-form__title system-form__title--required">
                <p>案例名稱</p>
              </div>
              <div class="system-form__field">
                <div class="system-form__item">
                  <el-form-item prop="caseName" required>
                    <el-input aria-label="案例名稱" v-model="formData.form.caseName"></el-input>
                  </el-form-item>
                </div>
              </div>
            </div>
            <div class="system-form__row system-form__row--half">
              <div class="system-form__title">
                <p>商品</p>
              </div>
              <div class="system-form__field">
                <div class="system-form__item">
                  <el-form-item prop="productName">
                    <el-input aria-label="商品" v-model="formData.form.productName"></el-input>
                  </el-form-item>
                </div>
              </div>
            </div>
            <div class="system-form__row system-form__row--half">
              <div class="system-form__title">
                <p>裁罰金額(元)</p>
              </div>
              <div class="system-form__field">
                <div class="system-form__item">
                  <el-form-item prop="penaltyAmount">
                    <el-input
                      aria-label="裁罰金額"
                      v-model="formData.form.penaltyAmount"
                    ></el-input>
                  </el-form-item>
                </div>
              </div>
            </div>
            <div class="system-form__row system-form__row--full">
              <div class="system-form__title system-form__title--required">
                <p>涉及法規</p>
              </div>
              <div class="system-form__field">
                <div class="system-form__item">
                  <el-form-item prop="relatedRegulations" required>
                    <el-checkbox-group
                      aria-label="涉及法規"
                      v-model="formData.form.relatedRegulations"
                    >
                      <el-checkbox value="法規1">法規1</el-checkbox>
                      <el-checkbox value="法規2">法規2</el-checkbox>
                      <el-checkbox value="法規3">法規3</el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </div>
              </div>
            </div>

            <div class="system-form__row system-form__row--full">
              <div class="system-form__title">
                <p>案例標籤</p>
              </div>
              <div class="system-form__field">
                <div class="system-form__item">
                  <el-form-item>
                    <div class="cases-add__case-tags">
                      <div class="cases-add__case-tags-list">
                        <div class="cases-add__case-tags-row">
                          <span class="cases-add__case-tags-name">標籤分類1</span>
                          <el-checkbox-group
                            class="cases-add__case-tags-options"
                            aria-label="標籤分類1"
                            v-model="formData.form.tags.category1"
                          >
                            <el-checkbox value="標籤1">標籤1</el-checkbox>
                            <el-checkbox value="標籤2">標籤2</el-checkbox>
                            <el-checkbox value="標籤3">標籤3</el-checkbox>
                          </el-checkbox-group>
                        </div>
                        <el-divider class="cases-add__case-tags-divider"></el-divider>
                        <div class="cases-add__case-tags-row">
                          <span class="cases-add__case-tags-name">標籤分類2</span>
                          <el-checkbox-group
                            class="cases-add__case-tags-options"
                            aria-label="標籤分類2"
                            v-model="formData.form.tags.category2"
                          >
                            <el-checkbox value="標籤1">標籤1</el-checkbox>
                            <el-checkbox value="標籤2">標籤2</el-checkbox>
                            <el-checkbox value="標籤3">標籤3</el-checkbox>
                          </el-checkbox-group>
                        </div>
                        <el-divider class="cases-add__case-tags-divider"></el-divider>
                        <div class="cases-add__case-tags-row">
                          <span class="cases-add__case-tags-name">標籤分類3</span>
                          <el-checkbox-group
                            class="cases-add__case-tags-options"
                            aria-label="標籤分類3"
                            v-model="formData.form.tags.category3"
                          >
                            <el-checkbox value="標籤1">標籤1</el-checkbox>
                            <el-checkbox value="標籤2">標籤2</el-checkbox>
                            <el-checkbox value="標籤3">標籤3</el-checkbox>
                          </el-checkbox-group>
                        </div>
                      </div>
                    </div>
                  </el-form-item>
                </div>
              </div>
            </div>
            <div class="system-form__row system-form__row--full">
              <div class="system-form__title system-form__title--required">
                <p>主旨</p>
              </div>
              <div class="system-form__field">
                <div class="system-form__item">
                  <el-form-item prop="subject" required>
                    <el-input aria-label="主旨" v-model="formData.form.subject"></el-input>
                  </el-form-item>
                </div>
              </div>
            </div>
            <div class="system-form__row system-form__row--full">
              <div class="system-form__title system-form__title--required">
                <p>案例說明</p>
              </div>
              <div class="system-form__field">
                <div class="system-form__item">
                  <el-form-item prop="caseDescription" required>
                    <el-input
                      aria-label="案例說明"
                      v-model="formData.form.caseDescription"
                      type="textarea"
                      :rows="4"
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
.cases-add {
  background-color: var(--bg-white);
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: var(--tx-main);
  }

  &__actions {
    button {
      &:hover {
        background-color: var(--white);
        border: 1.5px solid var(--primary);
        color: var(--primary);
      }
    }
  }
  &__action-content {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &__body {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }

  &__sidebar {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    border-radius: 8px;
    background-color: var(--bg-tree);
  }

  &__main {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    border-radius: 8px;
    background-color: var(--bg-tree);
  }

  &__process {
    display: flex;
    align-items: flex-end;
    gap: 4px;

    button {
      flex: 0 0 auto;
      height: 24px;
      width: 24px;

      span {
        font-size: 16px;
      }
    }
  }

  &__process-select {
    flex: 1;
    min-width: 0;
  }

  &__case-tags {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    border-radius: 8px;
    background-color: var(--bg-white);
  }

  &__case-tags-list {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  &__case-tags-divider {
    margin: 5px 0;
  }

  &__case-tags-row {
    display: flex;
    gap: 30px;
  }

  &__case-tags-name {
    font-size: 14px;
    font-weight: 700;
    line-height: 34px;
    color: var(--tx-main);
  }

  &__case-tags-options {
    display: flex;
    gap: 30px;
  }

  @media (max-width: 900px) {
    &__body {
      flex-direction: column;
    }

    &__sidebar {
      width: 100%;
    }

    &__case-tags-row {
      flex-direction: column;
      gap: 8px;
    }

    &__case-tags-name {
      line-height: 1.5;
    }
  }
}
</style>
