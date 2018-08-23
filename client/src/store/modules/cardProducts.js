const state = {
  showProductCard: false
}

const mutations = {
  switchProductCard: (state) => {
     state.showProductCard = !state.showProductCard
  }
}

export default {
  state,
  mutations
}
