<script lang="ts" setup>
const mockData = <IMajorEventSaveForm>{
  id: '1',
  no: 'NO001',
  title: 'Sample Event',
  statusCode: 'active',
  status: '進行中',
  isFavorite: false,
  content: 'This is a sample event content.',
  isSpecial: true,
  createdDate: '2023-01-01',
  updatedDate: '2023-01-01',
  dept: 'Department A',
  tags: [],
  files: [],
  timeline: <IMajorEventTimeline[]>[
    {
      id: '1',
      timestamp: '2026/01/02',
      files: [],
      content: 'Timeline event 1 content.'
    }
    // {
    //   id: '2',
    //   timestamp: '2023-02-01',
    //   files: [],
    //   content: 'Timeline event 2 content.'
    // }
  ]
}
</script>

<template>
  <section class="system-page-slot major-events-view" aria-label="重要大事記">
    <!-- TODO: 記得補form的東西 -->
    <el-form>
      <div class="major-events-view__box">
        <div class="major-events-main">
          <system-main-box title="案件表頭資訊" icon="info">
            <template #header-extra>
              <span class="major-events-main-form__required">*為必填欄位</span>
            </template>
            <system-form-list>
              <div class="system-form__row">
                <div class="system-form__title">
                  <p>案件編號</p>
                </div>
                <div class="system-form__field">
                  <div class="system-form__item">
                    <el-form-item props="no">
                      <el-input aria-label="案件編號" v-model="mockData.no" disabled></el-input>
                    </el-form-item>
                  </div>
                </div>
              </div>

              <div class="system-form__row">
                <div class="system-form__title">
                  <p>案件名稱</p>
                </div>

                <div class="system-form__field">
                  <div class="system-form__item">
                    <el-form-item props="title">
                      <el-input aria-label="案件名稱" v-model="mockData.title"></el-input>
                    </el-form-item>
                  </div>
                </div>
              </div>

              <div class="system-form__row system-form__row--half">
                <div class="system-form__title">
                  <p>案件狀態</p>
                </div>

                <div class="system-form__field">
                  <div class="system-form__item">
                    <el-form-item props="dept">
                      <el-select v-model="mockData.statusCode">
                        <el-option label="進行中" value="active"></el-option>
                        <el-option label="已完成" value="completed"></el-option>
                      </el-select>
                    </el-form-item>
                  </div>
                </div>
              </div>

              <div class="system-form__row system-form__row--half">
                <div class="system-form__title">
                  <p>承辦單位</p>
                </div>
                <div class="system-form__item">
                  <el-form-item props="dept">
                    <el-select v-model="mockData.dept">
                      <el-option label="Department A" value="dept-a"></el-option>
                      <el-option label="Department B" value="dept-b"></el-option>
                    </el-select>
                  </el-form-item>
                </div>
              </div>

              <div class="system-form__row">
                <div class="system-form__title">
                  <p>大事記說明</p>
                </div>
                <div class="system-form__item">
                  <el-form-item props="dept">
                    <el-input
                      type="textarea"
                      :rows="4"
                      aria-label="大事記說明"
                      v-model="mockData.content"
                    />
                  </el-form-item>
                </div>
              </div>

              <div class="system-form__row">
                <div class="system-form__title">
                  <p>案例標籤</p>
                </div>

                <div class="system-form__item">
                  <el-form-item props="tags"> </el-form-item>
                </div>
              </div>
            </system-form-list>
          </system-main-box>

          <system-main-box title="案件總體相關附件" icon="attach_file">
            <template #header-extra>
              <span class="major-events-main-form__file-header-extra">支援PDF,DOCX,ZIP</span>
            </template>
            <system-form-list>
              <!-- TODO: 組件 -->
            </system-form-list>
          </system-main-box>
        </div>

        <div class="major-events-timeline">
          <system-main-box title="大事記時間軸(Milestones)編輯" icon="schedule">
            <template #header-extra>
              <div class="major-events-main-form__timeline-header-extra">
                <el-button size="small">
                  <div>
                    <span class="material-symbols-rounded">file_export</span>
                    <span>匯入時間軸節點</span>
                  </div>
                </el-button>
                <el-button size="small">
                  <div>
                    <span class="material-symbols-rounded">add</span>
                    <span>新增節點</span>
                  </div>
                </el-button>
              </div>
            </template>

            <!-- 時間軸節點列表 -->

            <!-- TODO:TEMP  -->
            <el-timeline>
              <el-timeline-item
                v-for="(activity, index) in mockData.timeline"
                :key="activity.id"
                :timestamp="activity.timestamp"
                placement="top"
                hide-timestamp
              >
                <div class="major-events-timeline__item">
                  <system-form-list>
                    <div class="system-form__row">
                      <div class="system-form__title major-events-timeline__item-header">
                        <span class="major-events-timeline__item-header-text">
                          時間軸節點 #{{ index + 1 }}
                        </span>
                        <el-button>
                          <span class="material-symbols-rounded">delete</span>
                          <span>刪除此節點</span>
                        </el-button>
                      </div>
                      <div class="system-form__row">
                        <div class="system-form__title">
                          <p>時間/時間區間</p>
                        </div>

                        <div class="system-form__item">
                          <!-- <el-form-item props=""> -->
                          <!-- <el-date-picker
                               v-model="mockData.createdDate"
                               type="date"
                               placeholder="選擇日期"
                             /> -->
                          <!-- </el-form-item> -->
                        </div>
                      </div>

                      <div class="system-form__row">
                        <div class="system-form__title">
                          <p>說明(內容說明)</p>
                        </div>

                        <div class="system-form__item">
                          <!-- <el-form-item props=""> -->
                          <el-input
                            type="textarea"
                            :rows="3"
                            aria-label="說明(內容說明)"
                            v-model="mockData.content"
                          />
                          <!-- </el-form-item> -->
                        </div>
                      </div>

                      <div class="system-form__row">
                        <div class="system-form__title">
                          <p>對應附件列表</p>
                        </div>

                        <div class="system-form__item">
                          <el-form-item props="">
                            <!-- TODO:附件 用組件 -->
                          </el-form-item>
                        </div>
                      </div>
                    </div>
                  </system-form-list>
                </div>
              </el-timeline-item>
            </el-timeline>
          </system-main-box>
        </div>
      </div>
    </el-form>
  </section>
</template>

<style lang="scss" scoped>
.major-events-view {
  background-color: initial;
}

.major-events-view__box {
  display: grid;
  grid-template-columns: minmax(0, 4fr) minmax(0, 6fr);
  width: 100%;
  gap: 30px;
  align-items: start;
}

.major-events-main,
.major-events-timeline {
  min-width: 0;
}

.major-events-main {
  display: grid;
  gap: 30px;
}

@media (max-width: 1024px) {
  .major-events-view__box {
    grid-template-columns: 1fr;
  }
}

.major-events-main-form {
  &__required {
    font-size: 10px;
    color: var(--el-color-danger);
  }

  &__file-header-extra {
    font-size: 10px;
    color: var(--el-color-info);
  }

  &__timeline-header-extra {
    div {
      display: flex;
      gap: 5px;
    }

    button {
      background-color: #ecfdf5;
      font-size: 12px;
      text-align: center;
    }
    .material-symbols-rounded {
      font-size: 14px;
    }
  }
}

.major-events-timeline {
  &__item {
    display: flex;
    flex-direction: column;
  }
}

:deep(.el-divider) {
  margin: 10px 0;
}
</style>
