const state = {
  userData: {
    userName: '',
    userEmail: ''
  }
}

const mutations = {
  setUserData: (state, { data }) => {
    let userData = { userName: data.data.userName, userEmail: data.data.userEmail }
    state.userData = userData
    console.log(state.userData)
  }
}

export default {
  state,
  mutations
}
