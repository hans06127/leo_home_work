import type { CasesPayload, HomePayload } from '~/types/knowledge'

// 提供知識庫相關的 API 方法
export function useKnowledgeBase() {
  const api = useApi()

  return {
    // 取得首頁資料
    getHome: () => api.get<HomePayload>('/home'),
    // 取得案例列表資料
    getCases: () => api.get<CasesPayload>('/cases')
  }
}
