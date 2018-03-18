<template>
  <div class="Ech">
  <div class="Echong">
    <div class="top">
      <div class="top_1">
        <span class="iconfont icon-jiantou3" @click="$router.back()"></span>
        <span>注册</span>
      </div>
      <div class="top_2">
        <span @click="handle(true)">普通登陆</span>
        <span @click="handle(false)">手机密码动态登陆</span>
      </div>
    </div>
      <div class="content_2">
        <div class="left" v-show="isShow" >
           <div class="jiantou">

           </div>
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
        <div class="right"  v-show="!isShow">
          <div class="jiantou1">
          </div>
          <form>
            <div class="input_1">
              <span class="iconfont icon-touxaing"></span>
              <input type="text" placeholder="已注册手机号" class="input_2">
            </div>
            <div class="input_1">
              <span class="iconfont icon-jiami"></span>
              <input type="password" placeholder="请输入图片内容" class="input_2">
              <img src="./images/code.png" >
            </div>
            <div class="input_1">
              <span class="iconfont icon-jiami"></span>
              <input type="password" placeholder="输入密码" class="input_2">
              <a href="javascript:;" class="getcode">获取动态验证码</a>
            </div>
            <p class="input_p">忘记密码</p>
            <button class="input_btn">登陆</button>

          </form>

        </div>
      </div>
    <div class="bottom">
      <p>合作网站登陆</p>
      <div class="icon">
        <img src="./images/bao.png" >
        <img src="./images/qq.png" >
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  export default {
     data(){
       return{
         isShow:true
       }
     },
    methods:{
      handle(val){
        this.isShow = val
      }
    }
  }
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



      .content_2
        padding 0 20px
        box-sizing border-box
        width 100%


        .left
          color #ccc
          font-size 16px
          position relative
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

          .jiantou
             position absolute
             left 62px
             top -20px
             width 0px
             height 0px
             border-bottom  10px solid #ffffff
             border-top  10px solid transparent
             border-left 10px solid transparent
             border-right  10px solid transparent
        .right
          color #ccc
          font-size 16px
          position relative
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
              .getcode
                 border 1px solid red
                 color red
                 font-size 12px
                 padding 8px
                 border-radius 5px
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

          .jiantou1
            position absolute
            right 62px
            top -20px
            width 0px
            height 0px
            border-bottom  10px solid #ffffff
            border-top  10px solid transparent
            border-left 10px solid transparent
            border-right  10px solid transparent
      .bottom
        padding 0 10%
        box-sizing border-box
        .icon
          width 60%
          display flex
          justify-content space-between
          padding 20px 0
          >img
            width 30%
            height 30%

        >p
         text-align center
         color #ccc


</style>
