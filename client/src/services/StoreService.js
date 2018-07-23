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
  startPage() {
    return api().get('/')
  }
}