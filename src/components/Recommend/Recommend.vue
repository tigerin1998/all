<template>
<div class="recom" ref="wrapper">
    <div>
    <Swiper></Swiper>
<Hostsongs></Hostsongs>
</div>
</div>
</template>
<script>
import Swiper from './Swiper'
import Hostsongs from './Hostsongs'
import BScroll from 'better-scroll'
export default {
    name:'Recommend',
    mounted() {
        const scroll = new BScroll(this.$refs.wrapper,{click:true})
    },
    components:{
        Swiper,
        Hostsongs
    }
}
</script>
<style scoped>
.recom{
     overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top:100px;
    background-color: #222;
}
</style>
