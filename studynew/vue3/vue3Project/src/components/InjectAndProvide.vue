<template>
  <div>
    <p>hello</p>
    <p>{{state}}</p>
    <button @click="onChange">触发onChange事件</button>
  </div>
</template>
<script>
import { inject } from "vue";
export default {
  setup(props, context) {
    const state = inject("state");
    const onChange = inject("onChange");
    return {
      state,
      onChange
    };
  }
};
</script>