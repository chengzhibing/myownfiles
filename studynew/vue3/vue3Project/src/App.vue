<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <p>{{name}}</p>
    <button @click="changeName">点击修改name</button> -->
    <!-- <HelloWorld msg="Hello Vue 3.0 + Vite"/> -->
    <!-- <input v-focus/> -->
    <!-- <InjectAndProvide /> -->
    <!-- <Hooks name="zhang" @change="onChanges"> -->
      <SetUp/>
  </div>
</template>

<script>
// import * as Vue from "vue"
// import HelloWorld from './components/HelloWorld.vue'
// import RefContent from "./components/RefContent.vue"
// import SetUp from "./components/SetUp.vue"
// import InjectAndProvide from "./components/InjectAndProvide.vue"
import {ref, effect} from "vue"
export default {
  name: 'App',
  setup() {
    // const ref = ref(0)
    effect(() => {
      console.log("Ppppp")
    })
  }
}
</script>
