import axios from 'axios'

const state = {
  menu_list: []
}

const actions = {
  loadMenuList: async ({ commit }) => {
    let menu = await axios.get('http://amma-test.bigdropinc.net/wp-json/wp-api-menus/v2/menus/18')
    commit('setMenuList', { menu })
  }
}

const mutations = {
  setMenuList: (state, { menu }) => {
    state.menu_list = menu.items
  }
}

export default {
  state,
  actions,
  mutations
}