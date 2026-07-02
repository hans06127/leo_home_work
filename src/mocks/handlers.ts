import { http, HttpResponse } from 'msw'

import { casesPayload } from './data/cases'
import { homePayload } from './data/home'

export const handlers = [
  http.get('/api/home', () => {
    return HttpResponse.json({
      data: homePayload,
      message: 'ok'
    })
  }),
  http.get('/api/cases', () => {
    return HttpResponse.json({
      data: casesPayload,
      message: 'ok'
    })
  })
]
