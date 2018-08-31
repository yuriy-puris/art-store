import StoreService from '@/services/StoreService'

const state = {
  products_list: null,
}

const actions = {
  loadHomeProducts: async ({ commit }) => {
    await StoreService.latestProducts()
      .then(data => {
        commit('setProductsList', { products: data })
      })
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
