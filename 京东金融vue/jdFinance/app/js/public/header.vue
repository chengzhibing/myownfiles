<template>
    <div class='header'>
        <span class='left'><em>注册</em>|<em>登录</em></span>
        <btn class='right'>APP下载</btn>
    </div>
</template>

<script>
    import btn from '../core/btn.vue';
    export default {
        conponents:{
            btn
        }
    }
</script>

<style lang='scss' scope>
.header{
    position:fixed;
    height:40px;
    line-height:40px;
    font-size:16px;
    color:#666666;
    .left{
       font-size:14px;
    }
}
</style>