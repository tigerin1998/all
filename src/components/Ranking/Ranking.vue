<template>
<div ref="nowobj" >
    <router-link tag="div" :to="'/listdetail/'+count" class="item" v-for="(item, count) in listpg" :key="count">
        <div class="lf-pg">
            <img :src="listpg[count]" >
        </div>
         <div class="rt-detail">
             <p v-for="(item, index) in showthree[count]" :key="index">{{index+1}}.{{item.name}}一{{item.artists[0].name}}</p>
         </div>
    </router-link>
</div>   
</template>
<script>
import axios from 'axios';
export default {
    name:'paihang',
    data() {
        return {
            listpg:[],
            showthree:[],
        }
    },
mounted() {
    this.getranking();
},
methods:{
    mloading(){
     
    },
 getranking:function(){
     axios.get("https://v1.itooi.cn/netease/songList?id=19723756&pageSize=20&").then(this.showinfo1)
     axios.get("https://v1.itooi.cn/netease/songList?id=3779629&pageSize=20").then(this.showinfo2)
     axios.get("https://v1.itooi.cn/netease/songList?id=2884035&pageSize=20").then(this.showinfo3)
     axios.get("https://v1.itooi.cn/netease/songList?id=3778678&pageSize=20").then(this.showinfo4)
     axios.get("https://v1.itooi.cn/netease/songList?id=2250011882&pageSize=20").then(this.showinfo5)
     axios.get("https://v1.itooi.cn/netease/songList?id=991319590&pageSize=20").then(this.showinfo6)
     axios.get("https://v1.itooi.cn/netease/songList?id=2617766278&pageSize=20").then(this.showinfo7)
     axios.get("https://v1.itooi.cn/netease/songList?id=745956260&pageSize=20").then(this.showinfo8)
     
 },
 showinfo1:function(res){
    this.listpg.push(res.data.data.coverImgUrl);
    this.showthree.push(res.data.data.tracks.slice(0,3));
    this.$store.dispatch("giveinfo",res)
    
 },
 showinfo2:function(res){
    this.listpg.push(res.data.data.coverImgUrl);
    this.showthree.push(res.data.data.tracks.slice(0,3));
    this.$store.dispatch("giveinfo",res)
 },
 showinfo3:function(res){
    this.listpg.push(res.data.data.coverImgUrl);
    this.showthree.push(res.data.data.tracks.slice(0,3));
    this.$store.dispatch("giveinfo",res)
    
 },
 showinfo4:function(res){
    this.listpg.push(res.data.data.coverImgUrl);
    this.showthree.push(res.data.data.tracks.slice(0,3));
    this.$store.dispatch("giveinfo",res)
 },
 showinfo5:function(res){
    this.listpg.push(res.data.data.coverImgUrl);
    this.showthree.push(res.data.data.tracks.slice(0,3));
    this.$store.dispatch("giveinfo",res)
 },
 showinfo6:function(res){
    this.listpg.push(res.data.data.coverImgUrl);
    this.showthree.push(res.data.data.tracks.slice(0,3));
    this.$store.dispatch("giveinfo",res)
 },
 showinfo7:function(res){
    this.listpg.push(res.data.data.coverImgUrl);
    this.showthree.push(res.data.data.tracks.slice(0,3));
    this.$store.dispatch("giveinfo",res)
 },
 showinfo8:function(res){
    this.listpg.push(res.data.data.coverImgUrl);
    this.showthree.push(res.data.data.tracks.slice(0,3));
    this.$store.dispatch("giveinfo",res)
 },
}
}
</script>
<style scoped>
.item{
height: 100px;
margin: 10px;
padding-bottom: 10px;
border-bottom: 1px solid #DCDFE6;
}
.lf-pg{
    width: 100px;
    height: 100px;
    float: left;
}
.rt-detail{
    float: right;
    width: 67%;
    height: 100px;
}
img{
    width: 100%;
    border-radius:5px; 
}
p{
    color: #606266;
    font-size: 13px;
    letter-spacing: 1px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-height: 34px;
}
</style>
