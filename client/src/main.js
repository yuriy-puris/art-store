import './assets/scss/index.scss'

import Vue from 'vue'
import App from './App'
import Vue2TouchEvents from 'vue2-touch-events'
import router from './router'
import store from './store/main-store'


Vue.use(Vue2TouchEvents)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
