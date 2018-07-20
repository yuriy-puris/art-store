import axios from 'axios'

const state = {
  products_list: null
}

const actions = {
  loadHomeProducts: async ({ commit }) => {
    let products_list = await axios.get('http://localhost:8081/latest_products')
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