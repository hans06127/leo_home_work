import { http, HttpResponse } from 'msw'

import { casesPayload } from './data/cases'
import { homePayload } from './data/home'

export const handlers = [
  // 模擬首頁 API 回應
  http.get('/api/home', () => {
    return HttpResponse.json({
      data: homePayload,
      message: 'ok'
    })
  }),
  // 模擬案例列表 API 回應
  http.get('/api/cases', () => {
    return HttpResponse.json({
      data: casesPayload,
      message: 'ok'
    })
  })
]
