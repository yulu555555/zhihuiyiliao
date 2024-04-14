import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    user:'',
    role:''
  },
  getters: {
    getToken(state){
      return state.token
    },
    getUser(state){
      return state.user
    },
    getRole(state){
      return state.role
    }
  },
  mutations: {
    setToken(state,data){
      state.token = data
      window.localStorage.setItem("token",data)
    },
    setUser(state,data){
      state.user = data
      window.localStorage.setItem("user",JSON.stringify(data))
    },
    setRole(state,role){
      state.role = role
      window.localStorage.setItem("role",role)
    }
  },
  actions: {
  },
  modules: {
  }
})
