<template>
<div class="Swiper">
    <div class="block">
    <el-carousel height="150px">
      <el-carousel-item v-for="(item,index) in imglist" :key="index">
          <img :src="item" >
        <h3 class="small"></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</div>
</template>
<script>
export default {
    name:'swiper',
    data() {
        return {
            imglist:["http://p1.music.126.net/YytJBxo-cSaUNKFg1Hjf9w==/109951164090850653.jpg",
                     "http://p1.music.126.net/dPgwfCPmTgCjuNqD6Kd2qA==/109951164091540756.jpg",
                     "http://p1.music.126.net/ue0Sttwv4iUQRzXcuvFO1w==/109951164090788681.jpg",
                     "http://p1.music.126.net/vLUxEyEAQ4eU0MEMO9_Lhg==/109951164090794206.jpg"]
        }
    },
}
</script>
<style scoped>
.Swiper{
 margin: 0 5px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  img{
      width: 100%;
  }
</style>
