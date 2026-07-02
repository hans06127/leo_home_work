export default defineNuxtConfig({
  compatibilityDate: '2026-06-30',
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['element-plus/dist/index.css', '~/assets/styles/main.scss'],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    },
    {
      path: '~/layouts/components',
      pathPrefix: false
    }
  ],
  imports: {
    dirs: ['composables', 'composables/**', 'constants', 'constants/**']
  },
  runtimeConfig: {
    public: {
      mockApi: true,
      apiBase: '/api'
    }
  },
  app: {
    head: {
      title: '貿易知識入口切版練習',
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
        }
      ],
      meta: [
        {
          name: 'description',
          content: 'Vue 3 + Nuxt + MSW front-end slicing practice project.'
        }
      ]
    }
  }
})
