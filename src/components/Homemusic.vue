<template>
<div>
 <Homeheader></Homeheader>
 <keep-alive>
 <router-view></router-view>
 </keep-alive>
</div>
</template>

<script>
import Homeheader from '@/components/Homeheader/Homeheader'
export default {
  name: 'Homemusci',
  data () {
    return {
    }
  },
  components:{
    Homeheader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
