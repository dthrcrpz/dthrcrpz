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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/mixins' },
    { src: '@/plugins/vee-validate' },
    { src: '@/plugins/v-click-outside', ssr: false },
    { src: '@/plugins/vue-scrollto', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts',
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },

  googleFonts: {
    preconnect: true,
    prefetch: true,
    families: {
      'Fira+Code': [300, 400, 600],
      'Montserrat': [400, 700],
      'Lato': [400, 900]
    },
    display: 'swap',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://www.npmjs.com/package/nuxt-lazy-load
    ['nuxt-lazy-load', {
      directiveOnly: true,
      defaultImage: '/lazy-loader.svg'
    }],
    '@layer0/nuxt/module'
  ],

  // Style Resources
  styleResources: {
    sass: [
      '@/assets/globals.sass',
    ]
  },

  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
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

  serverMiddleware: [
    (req, res, next) => {
      if (/\/{2,}/.test(req.url)) {
        const url = req.url.replace(/\/{2,}/g, '/')
        res.writeHead(301, { 'Location': url })
        return res.end()
      }
      next()
    }
  ],

  env: {
    emailJsUserId: process.env.EMAILJS_USER_ID,
    emailJsServiceId: process.env.EMAILJS_SERVICE_ID,
    emailJsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  },

  server: {
    port: process.env.PORT
  }
}
