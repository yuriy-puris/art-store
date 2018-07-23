import api from '@/services/api'

const state = {
  products_list: null
}

const actions = {
  loadHomeProducts: async ({ commit }) => {
    let products_list = await api().get('latest_products')
    commit('setProductsList', { products: products_list })
  }
}

const mutations = {
  setProductsList: (state, { products }) => {
    state.products_list = products.data.acf.artwork_gallery
  }
}

export default {
  state,
  actions,
  mutations
}
