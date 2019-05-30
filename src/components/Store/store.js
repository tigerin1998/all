import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
      listinfo:[],//排行榜歌单对象
      hostinfo:[],//推荐热门歌单对象
      history:[],//播放记录
      listsongs:[],//歌单
      music:{             //音乐信息传入
        src:"https://v1.itooi.cn/netease/url?id=554191055&quality=flac",   //歌曲路径
        title:"学猫叫",  //歌名
        artist:"小潘潘", //演唱者
        pic:"http://p2.music.126.net/D1Ov-XMAwUzsr16mQk95fA==/109951163256119128.jpg",      //封面图片
        lrc:"https://v1.itooi.cn/netease/lrc?id=554191055",       //lrc歌词文件
      },
    },
    actions:{
   giveinfo(ctx,res){
       ctx.commit('giveinfo',res)  //歌单对象
   },
   postinfo(ctx,res){
     ctx.commit('postinfo',res)
     
   }
    },
    mutations: {
     giveinfo(state,res){          //旁行榜一次加载全对象
         state.listinfo.push(res);
  
         
     },
     postinfo(state,msg){ //传递歌曲
      state.music=msg; /////////////巨坑 注意
      if(!this.listsongs){
        var timer=setInterval(() => {
          if(msg.src){
          msg=JSON.parse(JSON.stringify(msg))
          state.listsongs.unshift(msg);
         clearInterval(timer);
        }
        }, 30);
      }else{
        msg=JSON.parse(JSON.stringify(msg))
        state.listsongs.unshift(msg);
      }
      // state.listsongs.unshift(JSON.stringify(msg));
     },
     giveobj(state,res){  //推荐热门歌单对象
       state.hostinfo=res;
     },
     recentsearch(state,msg){
       if(localStorage.history){
        state.history=JSON.parse(localStorage.history)
        state.history.unshift(msg)
        localStorage.history=JSON.stringify(state.history)
       }else{
        state.history.unshift(msg)
        localStorage.history=JSON.stringify(state.history)
       }
      
     },
     deletechild(state,index){
      state.history=JSON.parse(localStorage.history);
      state.history.splice(index,1);
      localStorage.history=JSON.stringify(state.history)
     },
     playall(state,msg){
       state.listsongs=msg;
     }
    },

  })