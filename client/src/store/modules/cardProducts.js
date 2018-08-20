import api from '@/services/api'

const state = {
  advanceListProd: []
}

const actions = {
  loadUserProducts: async ({ commit }, id_products) => {
    let listProducts = await api().post('list-card-product', id_products)
  }
}

const mutations = {
  setAdvanceProduct: (state) => {
    let getLocalValue = JSON.parse(localStorage.getItem('userProducts'))
    state.advanceListProd = getLocalValue
  }
}

export default {
  state,
  actions,
  mutations
}
