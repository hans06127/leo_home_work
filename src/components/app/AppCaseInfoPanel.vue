<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    summaryList?: IAppCaseInfoPanelField[]
    detailList?: IAppCaseInfoPanelField[]
    modelValue?: string
    title?: string
  }>(),
  {
    summaryList: () => [],
    detailList: () => [],
    modelValue: '1',
    title: '案件資訊'
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const activeName = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value)
})

const displayValue = (field: IAppCaseInfoPanelField) => field.value ?? ''
</script>

<template>
  <div class="app-case-info-panel">
    <el-collapse v-model="activeName">
      <el-collapse-item :title="title" name="1">
        <template #title>
          <div class="app-case-info-panel__header">
            <div class="app-case-info-panel__title">{{ title }}</div>
            <div class="app-case-info-panel__summary">
              <div
                v-for="field in summaryList"
                :key="field.key"
                class="app-case-info-panel__summary-item"
              >
                <span>{{ field.title }}</span>
                <div v-if="field.tags?.length" class="app-case-info-panel__tags">
                  <span v-for="tag in field.tags" :key="tag" class="app-case-info-panel__tag">
                    {{ tag }}
                  </span>
                </div>
                <div v-else>{{ displayValue(field) }}</div>
              </div>
            </div>
          </div>
        </template>

        <el-divider></el-divider>

        <div class="app-case-info-panel__details">
          <div v-for="field in detailList" :key="field.key" class="app-case-info-panel__field">
            <span>{{ field.title }}</span>
            <div v-if="field.tags?.length" class="app-case-info-panel__tags">
              <span v-for="tag in field.tags" :key="tag" class="app-case-info-panel__tag">
                {{ tag }}
              </span>
            </div>
            <div v-else>{{ displayValue(field) }}</div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style lang="scss" scoped>
.app-case-info-panel {
  :deep(.el-collapse) {
    padding: 4px 14px;
    margin-bottom: 20px;
    border: 1px solid #e1e1e1;
    border-radius: 6px;
  }

  :deep(.el-collapse-item__header) {
    display: flex;
    gap: 20px;
    width: 100%;
    height: auto;
    border-bottom: none;
    border-radius: 6px;
    line-height: normal;
  }

  :deep(.el-collapse-item__wrap) {
    border: none;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__title {
    font-size: 16px;
    font-weight: 700;
  }

  &__summary {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 8px 12px;
    background-color: #f5fbf9;
    border-left: 5px solid #919ba4;
    border-radius: 10px;
  }

  &__summary-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    font-weight: 600;

    &:not(:last-child)::after {
      content: '|';
      margin-left: 8px;
      color: #919ba4;
    }

    span {
      color: #919ba4;
    }
  }

  &__tags {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 6px;
  }

  &__tag {
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    padding: 4px 8px;
    background-color: var(--tag-new-bg);
    border-radius: 999px;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.2;
    color: var(--green);
  }

  &__details {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 8px;
    width: 100%;
    margin-top: 20px;
    font-size: 12px;
    font-weight: 600;

    span {
      color: #919ba4;
    }
  }

  &__field {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  @media (max-width: 768px) {
    &__header,
    &__summary {
      flex-wrap: wrap;
    }

    &__details {
      grid-template-columns: 1fr;
    }
  }
}
</style>
