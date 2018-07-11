import axios from 'axios'

const state = {
  menu_list: null
}

const actions = {
  loadMenuList: async ({ commit }) => {
    let menu_list = await axios.get('http://localhost:8081/menu')
    commit('setMenuList', { menu: menu_list })
  }
}

const mutations = {
  setMenuList: (state, { menu }) => {
    state.menu_list = menu.data
  }
}

export default {
  state,
  actions,
  mutations
}