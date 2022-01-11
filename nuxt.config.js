const description = `Deither Corpuz's website portfolio`

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'dthrcrpz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:description', name: 'og:description', content: description },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'dthrcrpz' },
      { hid: 'keywords', name: 'keywords', content: 'deither, corpuz, deither corpuz, deither corpuz portfolio, deither portfolio, corpuz portfolio, web developer, laravel developer, vue developer, laravel, vue, fullstack web developer, full-stack, full stack developer' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/globals'
  ],

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
    '@nuxtjs/google-fonts',
    '@nuxtjs/google-analytics',
    '@nuxtjs/moment',
    '@nuxtjs/tailwindcss'
  ],

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },

  googleFonts: {
    preconnect: true,
    prefetch: true,
    families: {
      'Fira+Code': [300, 400, 600],
      'Fira+Code': {
        wght: [300, 400, 600],
        ital: [300]
      },
      'Montserrat': {
        wght: [400, 700],
        ital: [300]
      }
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
    '@layer0/nuxt/module',
    '@nuxtjs/google-gtag',
    'nuxt-helmet',
    '@nuxtjs/sitemap'
  ],

  'google-gtag':{
    id: process.env.GOOGLE_ANALYTICS_ID,
    config:{
      // this are the config options for `gtag
      // check out official docs: https://developers.google.com/analytics/devguides/collection/gtagjs/
      anonymize_ip: true, // anonymize IP 
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...)
    // optional you can add more configuration like [AdWords](https://developers.google.com/adwords-remarketing-tag/#configuring_the_global_site_tag_for_multiple_accounts)
  },

  sitemap: {
    hostname: 'https://dthrcrpz.dev',
    gzip: true,
    routes: [
      '/blogs/i-developed-my-first-laravel-package',
      '/blogs/i-revamped-my-portfolio-website',
    ]
  },

  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    },
    csp: {
      hashAlgorithm: 'sha256',
      policies: {
        'default-src': [
          "'self'"
        ],
        'script-src': [
          "'self'",
          "'unsafe-inline'",
          '*.googletagmanager.com',
          '*.google-analytics.com'
        ],
        'style-src': [
          "'self'",
          "'unsafe-inline'",
          'fonts.gstatic.com',
          'fonts.googleapis.com'
        ],
        'connect-src': [
          "'self'",
          "'unsafe-inline'",
          '*.google-analytics.com',
          'cdn.contentful.com',
          'api.emailjs.com'
        ],
        'font-src': [
          'fonts.gstatic.com',
          'fonts.googleapis.com'
        ],
        'img-src': [
          "'self'",
          "'unsafe-inline'",
          '*.ctfassets.net',
          '*.google-analytics.com'
        ],
        'script-src-elem': [
          "'self'",
          "'unsafe-inline'",
          '*.googletagmanager.com',
          '*.google-analytics.com'
        ]
      }
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
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    websiteUrl: process.env.WEBSITE_URL
  },

  server: {
    port: process.env.PORT
  }
}
