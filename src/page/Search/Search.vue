  <template>
  <div class="search ">
     <div class="search_head border-1px">
       <div class="search_one">
        <div class="fen_pin">
          <router-link to="/search/fenlei" >
            <span  active>分类</span>

          </router-link>
          <router-link to="/search/pinpai"  >
            <span>品牌</span>
            </router-link>
        </div>
         <div class="search_ser">
           <span class="iconfont icon-search "></span>
         </div>
       </div>
     </div>
      <router-view></router-view>

  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {


  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styuls/minxis.styl"
   .search
     width 100%
     height 100%
     background-color #f5f5f5
     .search_head
       bottom-border-1px(#f5f5f5)
       z-index 100
       height 50px
       line-height:50px
       position fixed
       top 0
       left 0
       right 0
       background-color #ffffff
       .search_one
         width 100%
         height 100%
         position relative
         .fen_pin
           position absolute
           left 50%
           top 50%
           transform translate(-50%,-50%)
           span
            margin 0 3px
           .active
             color red
             border-bottom 1px solid red
             padding-bottom 3px
         .search_ser
           position absolute
           right 10px



</style>
