<template>
<div>
    <div class="header">
      <div class="back">
                <img  src="../../assets/返回.png" @click="backhome" class="backimg">
        </div>
    </div>
    <div ref="wrapper" class="box">
    <div>
    <router-link tag="div" :to="'/qqmusicsinger/'+item.id+'/'+mindex+'/'+item.name" class="item" v-for="item in hotobj" :key="item.id">
        <img :src="item.img1v1Url">
        <p>{{item.name}}</p>
    </router-link>
    <router-link tag="div" :to="'/qqmusicsinger/'+item.singer_mid+'/'+mindex+'/'+item.singer_name" class="item" v-for="item in obj" :key="item.singer_id" >
        <img :src="item.singer_pic">
        <p>{{item.singer_name}}</p>
    </router-link>
    </div>
    </div>
</div>    
</template>
<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
    name:'singers',
    data() {
        return {
            mindex:this.$route.params.id,
            hotobj:[],
            obj:[],
            singertype:[
                'https://v1.itooi.cn/tencent/artist/list?sexId=0&areaId=200&page=1&pageSize=30',//内地男
                'https://v1.itooi.cn/tencent/artist/list?sexId=1&areaId=200&page=1&pageSize=30',//内地女
                'https://v1.itooi.cn/tencent/artist/list?sexId=0&areaId=2&page=1&pageSize=30',//港台男
                'https://v1.itooi.cn/tencent/artist/list?sexId=1&areaId=2&page=1&pageSize=30',//港台女
                'https://v1.itooi.cn/tencent/artist/list?sexId=2&areaId=200&page=1&pageSize=30',//内地组合
                'https://v1.itooi.cn/tencent/artist/list?sexId=2&areaId=2&page=1&pageSize=30',//港台组合
                'https://v1.itooi.cn/tencent/artist/list?sexId=0&areaId=5&page=1&pageSize=30',//欧美男
                'https://v1.itooi.cn/tencent/artist/list?sexId=1&areaId=5&page=1&pageSize=30',//偶美女
                'https://v1.itooi.cn/tencent/artist/list?sexId=2&areaId=5&page=1&pageSize=30',//欧美组合
                'https://v1.itooi.cn/tencent/artist/list?sexId=0&areaId=4&page=1&pageSize=30',//日本男
                'https://v1.itooi.cn/tencent/artist/list?sexId=1&areaId=4&page=1&pageSize=30',//日本女
                'https://v1.itooi.cn/tencent/artist/list?sexId=2&areaId=4&page=1&pageSize=30',//日本组合
                'https://v1.itooi.cn/tencent/artist/list?sexId=0&areaId=3&page=1&pageSize=30',//韩国男
                'https://v1.itooi.cn/tencent/artist/list?sexId=1&areaId=3&page=1&pageSize=30',//韩国女
                'https://v1.itooi.cn/tencent/artist/list?sexId=2&areaId=3&page=1&pageSize=30',//韩国组合
                'https://v1.itooi.cn/tencent/artist/list?sexId=-100&areaId=6&page=1&pageSize=30',//其他
            ]
        }
    },
     mounted() {
        this.getsinger()
         const scroll = new BScroll(this.$refs.wrapper,{click:true})
    },
    methods:{
        getsinger:function(){
            if(this.$route.params.id==0){
                axios.get("https://v1.itooi.cn/netease/artist/top?page=0&pageSize=30").then(this.showsinger)
            }else{
                 axios.get(this.singertype[this.$route.params.id-1]).then(this.showother)
            }
    },
    showsinger:function(res){
        this.hotobj=res.data.data;
        
    },
    showother(res){
        console.log(res);
        
        this.obj=res.data.data;
        
    },
     backhome:function(){
        this.$router.go(-1)
    },
    }
}
</script>
<style scoped>
.header{
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    padding: 10px;
    display: flex;
    align-items: center;
    background-color:#222;
    box-shadow: 0 0 3px #DCDFE6;
}
.back{
   
}
.backimg{
    width: 30px;
    height: 30px;
}
.box{
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top:54px;
}
.item{
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #DCDFE6;
}
.item:first-child{
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #DCDFE6;
    margin-top: 54px;
}
img{
    width: 60px;
    height: 60px;
    border-radius: 30px;
}
p{
    margin-left: 10px;
}
.title{
    color: aliceblue;
}
</style>
