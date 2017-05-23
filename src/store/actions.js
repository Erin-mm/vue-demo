import * as types from './mutation-types'
import axios from 'axios'

const actions = {
  changeUser({commit}, name){
    commit(types.CHANGE_USER, {name})
  },
  async getUsers ({commit}) {
    let response = await axios.get('/api/users')
    let users = response.data.data
    commit(types.USERS, {users})
  },
  deleteUser({commit}, user) {
    console.info('delete user', user)
    commit(types.DELETE_USER, {user})
  },
  addUser({commit}, user) {
    console.info('add user', user)
    commit(types.ADD_USER, {user})
  },
  getUser({commit}, id) {
    commit(types.ONE_USER, {id})
  },
  editUser({commit}, {user, name}) {
    console.info('edit user', user, name)
    commit(types.EDIT_USER, {user, name})
  }
}

export default actions
