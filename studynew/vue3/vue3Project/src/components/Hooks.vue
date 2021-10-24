<template>
    <div>
        <p>{{id}}</p>
    </div>
</template>
<script setup>
//setup的这种写法
import {ref} from "vue"
const id = ref(0);
</script>