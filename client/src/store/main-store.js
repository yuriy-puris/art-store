import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import homeProducts from './modules/homeProducts'
import categories from './modules/categories'
import userData from './modules/userData'
import cardProducts from './modules/cardProducts'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    menu,
    homeProducts,
    categories,
    userData,
    cardProducts
  }
})

export default store
