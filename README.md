###1.问题
   用better-scroll 后，竖向滑动，header头部被覆盖，没有解决
### 2.进度
    每日疯抢模块

### 第二天
 ### 1.进度
      做完购物车模块
 ### 2.问题
      ##1px像素适配，把变量当成类名使用，不出效果，之后更改过来
      ##2.通过定位布局，然后再定容器，出现滚动，不出现，主要是外容器没有定高度
      ##3.做购物车隐藏模块，小图标icon 调试不起作用，正在找问题,应该是层级问题
### 3.第三天
       1.Msite 页面头部滑动模块，点击内容不变色，由于用btter-scroll，开启了scrollX :true不成功，
          也开启了click:true ,还没有解决，
       2. mock模拟数据，数据结构过于复杂，只是通过了数组的filter的方法获得数据，但是嵌套太深，取数据不好取
          通过测试，应该遍历数自己想要的数据，不要放置层级过深
       3.由于数据层级过深，在用数据展现时，a.b.c.xxx 要用v-if 在父级上
       4.没有划分好组件，做起来很麻烦，所以要把相同样式的模块抽离出来，对mock数据整合，然后在通过state储存
          在通过页面展现
       5.竖向滑屏，滑动用的插件，在数据展现后才创建对象，处理方法是：state创建对象，对state对象进行监视
###4.第四天
     完成进度：剩购物车和登陆页面数据交互
     1.使用router-link 的点击显示样式： linkActiveClass: 'active' 在router上配置，然后在router-link标签上使用
     2.在通过自定义事件：子级向父级传递属性时，在父组件中给子组件绑定的自定义事件的函数不能传参数
     3.登陆静态页面中的input标签中的属性placeholder：属性值不能设置字体颜色，要通过
       input::-webkit-input-placeholder
             color #ccc
     4.分类页面数据展现：其中mock返回分类的数据，是一个二维数组，在遍历时取数据时，
       要通过v-if 来一层层判断是否有值
### 5.第五天
     1.通过npm i vue-lazyload --save 下载图片懒加载，在main.js中进行配置，通过
      Vue.use(VueLazyload, {
        loading
      })
      在页面中对<img v-lazy=""/>进行修改
      2.使底部导航栏隐藏，通过配置router的meta：{} ，给底部导航加上$router.meta.xxx
      3.要对后台数据分析，在对组件分类和显示
      4.  <link rel="shortcut icon" type="image/x-icon" href="//static.epetbar.com/favicon.ico"> 添加小的icon


