<script lang="ts" setup>
const mockData = {
  id: 1,
  name: '王大明',
  email: 'demo@example.com',
  dept: '資訊部',
  status: true,
  account: 'demo',
  personnelId: 'A123456'
}

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
  <section class="system-page-slot">
    <div class="user app-page">
      <div class="user__header">
        <div>
          <span></span>
          <span></span>
        </div>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span class="user__header-status"></span>
        </div>
      </div>
      <div class="user__info">
        <div></div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="user__module">
        <div></div>
        <div></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// none style
</style>
