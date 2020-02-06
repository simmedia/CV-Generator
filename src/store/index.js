import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cv: JSON.parse(localStorage.getItem('cv')) || {}
  },
  mutations: {
    setCV(state, payload) {
      state.cv = payload
    },
    updateCV(state,payload) {
      console.log(payload);
      state.cv.name = payload
    }
  },
  actions: {
},
  getters: {
    cv(state) {
      return state.cv
    }
  }
})
