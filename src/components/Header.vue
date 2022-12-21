<template>
  <div class="header">
    <div class="ui inverted menu" style="border-radius: 0;" >
      <div class="item" style="padding: 0;width: 90px;text-align: center;"  @click="toHome()" >
<!--        <img style="width: 20px" src="../assets/tagsLogo.png">-->
        <svg style="margin: -5px" class="book-shelf" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 84 94" height="54" width="54">
          <path fill="none" d="M37.612 92.805L4.487 73.71c-2.75-1.587-4.45-4.52-4.45-7.687L.008 27.877c-.003-3.154 1.676-6.063 4.405-7.634L37.558 1.167c2.73-1.57 6.096-1.566 8.835.013l33.124 19.096c2.75 1.586 4.45 4.518 4.45 7.686l.028 38.146c.002 3.154-1.677 6.063-4.406 7.634L46.445 92.818c-2.73 1.57-6.096 1.566-8.834-.013z"/>
          <g class="book-shelf__book book-shelf__book--one" fill-rule="evenodd">
            <path fill="#5199fc" d="M31 29h4c1.105 0 2 .895 2 2v29c0 1.105-.895 2-2 2h-4c-1.105 0-2-.895-2-2V31c0-1.105.895-2 2-2z"/>
            <path fill="#afd7fb" d="M34 36h-2c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1s-.448 1-1 1zm-2 1h2c.552 0 1 .448 1 1s-.448 1-1 1h-2c-.552 0-1-.448-1-1s.448-1 1-1z"/>
          </g>
          <g class="book-shelf__book book-shelf__book--two" fill-rule="evenodd">
            <path fill="#ff9868" d="M39 34h6c1.105 0 2 .895 2 2v24c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2V36c0-1.105.895-2 2-2z"/>
            <path fill="#d06061" d="M42 38c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z"/>
          </g>
          <g class="book-shelf__book book-shelf__book--three" fill-rule="evenodd">
            <path fill="#ff5068" d="M49 32h2c1.105 0 2 .86 2 1.92v25.906c0 1.06-.895 1.92-2 1.92h-2c-1.105 0-2-.86-2-1.92V33.92c0-1.06.895-1.92 2-1.92z"/>
            <path fill="#d93368" d="M50 35c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1s-1-.448-1-1v-2c0-.552.448-1 1-1z"/>
          </g>
          <g fill-rule="evenodd">
            <path class="book-shelf__shelf" fill="#ae8280" d="M21 60h40c1.105 0 2 .895 2 2s-.895 2-2 2H21c-1.105 0-2-.895-2-2s.895-2 2-2z"/>
            <path fill="#855f6d" d="M51.5 67c-.828 0-1.5-.672-1.5-1.5V64h3v1.5c0 .828-.672 1.5-1.5 1.5zm-21 0c-.828 0-1.5-.672-1.5-1.5V64h3v1.5c0 .828-.672 1.5-1.5 1.5z"/>
          </g>
        </svg>
        <div class="wrapper">
          <span>B</span>
          <span>o</span>
          <span>o</span>
          <span>k</span>
        </div>

      </div>
      <a v-for="(item,index) in tabsList" :key="index" class="item" :class="{'active':index === tabsIndex}" @click="switchOrder(item.num)"><font style="vertical-align: inherit;"><font
          style="vertical-align: inherit;">
        {{ item.name }}
      </font></font></a>

      <div class="right inverted menu">
        <a class="ui item "><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          {{ isLogin ? '登录' : '登出' }}
        </font></font></a>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  props: ['router'],
  data() {
    return {
      tabsList: [ // tab切换按钮选项
        {name: '首页', num: 0, to: "/index"},
        {name: '我的收藏', num: 1, to: "/collection"}
      ],
      tabsIndex: 0,
      isLogin:false
    }
  },
  watch: {
    $route: {
      handler: function (val) {
        var path = val.path
        for (const index in this.tabsList) {
          if (this.tabsList[index].to ===path) {
            this.tabsIndex= this.tabsList[index].num
          }
        }
      },
      // 深度观察监听
      deep: true
    }
  },
  mounted() {
    this.isLogin = !sessionStorage.getItem("user-auth");
    // 路由与导航列表匹配则高亮
    for (const index in this.tabsList) {
      if (this.tabsList[index].to === this.$route.path.toString()) {
        this.tabsIndex= this.tabsList[index].num
      }
    }
  },
  created() {
  },
  methods: {
    switchOrder(index){
      var to = this.tabsList[index].to;
      if (to !== this.$route.path) {
        this.tabsIndex= this.tabsList[index].num
        this.$router.push(to)
      }
    },
    toHome(){
      this.$router.push("/")
      location.reload()
    }
  },
  beforeDestroy() {
  }
}
</script>

