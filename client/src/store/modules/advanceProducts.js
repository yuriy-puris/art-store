const state = {
  advanceProducts: null,
}

const mutations = {
  setAdvanceProduct: (state, { product }) => {
    if (typeof product === 'undefined') {
      if (localStorage.getItem('advanceProducts') === null) {
        return false
      }
      state.advanceProducts = JSON.parse(localStorage.getItem('advanceProducts'))
      return false
    }
    state.advanceProducts = []
    product.quantity = 1
    let match = false,
        id
    if (localStorage.getItem('advanceProducts') !== null) {
      state.advanceProducts = JSON.parse(localStorage.getItem('advanceProducts'))
    }
    // поиск одинаковых продуктов
    state.advanceProducts.forEach(item => {
      if (item.id === product.id) {
        match = true
        id = item.id
      }
    })
    // добавление продукта
    state.advanceProducts.push(product)
    // при совпадении вырезаем вставленный продукт с конца
    // увеличиваем кол-во существующего
    if (match) {
      state.advanceProducts.pop(product)
      state.advanceProducts.map(item => {
        if (item.id === id) {
          item.quantity ++
        }
      })
    }
    localStorage.setItem('advanceProducts', JSON.stringify(state.advanceProducts))
  },
  removeAdvanceProducts: (state) => {
    localStorage.removeItem('advanceProducts')
    state.advanceProducts = null
  }
}


export default {
  state,
  mutations,
}
