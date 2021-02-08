import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import vuetify from './plugins/vuetify'
import CoolLightBox from 'vue-cool-lightbox'

import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './assets/style/style.scss'
import './registerServiceWorker'
import 'vuetify/dist/vuetify.min.css'
import { VueMasonryPlugin } from 'vue-masonry'
// import './js/iteratingFiles'
// import './php/iteratingImages.php'

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
