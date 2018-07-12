import api from '@/services/api'

export default {
  getMenu() {
    return api().get('menu')
  },
  registration(params) {
    return api().post('registration', params)
  }
}