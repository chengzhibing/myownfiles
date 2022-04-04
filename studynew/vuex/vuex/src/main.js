import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './mystore'
// console.log(store)
Vue.config.productionTip = false

new Vue({
  name: 'root',
  router,
  render: h => h(App)
}).$mount('#app')
