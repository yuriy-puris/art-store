const state = {
  userData: null
}

const mutations = {
  setUserInfo: (state) => {
    let userData = JSON.parse(localStorage.getItem('userInfo'))
    state.userData = userData
  },
  removeUserInfo: (state) => {
    localStorage.removeItem('userInfo')
    state.userData = null
  }
}

export default {
  state,
  mutations
}
