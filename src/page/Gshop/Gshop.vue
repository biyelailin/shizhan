javascript:;<template>
  <div class="gouwu_lan">
    <div class="gouwu">
      <div class="gouwu_top  border-1px">
        <span class="iconfont icon-jiantou3"></span>
        <span >购物车</span>
        <span >
          <img src="./images/imgtk-new.png" alt="">
        </span>
      </div>
      <div class="gouwu_hide ">
        <ul class=" gouwu_hide_nav border-1p">
          <li><a href="javascript:;">
            <span class="iconfont icon-shouye"></span>
            <span>首页</span>
          </a>
          </li>
          <li><a href="javascript:;">
            <span class="iconfont icon-dingdanzhuangtai"></span>
            <span>商品分类</span>
          </a></li>
          <li><a href="javascript:;">
            <span class="iconfont icon-gouwuche2"></span>
            <span>购物车</span>
          </a></li>
          <li><a href="javascript:;">
            <span class="iconfont icon-dongwutubiao-xianxing-gou"></span>
            <span>我的e宠</span>
          </a></li>

        </ul>
      </div>
      <div class="gouwu_content">
         <div class="gouwu_con1">
           <div class="gouwu_img"></div>
         </div>
         <div class="gouwu_con2">购物车是空的</div>
         <div class="gouwu_con3">
           <a href="javascript:;">去逛一逛</a>
           <a href="javascript:;">我的收藏</a>
         </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styuls/minxis.styl"
  .gouwu_lan
    background #f5f5f5
    height 100%
    .gouwu
      background #ffffff
      padding-bottom  50px
      .gouwu_top
        bottom-border-1px(#d5d5d5)
        display flex
        justify-content space-between
        align-items center
        font-size 18px
        padding 15px
        span
         >img
           height 20px
      .gouwu_content
        width 100%
        .gouwu_con1
          height 170px
          position relative
          .gouwu_img
             width 110px
             height 110px
             position absolute
             left 50%
             top 50%
             transform translate(-50%,-50%)
             background url("./images/cart-ico.png") no-repeat
             background-position  0 -167px
             background-size 100%
        .gouwu_con2
          color #dbdbdb
          font-size 16px
          text-align center
          margin -10px 0 30px 0
        .gouwu_con3
          text-align center
          >a
            color #999
            font-size 15px
            border 1px solid #999
            padding 7px 10px
            border-radius 5px
            margin 0 5px


      .gouwu_hide
        .gouwu_hide_nav
           bottom-border-1px(#ccc)
           overflow hidden
           height 50px
           padding 10px 0
           >li
            width 25%
            float left
            height 50px
            text-align center
            >a
              display flex
              flex-direction column
              justify-content space-around
              align-items center
              span
               .iconfont
                 font-size 20px
                 margin 5px 0

</style>
