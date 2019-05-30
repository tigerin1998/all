import Vue from 'vue'
import Router from 'vue-router'
import Homemusic from '@/components/Homemusic'
import Singer from '@/components/Singer/Singer'
import Recommend from '@/components/Recommend/Recommend'
import Ranking from '@/components/Ranking/Ranking'
import Search from '@/components/Search/Search'
import songdetail from '@/components/Recommend/songdetail'
import singerdetail from '@/components/Search/singerdetail'
import listdetail from '@/components/Ranking/listdetail'
import  singers from '@/components/Singer/singers'
import aplayer from '@/components/aplayer'
import qqmusicsinger from '@/components/Singer/qqmusicsinger'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:'/Recommend',
      component: Homemusic,
      children:[
        {path:'Recommend',component:Recommend,meta:{keepalive:true}},
        {path:'Singer',component:Singer,meta:{keepalive:true}},
        {path:'Ranking',component:Ranking,meta:{keepalive:true}},
        {path:'Search',component:Search,meta:{keepalive:true}}
      ],
      meta:{
        keepalive:true
       },
    },
    {
    path:'/songdetail/:id/:index',
    name:'songdetail',
    component:songdetail,
    meta:{
      keepalive:false
     },
    },
    {
      path:'/singer/:id/:name',
      name:'singerdetail',
      component:singerdetail,
      meta:{
       keepalive:false
      },
      },
      {
        path:'/listdetail/:index',
        name:'listdetaill',
        component:listdetail,
        meta:{
         keepalive:false
        },
        },
        {
          path:'/singers/:id',
          name:'singers',
          component:singers,
          meta:{
           keepalive:false
          },
          },
          {
            path:'/test/',
            name:'aplayer',
            component:aplayer,
            meta:{
             keepalive:false
            },
            },
            {
              path:'/qqmusicsinger/:id/:index/:name',
              name:'qqmusic',
              component:qqmusicsinger,
              meta:{
               keepalive:false
              },
              },
    
  

  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
