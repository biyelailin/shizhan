javascript:;<template>
  <div class="gouwu_lan">
    <div class="gouwu">
      <div class="gouwu_top  border-1px">
        <span class="iconfont icon-jiantou3"></span>
        <span >购物车</span>
        <span @click="HideorShow" >
          <img src="./images/imgtk-new.png" >
        </span>
      </div>
      <transition name="hide">
      <div class="gouwu_hide " v-show="isShow" >
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
            <span class="iconfont icon-gouwuche2 total" >

              <span class="cricle">
                <span class="num">0</span>
              </span>
            </span>
            <span>购物车</span>
          </a></li>
          <li><a href="javascript:;">
            <span class="iconfont icon-gougou"></span>
            <span>我的e宠</span>
          </a></li>

        </ul>
      </div>
      </transition>
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
  export default {
    data(){
      return{
        isShow:false
      }
    },
    methods:{
      HideorShow(){
        this.isShow = !this.isShow
      }
    }
  }
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


      .hide-enter-active,hide-leave-active
        transition  height 1s
      .fade-leave-to
         heigth 50px
      .fade-enter
          height 0px
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
              font-size 14px
              color #333
              .iconfont
                 font-size 24px
                 margin 5px 0
              .total
                position relative
                .cricle
                  width 17px
                  height 17px
                  border-radius 50%
                  background red
                  display inline-block
                  position absolute
                  right -7px
                  top -6px
                  .num
                    font-size 12px
                    color #ffffff
                    position absolute
                    left 5px
                    top  2px
</style>
