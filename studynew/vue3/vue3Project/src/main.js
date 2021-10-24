import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// createApp(App).mount('#app')
const app = createApp(App)
app.mount("#app")

// app.directive("focus", {
//     beforeMount(el, binding, vnode, preVnode) {
//         console.log(binding.instance)
//     },
//     mounted(el) {
//         el.focus()
//     },
//     unmounted() {
//         alert("我被卸载了")
//     }
// })


