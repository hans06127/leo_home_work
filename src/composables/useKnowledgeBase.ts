import type { CasesPayload, HomePayload } from '~/types/knowledge'

export function useKnowledgeBase() {
  const api = useApi()

  return {
    getHome: () => api.get<HomePayload>('/home'),
    getCases: () => api.get<CasesPayload>('/cases')
  }
}
