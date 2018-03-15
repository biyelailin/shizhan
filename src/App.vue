<template>
  <div id="app">
    <router-view></router-view>
    <!--显示页面-->
     <Footer/>
  </div>
</template>

<script>
import  Footer from './components/Footer/Footer.vue'
export default {
 components:{
   Footer
 }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  html,body
    height 100%
    width 100%
    overflow hidden
    #app
     width  100%
     height 100%

</style>
