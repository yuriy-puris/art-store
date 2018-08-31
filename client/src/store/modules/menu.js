import StoreService from '@/services/StoreService'

const state = {
  menu_list: null
}

const actions = {
  loadMenuList: async ({ commit }) => {
    await StoreService.getMenu()
      .then(data => {
        commit('setMenuList', { menu: data })
      })
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
