<template>
  <div id="app">
    <keep-alive>
    <router-view v-if="$route.meta.keepalive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepalive"></router-view>
    <aplayer class="musicplayer"></aplayer>
  </div>
</template>

<script>
import aplayer from './components/aplayer'
export default {
  name: 'App',
  components:{
    aplayer
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.musicplayer{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
