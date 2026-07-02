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
