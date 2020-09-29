<template>
  <div class="bj">
    <div class="top">
      <div class="left">
        <span>
          <img src="~@/assets/img/wenlv/tianqi.png" alt />晴
        </span>
        <span style="color: #f7feff">
          <img src="~@/assets/img/wenlv/wendu.png" alt />温度：31&#8451;
        </span>
      </div>
      <div class="center">
        <span>
          <img src="~@/assets/img/wenlv/tubiao1.png" alt />客流数据分析
        </span>
      </div>
      <div class="right">
        <span @click="getShowCheck">
          <span>{{monthOrDate}}</span>
          <img src="~@/assets/img/wenlv/jiantou1.png" alt :class="{'arrowTransform': !flag, 'arrowTransformReturn': flag}" />
          <!-- <span style="color:#328EFC;font-size:18px;" :class="{'arrowTransform': !flag, 'arrowTransformReturn': flag}" @click="flag = !flag">﹀</span> -->
        </span>
        <span>
          <span>
            <img src="~@/assets/img/wenlv/tingchechang/rili.png" alt />
          {{monthOrDate === '月' ? nowMonth : nowDay }}
          </span>
        </span>
        <span>{{nowDate}}</span>
        <span class="right_show" v-show="flag">
          <span>
            <span @click="showMonth">月</span>
            <span @click="showDate">日</span>
          </span>
        </span>
      </div>
    </div>
    <div class="main" style="color:#ffffff">
      <!-- 景区游客总数量（月） -->
      <div class="main_tl">
        <div class="main_tl_top"></div>
        <p>景区游客总数量（{{monthOrDate}}）</p>
        <div class="main_tl_center">
          <div class="tl_total">
            {{count}}
          </div>
        </div>
      </div>
      <!-- 客源地分析 -->
      <div class="main_tc">
        <div class="main_tc_top"></div>
        <p>客源地分析</p>
        <keyuandi />
      </div>
      <!-- 游客属性分析（月） -->
      <div class="main_tr">
        <div class="main_tr_top"></div>
        <p>游客属性分析（{{monthOrDate}}）</p>
        <div class="main_tr_center">
          <img src="~@/assets/img/wenlv/xingbie.png" alt />
          <span>男（1300人）</span>
          <span>女（1300人）</span>
        </div>
        <!-- 环形进度条 -->
        <jindu />
      </div>
      <!-- 各景区游客人数 -->
      <div class="main_bl">
        <div class="main_bl_top"></div>
        <p>各景区游客人数</p>
        <!-- 线性进度条 -->
        <xianxing />
      </div>
      <!-- 各景区每月游客量分析 -->
      <div class="main_bc">
        <div class="main_bc_top"></div>
        <p>各景区每月游客量分析</p>
        <!-- 折线图 -->
        <zhexian />
      </div>
      <!-- 各景区游客量占比（月） -->
      <div class="main_br">
        <div class="main_br_top"></div>
        <p>各景区游客量占比（{{monthOrDate}}）</p>
        <!-- 饼图 -->
        <bing />
      </div>
    </div>
  </div>
</template>

<script>
import jindu from "./children/jindu";
import xianxing from "./children/xianxing";
import zhexian from "./children/zhexian";
import bing from "./children/bing";
import keyuandi from "./children/keyuandi";

