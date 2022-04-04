<template>
  <div id="app">
   <br>
   <button @click="addAge">点击年龄增加10</button>
   <button @click="minusAge">点击年龄减少10</button>
   <div>{{age}}</div>
  </div>
</template>

<style lang="less">
</style>
<script>
export default {
  name: 'app',
  data() {
    return {
    }
  },
  created() {
    console.log(this.$options)
  },
  computed: {
    age() {
      return this.$store.state.age;
    }
  },
  methods:{
    addAge() {
      this.$store.commit("changeAgeOfMutations", 10)
      console.log(this.$store)
    },
    minusAge() {
      this.$store.dispatch("minusAgeOfAction", 10)
    }
  },
  mounted() {
   this.age = this.$store.state.age;
   console.log(this)
  }
}
</script>
