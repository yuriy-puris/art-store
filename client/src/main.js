import './assets/scss/index.scss'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/main-store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
