const state = {
  menu_list: []
}

const actions = {
  loadMenuList: async ({ commit, state }) => {
    let menu = await axios.get('http://amma-test.bigdropinc.net/wp-json/wp-api-menus/v2/menus/18')
    
  }
}

const mutations = {

}

export default {
  state,
  actions,
  mutations
}