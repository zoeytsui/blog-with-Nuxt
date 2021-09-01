export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MKT Blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main'
  ],

  styleResources: {
    scss: ['@/assets/css/*.scss']
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/script.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://i18n.nuxtjs.org
    'nuxt-i18n',
    // for global css style sheet
    '@nuxtjs/style-resources'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: false,
  },

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en_US',
        name: 'English',
        img: '/images/English.png'
      },
      {
        code: 'my',
        iso: 'ms_MY',
        name: 'Malay',
        img: '/images/malay.png'
      },
      {
        code: 'vn',
        iso: 'vi_VN',
        name: 'Tiếng Việt',
        img: '/images/VN.png'
      },
      {
        code: 'ch',
        iso: 'zh_TW',
        name: '繁體中文',
        img: '/images/CN.png'
      }
    ],
    defaultLocale: 'en',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },
    extend(config, { isDev, isClient }) {
      config.node = {
        fs: "empty"
      };
    }
  },

  server: {
    host: process.env.HOST,
    port: process.env.PORT
  }
}
