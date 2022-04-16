<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <p>{{name}}</p>
    <button @click="changeName">点击修改name</button> -->
    <!-- <HelloWorld msg="Hello Vue 3.0 + Vite"/> -->
    <!-- <input v-focus/> -->
    <!-- <InjectAndProvide /> -->
    <!-- <Hooks name="zhang" @change="onChanges"> -->
      <button @click="clickToAdd">增加</button>
      <SetUp/>
  </div>
</template>

<script>
// import * as Vue from "vue"
// import HelloWorld from './components/HelloWorld.vue'
// import RefContent from "./components/RefContent.vue"
// import SetUp from "./components/SetUp.vue"
// import InjectAndProvide from "./components/InjectAndProvide.vue"
import {ref, effect, toRaw} from "vue"
export default {
  name: 'App',
  setup() {
    const refData = ref(0);
    const refToRaw = toRaw(refData)
    console.log(ref)
    console.log(refToRaw.value)
    effect(() => {
      console.log(refData.value)
    })
    const clickToAdd = function() {
      refData.value++;
    }
    return {ref, clickToAdd}
  }
}
</script>
