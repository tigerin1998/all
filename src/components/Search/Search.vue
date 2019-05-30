<template>
<div>
    <div class="search">
       <div class="iconsearch"> <img src="../../assets/搜索.png"></div>
        <input type="text"  autofocus placeholder="搜索歌手 歌曲 专辑" v-model.lazy="keyword"><br>
         <div class="iconremove"><img v-if="keyword" @click="remove"  src="../../assets/清空删除.png"></div>
    </div>
    <div class="result"ref="wrapper" >
        <div>
            <div class="title" v-if="title">
                <div class="hostsearch">
                    <p class="hosttitle">热门搜索</p>
                    <div class="hostsp" @click="givetext" v-for="(item, index) in hostsearch" :key="index+'0'">{{item}}</div>
                    <div class="recent" v-for="(item, index) in recent" :key="index" @click="givetext">
                        <img src="../../assets/记录.png" class="recentimg">
                        <p class="middle">{{item}}</p>
                        <img src="../../assets/叉号.png" class="recentimg" @click="removethis(index)">
                    </div>
                </div>
               
            </div>
        <router-link tag="div" :to="'/singer/'+this.singer.id+'/'+this.singer.name" v-show="this.keyword" class="singer">
           <img :src="singer.img1v1Url" class="singer-lfpg">
           <p>歌手：</p><span class="singerspan">{{singer.name}}</span>
           <img src="../../assets/右.png" class="singer-rtpg">
        </router-link>
        <div class="songs" >
                <div class="item" v-for="item in searchobj" :key="item.id" @click="postinfo(item.id,item.name,item.ar[0].name,item.al.picUrl)">
                   <p> {{item.name}}</p>  
                   <span class="albumcolor">{{item.ar[0].name}}</span><span >-{{item.al.name}}</span>
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
    name:'serach',
    data() {
        return {
            keyword:'',
            searchobj:[],
            singer:[],
            hostsearch:['我有一个道姑朋友','Taylor Swift','孤身','黄明昊KOHH合作单曲','有一种悲伤','孤单心事','摇滚101'],
            title:true,
            recent:[],
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
            this.recent=JSON.parse(localStorage.history).slice(0,5);
             const scroll = new BScroll(this.$refs.wrapper,{click:true})
            
             
        },
    methods:{
        getsongs:function(res){
          this.searchobj=res.data.data.songs;
         // console.log(this.searchobj);
          
        },
        getsinger:function(res){
            this.singer=res.data.data.artists[0];
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
        },
        remove(){
            this.keyword='';
            this.singer=[];
            this.searchobj=[];
        },
        givetext(e){
            this.keyword=e.target.innerText;
        },
        removethis(count){
            this.$store.commit("deletechild",count)
        }
    },
    computed:{
        history(){
            return this.$store.state.history
        }
    },
    watch:{
        keyword:function(){
        if(this.keyword){
        this.title=false;
        this.$store.commit('recentsearch',this.keyword)
         axios.get("https://v1.itooi.cn/netease/search?keyword="+this.keyword+"&type=song&pageSize=20&page=0")
         .then(this.getsongs);
          axios.get("https://v1.itooi.cn/netease/search?keyword="+this.keyword+"&type=singer&pageSize=20&page=0")
         .then(this.getsinger); 

        }else{
            this.title=true;
        }
        },
        history:function(){
            this.recent=JSON.parse(localStorage.history);
        }
    }
    
}
</script>
<style scoped>
.search{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    padding: 3% 5% 5% 5%;
    overflow: hidden;
    background-color: #222;
}
input{
    color:#606266;
    width: 82%;
    height: 30px;
    border: 0px;
    background-color: #333333;
    outline: none;
}
.iconsearch{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 30px;
    width: 30px;
    border-top-left-radius:50%; 
    border-bottom-left-radius:50%; 
   background-color: #333333;
}
.iconremove{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 30px;
    width: 30px;
    border-top-right-radius:50%; 
    border-bottom-right-radius:50%; 
    background-color: #333333;
}
img{
    margin: 3px;
    width: 22px;
    height: 22px;;
}
.result{
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top:160px;
}
.songs {
    padding: 0 10px;
}
.singer{
    display: flex;
    align-items:center;
    padding:10px;
    height: 70px;
}
.singer-lfpg{
    width: 20%;
    height: 100%;
    object-fit: fill;
    border-radius:50%; 
}
.singer-rtpg{
  margin-left: 100px;
  width: 40px;
  height: 40px;
}
.singer p{
    margin-left: 20px;
    font-size: 18px;
}
.singerspan{
     font-size: 18px;
     color:cornflowerblue;
}
.item{
    padding-bottom: 10px;
    border-bottom:1px solid #DCDFE6; 
}
p{
    font-size: 18px;
    padding: 0;
}
span{
    font-size: 12px;
    color: #606266;
}
.albumcolor{
    color:cornflowerblue;
}
.hostsearch{
    padding: 10px;
}
.hostsp{
    display: inline-block;
    padding: 5px 10px;
    margin: 5px;
    font-size: 15px;
    color:#333;
    border: 1px solid#DCDFE6;
    border-radius:20px; 
}
.hosttitle{
    font-weight: 0;
     color:#333;
     font-size: 13px;
     margin-left: 10px;
}
.recent{
    display: flex;
    align-items: center;
}
.middle{
    margin-left: 10px;
    line-height: 45px;
    border-bottom:1px solid #DCDFE6;
    flex: 1;
    color:#333;
    font-size: 14px;
}
.recentimg{
  width: 18px;
  height: 18px;
}
</style>
