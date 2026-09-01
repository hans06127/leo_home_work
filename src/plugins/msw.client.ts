// 僅在開發環境且啟用模擬 API 時啟動 MSW
export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig()

  if (!import.meta.dev || !config.public.mockApi) {
    return
  }

  const { worker } = await import('~/mocks/browser')

  await worker.start({
    onUnhandledRequest: 'bypass'
  })
})
