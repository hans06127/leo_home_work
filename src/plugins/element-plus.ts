import {
  ElButton,
  ElCheckbox,
  ElCheckboxGroup,
  ElCollapse,
  ElCollapseItem,
  ElDatePicker,
  ElDivider,
  ElDrawer,
  ElEmpty,
  ElForm,
  ElFormItem,
  ElInput,
  ElInputTag,
  ElMenu,
  ElMenuItem,
  ElOption,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElSelect,
  ElSubMenu,
  ElSwitch,
  ElTimeline,
  ElTimelineItem,
  ID_INJECTION_KEY,
  ZINDEX_INJECTION_KEY,
  provideGlobalConfig
} from 'element-plus'
import zhTw from 'element-plus/es/locale/lang/zh-tw'

import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/checkbox/style/css'
import 'element-plus/es/components/checkbox-group/style/css'
import 'element-plus/es/components/collapse/style/css'
import 'element-plus/es/components/collapse-item/style/css'
import 'element-plus/es/components/date-picker/style/css'
import 'element-plus/es/components/divider/style/css'
import 'element-plus/es/components/drawer/style/css'
import 'element-plus/es/components/empty/style/css'
import 'element-plus/es/components/form/style/css'
import 'element-plus/es/components/form-item/style/css'
import 'element-plus/es/components/input/style/css'
import 'element-plus/es/components/input-tag/style/css'
import 'element-plus/es/components/menu/style/css'
import 'element-plus/es/components/menu-item/style/css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/option/style/css'
import 'element-plus/es/components/radio/style/css'
import 'element-plus/es/components/radio-button/style/css'
import 'element-plus/es/components/radio-group/style/css'
import 'element-plus/es/components/select/style/css'
import 'element-plus/es/components/sub-menu/style/css'
import 'element-plus/es/components/switch/style/css'
import 'element-plus/es/components/timeline/style/css'
import 'element-plus/es/components/timeline-item/style/css'

const components = [
  ElButton,
  ElCheckbox,
  ElCheckboxGroup,
  ElCollapse,
  ElCollapseItem,
  ElDatePicker,
  ElDivider,
  ElDrawer,
  ElEmpty,
  ElForm,
  ElFormItem,
  ElInput,
  ElInputTag,
  ElMenu,
  ElMenuItem,
  ElOption,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElSelect,
  ElSubMenu,
  ElSwitch,
  ElTimeline,
  ElTimelineItem
]

export default defineNuxtPlugin((nuxtApp) => {
  components.forEach((component) => nuxtApp.vueApp.use(component))
  provideGlobalConfig({ locale: zhTw }, nuxtApp.vueApp, true)
  nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
    prefix: 1024,
    current: 0
  })
  nuxtApp.vueApp.provide(ZINDEX_INJECTION_KEY, {
    current: 0
  })
})
