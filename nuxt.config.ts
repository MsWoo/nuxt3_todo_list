// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'TODO List',
      meta: [
        {name: 'description', content: '오늘의 할 일은 무엇인가요?'},
        {property: 'og:title', content: '오늘의 할 일'},
        {property: 'og:description', content: '오늘의 할 일은 무엇인가요?'}
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: 'http://localhost:3000/favicon.ico'}
      ]
    }
  },
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt'
  ],
  css: ['@/assets/scss/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
