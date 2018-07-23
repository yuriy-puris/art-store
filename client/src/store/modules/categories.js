import axios from 'axios'

const state = {
  categories_list: null
}

const actions = {
  loadHomeProducts: async ({ commit }) => {
    let categories_list = await axios.get('latest_products')
    commit('setProductsList', { categories: categories_list })
  }
}

const mutations = {
  setProductsList: (state, { categories }) => {
    state.categories_list = categories.data.acf.artwork_gallery
  }
}

export default {
  state,
  actions,
  mutations
}