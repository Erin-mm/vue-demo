import * as types from './mutation-types'
const mutations = {
  [types.CHANGE_USER](state, {name}) {
    state.name = name
  },
  [types.USERS](state, {users}) {
    state.users = users
  },
  [types.DELETE_USER](state, {user}){
    state.users.splice(state.users.indexOf(user), 1)
  },
  [types.ADD_USER](state,{user}){
    state.users.push(user)
  },
  [types.ONE_USER](state, { id }) {
    if (state.users) {
      let user = state.users.find(user => user.id === +id)
      state.currentUser = user;
    }
  },
  [types.EDIT_USER](state, { user, name }) {
    user.name = name
  },

}

export default mutations
