import App from './App.vue'
import axios from 'axios'
import CoolLightBox from 'vue-cool-lightbox'
import router from './router'
import store from './store'
import Vue from 'vue'
import vuetify from './plugins/vuetify'

import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './assets/style/style.scss'
import './registerServiceWorker'
import 'vuetify/dist/vuetify.min.css'
import { VueMasonryPlugin } from 'vue-masonry'

Vue.config.productionTip = false
Vue.use(CoolLightBox)
Vue.use(VueMasonryPlugin)

new Vue({
  axios,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