<style scoped>
.header{
  /* sticky属性生效满足条件之2：固定的子元素高度低于父元素 */
  z-index: 99;

  /* 设置position: sticky*/
  position: sticky;
  /* sticky属性生效满足条件之3：必须指定top、bottom、left、right4个值之一 */
  top: 0;
}
@-webkit-keyframes book-bounce {
  0% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  80% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes book-bounce {
  0% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  80% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}
@-webkit-keyframes shelf-lift {
  0% {
    transform: translateY(0) rotate(0);
  }
  20% {
    transform: translateY(-4px) rotate(10deg);
  }
  40% {
    transform: translateY(-4px) rotate(0);
  }
  40% {
    transform: translateY(-4px) rotate(-10deg);
  }
  80% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes shelf-lift {
  0% {
    transform: translateY(0) rotate(0);
  }
  20% {
    transform: translateY(-4px) rotate(10deg);
  }
  40% {
    transform: translateY(-4px) rotate(0);
  }
  40% {
    transform: translateY(-4px) rotate(-10deg);
  }
  80% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}
.book-shelf:hover {
  cursor: pointer;

}
.book-shelf:hover .book-shelf__book {
  -webkit-animation: book-bounce 0.4s ease;
  animation: book-bounce 0.4s ease;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}
.book-shelf:hover .book-shelf__book--two {
  -webkit-animation-delay: 0.04s;
  animation-delay: 0.04s;
}
.book-shelf:hover .book-shelf__book--three {
  -webkit-animation-delay: 0.08s;
  animation-delay: 0.08s;
}
.book-shelf:hover .book-shelf__shelf {
  -webkit-animation: shelf-lift 0.4s ease;
  animation: shelf-lift 0.4s ease;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
}


.wrapper{
  width:14px;
  height:20px;
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.wrapper span{
  font-size: 18px;
  font-weight: bold;
  color: #4b4b4b;
  animation: lighting 1000ms alternate infinite ease;
}
@keyframes lighting{
  0%,85%{
    color: #4b4b4b;
    text-shadow: none;
  }
  100%{
    color: #ccccc4;
    text-shadow: 0 0 5px #989797, 0 0 3px #cecece;
  }
}
.wrapper span:nth-child(1){
  animation-delay: 150ms;
}
.wrapper span:nth-child(2){
  animation-delay: 300ms;
}
.wrapper span:nth-child(3){
  animation-delay: 450ms;
}
.wrapper span:nth-child(4){
  animation-delay: 600ms;
}
.wrapper span:nth-child(5){
  animation-delay: 750ms;
}
.wrapper span:nth-child(6){
  animation-delay: 900ms;
  margin-left: 20px;
}
.wrapper span:nth-child(7){
  animation-delay: 1050ms;
}
.wrapper span:nth-child(8){
  animation-delay: 1200ms;
}
.wrapper span:nth-child(9){
  animation-delay: 1350ms;
}
.wrapper span:nth-child(10){
  animation-delay: 1500ms;
}






/*  footer   */
footer {
  background-color: #222;
  color: #fff;
  font-size: 14px;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999;
}

footer p {
  margin: 10px 0;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida  Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
footer .fa-heart{
  color: red;
}
footer .fa-dev{
  color: #fff;
}
footer .fa-twitter-square{
  color:#1da0f1;
}
footer .fa-instagram{
  color: #f0007c;
}
fotter .fa-linkedin{
  color:#0073b1;
}
footer .fa-codepen{
  color:#fff
}
footer a {
  color: #3c97bf;
  text-decoration: none;
  margin-right:5px;
}
.youtubeBtn{
  position: fixed;
  left: 50%;
  transform:translatex(-50%);
  bottom: 45px;
  cursor: pointer;
  transition: all .3s;
  vertical-align: middle;
  text-align: center;
  display: inline-block;
}
.youtubeBtn i{
  font-size:20px;
  float:left;
}
.youtubeBtn a{
  color:#ff0000;
  animation: youtubeAnim 1000ms linear infinite;
  float:right;
}
.youtubeBtn a:hover{
  color:#c9110f;
  transition:all .3s ease-in-out;
}
.youtubeBtn i:active{
  transform:scale(.9);
  transition:all .3s ease-in-out;
}
.youtubeBtn span{
  font-family: 'Lato';
  font-weight: bold;
  color: #fff;
  display: block;
  font-size: 12px;
  float: right;
  line-height: 20px;
  padding-left: 5px;

}

@keyframes youtubeAnim{
  0%,100%{
    color:#c9110f;
  }
  50%{
    color:#ff0000;
  }
}
/* footer  */
</style>