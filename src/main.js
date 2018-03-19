
import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import loading from './common/loading.gif'
import  router from './router/index'
import  store from './store/index'
import './mock/MockServer'
import './filter/moment/index'
Vue.use(VueLazyload, {
  loading
})

new Vue({
  el: '#app',
   render: (h)=>h(App),
   router,
   store
})
