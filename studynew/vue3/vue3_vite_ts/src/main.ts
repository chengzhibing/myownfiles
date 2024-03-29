import { createApp } from 'vue'
import store  from '@store'
import router from "./router"
import './style.css'
import App from './App.vue'

const vueApp = createApp(App)
vueApp.use(store)
vueApp.use(router)
vueApp.mount('#app')
