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
        <form @submit.prevent="Login">
          <div class="input_1">
            <span class="iconfont icon-touxaing"></span>
          <input type="text" placeholder="邮箱/用户名" class="input_2" v-model="name">
          </div>
          <div class="input_1">
            <span class="iconfont icon-jiami"></span>
          <input type="password" placeholder="输入密码" v-model="pwd">
           </div>
           <p class="input_p">忘记密码</p>
           <button class="input_btn">登陆</button>

        </form>
      </div>
        <div class="right"  v-show="!isShow">
          <div class="jiantou1">
          </div>
          <form @submit.prevent="Login">
            <div class="input_1">
              <span class="iconfont icon-touxaing"></span>
              <input type="text"  maxlength="11" placeholder="已注册手机号" class="input_2" v-model="phone">
            </div>
            <div class="input_1">
              <span class="iconfont icon-jiami"></span>
              <input type="password" placeholder="请输入图片内容" class="input_2" v-model="captcha">
              <img  style="width:100px" src="http://localhost:3000/captcha" @click="getCaptcha">
            </div>
            <div class="input_1">
              <span class="iconfont icon-jiami"></span>
              <input type="password"  placeholder="输入密码" class="input_2"  v-model="code">
              <button class="getcode" :class="{on:showTel}" v-show="!showTime" @click.prevent="getMsg">获取动态验证码</button>
              <button disabled="disabled" class="getcode" v-show="showTime">{{showTime}}s</button>
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
    <!--这里是提示框-->
    <AlertTip :alertText="alertText" @alterTip="alterTips" v-show="alterTip"/>
  </div>
</template>
<script>
  /*1.前台验证输入的信息是否正确
    手机端：
      对手机号的验证，要满足11位并且是1开头的
      获得手机验证码，是六位，通过发送请求验证码请求，返回验证码，在通过发送异步请求通过数据库的验证‘
    用户登录
      要异步获取图片验证信息，在通过发送异步请求，数据库进行验证
    2.前提
      先要判断是手机登陆还是用户登录
      1.
  * */
  import AlertTip from '../../components/AlertTip/AlertTip.vue'
  import {phoneCode,msmCode,LoginCode} from '../../api/index'
  export default {
     data(){
       return{
         isShow:true,
         phone:'' ,//获取手机号,
         code:'',//获取的手机验证码
         captcha:'',//图片验证码
         showTime:0, //倒计时时间

         name:'',
         pwd:'',

         alterTip:false, //这里是判断提示框显示，默认是不显示
         alertText:'',  //这是提示的信息
       }
     },
    computed:{
       showTel(){
          let {phone,captcha} = this
         return /^1\d{10}$/.test(phone) && captcha
       }
    },
    methods:{
      handle(val){
        this.isShow = val
      },
      alterTips(){
        this.alterTip = false
      },
   //执行倒计时
     async getMsg(){
       let timeId
       //  必须在正确获得手机号和图片验证码后才可以点击
       let {showTel, phone} = this
       if (showTel) {
         this.showTime = 60

         timeId = setInterval(() => {
           this.showTime--
           if (this.showTime === 0) {
             clearInterval(timeId)
           }
         }, 1000)
       }
//        发送异步请求获取code
       let result = await msmCode(phone)

       if (result.code === 1) {
         clearInterval(timeId)
         this.alterTip = true
         this.alertText = result.msg
       }
     },
//      获取图片验证码
      getCaptcha(event){
        event.target.src ='http://localhost:3000/captcha?time='+ new Date()
      },
     async  Login(){
         let result
        let {name,pwd ,phone,code,captcha,showTel} = this
        if(!this.isShow){//先判断手机登陆
       // 1.前台验证是否合法
           if(!this.showTel){
              this.alterTip =true
              this.alertText='请输入正确的手机号和验证码'
             return
           }else if(!/\d{6}$/.test(code)){
             this.alterTip =true
             this.alertText='请输入正确的验证码'
             return
           }
//         2.发送异步请求
             result = await phoneCode({phone,code})
            console.log(result)
        }else {
            if(!name){
              this.alterTip =true
              this.alertText='请输入用户名'
              return

            }else if(!pwd){
              this.alterTip =true
              this.alertText='请输入密码'
              return
            }
      //2.发送异步请求
           result = await LoginCode({name,pwd})

        }
//      3.处理请求后的信息
          if(result.code===0){
            this.$store.dispatch('userinfo',result.data)
            this.$router.push('/msite')
          }else {
            this.alterTip =true
            this.alertText=result.msg
            return
          }

      }
    },
    components:{
      AlertTip
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
                 background #ffffff

              .on
                 color #000
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
