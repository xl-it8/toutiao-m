import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
export default new Vuex.Store({
  state: {
    user: {}
  },
  getters: {
  },
  mutations: {
    saveUser(state, payLoad) {
      console.log(payLoad)
      state.user = payLoad
      // 防止一刷新数据不见了
      // window.localStorage.setItem('refresh_token', JSON.stringify(payLoad))
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
