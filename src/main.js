import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import './vant'
import './styles/index.less'
// import './styles/base.css'
import MyIcon from '@/components/MyIcon.vue'
Vue.config.productionTip = false
Vue.component('MyIcon', MyIcon)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
