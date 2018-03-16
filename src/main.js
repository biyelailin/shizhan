
import Vue from 'vue'
import App from './App.vue'
import  router from './router/index'
import  store from './store/index'
import './mock/MockServer'
import './filter/moment/index'


new Vue({
  el: '#app',
   render: (h)=>h(App),
   router,
   store

})
