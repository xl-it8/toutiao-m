import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
export default new Vuex.Store({
  state: {
    user: {},
    searchHistoryList: []
  },
  getters: {
  },
  mutations: {
    saveUser(state, payLoad) {
      console.log(payLoad)
      state.user = payLoad
      // 防止一刷新数据不见了
      // window.localStorage.setItem('refresh_token', JSON.stringify(payLoad))
    },
    setSearchHistoryList(state, payLoad) {
      const arr = state.searchHistoryList
      arr.unshift(payLoad)
      const arr1 = [...new Set(arr)]
      state.searchHistoryList = arr1
    },
    setDelete(state, payLoad) {
      state.searchHistoryList.splice(payLoad, 1)
    },
    setAllDelete(state, payLoad) {
      state.searchHistoryList = []
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
