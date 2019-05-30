// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './components/Store/store'
import { Loading } from 'element-ui';
import axios from 'axios';
Vue.config.productionTip = false;
Vue.use(ElementUI);
 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  data() {
    return {
      options:{
        lock: true,
        text: '正在努力获取数据请稍等..',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      }
    }
  },
  mounted() {
    this.work()
  },
  methods: {
    work(){
      var that=this;
      axios.interceptors.request.use(function(config){
        var mloading=Loading.service(that.options); //在请求发出之前进行一些操作
             return config
       })
       //定义一个响应拦截器
       axios.interceptors.response.use(function(config){
         let loadingInstance = Loading.service(that.options);
         that.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
         loadingInstance.close();
       });//在这里对返回的数据进行处理
         return config
       })
    }
  },
})