export default {
  name: "analysis",
  components: {
    jindu,
    xianxing,
    zhexian,
    bing,
    keyuandi,
  },
  data() {
    return {
      count: 1008611,
      // 当前月份
      nowMonth: "",
      nowDate: "",
      nowDay: "",
      // 判断箭头的旋转
      flag: false,
      monthOrDate: "月",
    };
  },
  methods: {
    currentTime() {
      setInterval(this.formatDate, 1000);
    },
    formatDate() {
      // 获取当前时间
      let date = new Date();
      // 年
      let year = date.getFullYear();
      // 月
      let month = date.getMonth() + 1;
      // 补零
      month = month < 10 ? "0" + month : month;
      // 日
      let day = date.getDate();
      // 星期
      let week = date.getDay();
      let weekday = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      // 时
      let hour = date.getHours();
      hour = hour < 10 ? "0" + hour : hour;
      // 分
      let minute = date.getMinutes();
      minute = minute < 10 ? "0" + minute : minute;
      // 秒
      let second = date.getSeconds();
      second = second < 10 ? "0" + second : second;
      this.nowMonth = `${year}-${month}`;
      this.nowDate = `${hour}:${minute}:${second}  ${weekday[week]}`;
      this.nowDay = `${year}-${month}-${day}`;
    },
    counter() {
      this.count += 1;
    },
    getCounter() {
      setInterval(this.counter, 60);
    },
    // 显示选择框
    getShowCheck() {
      this.flag = !this.flag;
    },
    // 显示月
    showMonth() {
      this.monthOrDate = "月";
      this.flag = !this.flag;
    },
    // 显示日
    showDate() {
      this.monthOrDate = "日";
      this.flag = !this.flag;
    },
  },
  mounted() {
    this.currentTime();
    this.getCounter();
  },
  // 清除定时器
  beforeDestroy() {
    clearInterval(this.formatDate);
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}

.bj {
  width: 1920px;
  height: 1082px;
  background-image: url(~@/assets/img/wenlv/bj.png);
}
.top {
  display: flex;
  position: relative;
  height: 118px;
  .left {
    position: relative;
    font-size: 24px;
    font-family: PingFang SC Medium, PingFang SC Medium-Medium;
    font-weight: 500;
    color: #ffffff;
    > span {
      display: inline-block;
      padding: 20px 0 36px 50px;
      > img {
        position: relative;
        padding-right: 20px;
        top: 7px;
      }
    }
  }
  .center {
    position: relative;
    background-image: -webkit-linear-gradient(top, #def9f5, #73babf);
    -webkit-background-clip: text;
    color: transparent;
    font-size: 36px;
    font-family: FZZongYi-M05S Regular, FZZongYi-M05S Regular-Regular;
    font-weight: 900;
    line-height: 30px;
    left: 477px;
    top: 20px;
    > span {
      display: inline-block;
      > img {
        position: relative;
        padding-right: 20px;
        top: 9px;
      }
    }
  }
  .right {
    color: #ffffff;
    position: absolute;
    top: 31px;
    right: 25px;
    font-size: 24px;
    font-family: PingFang SC Medium, PingFang SC Medium-Medium;
    > span:nth-child(1) {
      display: inline-block;
      width: 91px;
      height: 36px;
      line-height: 36px;
      border: 1px solid #205daa;
      border-radius: 10px;
      margin-right: 10px;
      span {
        padding-left: 20px;
      }
      > img {
        width: 16px;
        margin-left: 10px;
        opacity: 0.6;
      }
    }
    > span:nth-child(2) {
      span {
        display: flex;
        text-align: center;
        display: inline-block;
        width: 188px;
        height: 36px;
        line-height: 36px;
        border: 1px solid #205daa;
        border-radius: 10px;
        margin-right: 30px;
        > img {
          width: 20px;
          padding-right: 8px;
        }
      }
    }
    .right_show {
      position: absolute;
      width: 91px;
      height: 36px;
      left: 0;
      top: 40px;
      border: 1px solid #205daa;
      border-radius: 8px;
      span {
        :first-child {
          padding-left: 20px;
        }
      }
    }
    .arrowTransform {
      transition: 0.2s;
      transform-origin: center;
      transform: rotateZ(180deg);
    }
    .arrowTransformReturn {
      transition: 0.2s;
      transform-origin: center;
      transform: rotateZ(0deg);
    }
  }
}

.main {
  position: relative;
  .main_tl {
    position: absolute;
    top: 6px;
    left: 20px;
    width: 528px;
    height: 156px;
    border: 1px solid #205daa;
    background: rgba(0, 0, 0, 0.1);
    .main_tl_top {
      position: absolute;
      left: 117px;
      width: 235px;
      border-top: 40px solid #163080;
      border-right: 25px solid transparent;
      border-left: 25px solid transparent;
      opacity: 0.5;
    }
    p {
      font-size: 22px;
      font-family: PingFang SC Medium, PingFang SC Medium-Medium;
      font-weight: 500;
      color: #00e4ff;
      text-align: center;
      line-height: 40px;
    }
    .main_tl_center {
      text-align: center;
      font-size: 60px;
      font-family: DIN Bold, DIN Bold-Bold;
      font-weight: 700;
      color: #65e1fb;
      line-height: 118px;
    }
    .tl_total {
      letter-spacing: 10px;
    }
  }
  .main_tc {
    position: absolute;
    top: 6px;
    left: 570px;
    width: 778px;
    height: 401px;
    border: 1px solid #205daa;
    background: rgba(0, 0, 0, 0.1);
    .main_tc_top {
      position: absolute;
      left: 258px;
      width: 214px;
      border-top: 40px solid #163080;
      border-right: 25px solid transparent;
      border-left: 25px solid transparent;
      opacity: 0.5;
    }
    p {
      font-size: 22px;
      font-family: PingFang SC Medium, PingFang SC Medium-Medium;
      font-weight: 500;
      color: #00e4ff;
      text-align: center;
      line-height: 40px;
    }
  }
  .main_tr {
    position: absolute;
    top: 6px;
    right: 21px;
    width: 527px;
    height: 339px;
    border: 1px solid #205daa;
    background: rgba(0, 0, 0, 0.1);
    .main_tr_top {
      position: absolute;
      left: 133px;
      width: 214px;
      border-top: 40px solid #163080;
      border-right: 25px solid transparent;
      border-left: 25px solid transparent;
      opacity: 0.5;
    }
    p {
      font-size: 22px;
      font-family: PingFang SC Medium, PingFang SC Medium-Medium;
      font-weight: 500;
      color: #00e4ff;
      text-align: center;
      line-height: 40px;
    }
    .main_tr_center {
      img {
        position: absolute;
        top: 81px;
        left: 74px;
      }
      :nth-child(2) {
        position: absolute;
        top: 158px;
        left: 193px;
        color: #f6feff;
        font-weight: 400;
        font-size: 14px;
        font-family: PingFang SC Regular, PingFang SC Regular-Regular;
      }
      :nth-child(3) {
        position: absolute;
        top: 159px;
        left: 382px;
        color: #f6feff;
        font-weight: 400;
        font-size: 14px;
        font-family: PingFang SC Regular, PingFang SC Regular-Regular;
      }
    }
    .main_tr_bottom {
      position: absolute;
    }
  }
  .main_bl {
    position: absolute;
    top: 185px;
    left: 20px;
    width: 528px;
    height: 760px;
    border: 1px solid #205daa;
    background: rgba(0, 0, 0, 0.1);
    .main_bl_top {
      position: absolute;
      left: 117px;
      width: 235px;
      border-top: 40px solid #163080;
      border-right: 25px solid transparent;
      border-left: 25px solid transparent;
      opacity: 0.5;
    }
    p {
      font-size: 22px;
      font-family: PingFang SC Medium, PingFang SC Medium-Medium;
      font-weight: 500;
      color: #00e4ff;
      text-align: center;
      line-height: 40px;
    }
  }
  .main_bc {
    position: absolute;
    top: 430px;
    left: 570px;
    width: 778px;
    height: 515px;
    border: 1px solid #205daa;
    background: rgba(0, 0, 0, 0.1);
    .main_bc_top {
      position: absolute;
      left: 217px;
      width: 297px;
      border-top: 40px solid #163080;
      border-right: 25px solid transparent;
      border-left: 25px solid transparent;
      opacity: 0.5;
    }
    p {
      font-size: 22px;
      font-family: PingFang SC Medium, PingFang SC Medium-Medium;
      font-weight: 500;
      color: #00e4ff;
      text-align: center;
      line-height: 40px;
    }
  }
  .main_br {
    position: absolute;
    top: 368px;
    right: 21px;
    width: 527px;
    height: 577px;
    border: 1px solid #205daa;
    background: rgba(0, 0, 0, 0.1);
    .main_br_top {
      position: absolute;
      left: 133px;
      width: 239px;
      border-top: 40px solid #163080;
      border-right: 25px solid transparent;
      border-left: 25px solid transparent;
      opacity: 0.5;
    }
    p {
      font-size: 22px;
      font-family: PingFang SC Medium, PingFang SC Medium-Medium;
      font-weight: 500;
      color: #00e4ff;
      text-align: center;
      line-height: 40px;
      margin-left: 40px;
    }
  }
}
</style>
