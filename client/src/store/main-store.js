import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import homeProducts from './modules/homeProducts'
import categories from './modules/categories'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    menu,
    homeProducts,
    categories
  }
})

export default store
