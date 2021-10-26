import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './mystore'

Vue.config.productionTip = false

new Vue({
  name: 'root',
  router,
  store,
  render: h => h(App)
}).$mount('#app')