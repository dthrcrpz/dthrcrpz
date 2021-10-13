const description = `Deither Corpuz's website portfolio`

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dthrcrpz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/mixins' },
    { src: '@/plugins/vee-validate' },
    { src: '@/plugins/v-click-outside', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://image.nuxtjs.org/
    '@nuxt/image',
    // https://www.npmjs.com/package/nuxt-lazy-load
    ['nuxt-lazy-load', {
      directiveOnly: true,
      defaultImage: '/lazy-loader.svg'
    }],
  ],

  // Style Resources
  styleResources: {
    sass: [
      '@/assets/globals.sass',
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      source: '@/static/icon.png',
      fileName: 'icon.png',
    },
    manifest: {
      name: 'dthrcrpz',
      lang: 'en',
      description: description,
    },
    meta: {
      name: 'dthrcrpz',
      description: description,
      theme_color: '#001220'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],
  },

  server: {
    port: process.env.PORT
  }
}
