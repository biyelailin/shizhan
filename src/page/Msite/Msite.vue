<template>
  <div class="indexbox" >
    <div >
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
            <ul class="index_list" v-if="menus.data">
              <li v-for="(menu,index) in menus.data" :key="index" @cilck="high11(index)">
                <a href="javascript:;" :class="{on:num === index}" >{{menu.menu_name}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="index_content">
          <div class="content" >

            <Lunbo/>

            <div class="crazy_buy">
              <div class="crazy_img"  v-if="imgmoudle[0]">
                <img :src="imgmoudle[0].value[0].image" >
              </div>
              <div class="crazy_item">
                <img src="./images/crazy_one.png"  width="85">
                <div class="crazy_center">
                  <div class="one" v-if="crazybuy[0]">
                    <span>{{crazybuy[0].title}}</span>
                    <span>21:00</span>
                  </div>
                  <div class="more">
                    <span>更多</span>
                    <span class="iconfont icon-xinxi"></span>
                  </div>
                </div>
              </div>
              <div class="crazy_content " v-if="crazybuy[0]">
                <ul>
                  <li class="content_imgs" v-for="(good ,index) in crazybuy[0].goods" :key="index">
                    <a href="javascript:;">
                  <span>
                    <img :src="good.image.image" class="img_li">
                  </span>
                      <div>¥{{good.sale_price}}</div>
                      <div>{{good.little_price}}</div>
                    </a>
                  </li>

                </ul>
              </div>
            </div>

            <Quiete :gif="moudle2[1]" :head="moudle2[0]" v-if="moudle2[0]"/>


            <!--抽取数据区域-->
            <List v-if="moudleListIimg.listOne" :img="moudleheaderimg[0]" :list="moudleListIimg.listOne" />

            <ListLong v-if="moudleListIimg.listTwo" :img="moudleheaderimg[1]" :list="moudleListIimg.listTwo"/>

            <Quiete :gif="moudle2[3]" :head="moudle2[2]" v-if="moudle2[0]"/>
            <list v-if="moudleListIimg.listThree" :img="moudleheaderimg[2]" :list="moudleListIimg.listThree"/>
            <list v-if="moudleListIimg.listFour" :img="moudleheaderimg[3]" :list="moudleListIimg.listFour"/>
            <div class="footer_desc">
              <div class="footer_desc1">
                <a href="javascript:;" class="on">触屏版</a>
                <a href="javascript:;">手机客户端</a>
                <a href="javascript:;">关于我们</a>
                <a href="javascript:;">联系我们</a>
              </div>
              <div class="footer_desc2"> wap.epet.com 版权:重庆易宠科技有限公司</div>
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
  import {mapState} from 'vuex'
  import Lunbo from '../../components/lunbo/lunbo.vue'
  import List from '../../components/List/list.vue'
  import ListLong from '../../components/ListLong/Listlong.vue'
  import Quiete from '../../components/jingtai/Queite.vue'
  export default {
     data(){
       return{
        num:0,
         show:false,
       }
     },

    components:{
      Lunbo,
      List,
      ListLong,
      Quiete
     },
    computed:{
      ...mapState(['menus','imgmoudle','crazybuy','moudle2','moudleheaderimg','moudleListIimg']),
    },
    mounted(){
      // 头部导航
      this.$store.dispatch('getmeuns',()=>{
        this.$nextTick(()=>{ //页面更新完以后显示滑动
          if(!this.scroll2){
            this.scroll2 = new BScroll('.index_search',{
              click :true,
              scrollX :true
            })
          }else{
            this.scroll2.refresh()
          }
        })

      })
     // 显示模板图片
      this.$store.dispatch('getmoudleimg')
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
     // 获取疯抢模板
      this.$store.dispatch('getcrazybuy',()=>{
         this.$nextTick(()=>{
           if(!this.scroll3){
             this.scroll3 =  new BScroll('.crazy_content',{
               click :true,
               scrollX :true,
               probeType:2

             })
           }else{
             this.scroll3.refresh()
           }
         })
      })
     // 处理品牌力量模块
      this.$store.dispatch('getmoudle2')
    //处理头部图片
      this.$store.dispatch('getHeaaderImgs')
//     处理列表list
      this.$store.dispatch('getListImg')



      setTimeout(()=>{
        this.show = true;
        if(!this.scroll){
          this.scroll =  new BScroll('.index_content',{
            click :true
          })
        }else{
          this.scroll.refresh()
        }
      },20)

    },
    methods:{
      high11(index){
        alert(index)
        this.num = index

      },
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
      z-index 100
      background-color #fff
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
      height 100%
      width 100%
      .index_content
         position  absolute
         left 0
         right 0
         top 78px
         bottom 50px
         .content

           .crazy_buy
              .crazy_img
                >img
                 width 100%
               .crazy_item
                 display flex
                 justify-content space-between
                 align-items center
                 font-size 12px
                 padding 5px
                 box-sizing content-box
                 .crazy_center
                   width 50%
                   display flex
                   justify-content space-around
                   align-items center


               .crazy_content
                  width 100%
                  >ul
                    width 200%
                    overflow hidden
                    .content_imgs
                       width 12.5%
                       float left
                       text-align center
                       font-size 12px
                       .img_li
                        width 70%






           .dapai
              width 100%
              .dapai_img
                >img
                  width 100%
                  display block
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
           .haohuo
             .haohuo_img
               >img
                 width 100%
                 display block
             .haohuo_nav
               overflow hidden
               >li
                float left
                width 50%
                >a
                 >img
                   width 100%
                   display block
           .badgod
             width 100%
             .badgod_img
               img
                width 100%
                display block
             .badgod_img2
               img
                 width 100%
                 display block
           .global
             width 100%
             .global_img
               width 100%
               >a
                >img
                  width 100%
                  display block
             .gloal_nav
               width 100%
               overflow hidden
               .gloal_nav_img1
                 float left
                 width 50%
                 >img
                   width 100%
                   display block
               .gloal_nav_right
                 width 50%
                 float right
                 .gloal_img_right_1
                  >img
                    width 100%
                    display block
           .tese
             width 100%
             .tese_img
              >img
               width 100%
               display block

             .test_nav
                overflow hidden
                >li
                  width 50%
                  float left
                  >a
                    >img
                      width 100%
                      display block
           .footer_desc
                 text-align center
                 padding 20px
                 .footer_desc1
                   margin 10px
                   font-size 14px
                   a
                     color #333333
                   .on
                      color red
                 .footer_desc2
                    font-size 12px

</style>
