<template>
    <div class="box">
        <div class="header-pg">
             <span class="arrow">{{singerimg.name}}</span>
            <img :src="singerimg.img1v1Url" class="singerimg">
        </div>
         <div class="back">
                <img  src="../../assets/返回.png" @click="backhome">
        </div>
        <div class="introduce" ref="box">
            <p ref="msg" class="p1">{{singermsg}}</p>
            <img src="../../assets/下.png" class="down" ref="contorl" @click="toshow">
        </div>
        <div class="host">
            <p class="hosttitle">热门50单曲</p>
             <div class="item" v-for="(item,index) in hostsongs" :key="item.id" @click="postinfo(item.id,item.name,item.ar[0].name,item.al.picUrl)" >
                  <div class="lf-num">
                      {{index+1}}
                  </div>
                  <div class="rt-detail">
                    <p class="hostp"> {{item.name}}</p>  
                   <span class="albumcolor">{{item.ar[0].name}}</span><span class="albright">-{{item.al.name}}</span>
                  </div>
        </div>
    </div>
</div>   
</template>
<script>
import axios from 'axios'
export default {
    name:'singerinfo',
    data() {
        return {
             id:this.$route.params.id,
            name:this.$route.params.name,
            singerimg:'',
            singermsg:'',
            check:true,
            hostsongs:'',
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
        this.getinfo();
        
    },
    methods:{
        getinfo:function(){
            axios.get("https://v1.itooi.cn/netease/song/artist?id="+this.id).then(this.songinfo)
            axios.get("https://v1.itooi.cn/netease/artist/info?id="+this.id).then(this.singerinfo)
            axios.get("https://v1.itooi.cn/netease/search?keyword="+this.name+"&type=singer&pageSize=1&page=0")
         .then(this.singerpg); 
        },
        singerinfo:function(res){
        this.singermsg=res.data.data.briefDesc;
        },
        songinfo:function(res){
            this.hostsongs=res.data.data;
            
        },
        singerpg:function(res){
            console.log(res);
            
       this.singerimg=res.data.data.artists[0];
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
              this.$router.push('/Search')
        },
        postinfo(id,name,singer,pic){
            this.postmsg.pic=pic;
            this.postmsg.title=name;
            this.postmsg.artist=singer;
            //axios.get("https://v1.itooi.cn/netease/pic?id="+id).then(this.showpic);//获取图片
            axios.get("https://v1.itooi.cn/netease/url?id="+id).then(this.showsrc);//获取歌曲路径
            axios.get("https://v1.itooi.cn/netease/lrc?id="+id).then(this.showlrc);//获取歌词
           
        },
        //showpic(res){
        //    this.postmsg.pic=res.config.url;
       // },
         showsrc(res){
            this.postmsg.src=res.config.url; 
        },
        showlrc(res){
            this.postmsg.lrc=res.config.url;
            this.$store.dispatch("postinfo",this.postmsg);
        }
        },
      
}
</script>
<style scoped>
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
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /*! autoprefixer: on */
   
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
