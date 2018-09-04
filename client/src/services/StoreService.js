import api from '@/services/api'

export default {
  getMenu() {
    return api().get('api/menu/main-menu')
  },
  signUp(params) {
    return api().post('api/auth/signup', params)
  },
  login(params) {
    return api().post('api/auth/login', params)
  },
  logout() {
    return api().post('api/auth/logout')
  },
  finalBuy(params) {
    return api().post('purchase', params)
  },
  checkout() {
    return api().post('checkout')
  },
  latestProducts() {
    return api().get('api/products/latest-products')
  },
  categories() {
    return api().get('api/categories/categories')
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
