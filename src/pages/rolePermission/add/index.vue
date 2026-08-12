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
const pageInit = (): void => {
  pageData.isLoading = false
}
</script>

<template>
  <div class=""></div>
</template>

<style lang="scss" scoped>
// none style
</style>