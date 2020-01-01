import { configure,addDecorator } from '@storybook/vue';

import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';

import colors from "vuetify/es5/util/colors";

import './style.scss';

import '~/assets/scss/config/_variable.scss';
import '~/assets/scss/config/_mixin.scss';
import '~/assets/scss/config/_extend.scss';

import '~/assets/scss/style.scss';

Vue.use(Vuetify)

addDecorator(() => ({
  vuetify: new Vuetify({
    theme: {
      dark: false,
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
        },
        dark: {
          //primary: "#2196F3"
        },
      },
      icons: {
        iconfont: "mdi" // default is 'mdi'
      },
    }
  }
  ),
  template: '<v-app><v-content><story/></v-content></v-app>'
}))


// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
