import VueDOMPurifyHTML from 'vue-dompurify-html'

// 註冊 DOMPurify，僅允許搜尋標記需要的 HTML
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    VueDOMPurifyHTML,
    {
      default: {
        ALLOWED_TAGS: ['mark'],
        ALLOWED_ATTR: ['class']
      }
    }
  )
})
