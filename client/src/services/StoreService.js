import api from '@/services/api'

export default {
  getMenu() {
    return api().get('menu')
  }
}