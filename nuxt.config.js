import pkg from './package'
import colors from "vuetify/es5/util/colors";

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/scss/style.scss'],
  vuetify: {
    customVariables: ['~/assets/scss/config/_variable.scss'],
    theme: {
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          twitter: '#55acee',
          facebook: '#3b5998',
          background: colors.grey.lighten5
        }
      }
    },
    //  theme: { }
  },
  styleResources: {
    sass: [
      '~/assets/scss/config/variable.scss',
      '~/assets/scss/config/mixin.scss',
      '~/assets/scss/config/extend.scss',
    ],
  },


  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['plugins/vuetify'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: ['vuetify/lib'],
    extend(config, ctx) {
    },
    sass: {
      indentedSyntax: true
    }
  },
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',
  ]
}
