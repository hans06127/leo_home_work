<script setup lang="ts">
defineProps<{
  groups: ISystemCaseTagGroup[]
  title?: string
}>()

const model = defineModel<Record<string, string[] | undefined>>({ required: true })

// 更新指定分類的案例標籤，並保留其他分類的選項
const handleGroupUpdate = (key: string, value: Array<string | number | boolean>) => {
  model.value = { ...model.value, [key]: value.map(String) }
}
</script>

<template>
  <div class="system-case-tags">
    <div v-if="title" class="system-case-tags__header">
      <div class="system-case-tags__title">{{ title }}</div>
      <el-divider class="system-case-tags__divider" />
    </div>

    <template v-for="(group, index) in groups" :key="group.key">
      <el-divider v-if="index" class="system-case-tags__divider" />
      <div class="system-case-tags__group">
        <span class="system-case-tags__label">{{ group.label }}</span>
        <el-checkbox-group
          :model-value="model[group.key] ?? []"
          class="system-case-tags__options"
          :aria-label="group.label"
          @update:model-value="handleGroupUpdate(group.key, $event)"
        >
          <el-checkbox v-for="option in group.options" :key="option.value" :value="option.value">
            {{ option.label }}
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.system-case-tags {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  background-color: var(--bg-white);

  &__title {
    color: var(--primary);
    font-size: 16px;
    font-weight: bold;
  }

  &__divider {
    margin: 5px 0;
  }

  &__group {
    display: flex;
    gap: 30px;
  }

  &__label {
    font-size: 14px;
    font-weight: 700;
    line-height: 34px;
    color: var(--tx-main);
  }

  &__options {
    display: flex;
    flex-wrap: wrap;
    min-width: 0;

    :deep(.el-checkbox) {
      min-width: 0;
      max-width: 100%;
      min-height: var(--el-checkbox-height, 32px);
      height: auto;
      white-space: normal;
    }

    :deep(.el-checkbox__label) {
      overflow-wrap: anywhere;
      line-height: 1.5;
    }
  }

  @media (max-width: 900px) {
    &__group {
      flex-direction: column;
      gap: 8px;
    }

    &__label {
      line-height: 1.5;
    }
  }
}
</style>
