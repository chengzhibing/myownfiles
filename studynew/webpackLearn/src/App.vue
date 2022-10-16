<template>

 <div>
   hello vue3
   <hr/>
   <p>{{name}}</p>
 </div>

</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'
const name = ref<string>("zhang");
</script>
<style scoped lang='less'>

</style>