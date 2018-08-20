const state = {
  userData: {}
}

const mutations = {
  setUserInfo: (state) => {
    let userData = JSON.parse(localStorage.getItem('userInfo'))
    state.userData = userData
  }
}

export default {
  state,
  mutations
}
