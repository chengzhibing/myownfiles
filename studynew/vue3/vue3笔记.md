### vue3新特性总结
#### 实例创建并挂载dom元素
```js
//======start1=======
//1、采用create方法代替Vue来挂载dom元素，
//优点：可以生成多个实例，多人同时开发。
import { createApp } from 'vue'
import App from "./App.vue"
import Root from "./Root.vue"

createApp(Root).mount("#root");
createApp(App).mount("#app");
//======end1=======
```

#### 异步导入组件
```js
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
createApp(App).component("app-async", AppAsync)//这样在任何组件内就可以直接使用AppAsync了。

//======end========
```

#### 自定义指令的生命周期
```js
//3、自定义指令的生命周期
//main.js中
import App from "./App.vue"
const app = createApp(App)
app.mount("#app")

app.directive("focus", {
    beforeMount(el, binding, vnode, preVnode) {
        console.log(binding.instance)
    },
    mounted(el) {
        el.focus()
    },
    unmounted() {
        alert("我被卸载了")
    }
})
// App.vue中
<input v-focus/>
//当v-focus删除的后，触发unmounted函数
//如果在App.vue（也可以是其他的模块中）有如下写法,则input元素会被传送到指定的元素上面。
<teleport to="body">
<input/>
</teleport>
```

#### data的修改
```js
//4、data的修改
//data不再接受纯javaScript object，而必须使用function 声明返回
//这样做的好处是如果使用对象的形式，则数据与后文使用的data有共享行为，假如改变某个属性，则会影响后文中对应属性的值
//采用函数的形式的话，则生成一个新的对象，保证data的数据只存在与当前模块中。
export default{
    data: {
        state: ""
    }
}
export default{
    data(){
        return {

        }
    }
}
```

#### 组件内支持多个节点
```js
//5、多个根节点的支持
//（不再只是必须只有一个根节点了，但是需要设置默认的根节点）
//有根节点的话props的属性会被挂载到根节点上
<template>
   <div></div>
</template>
//没有根节点的话，需要设置默认根节点(v-bind="$attrs")，这样的话，props就会挂载到指定的默认根节点上。
<template>
 <p v-bind="$attrs"></p>
 <img/>
</template>
```

#### 函数式组件
```js
//6、函数式组件
//在vue2中函数式组件只用于无状态值得时候的结构渲染（只有props属性）
//这样渲染的性能会高一些，实例化不会频繁的发生
export default{
    props: {
        msg: "hello world"
    },
    functional: true
    //没有data
}
//vue3的函数式组件的写法
import {h} from "vue"
export default function Functional(props, context) {
  return h('div', {
      context.attrs,
      props.msg
  })
}
Functional.props = ["msg"] //定义此语句的话，context中就不会再有props中的msg属性
```

#### 其他的一些更新说明
```js
//7、v-if 和 v-for可以写在同一个标签上，且v-if比v-for的优先级更高。
//8、同一个标签上的同一个属性（props），后者比前者的优先级更高。
```

#### 颠覆意义的变化（重点）
##### setup
```js
//9、setup函数,watch,reactive,watchEffect
//组件内部
import {reactive, watch, watchEffect} from "vue"
export default{
    setup(props, context) {
    const data = reactive({value: 0, count: 0})
    const increament = () => {
        data.value ++;
    }

    watch(() => { //watch第一个参数如果为函数的话，会以函数的返回值的变化作为副作用执行的条件
    //副作用的参数就是该返回值
        return data.value > 2
    }, (isExceeded) => {
        console.log(isExceeded)
        if(isExceeded) {
            console.log("超过了2")
        }else {
            //这一步不会执行
            console.log(isExceeded)
        }
    })
    watch(data, (value)=> { //第一个参数如果为响应式的对象的话，则以对象的属性变化作为副作用执行的条件
    //副作用的参数就是该响应式对象
        console.log('changed', value)
    }, {immediate: true}) //第三个参数是配置项)
    watchEffect(() => { //只要响应式对象data的属性发生变化，就会执行,注意只有访问data的属性的时候watchEffect才会执行，只访问
    //data是不执行的
      console.log("", data.value)
    })
    return {
        data, 
        increament
    }
  }
}
```
##### ref
```js
//10.ref:用于包装基本类型的值为响应式对象
//<templete>
//<p>{{dataRef}}</p> //界面展示10,不要写dataRef.value
//<button @click="increament">点击</button>
//</template>
import {ref} from "vue";
export default{
    setup() {
        const dataRef = ref(10)
        const increament = () => {
            dataRef.value++ //这里必须写value
        }
    }
    return {
        dataRef,
        increament
    }
}

```
##### readonly/reactive/shallowReactive/shellowReadonly
```js
import {readonly, reactive,computed, shallowReactive, shellowReadonly} from "vue"
//11、readonly用于创建只读对象，也就是说对象中的属性是不可以修改的
const dataReadOnly = readonly({value: "This is value"})
//12、shallowReactive对对象的浅层属性进行响应，深层不会,shellowReadonly同
const shellowReactive = shellowReactove({value: "value", behavior: {run: "", walk: ""}})
//13、toRaw,markRow
//toRaw返回代理对象的原对象
//markRow将普通对象转换为不可代理的对象
//14、computed
const total = computed(() => dataRef.value **2)
```

##### provie 和 inject跨组件传递数据的方案
```js
//父组件中
import InjectAndProvide from "./components/InjectAndProvide.vue"
export default {
  name: 'App',
  provide() {
    return {
      state: "状态",
      onChange() {
          console.log(this.state)
      }
    }
  },
  components: {
    HelloWorld,
    InjectAndProvide
  }
}
//InjectAndProvide组件中
// <button @click="onChange">触发onChange事件</button>
import {inject} from "vue"
export default{
    setup(props, context) {
      const state = inject("state");
      const onChange = inject("onChange");
      return {
          state,
          onChange
      }
    }
}
```
##### hooks
