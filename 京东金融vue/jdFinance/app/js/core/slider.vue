<template>
    <section :class='cname'>
        <swiper :options='options' :not-next-tick='options.notNextTick'>
            <swiper-slider v-for='item in items' :key='item.href'>
                <router-link :to='{name:item.href}'>
                    <img src="item.src">
                </router-link>
            </swiper-slider>
            <div v-if="options.pagination" slot="pagination" class="swiper-pagination"/>
        </swiper> 
    </section>
</template>

<script>
    import {swiper,swiperSlider} from 'vue-awesome-swiper';
    export default {
        props:{
            cname:{
                type:String,
                default:''
            },
            options:{
                type:Object,
                default(){
                    return {
                        autoplay: true,
                        loop: true,
                        pagination: {
                            el: ".swiper-pagination",
                        },
                        notNextTick: false
                    }
                }
            },
            items:{
                type:Array,
                default(){
                    return[{href:'',src:''}];
                }
            }
        },
        data(){
            return{
                
            }
        },
        components:{
            swiper,
            swiperSlider
        }
    }
</script>

<style lang="scss">
    @import "~swiper/dist/css/swiper.css"
</style>