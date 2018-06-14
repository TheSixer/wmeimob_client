const apiConfig = require('./base.config')
const isProdMode = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'wmeimob',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
        vueLoader.options.loaders.less = 'vue-style-loader!css-loader!less-loader'
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      'axios',
      'vuetify',
      'moment',
      'particles.js',
      'mavon-editor',
      'swiper'
    ],
    // 为 JS 和 Vue 文件定制 babel 配置。https://nuxtjs.org/api/configuration-build/#analyze
    babel: {
      presets: ['es2015', 'stage-2'],
      plugins: [
        'transform-async-to-generator',
        'transform-runtime'
      ],
      comments: true
    }
  },
  dev: !isProdMode,
  env: {
    baseUrl: apiConfig.baseUrl
  },
  plugins: [
    { src: '~/plugins/axios', ssr: true },
    { src: '~/plugins/vuetify', ssr: false },
    { src: '~/plugins/moment', ssr: true },
    { src: '~/plugins/particles.js', ssr: false },
    { src: '~/plugins/mavonEditor', ssr: false },
    { src: '~/plugins/swiper.js', ssr: false }
  ],
  css: [
    { src: '~/assets/styles/less/base.less', lang: 'less' },
    'vuetify/dist/vuetify.min.css',
    'material-design-icons-iconfont/dist/material-design-icons.css',
    '~/assets/styles/vuetify.theme.css',
    'swiper/dist/css/swiper.min.css',
    'mavon-editor/dist/css/index.css'
  ]
}
