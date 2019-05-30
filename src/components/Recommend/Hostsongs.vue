<template>
    <div class="hostsongs">
        <h3>热门歌单推荐</h3>
        <router-link tag="div"
                     class="songs-item" 
                     v-for="(item,index) in list" 
                     :key="item.id"
                     :to="'/songdetail/'+item.id+'/'+index"
                     >
            <div class="songs-pg">
                <img :src="item.coverImgUrl">
            </div>
            <div class="songs-text">
                <p>{{item.name}}</p>
                <span>{{item.description}}</span>
            </div>
        </router-link>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'hostsongs',
    data() {
        return {
            list:[],
        }
    },
    methods:{
    getsongsinfo:function(){
      axios.get("https://v1.itooi.cn/netease/songList/hot?cat=全部&pageSize=10&page=0").then(this.showinfo)
    },
    showinfo:function(res){
      this.list=res.data.data;
      this.$store.commit('giveobj',this.list)
      
    }
    },
    mounted() {
        this.getsongsinfo()
    },
}
</script>
<style scoped>
.hostsongs{
    color: black;
    height: auto;
}
h3{
    margin: 10px 0;
    text-align: center;
    font-size: 15px;
    color: orange;
}
.songs-item{
    height: 88.75px;
    margin: 0 10px;
    padding: 10px 0;
    border-bottom: 1px solid orange;
}
.songs-pg{
    width: 25%;
    height: 100%;
    float: left;
}
.songs-text{
    float: right;
    width: 71%;
    height: 100%;
}
img{
width: 100%;
height: 100%;
border-radius:5px; 
}
p{
    color: white;
    font-size: 15px;
    margin-bottom: 10px;
}
span{
   font-size: 13px;
   color: hsla(0,0%,100%,.3);
   overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>
