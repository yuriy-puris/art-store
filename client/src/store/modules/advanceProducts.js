const state = {
  advanceProducts: null,
  totalAmount: null
}

const mutations = {
  setAdvanceProduct: (state, { product }) => {
    if (typeof product === 'undefined') {
      if (localStorage.getItem('advanceProducts') === null) {
        return false
      }
      state.advanceProducts = JSON.parse(localStorage.getItem('advanceProducts'))
      state.totalAmount = JSON.parse(localStorage.getItem('totalAmount'))
      return false
    }
    // если добавляется продукт
    // образуем массив
    // присваеваем текущему продукту кол-во = 1
    state.advanceProducts = []
    product.quantity = 1
    let match = false,
        id
    // забираем ранее купленные продукты
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
    // считаем общую сумму продуктов
    let price_arr = state.advanceProducts.map(item => item.price * item.quantity )
    state.totalAmount = price_arr.reduce((prev, current) => prev + current)
    // сохраняем предварительную покупку и общую сумму
    localStorage.setItem('advanceProducts', JSON.stringify(state.advanceProducts))
    localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
  },
  removeAdvanceProducts: (state) => {
    localStorage.removeItem('advanceProducts')
    localStorage.removeItem('totalAmount')
    state.advanceProducts = null
    state.totalAmount = null
  }
}

const getters = {
  totalAmount: (state) => {
    console.log(state.totalAmount)
  }
}

export default {
  state,
  mutations,
  getters
}
