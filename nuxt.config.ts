// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  nitro:{
    preset: "github_pages",
  },
  app: {
    baseURL: '/'
  },
  devtools: { enabled: true },
  css:[
    "/assets/css/main.css",
    "/assets/css/colors.css",
  ],
  modules: [
    '@nuxt/hints',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxt/scripts',
    '@nuxt/eslint'
  ]
})