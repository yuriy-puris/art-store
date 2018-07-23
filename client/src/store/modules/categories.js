import api from '@/services/api'

const state = {
  categories_list: null
}

const actions = {
  loadMainCategory: async ({ commit }) => {
    let categories_list = await api().get('categories')
    commit('setMainCategory', { categories: categories_list })
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
