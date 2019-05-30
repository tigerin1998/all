<template>
    <div>
        <div style="padding:10px 0;"></div>
            <aplayer  :showLrc="true" :music="musicList" :list='listsongs'  v-if="reFresh"  :autoplay="true" >
              <div>1</div>
            </aplayer>
        </div>
       
</template>  
  
<script>
import aplayer from "vue-aplayer";
import BScroll from 'better-scroll';
 aplayer.disableVersionBadge = true
export default {
  name: "Aplayer",
  components: {
    //别忘了引入组件
    aplayer
  },
  data() {
    return {
     // musicList:this.$store.state.music,
      reFresh:true,
    }
  },
  computed:{
    musicList:function(){
       return this.$store.state.music
     
    },
    medium:function(){
      return this.$store.state.music.src
    },
    listsongs(){
      return this.$store.state.listsongs
    }
    },
    watch: {
   /* musicList: {                        //监听计算属性
      handler: function(value,oldvalue) {       //handler方法
        console.log(value);
         console.log(oldvalue);
        this.reFresh= false         //给apayer销毁
        this.$nextTick(()=>{          //
        this.reFresh = true          //让apayer重新渲染  渲染当前的歌曲信息
                })


      },
      deep: true //深度监听
    },*/
   medium:function(){
    this.reFresh= false         //给apayer销毁
    this.$nextTick(()=>{          //
     this.reFresh = true          //让apayer重新渲染  渲染当前的歌曲信息
                })
   },
  /* listsongs:function(){
     var newone=[];
     this.listsongs.forEach(element => {
       newone.push(JSON.parse(element))
     });
     this.list=newone;
     
     
   }*/
  },
    
};
</script>  

<style scoped>  
.play{
  height: 90px;
  overflow: hidden;
}

</style>  
 