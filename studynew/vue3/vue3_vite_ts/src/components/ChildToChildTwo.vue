<template>

 <div class="child_two">
   <p>{{flags}}</p>
 </div>

</template>

<script setup lang='ts'>
import {ref, reactive} from 'vue'
import Bus from "./ChildToChild"
let flags = ref(false);
Bus.on("on-click", function(flag:boolean) {
  console.log(flag)
  flags.value = flag
})
</script>
<style scoped lang='less'>
.child_two {
  height: 200px;
  width: 100%;
  background-color: blue;
}

</style>