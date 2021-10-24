<template>
  <div>
    <p>这个是内容组件</p>
    <button @click="increament">data增加</button>
    <button @click="increament2">data2增加</button>
    <p>data的值：{{data.value}}</p>
    <p>data2的值：{{data2.value}}</p>
  </div>
</template>
<script>
import {reactive, watch, watchEffect} from "vue"
export default {
  setup(props, context) {
    const data = reactive({value: 0, count: 0})
    const data2 = reactive({value: 0})
    const increament = () => {
        data.value ++;
    }
    const increament2 = () => {
      data2.value ++
    }

    // watch(() => { //watch第一个参数如果为函数的话，会以函数的返回值的变化作为副作用执行的条件
    // //副作用的参数就是该返回值
    //     return data.value > 2
    // }, (isExceeded) => {
    //     console.log(isExceeded)
    //     if(isExceeded) {
    //         console.log("超过了2")
    //     }else {
    //         console.log(isExceeded)
    //     }
    // })
    watch(data, (value)=> { //第一个参数如果为响应式的对象的话，则以对象的属性变化作为副作用执行的条件
    //副作用的参数就是该响应式对象
        console.log('changed', value)
    }, {immediate: true}) //第三个参数是配置项
    watchEffect(() => {
      console.log("", data2)
    }) 
    return {
        data, 
        increament,
        increament2,
        data2
    }
  }
};
</script>
<style lang="less">
</style>