<template>
    <div>
        <p>{{id}}</p>
        <p>{{props.name}}</p>
        <button @click="emitChange">修改属性</button>
    </div>
</template>
<script setup>
//setup的这种写法
import {ref} from "vue"
const props = defineProps({
    name: String
})
const emits = defineEmits({
    onChanges: Function
})
const id = ref(0);
const emitChange = () => {
    emits(onChanges, 10)
}
</script>