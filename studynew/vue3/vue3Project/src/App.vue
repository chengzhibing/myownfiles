<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    
    <HelloWorld msg="Hello Vue 3.0 + Vite"/>
    <!-- <input v-focus/> -->
    <!-- <InjectAndProvide /> -->
    <Hooks/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import RefContent from "./components/RefContent.vue"
import Hooks from "./components/Hooks.vue"
// import InjectAndProvide from "./components/InjectAndProvide.vue"
export default {
  name: 'App',
  provide() {
    return {
      state: "状态状态状态",
      onChange() {
        console.log(this.state)
      }
    }
  },
  components: {
    HelloWorld,
    Hooks
    // InjectAndProvide
  }
}
</script>
