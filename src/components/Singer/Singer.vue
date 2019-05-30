<template>
    <div>
       <router-link tag="div" :to="'/singers/'+0" class="item">
           <span>热门歌手</span>
           <img src="../../assets/右.png">
       </router-link>
       <div class="part" v-for="(everyone, index) in singertype" :key="index">
           <div  class="part-one" v-for="(item, key) in everyone" :key="key">
               <router-link tag="div" :to="'/singers/'+key">
               <span>{{item}}</span>
               <img src="../../assets/右.png">
               </router-link>
           </div>
       </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'singer',
    data() {
        return {
           singertype:[
               { 
                1:'华语内地男歌手',
                2:'华语内地女歌手',
                3:'华语港台男歌手',
                4:'华语港台女歌手',
                5:'华语内地组合/乐队',
                6:'华语港台组合/乐队'
              },
               { 
                7:'欧美男歌手',
                8:'欧美女歌手',
                9:'欧美组合/乐队',
              },
               {  
                10:'日本男歌手',
                11:'日本女歌手',
                12:'日本组合/乐队'
              },
               {  
                13:'韩国男歌手',
                14:'韩国女歌手',
                15:'韩国组合/乐队'
              },
               { 
                16:'其他男歌手',
                17:'其他女歌手'
              },
                     ]
        }
    },
   
}
</script>
<style scoped>
.item{
    padding: 10px;
    margin: 10px;
    background-color: #E4E7ED;
    border: 1px solid #DCDFE6;
    border-radius:5px; 
}
img{
    float: right;
    width: 25px;
    height: 25px;
}
.part{
    margin: 10px;
    background-color: #E4E7ED;
    border: 1px solid #DCDFE6;
    border-radius:5px; 
}
.part-one{
   padding: 10px;
   border-bottom: 1px solid #DCDFE6;
}
.part-one:last-child{
    border-bottom:none;
}
</style>
