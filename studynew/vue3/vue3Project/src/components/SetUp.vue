<template>
    <div>
        <p>setup</p>
        <p>{{id}}</p>
        <div><button @click="changeId">点击修改值</button></div>
    </div>
</template>
<script>
import {ref, effect} from "vue"
export default {
    setup() {
        const id = ref(0);
        const changeId = () => {
            id.value++;
        }
        effect(() => {
            console.log("ppppp")
            console.log(id.value)
        })
        return {changeId, id}
    }
}
</script>