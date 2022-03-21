export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
  ],
  fontawesome: {
    icons: {
      regular: ["faEnvelope"],
      brands: [
        "faFacebook",
        "faFacebookF",
        "faFacebookMessenger",
        "faInstagram",
        "faTwitter",
        "faWhatsapp",
        "faPinterest",
        "faTelegramPlane"
      ]
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/strapi',
    '@nuxtjs/axios'
  ],
  strapi: {
    entities: ['articles'],
    url: 'http://localhost:1337'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
