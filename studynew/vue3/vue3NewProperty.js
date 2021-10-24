//======start1=======
//1、采用create方法代替Vue来挂载dom元素，
//优点：可以生成多个实例，多人同时开发。
import { createApp } from 'vue'
import App from "./App.vue"
import Root from "./Root.vue"

createApp(Root).mount("#root");
createApp(App).mount("#app");
//======end1=======

//======start2=====
//2、异步导入组件
//在打包后会生成一个单独的js文件，而不是直接打包进app.js中。
//（1）局部异步组件
import {defineAsyncComponent} from "vue";
const AppAsync = defineAsyncComponent(() => {
    import ('./components/AppAsync.vue')
})
export default{
    components: {
        AppAsync
    }
}
//（2）全局异步组件
//在main.js中
import {defineAsyncComponent} from "vue";
const AppAsync = defineAsyncComponent(() => {
    import ('./components/AppAsync.vue')
})
App.component("app-async", AppAsync)//这样在任何组件内就可以直接使用AppAsync了。

//======end========

//======start3======
app = createApp(App)
app.directive("focus", {
    befor
})
//======end=========