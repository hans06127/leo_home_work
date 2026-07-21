import ElementPlus, { ID_INJECTION_KEY, ZINDEX_INJECTION_KEY } from 'element-plus'
import zhTw from 'element-plus/es/locale/lang/zh-tw'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ElementPlus, {
    locale: zhTw
  })
  nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
    prefix: 1024,
    current: 0
  })
  nuxtApp.vueApp.provide(ZINDEX_INJECTION_KEY, {
    current: 0
  })
})
