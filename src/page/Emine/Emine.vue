<template>
  <div class="Ech">
  <div class="Echong">
    <div class="top">
      <div class="top_1">
        <span class="iconfont icon-jiantou3" ></span>
        <span>注册</span>
      </div>
      <div class="top_2">
        <span>普通登陆</span>
        <span>手机密码动态登陆</span>
      </div>
    </div>
      <div class="content">
        <div class="left">
           <div class="jiantou"></div>
        <form>
          <div class="input_1">
            <span class="iconfont icon-touxaing"></span>
          <input type="text" placeholder="手机/邮箱/用户名" class="input_2">
          </div>
          <div class="input_1">
            <span class="iconfont icon-jiami"></span>
          <input type="password" placeholder="输入密码">
           </div>
           <p class="input_p">忘记密码</p>
           <button class="input_btn">登陆</button>

        </form>
      </div>
      </div>
  </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .Ech
    width 100%
    height 100%
    background-color #F5F5F5
    .Echong
      width 100%
      background-color #ffffff
      .top
       background url("./images/bg.png") no-repeat
       width 100%
       height 175px
       background-size 100%
       position relative
       .top_1
         padding 10px
         display flex
         justify-content space-between
         color #ffffff
       .top_2
          position absolute
          left 0
          right 0
          bottom 0
          background-color  rgba(255,255,255,0.4)
          span
           float left
           width 50%
           height 50px
           line-height 50px
           text-align center
           color #ffffff



      .content
        padding 0 20px
        box-sizing border-box
        .left
          color #ccc
          font-size 16px
          >form
            .input_1
              border-bottom  1px solid #ccc
              padding 15px 0
              .iconfont
                font-size 20px
              input::-webkit-input-placeholder
                color #ccc
              .input_2
                 color #ccc
                 outline none
          .input_p
            font-size 14px
            text-align right
            margin 10px 0
          .input_btn
            background-color #2ec975
            color #ffffff
            border 0px
            display block
            width 100%
            padding 10px 0
            font-size 16px
            border-radius 10px
            margin-bottom 100px

</style>
