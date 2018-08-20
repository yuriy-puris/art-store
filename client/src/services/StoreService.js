import api from '@/services/api'

export default {
  getMenu() {
    return api().get('menu')
  },
  signUp(params) {
    return api().post('signup', params)
  },
  login(params) {
    return api().post('login', params)
  },
  finalBuy(params) {
    return api().post('purchase', params)
  },
  startPage() {
    return api().get('/')
  },
  loadCardProduct(params) {
    return api().post('card-product', params)
  },
  listCardProduct(params) {
    return api().post('list-products', id_products)
  }
}
