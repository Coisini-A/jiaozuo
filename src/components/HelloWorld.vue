<template>
  <div id="hello">
    <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2> -->
    <img src="./../assets/img/index/xiankuang.png" alt="">
    <img src="./../assets/img/index/qiu.png" alt="">
    <p>//////////&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;焦作全域大数据&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//////////</p>
    <router-link to='/Global'><div class="tab1"><img src="./../assets/img/index/i_quyu.png" alt="">全域数据分析平台</div></router-link>
    <router-link to='/Conduct'><div class="tab2"><img src="./../assets/img/index/i_yingji.png" alt="">应急指挥平台</div></router-link>
    <router-link to='/Estate'><div class="tab3"><img src="./../assets/img/index/i_chanye.png" alt="">产业检测平台</div></router-link>
    <router-link to='/Wisdom'><div class="tab4"><img src="./../assets/img/index/i_wenlv.png" alt="">智慧文旅管控平台</div></router-link>
    <router-link to='/Public'><div class="tab5"><img src="./../assets/img/index/i_gonggong.png" alt="">公共服务平台</div></router-link>
    <router-link to='/Scenic'><div class="tab6"><img src="./../assets/img/index/i_jingqu.png" alt="">景区监测平台</div></router-link>
    <router-link to='/Cultural'><div class="tab7"><img src="./../assets/img/index/i_wenwu.png" alt="">文物监测平台</div></router-link>
    <div class="quxian"><img src="./../assets/img/index/quxian.gif" alt=""></div>
    <div class="skew1">
      <div class="skew-main1"></div>
    </div>
    <div class="skew2">
      <div class="skew-main2"></div>
    </div>
    <div class="skew3">
      <div class="skew-main3"></div>
    </div>
    <div class="skew4">
      <div class="skew-main4"></div>
    </div>
    <div class="skew5">
      <div class="skew-main5"></div>
    </div>
    <div class="skew6">
      <div class="skew-main6"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 1080px;
  width: 1920px;
  background-color: aquamarine;
  background-image: url("./../assets/img/index/bg_big.png");
  background-size: cover;
  background-attachment: fixed;
  position: relative;
}
#hello>img:nth-child(1){
  width: 1781px ;
  height: 954px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -477px;
  margin-left: -890px;
}
#hello>p{
  position: absolute;
  top:10px;
  z-index:3;
  font-size: 40px;
  color: #65E1FB;
  left: 650px;
  user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
}
.tab1,.tab2,.tab3,.tab4,.tab5,.tab6,.tab7{
  width: 310px;
  height: 61px;
  text-align: center;
  border: 2px solid #65E1FB;
  background: rgba(9,31,46,0.6);
  border-radius: 8px;
  font-size: 22px;
  position: absolute;
  z-index: 2;
  color: #65E1FB;
  line-height: 61px;
  box-shadow: 0px 7px 10px 0px #00d0ff;
  user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  >img{
    position: relative;
    top:11px;
    left:-20px;
  }
}
#hello>div>img{
  position: relative;
  top:0px;
  left:-20px;
}
.tab1{
  top: 364px;
  left: 429px;
}
.tab2{
  top: 506px;
  left: 379px;
}
.tab3{
  top: 649px;
  left: 429px;
}
.tab4{
  top: 460px;
  left: 806px;
}
.tab5{
  top: 364px;
  left: 1181px;
}
.tab6{
  top: 506px;
  left: 1231px;
}
.tab7{
  top: 649px;
  left: 1181px;
}
.quxian{
  position: absolute;
  top:220px;
  left:800px;
}
/* .tab1,.tab2,.tab3,.tab4,.tab5,.tab6,.tab7:hover{ */
  /* width: 342px; */
  /* height: 95px; */
/* } */
.skew1,.skew2,.skew3{
  transform: skew(-45deg);
  background-color:#65E1FB ;
  position: absolute;
  width: 15px;
}
.skew1{
  height: 37px;
  top:60px;
  right:490px;
  animation: round 2s linear infinite;
}
@keyframes round
{
  0% {opacity: 0;}
  30% {opacity: 0.5;}
  100% {opacity: 1;}
}
@keyframes roun
{
  0% {opacity: 0;}
  60% {opacity: 0.5;}
  100% {opacity: 1;}
}
@keyframes rou
{
  0% {opacity: 0;}
  90% {opacity: 0.5;}
  100% {opacity: 1;}
}
.skew2{
  height: 27px;
  top:60px;
  right:450px;
  animation: roun 2s linear infinite;
}
.skew3{
  height: 17px;
  top:60px;
  right:410px;
  animation: rou 2s linear infinite;
}
.skew4,.skew5,.skew6{
  transform: skew(45deg);
  background-color:#65E1FB ;
  position: absolute;
  width: 15px;
}
.skew4{
  height: 37px;
  top:60px;
  left:490px;
  animation: round 2s linear infinite;
}
.skew5{
  height: 27px;
  top:60px;
  left:450px;
  animation: roun 2s linear infinite;
}
.skew6{
  height: 17px;
  top:60px;
  left:410px;
  animation: rou 2s linear infinite;
}

</style>
