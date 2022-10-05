<template>

 <div class="child_one">
  <button @click="clickToTransDataToChildtwo">
    派发一个事件
  </button>
 </div>

</template>

<script setup lang='ts'>
import {ref, reactive} from 'vue'
import Bus from "./ChildToChild";
let flag:boolean = true;
const clickToTransDataToChildtwo = function () {
  flag = !flag;
  console.log(flag)
  Bus.emit("on-click", flag) 
}

</script>
<style scoped lang='less'>
.child_one{
  height:200px;
  width: 100%;
  background-color: red;
}
</style>