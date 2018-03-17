//这是注册路由

import  Vue from 'vue'
import  VueRouter  from 'vue-router'

import  Msite from '../page/Msite/Msite.vue'
import  Search from '../page/Search/Search.vue'
import  Gshop from '../page/Gshop/Gshop.vue'
import  Emine from '../page/Emine/Emine.vue'
import Fenlei from '../page/Search/fenlei/fenlei.vue'
import Pinpai from '../page/Search/pinpai/pinpai.vue'
//注册路由
 Vue.use(VueRouter)

export  default  new VueRouter({
    routes:[
      {
        path:'/msite',
        component:Msite

      },
      {
        path:'/search',
        component:Search,
        children:[
          {
            path:'fenlei',
            component:Fenlei
          },
          {
            path:'pinpai',
            component:Pinpai
          },
          {
            path:'',
            redirect:'fenlei'

          }



        ]

      },
      {
        path:'/gshop',
        component:Gshop

      },
      {
        path:'/emine',
        component:Emine

      },
      {
        path:'/',
        redirect:'/msite'

      }
    ],
  linkActiveClass: 'active'
})
