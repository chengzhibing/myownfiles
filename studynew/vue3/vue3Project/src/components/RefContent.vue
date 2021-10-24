<template>
  <div>
    <button @click="increament">ref增加</button>
    <!-- 这里不能写dataRef.value -->
    <p>{{dataRef}}</p>
  </div>
</template>
<script>
import {ref} from "vue"
export default {
  setup() {
     const dataRef = ref(10)
     const increament = () => {
         dataRef.value++ //这里必须要使用value
     }
     return {
         dataRef,
         increament
     }
  }

};
</script>
<style lang="less">
</style>