<template>
  <div id="app">
   {{this.$store.state.hello}}
   {{this.$store.getters.getAge}}
   <br>
   <button @click="addAge">点击年龄增加10</button>
   <button @click="minusAge">点击年龄减少10</button>
  </div>
</template>

<style lang="less">
</style>
<script>
export default {
  name: 'app',
  created() {
    setTimeout(()=> {
      // console.log(this.$store)
      this.$store.state.age = 30;
    }, 1000)
  },
  methods:{
    addAge() {
      this.$store.commit("changeAge",10)
    },
    minusAge() {
      this.$store.dispatch("minusAsync", 10)
    }
  }
}
</script>
