<template>
    <div class="box" ref="wrapper">
        <div>
        <div class="header-pg">1
            <img :src="obj[mindex].coverImgUrl" class="singerimg">
        </div>
         <div class="back">
                <img  src="../../assets/返回.png" @click="backhome">
        </div>
        <div class="introduce" ref="box">
            <p ref="msg" class="p1">{{obj[mindex].description}}</p>
            <img src="../../assets/下.png" class="down" ref="contorl" @click="toshow">
        </div>
        <div class="host">
            <p class="hosttitle">歌单歌曲</p>
             <div class="item" v-for="(item,index) in hostsongs" :key="item.id" @click="postinfo(item.name,item.singer,item.pic,item.lrc,item.url)" >
                  <div class="lf-num">
                      {{index+1}}
                  </div>
                  <div class="rt-detail">
                    <p class="hostp"> {{item.name}}</p>  
                   <span class="albumcolor">{{item.singer}}</span><span class="albright">-{{item.name}}</span>
                  </div>
        </div>
    </div>
   </div> 
</div>   
</template>
<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
    name:'singerinfo',
    data() {
        return {
            obj:this.$store.state.hostinfo,
            id:this.$route.params.id,
            mindex:this.$route.params.index,
            hostsongs:[],
             postmsg:{
                src:'',   //歌曲路径
                title:'',  //歌名
                artist:'', //演唱者
                pic:'',      //封面图片
                lrc:'', 
            }
        }
    },
    mounted() {
        const scroll = new BScroll(this.$refs.wrapper,{click:true})
        this.getinfo();
        
    },
    methods:{
        getinfo:function(){
            axios.get("https://v1.itooi.cn/netease/songList?id="+this.id+'&format=1').then(this.showsongs);
        },
        showsongs(res){         
        this.hostsongs=res.data.data;
        
        },
        toshow:function(){
          if(this.check){
            this.$refs.box.style.overflow='inherit';
           this.$refs.contorl.src=require('../../assets/上.png');
           this.$refs.msg.className='p2';
           this.check=!this.check;
          }else{
            this.$refs.box.style.overflow='hidden';
           this.$refs.contorl.src=require('../../assets/下.png');
           this.$refs.msg.className='p1';
            this.check=!this.check;
          }
        },
        backhome:function(){
              this.$router.go(-1)
        },
        postinfo(name,singer,pic,lrc,url){
            this.postmsg.pic=pic;
            this.postmsg.title=name;
            this.postmsg.artist=singer;
            this.postmsg.lrc=lrc;
            this.postmsg.src=url;
           this.$store.dispatch("postinfo",this.postmsg);
        },
        },
      
}
</script>
<style scoped>
.box{
   overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top:0;
}
.header-pg{
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 68%;
    overflow: hidden;
}
.back{
    position: absolute;
    display: flex;
    align-items: center;
    left: 0;
    top: 0;
}
.arrow{
    position: absolute;
    left: 10px;
    bottom: 10px;
    font-size: 18px;
    color: white;
}
.introduce{
    position: relative;
    padding: 10px 16px;
    height: auto;
    overflow: hidden;
}
.p1{
    color: #909399;
    font-size: 14px;
    overflow:hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
   
}
.p2{
    color: #909399;
    font-size: 14px;
}
.singerimg{
    width: 100%;
    margin-top: -30px;
}
.down{
    width: 15px;
    height: 15px;
    position: absolute;
    right: 15px;
    bottom: 0;
}
.host{
    height: auto;
}
.hosttitle{
    padding: 0 16px;
    background-color:#C0C4CC;
    color: #909399;
    font-size: 13px;
}
.item{
    display: flex;
    align-items: center;
    padding: 0 16px 0 16px;
    border-bottom:1px solid #DCDFE6; 
}
.lf-num{
    color: #909399;
    margin-right: 20px;
}
.hostp{
    font-size: 18px;
    color: #606266;
    padding: 0;
}
.albright{
    font-size: 12px;
    color: #606266;
}
.albumcolor{
    font-size: 12px;
    color:cornflowerblue;
}
</style>
