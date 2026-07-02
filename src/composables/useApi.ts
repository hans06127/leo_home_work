import type { ApiResponse } from '~/types/knowledge'

export function useApi() {
  const config = useRuntimeConfig()

  function get<T>(path: string) {
    return $fetch<ApiResponse<T>>(path, {
      baseURL: config.public.apiBase
    }).then((response) => response.data)
  }

  return {
    get
  }
}
