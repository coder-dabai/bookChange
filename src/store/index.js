import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logTag:1
  },
  mutations: {
    changeLog(state){
      state.logTag = 0
    }
  },
  actions: {
  },
  modules: {
  }
})
