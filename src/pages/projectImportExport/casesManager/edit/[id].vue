<script setup lang="ts">
import ShereFrom from '../../components/ShereFrom.vue'

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
</script>

<template>
  <ShereFrom>
    <template #title>編輯案例</template>
  </ShereFrom>
</template>

<style lang="scss" scoped>
// none style
</style>
