<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})

type BeforeClose = (done: () => void) => void

withDefaults(
  defineProps<{
    title: string
    closeLabel?: string
    size?: string | number
    beforeClose?: BeforeClose
  }>(),
  {
    closeLabel: '關閉',
    size: '480px',
    beforeClose: undefined
  }
)

const isShowed = defineModel<boolean>({ required: true })

const emit = defineEmits<{
  (e: 'back'): void
  (e: 'expand'): void
}>()
</script>

<template>
  <el-drawer
    v-bind="$attrs"
    v-model="isShowed"
    :size="size"
    :before-close="beforeClose"
    :show-close="false"
  >
    <template #title>
      <el-button class="system-drawer-back" text :aria-label="closeLabel" @click="emit('back')">
        <span class="material-symbols-rounded">arrow_left_alt</span>
      </el-button>
      <span class="system-drawer-title">{{ title }}</span>
      <el-button class="system-drawer-expand" color="#ffffff2e" @click="emit('expand')">
        <span class="material-symbols-rounded system-drawer-expand__icon">open_in_new</span>
        <span>展開</span>
      </el-button>
    </template>

    <slot />
  </el-drawer>
</template>
