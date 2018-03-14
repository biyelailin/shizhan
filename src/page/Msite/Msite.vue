<template>
  <div class="indexbox">
    <div class="index_header">
      <div class="index_mian">
        <div class="index_input">
              <span class="index_one">
             <span class="categorys">狗狗</span>| <span class="address" >重庆</span>
             <span class="iconfont icon-xiala"></span>
              </span>
          <input type="text" placeholder="搜索商品和品牌" class="index_input_search">
          <span class="iconfont icon-duanxin"></span>
        </div>
        <div class="index_search">
          <ul class="index_list">
            <li ><a href="javascript:;" class="on">首页</a></li>
            <li><a href="javascript:;">猫猫主粮</a></li>
            <li><a href="javascript:;">罐头超市</a></li>
            <li><a href="javascript:;">猫砂</a></li>
            <li><a href="javascript:;">医疗保健</a></li>
             <li><a href="javascript:;">美容香波</a></li>
             <li><a href="javascript:;">零食玩具</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main">
    <div class="index_content">
      <div class="index_lunbo">
        <!--轮播-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
          <a href="javascript:;">
            <img src="./images/lunbo/baolu.jpg" alt="">
          </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src="./images/lunbo/tongzhi.jpg" alt="">
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src="./images/lunbo/baolu.jpg" alt="">
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src="./images/lunbo/tongzhi.jpg" alt="">
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="lunbo_center">
          <img src="./images/lunbo/dog.jpg" alt="">
        </div>
      <div class="index_nav">
        <ul  class="index_ul">
          <li>
            <a href="javascript:;">
              <img src="./images/a.jpg" alt="">
          </a>
          </li>
          <li>
            <a href="javascript:;">
            <img src="./images/b.jpg" alt="">
          </a>
          </li>
          <li>
            <a href="javascript:;">
            <img src="./images/a.jpg" alt="">
          </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="./images/a.jpg" alt="">
            </a>
          </li>
          <li><a href="javascript:;">
            <img src="./images/b.jpg" alt="">
          </a>
          </li>
          <li><a href="javascript:;">
            <img src="./images/a.jpg" alt="">
          </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="./images/a.jpg" alt="">
            </a>
          </li>
          <li><a href="javascript:;">
            <img src="./images/b.jpg" alt="">
          </a>
          </li>
          <li><a href="javascript:;">
            <img src="./images/a.jpg" alt="">
          </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="./images/a.jpg" alt="">
            </a>
          </li>
        </ul>
      </div>
      </div>
      <div class="crazy_buy">
        <div class="crazy_img">
          <img src="./images/crazy.jpg" alt="">
        </div>
         <div class="crazy_item">
           <img src="./images/crazy_one.png" alt="">
           <div class="crazy_center">
             <span>本场结束</span>
              <span>时间显示</span>
           </div>
           <div class="more">
             <span>更多</span>
             <span class="iconfont icon-jiantou">//</span>

           </div>

         </div>

      </div>
      </div>
    </div>

  </div>
</template>
<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import 'swiper/dist/css/swiper.min.css'
  export default {

    mounted(){
      let swiper = new Swiper('.swiper-container', {
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      })
      if(!this.scroll2){
        this.scroll2 = new BScroll('.index_search',{
          click :true,
          scrollX :true

        })
      }else{
        this.scroll2.refresh()
      }

      if(!this.scroll){
        this.scroll =  new BScroll('.index_content',{
          click :true
        })
      }else{
        this.scroll.refresh()
      }




    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .indexbox
    width 100%
    height 100%
    position relative
    .index_header
      position fixed
      left 0
      right 0
      top 0
      .index_mian
        .index_input
          display flex
          justify-content space-around
          align-items center
          color #666
          font-size 12px
          margin  10px 0
          .index_one
            flex 2
            text-align center
            .categorys
              font-size 14px
          .index_input_search
            background #e9e9e9
            padding 5px
            border-radius 4px
            flex 6
          .icon-duanxin
            flex 1
            text-align center
        .index_search
           width 100%
          .index_list
            overflow hidden
            z-index 10
            width 140%
            >li
              float left
              text-align center
              font-size 14px
              width 14%
              height 20px
              line-height 20px
              >a
                color #666
              .on
                color green
                border-bottom  1px solid green



    .main
      position  absolute
      left 0
      right 0
      top 78px
      bottom 0
      .index_content
         height 100%
         width 100%
         .index_lunbo
          .swiper-container
            width 100%
            .swiper-wrapper
              width 100%
              .swiper-slide
                width 100%
                >a
                  >img
                    width 100%
                    display block
          .lunbo_center
            img
              width 100%
              display block
          .index_nav
            width 100%
          .index_ul
            width 100%
            overflow hidden
            >li
              width 20%
              float left
              >a
                >img
                  width 100%
                  display block


         .crazy_buy
           img
            width 100%
           .crazy_item
             display flex
             justify-content space-between
             align-items center
             width 100%







</style>
