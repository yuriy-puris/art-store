import api from '@/services/api'

const state = {
  cardProd: {

  }
}

const actions = {
  loadUserProducts: async ({ commit }, id_products) => {
    let listProducts = await api().post('list-card-product', id_products)
  }
}

const mutations = {

}

export default {
  state,
  actions,
  mutations
}
