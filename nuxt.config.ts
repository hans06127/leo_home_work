export default defineNuxtConfig({
  compatibilityDate: '2026-06-30',
  devtools: { enabled: true },
  srcDir: 'src/',
  routeRules: {
    '/': { redirect: '/home' }
  },
  build: {
    transpile: ['element-plus']
  },
  vite: {
    optimizeDeps: {
      include: [
        'dayjs',
        'dayjs/plugin/customParseFormat.js',
        'dayjs/plugin/localeData.js',
        'dayjs/plugin/advancedFormat.js',
        'dayjs/plugin/weekOfYear.js',
        'dayjs/plugin/weekYear.js',
        'dayjs/plugin/dayOfYear.js',
        'dayjs/plugin/isSameOrAfter.js',
        'dayjs/plugin/isSameOrBefore.js'
      ]
    },
    resolve: {
      alias: {
        'dayjs/plugin/customParseFormat.js': 'dayjs/esm/plugin/customParseFormat/index.js',
        'dayjs/plugin/localeData.js': 'dayjs/esm/plugin/localeData/index.js',
        'dayjs/plugin/advancedFormat.js': 'dayjs/esm/plugin/advancedFormat/index.js',
        'dayjs/plugin/weekOfYear.js': 'dayjs/esm/plugin/weekOfYear/index.js',
        'dayjs/plugin/weekYear.js': 'dayjs/esm/plugin/weekYear/index.js',
        'dayjs/plugin/dayOfYear.js': 'dayjs/esm/plugin/dayOfYear/index.js',
        'dayjs/plugin/isSameOrAfter.js': 'dayjs/esm/plugin/isSameOrAfter/index.js',
        'dayjs/plugin/isSameOrBefore.js': 'dayjs/esm/plugin/isSameOrBefore/index.js'
      }
    }
  },
  css: ['~/assets/styles/main.scss'],
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
    dirs: ['composables', 'composables/**', 'constants', 'constants/**'],
    presets: [
      {
        from: 'dayjs',
        imports: [{ name: 'default', as: 'dayjs' }]
      },
      {
        from: 'lodash-es',
        imports: [{ name: 'default', as: '_' }]
      }
    ]
  },
  runtimeConfig: {
    public: {
      mockApi: false,
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
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;600;700&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png?v=2'
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
