const state = {
  userData: {}
}

const mutations = {
  setUserInfo: (state) => {
    let userData = JSON.parse(localStorage.getItem('userInfo'))
    state.userData = userData
  },
  removeUserInfo: (state) => {
    JSON.parse(localStorage.removeItem('userInfo'))
    state.userData = {}
  }
}

export default {
  state,
  mutations
}
