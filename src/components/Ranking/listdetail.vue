<template>
<div>
    <div class="header-pg">
        <img :src="obj.coverImgUrl" class="titleimg">
        <div class="tips">
            <p class="tips-p">{{obj.name}}</p>
        </div>
         <img  src="../../assets/返回.png" @click="backhome" class="backimg">
    </div>
    <div class="songslist">
        <div class="item">
             <img  src="../../assets/播放.png" @click="playall">
            <p class="hostp">播放全部(共{{obj.tracks.length}}首)[不要点！！]</p>
        </div>
         <div class="item" v-for="(item,index) in obj.tracks" :key="item.id" @click="postinfo(item.id,item.name,item.album.artists[0].name,item.album.picUrl)">
                  <div class="lf-num">
                      {{index+1}}
                  </div>
                  <div class="rt-detail">
                    <p class="hostp"> {{item.name}}</p>  
                   <span class="albumcolor">{{item.album.artists[0].name}}</span><!---->
                  </div>
         </div>
    </div>    
 </div>   
</template>
<script>
import axios from 'axios'
export default {
    name:'listdetail',
    data() {
        return {
            obj:this.$store.state.listinfo[this.$route.params.index].data.data,
            postmsg:{
                src:'',   //歌曲路径
                title:'',  //歌名
                artist:'', //演唱者
                pic:'',      //封面图片
                lrc:'', 
            }
        }
    },
    methods:{
        postinfo:function(id,name,singer,pic){
             axios.get("https://v1.itooi.cn/netease/lrc?id="+id).then(this.showinfo2);  //获取歌词
             axios.get("https://v1.itooi.cn/netease/url?id="+id+"&quality=flac").then(this.showinfo); //获取播放地址
              this.postmsg.title=name;
              this.postmsg.artist=singer;
              this.postmsg.pic=pic;
        },
        showinfo:function(res){
            this.postmsg.src=res.config.url;
           this.$store.dispatch("postinfo",this.postmsg);
        },
        showinfo2:function(res){
            this.postmsg.lrc=res.config.url;
        },
        backhome:function(){
        this.$router.go(-1)
    },
    playall(){
       axios.get("https://v1.itooi.cn/netease/songList?id="+this.obj.id+'&format=1').then(this.postall);
    },
    postall(res){
        var allsongs=[];
        res.data.data.forEach(element => {
        var everyone={src:'',title:'',artist:'',pic:'', lrc:'',};
        everyone.src=element.url;
        everyone.lrc=element.lrc;
        everyone.pic=element.pic;
        everyone.title=element.name;
        everyone.artist=element.singer;
        allsongs.unshift(everyone)
        });
        console.log(allsongs);
        
     this.$store.commit('playall',allsongs)
    }
    }
}
</script>
<style scoped>
.header-pg{
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 75%;
    overflow: hidden;
}
.backimg{
    position:absolute;
    top: 10px;
    left: 10px;
}
.titleimg{
    width: 100%;
    margin-top: -5%;
}
.tips{
  position: absolute;
  left: 20px;
  bottom: 30px;
}
.tips-p{
    color: white;
    font-size: 18px;
    font-style: italic;
    font-weight: bold;
}
.item{
    display: flex;
    align-items: center;
    padding: 0 16px 0 16px;
    border-bottom:1px solid #DCDFE6; 
}
.item:first-child{
    line-height: 46px;
}
.item:first-child img{
    margin-right: 5px;
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
