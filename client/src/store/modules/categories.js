import StoreService from "../../services/StoreService";

const state = {
  categories_list: null
}

const actions = {
  loadMainCategory: async ({ commit }) => {
    await StoreService.categories()
      .then(data => {
        commit('setMainCategory', { categories: data })
      })
  }
}

const mutations = {
  setMainCategory: (state, { categories }) => {
    state.categories_list = categories.data.products
  }
}

export default {
  state,
  actions,
  mutations
}
