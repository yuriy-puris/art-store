import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    menu
  }
})

export default store