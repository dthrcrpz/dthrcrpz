import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: [
    '@/assets/styles/app.css',
    '@/assets/styles/animations.css',
    '@/assets/styles/buttons.css',
    '@/assets/styles/forms.css',
    '@/assets/styles/types.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
