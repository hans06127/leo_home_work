import type { ApiResponse } from '~/types/knowledge'

// 建立共用的 API 存取介面
export function useApi() {
  const config = useRuntimeConfig()

  // 發送 GET 請求，並只回傳 payload 資料
  function get<T>(path: string) {
    return $fetch<ApiResponse<T>>(path, {
      baseURL: config.public.apiBase
    }).then((response) => response.data)
  }

  return {
    get
  }
}
