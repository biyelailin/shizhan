  <template>
  <div class="search ">

     <div class="search_head bottom-border-1px">
       <div class="search_one">
        <div class="fen_pin">
          <a href="javascript:;" class="on">分类</a>
          <a href="javascript:;">品牌</a>
        </div>
         <div class="search_ser">
           <span class="iconfont icon-search "></span>
         </div>
       </div>
     </div>
      <!--内容区-->
      <div class="content">
         <div class="content_nav" >
            <ul>
              <li><a href="javascript:;" class="on">狗狗主粮</a></li>
              <li><a href="javascript:;">狗狗主粮</a></li>
              <li><a href="javascript:;">狗狗主粮</a></li>
              <li><a href="javascript:;">狗狗主粮</a></li>
              <li><a href="javascript:;">狗狗主粮</a></li>
              <li><a href="javascript:;">狗狗主粮</a></li>
              <li><a href="javascript:;">狗狗主粮</a></li>
              <li><a href="javascript:;">狗狗主粮</a></li>
              <li><a href="javascript:;">狗狗主粮</a></li>
              <li><a href="javascript:;">狗狗主粮</a></li>
              <li><a href="javascript:;">狗狗主粮</a></li>
              <li><a href="javascript:;">狗狗主粮</a></li>
              <li><a href="javascript:;">狗狗主粮</a></li>
            </ul>
         </div>
          <div class="content_con">
             <div class="content_con1">
               <div class="content_container">

                 <div class="dog_life">
              <div class="dog_header">
                <span>狗狗生活</span>
                 <span>
                    全部商品
                   <span class="iconfont icon-jiantou2"></span>
                 </span>
              </div>
              <div  class="dog_content">
              <a href="javascript:;">
                <img src="./images/doglife.jpg" alt="">
                <span>狗狗餐具</span>
              </a>
                <a href="javascript:;">
                  <img src="./images/doglife.jpg" alt="">
                  <span>狗狗餐具</span>
                </a>
                <a href="javascript:;">
                  <img src="./images/doglife.jpg" alt="">
                  <span>狗狗餐具</span>
                </a>
                <a href="javascript:;">
                  <img src="./images/doglife.jpg" alt="">
                  <span>狗狗餐具</span>
                </a>
                <a href="javascript:;">
                  <img src="./images/doglife.jpg" alt="">
                  <span>狗狗餐具</span>
                </a>
                <a href="javascript:;">
                  <img src="./images/doglife.jpg" alt="">
                  <span>狗狗餐具</span>
                </a>
                <a href="javascript:;">
                  <img src="./images/doglife.jpg" alt="">
                  <span>狗狗餐具</span>
                </a>
                <a href="javascript:;">
                  <img src="./images/doglife.jpg" alt="">
                  <span>狗狗餐具</span>
                </a>
                <a href="javascript:;">
                  <img src="./images/doglife.jpg" alt="">
                  <span>狗狗餐具</span>
                </a>
                <a href="javascript:;">
                  <img src="./images/doglife.jpg" alt="">
                  <span>狗狗餐具</span>
                </a>
              </div>
            </div>
                 <div class="dog_life">
              <div class="dog_header">
                <span>狗狗生活</span>
                 <span>
                    全部商品
                   <span class="iconfont icon-jiantou2"></span>
                 </span>
              </div>
              <div  class="dog_content">
              <a href="javascript:;">
                <img src="./images/doglife.jpg" alt="">
                <span>狗狗餐具</span>
              </a>
                <a href="javascript:;">
                  <img src="./images/doglife.jpg" alt="">
                  <span>狗狗餐具</span>
                </a>
                <a href="javascript:;">
                  <img src="./images/doglife.jpg" alt="">
                  <span>狗狗餐具</span>
                </a>
                <a href="javascript:;">
                  <img src="./images/doglife.jpg" alt="">
                  <span>狗狗餐具</span>
                </a>
                <a href="javascript:;">
                  <img src="./images/doglife.jpg" alt="">
                  <span>狗狗餐具</span>
                </a>
                <a href="javascript:;">
                  <img src="./images/doglife.jpg" alt="">
                  <span>狗狗餐具</span>
                </a>
                <a href="javascript:;">
                  <img src="./images/doglife.jpg" alt="">
                  <span>狗狗餐具</span>
                </a>
                <a href="javascript:;">
                  <img src="./images/doglife.jpg" alt="">
                  <span>狗狗餐具</span>
                </a>
                <a href="javascript:;">
                  <img src="./images/doglife.jpg" alt="">
                  <span>狗狗餐具</span>
                </a>
                <a href="javascript:;">
                  <img src="./images/doglife.jpg" alt="">
                  <span>狗狗餐具</span>
                </a>
              </div>
            </div>
               </div>

          </div>
          </div>
      </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      if(!this.scroll){
        this.scroll = new BScroll('.content_nav',{
          click :true

        })
      }else{
        this.scroll.refresh()
      }
      if(!this.scroll3){
        this.scroll3 = new BScroll('.content_con1',{
          click :true
        })
      }else{
        this.scroll3.refresh()
      }
    }
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
           >a
            margin 0 10px
           .on
             color red
             border-bottom 1px solid red
             padding-bottom 5px

         .search_ser
           position absolute
           right 10px


     .content
       position absolute
       left 0
       top 50px
       right 0
       bottom 50px
       .content_nav
         height 100%
         >ul
           width 78px
           text-align center
           >li
            width 75px
            height 50px
            line-height 50px
            text-align center
            background-color  #ffffff
            >a
             color #000
             font-size 14px
             display inline-block
             width 75px
             height 50px
            .on
              color red
              background-color #f5f5f5
       .content_con
          position absolute
          left 75px
          top 0
          bottom 0
          right 0
          margin 5px 0 3px 3px
          box-sizing border-box
          background-color #ffffff
          .content_con1
            width 100%
            height 100%
            padding 10px
            box-sizing border-box
            .content_container
              .dog_life
                margin 20px 0
                .dog_header
                  display flex
                  justify-content space-between
                  align-items center
                  font-size 12px
                .dog_content
                  display flex
                  flex-wrap wrap
                  justify-content space-between
                  >a
                    width 33%
                    display flex
                    flex-direction column
                    justify-content space-around
                    align-items center
                    color #000
                    font-size 14px
                    >img
                      width 100%

</style>
