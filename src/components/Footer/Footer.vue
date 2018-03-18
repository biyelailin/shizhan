 <!--测试一下，要更换的-->
<template>
  <footer class="footer_guide border-1px">
    <span class="guide_item " :class="{on:$route.path=='/msite'}" @click="goto('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-zhuye"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item" :class="{on:$route.path=='/search/fenlei'}" @click="goto('/search'||'/search/fenlei')" >
      <span class="item_icon">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span>搜索</span>
    </span>
    <span class="guide_item" :class="{on:$route.path=='/gshop'}" @click="goto('/gshop')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche2"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="guide_item" :class="{on:$route.path=='/emine'} "@click="goto('/emine')">
      <span class="item_icon">
        <i class="iconfont icon-xiaolian"></i>
      </span>
      <span>我的E宠</span>
    </span>
  </footer>
</template>
<script>
  export default {
    methods:{
      goto(url){
        this.$router.push(url)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
