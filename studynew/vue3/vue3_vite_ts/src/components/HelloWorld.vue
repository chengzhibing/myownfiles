<script setup lang="ts">
import { ref, onMounted, toRefs} from 'vue'
import {useListStore} from "../store/liststore"
const listStore = useListStore()
console.log(listStore.list)
// const {list} = toRefs(listStore)
defineProps<{ msg: string}>()
// listStore.$subscribe((mutation, state) => {
//   console.log(state)
//   //const {list} = toRefs(listStore.list)
// })
onMounted(() => {
  console.log(listStore.list)
})
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <div>{{listStore.list}}</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
