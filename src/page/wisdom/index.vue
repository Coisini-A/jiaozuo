<template>
  <div class="bj">
    <div class="top">
      <div>
        <span><img src="./../../assets/img/wenlv/tianqi.png" alt="" />晴</span>
        <span
          ><img
            src="./../../assets/img/wenlv/wendu.png"
            alt=""
          />温度：31&#8451;</span
        >
      </div>
      <div>
        <span
          ><img
            src="./../../assets/img/wenlv/tubiao1.png"
            alt=""
          />焦作市智慧文旅管控平台</span
        >
      </div>
      <div class="time">
        {{ nowDate }}
      </div>
    </div>
    <div class="box">
      <!-- 本月游客量 -->
      <div>
        <div>
          <div class="samllbox"></div>
          <p class="tit" style="top: -17px; left: 230px">本月游客量</p>
        </div>
        <div>
          <div
            style="
              width: 296px;
              height: 43px;
              display: flex;
              color: #65e1fb;
              font-size: 60px;
              position: relative;
              top: 15px;
              left: 20px;
              font-weight: 700;
              font-family: DIN Bold, DIN Bold-Bold;
              letter-spacing: 12px;
            "
          >
            <div>5</div>
            <div>6</div>
            <div>8</div>
            <div>7</div>
            <div>9</div>
            <div>5</div>
            <div>4</div>
          </div>
          <div
            style="
              width: 130px;
              color: #fff;
              position: relative;
              left: 385px;
              top: -20px;
              font-size: 16px;
              line-height: 32px;
            "
          >
            <div>
              环比&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #e57051"
                >4.58% &nbsp; ↑</span
              >
            </div>
            <div>
              同比&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #65e1fb"
                >4.58% &nbsp; ↓</span
              >
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="samllbox"></div>
          <p class="tit" style="top: -17px; left: 930px">资源统计</p>
        </div>
        <div>
          <baidu-map class="map" :zoom="zoom" :center="point" ak="IXpn3t34wGwGYNzUw1n2N6fXKw7IYhbE" :scroll-wheel-zoom="true">
            <!-- 聚合动态添加的点坐标   :icon="{url: require('././assets/img/index/i_chanye.png')}" -->
              <bm-marker :position="point" ></bm-marker>
          </baidu-map>
        </div>
      </div>
      <!-- 本月消费额 -->
      <div>
        <div>
          <div class="samllbox"></div>
          <p class="tit" style="top: -17px; left: 1585px">本月消费额</p>
        </div>
        <div>
          <div
            style="
              width: 276px;
              height: 43px;
              display: flex;
              color: #65e1fb;
              font-size: 60px;
              position: relative;
              top: 15px;
              left: 15px;
              font-weight: 700;
              font-family: DIN Bold, DIN Bold-Bold;
              letter-spacing: 12px;
            "
          >
            <div>7</div>
            <div>5</div>
            <div>4</div>
            <div>7</div>
            <div>9</div>
            <div>5</div>
            <div>4</div>
          </div>
          <div
            style="
              width: 130px;
              color: #fff;
              position: relative;
              left: 365px;
              top: -20px;
              font-size: 16px;
              line-height: 32px;
            "
          >
            <div>
              环比&nbsp;&nbsp;&nbsp;<span style="color: #e57051"
                >4.58% &nbsp; ↑</span
              >
            </div>
            <div>
              同比&nbsp;&nbsp;&nbsp;<span style="color: #65e1fb"
                >4.58% &nbsp; ↓</span
              >
            </div>
          </div>
        </div>
      </div>
      <!-- 游客性别分析 -->
      <div class="circle">
        <div>
          <div class="samllbox"></div>
          <p class="tit" style="top: -17px; left: 220px">游客性别分析</p>
        </div>
        <div style="width: 70%; margin: 20px auto 0; color: #fff">
          <span style="position: relative; left: 115px; top: 95px"
            >男（1300人）</span
          ><img src="./../../assets/img/wenlv/xingbie.png" alt="" /><span
            style="position: relative; right: -310px; top: -25px"
            >女（1300人）</span
          >
        </div>
        <div
          style="
            display: flex;
            width: 475px;
            justify-content: space-between;
            margin: 20px auto 0;
          "
        >
          <div>
            <el-progress
              type="circle"
              :percentage="12"
              :width="50"
              :height="50"
              color="#65E1FB"
            ></el-progress>
            <p style="color: #fff">0-15岁</p>
          </div>
          <div>
            <el-progress
              type="circle"
              :percentage="12"
              :width="50"
              :height="50"
              color="#65E1FB"
            ></el-progress>
            <p style="color: #fff">16-25岁</p>
          </div>
          <div>
            <el-progress
              type="circle"
              :percentage="12"
              :width="50"
              :height="50"
              color="#65E1FB"
            ></el-progress>
            <p style="color: #fff">26-35岁</p>
          </div>
          <div>
            <el-progress
              type="circle"
              :percentage="12"
              :width="50"
              :height="50"
              color="#65E1FB"
            ></el-progress>
            <p style="color: #fff">36-45岁</p>
          </div>
          <div>
            <el-progress
              type="circle"
              :percentage="12"
              :width="50"
              :height="50"
              color="#65E1FB"
            ></el-progress>
            <p style="color: #fff">46-55岁</p>
          </div>
          <div>
            <el-progress
              type="circle"
              :percentage="12"
              :width="50"
              :height="50"
              color="#65E1FB"
            ></el-progress>
            <p style="color: #fff">65岁以上</p>
          </div>
        </div>
      </div>
       <!-- 银联分析 -->
      <div>
        <div>
          <div class="samllbox"></div>
          <p class="tit" style="top: -17px; left: 220px">银联分析</p>
        </div>
        <div style="margin-top:-20px;">
          <bingtu></bingtu>
          <zhuzhuangtu style="margin-top:-17px;"></zhuzhuangtu>
        </div>
      </div>
      <!-- 景区客流分析 -->
      <div>
        <router-link to="/wisdom-analysis">
          <div>
            <div class="samllbox"></div>
            <p class="tit" style="top: -17px; left: 220px">实时客流分析</p>
          </div>
          <div>
            <keliu style="color: #fff"></keliu>
          </div>
        </router-link>
      </div>
      <!-- 客源地分析 -->
      <div>
        <div>
          <div class="samllbox"></div>
          <p class="tit" style="top: -17px; left: 340px">客源地分析</p>
        </div>
        <div style="display: flex;">
          <!-- <div> -->
            <table class="table">
              <tr>
                <th colspan="3" style="text-align: center">本月省客流来源</th>
              </tr>
              <tr>
                <td style="color: #e57051">1</td>
                <td>浙江省</td>
                <td>127853人</td>
              </tr>
              <tr>
                <td style="color: #ffd75d">2</td>
                <td>江苏省</td>
                <td>12785人</td>
              </tr>
              <tr>
                <td style="color: #8ddfb6">3</td>
                <td>山东省</td>
                <td>12780人</td>
              </tr>
              <tr>
                <td>4</td>
                <td>广东省</td>
                <td>29045人</td>
              </tr>
              <tr>
                <td>5</td>
                <td>湖北省</td>
                <td>12785人</td>
              </tr>
              <tr>
                <td>6</td>
                <td>河南省</td>
                <td>9870人</td>
              </tr>
              <tr>
                <td>7</td>
                <td>江西省</td>
                <td>8888人</td>
              </tr>
              <tr>
                <td>8</td>
                <td>陕西省</td>
                <td>1278人</td>
              </tr>
            </table>
          <!-- </div> -->
          <!-- <div> -->
          <!-- <div style="width: 450px; position: relative; top: 20px; left: -30px"> -->
            <!-- <el-row style="position: absolute; left: 230px">
              <el-button size="medium">省客流量</el-button>
              <el-button size="medium">市客流量</el-button>
            </el-row>
            <ditu style="margin-top: 30px"></ditu> -->
            <table class="table">
              <tr>
                <th colspan="3" style="text-align: center">本月市客流来源</th>
              </tr>
              <tr>
                <td style="color: #e57051">1</td>
                <td>郑州市</td>
                <td>127853人</td>
              </tr>
              <tr>
                <td style="color: #ffd75d">2</td>
                <td>开封市</td>
                <td>12785人</td>
              </tr>
              <tr>
                <td style="color: #8ddfb6">3</td>
                <td>许昌市</td>
                <td>12780人</td>
              </tr>
              <tr>
                <td>4</td>
                <td>洛阳市</td>
                <td>29045人</td>
              </tr>
              <tr>
                <td>5</td>
                <td>新乡市</td>
                <td>12785人</td>
              </tr>
              <tr>
                <td>6</td>
                <td>焦作市</td>
                <td>9870人</td>
              </tr>
              <tr>
                <td>7</td>
                <td>安阳市</td>
                <td>8888人</td>
              </tr>
              <tr>
                <td>8</td>
                <td>漯河市</td>
                <td>1278人</td>
              </tr>
            </table>
          <!-- </div> -->
        </div>
      </div>
      <!-- 舆情分析 -->
      <div>
        <div>
          <div class="samllbox"></div>
          <p class="tit" style="top: -17px; left: 240px">舆情分析</p>
        </div>
        <div style="display: flex">
          <div>
            <yuqing></yuqing>
            <p style="color: #fff; text-align: center">正面数</p>
          </div>
          <div>
            <yuqing></yuqing>
            <p style="color: #fff; text-align: center">中立数</p>
          </div>
          <div>
            <yuqing></yuqing>
            <p style="color: #fff; text-align: center">负面数</p>
          </div>
        </div>
      </div>
      <!-- 百姓超市 -->
      <div>
        <div>
          <div class="samllbox"></div>
          <p class="tit" style="top: -17px; left: 240px">百姓超市</p>
        </div>
        <div style="width: 90%; margin: 15px auto; color: #fff;display:flex;"> 
          <div style="width: 40%; display: inline-block">实时订单信息</div>
          <div class="times">{{ nowDate }}</div>
        </div>
        <biaoge style="margin: 0px 0 0 20px"></biaoge>
      </div>
      <!-- 监控1 -->
      <div>
        <img src="./../../assets/img/wenlv/jiankong1.png" alt="" />
      </div>
      <!-- OTA评论 -->
      <div>
        <div>
          <div class="samllbox"></div>
          <p class="tit" style="top: -17px; left: 220px">OTA评论</p>
        </div>
        <div style="width:82%;height:200px;overflow:auto; margin: 20px auto 0;">
           <div v-for="(item, index) in touristArr" :key="item.id" style="margin:0 0 20px 0;">
          <div style="width: 100%;">
            <!-- <div style="width: 10%; display: inline-block">
              <img src="./../../assets/img/wenlv/meituan.png" alt="" />
            </div> -->
            <div style="width: 85%; display: inline-block; line-hight: 20px;">
              <p
                style="
                  font-size: 14px;
                  color: #708acc;
                  margin: 0px;
                  display: inline-block;
                "
              >
              {{touristArr[index].touristTime}}
              </p>
              <!-- <stars style="display: inline-block; margin-left: 15px"></stars> -->
              <p style="font-size: 14px; color: #ecf4f6; margin: 0;padding-top:5px;line-height:20px;">
                <!-- 服务很好，景区环境优美，空气清晰，值得推荐! ! -->
                {{touristArr[index].touristCon}}
              </p>
            </div>
          </div>
        </div>
        </div>
       
      </div>
      <!-- 停车场分析 -->
      <div>
        <router-link to="/wisdom-tingchecang">
          <div>
            <div id="samll-a">
              <div class="samllbox"></div>
              <p class="tit" style="top: -17px; left: 225px">停车场分析</p>
            </div>
            <div style="display: flex">
              <div class="tingche">
                <p>今日入场车辆<span>2045辆</span></p>
                <p>今日出场车辆<span>1728辆</span></p>
                <p>已使用车位<span style="color: #65e1fb">2378辆</span></p>
                <p>剩余车位<span style="color: #e57051">1782辆</span></p>
                <p>{{ data }}</p>
              </div>
              <div
                style="
                  color: #fff;
                  width: 280px;
                  margin: 10px 0 0 20px;
                  text-align: center;
                  font-size: 14px;
                "
              >
                <p>车位使用占比</p>
                <div style="height: 20px"></div>
                <el-progress
                  type="circle"
                  :percentage="78"
                  :stroke-width="10"
                ></el-progress>
              </div>
            </div>
            <div>
              <div
                id="zhexian"
                :style="{
                  width: '500px',
                  height: '300px',
                  position: 'absolute',
                  top: '280px',
                  left: '25px',
                }"
              ></div>
            </div>
          </div>
        </router-link>
      </div>
      <!-- 监控2 -->
      <div>
        <img src="./../../assets/img/wenlv/jiankong2.png" alt="" />
      </div>
      <!-- 监控3 -->
      <div>
        <img src="./../../assets/img/wenlv/jiankong3.png" alt="" />
      </div>
      <div>
        <div>
          <div class="samllbox"></div>
          <p class="tit" style="top: -17px; left: 220px">事件进度</p>
        </div>
        <jindu style=""></jindu>
      </div>
    </div>
  </div>
</template>
<script>
let echarts = require("echarts/lib/echarts");
import "echarts-liquidfill";


import biaoge from "@/page/wisdom/component/biaoge.vue";
import stars from "@/page/wisdom/component/stars.vue";
import keliu from "@/page/wisdom/component/keliu.vue";
import jindu from "@/page/wisdom/component/jindu.vue";
import yuqing from "@/page/wisdom/component/yuqing.vue";
import bingtu from "@/page/wisdom/component/bingtu.vue";
import ditu from "@/page/wisdom/component/ditu.vue";
import zhuzhuangtu from "@/page/wisdom/component/zhuzhuangtu.vue";


import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmScale from 'vue-baidu-map/components/controls/Scale'
import BmNavigation from 'vue-baidu-map/components/controls/Navigation'
import BmMarkerClusterer from  'vue-baidu-map/components/extra/MarkerClusterer'
import BmMarker from 'vue-baidu-map/components/overlays/Marker'
import BmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow'
export default {
  name: "wisdom",
  components: {
    biaoge,
    stars,
    keliu,
    jindu,
    yuqing,
    bingtu,
    ditu,
    zhuzhuangtu,

    BaiduMap,
    BmScale,
    BmNavigation,
    BmMarkerClusterer,
    BmMarker,
    BmInfoWindow
  },
  data() {
    return {
      nowDate: "", // 当前日期

      tit:"",
      point:{lng:116.404844,lat:39.919583},
      zoom:14,

      touristArr:[]
    };
  },
  methods: {
    currentTime() {
      setInterval(this.formatDate, 500);
    },
    formatDate() {
      let date = new Date();
      let year = date.getFullYear(); // 年
      let month = date.getMonth() + 1; // 月
      let day = date.getDate(); // 日
      let week = date.getDay(); // 星期
      let weekArr = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      let hour = date.getHours(); // 时
      hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
      let minute = date.getMinutes(); // 分
      minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
      let second = date.getSeconds(); // 秒
      second = second < 10 ? "0" + second : second; // 如果只有一位，则前面补零
      this.nowDate = `${year}-${month}-${day}     ${hour}:${minute}:${second}    ${weekArr[week]}`;
    },

    drawLine() {
      var chart = echarts.init(document.getElementById("zhexian"));
      let bgColor = "rgba(255,255,255,0)";
      let color = [
        "#0090FF",
        "#36CE9E",
        "#FFC005",
        "#FF515A",
        "#8B5CFF",
        "#00CA69",
      ];
      let echartData = [
        {
          name: "03：00",
          value1: 240,
          value2: 250,
        },
        {
          name: "06：00",
          value1: 360,
          value2: 320,
        },
        {
          name: "09：00",
          value1: 200,
          value2: 220,
        },
        {
          name: "12：00",
          value1: 370,
          value2: 310,
        },
        {
          name: "15：00",
          value1: 250,
          value2: 170,
        },
        {
          name: "18：00",
          value1: 350,
          value2: 360,
        },
        {
          name: "18：00",
          value1: 290,
          value2: 150,
        },
      ];

      let xAxisData = echartData.map((v) => v.name);
      let yAxisData1 = echartData.map((v) => v.value1);
      let yAxisData2 = echartData.map((v) => v.value2);
      const hexToRgba = (hex, opacity) => {
        let rgbaColor = "";
        let reg = /^#[\da-f]{6}$/i;
        if (reg.test(hex)) {
          rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
            "0x" + hex.slice(3, 5)
          )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
        }
        return rgbaColor;
      };
      window.onresize = function () {
        chart.resize();
      };
      chart.setOption({
        backgroundColor: bgColor,
        color: color,
        legend: {
          right: 10,
          top: 10,
          textStyle:{
            color:"#fff"
          }
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            let html = "";
            params.forEach((v) => {
              console.log(v);
              html += `<div style="color: #666;font-size: 14px;line-height: 24px">
                            <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;"></span>
                            ${v.seriesName}.${v.name}
                            <span style="color:${
                              color[v.componentIndex]
                            };font-weight:700;font-size: 18px">${v.value}</span>
                            辆`;
            });

            return html;
          },
          extraCssText:
            "background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;",
          axisPointer: {
            type: "shadow",
            shadowStyle: {
              color: "#ffffff",
              shadowColor: "rgba(225,225,225,1)",
              shadowBlur: 5,
            },
          },
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#fff",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#D9D9D9",
              },
            },
            data: xAxisData,
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "车辆/时间",
            nameTextStyle: {
              color: "#fff",
              fontSize: 12,
              lineHeight: 40,
            },
            axisLabel:{
                textStyle:{
                    color:'#fff'
                }
            }
          },
        ],
        series: [
          {
            name: "进车辆",
            // nameTextStyle:{color:"#fff"},
            type: "line",
            smooth: true,
            showSymbol: false,
            zlevel: 3,
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: hexToRgba(color[0], 0.3),
                    },
                    {
                      offset: 1,
                      color: hexToRgba(color[0], 0.1),
                    },
                  ],
                  false
                ),
                shadowColor: hexToRgba(color[0], 0.1),
                shadowBlur: 10,
              },
            },
            data: yAxisData1,
          },
          {
            name: "出车辆",
            type: "line",
            smooth: true,
            showSymbol: false,
            zlevel: 3,
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: hexToRgba(color[1], 0.3),
                    },
                    {
                      offset: 1,
                      color: hexToRgba(color[1], 0.1),
                    },
                  ],
                  false
                ),
                shadowColor: hexToRgba(color[1], 0.1),
                shadowBlur: 10,
              },
            },
            data: yAxisData2,
          },
        ],
      });
    },

    //列表
    getComment() {
      this.$axios
        .get(
          "http://39.99.161.137:8080/public/comment/findAll.html",
          {
            params: {
             id:"1"
            },
          }
        )
        .then((result) => {
          console.log(result.data);
          // if(result.data.code==10000){
            this.touristArr = result.data.data;
          // }else{
            // alert("shibai ")
          // }
          
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  
  mounted() {
    this.currentTime();
    this.drawLine();
    this.getComment();
  },
  // 销毁定时器
  beforeDestroy() {
    if (this.formatDate) {
      clearInterval(this.formatDate); // 在Vue实例销毁前，清除时间定时器
    }
  },
};
</script>
<style lang="less" scoped>
.map{
  width:780px;
  height:481px;
}

.bj {
  width: 1920px;
  height: 1977px;
  margin: 0;
  padding: 0;

  background-image: url(./../../assets/img/wenlv/bj.png);
}
.top {
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.top > div:nth-child(1) {
  height: 24px;
  font-size: 24px;
  font-family: PingFang SC Medium, PingFang SC Medium-Medium;
  font-weight: 500;
  text-align: left;
  color: #f7feff;
  line-height: 30px;
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
.top > div:nth-child(2) {
  width: 500px;
  height: 50px;
  background-image: linear-gradient(top, #eff3f2, #73babf);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 36px;
  font-family: FZZongYi-M05S Regular, FZZongYi-M05S Regular-Regular;
  font-weight: 900;
  text-align: left;
  line-height: 30px;
  position: relative;
  left: 380px;
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
.time {
  color: #fff;
  position: relative;
  right: -680px;
  top: 35px;
  font-size: 24px;
}
.times {
  width: 60%;
  display: inline-block;
  text-align: right;
  font-size: 14px;
}
.box {
  width: 1880px;
  margin: 0 auto;
  position: relative;
  top: 84px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  // 本月客流量
  > div:nth-child(1) {
    width: 555px;
    height: 158px;
    > div:nth-child(1) {
      width: 264px;
      height: 40px;
      overflow: hidden;
      padding-left: 150px;
    }
  }
  > div:nth-child(2) {
    width: 780px;
    height: 519px;
    > div:nth-child(1) {
      width: 264px;
      height: 40px;
      overflow: hidden;
      padding-left: 260px;
    }
  }
  // .circle >>> svg path:first-child{
  //     stroke:#fff;
  // }
  > div:nth-child(3) {
    width: 505px;
    height: 158px;
    > div:nth-child(1) {
      width: 264px;
      height: 40px;
      overflow: hidden;
      padding-left: 130px;
    }
  }
  > div:nth-child(4) {
    width: 555px;
    height: 341px;
    position: absolute;
    top: 175px;
    > div:nth-child(1) {
      width: 264px;
      height: 40px;
      overflow: hidden;
      padding-left: 150px;
    }
  }
  > div:nth-child(5) {
    width: 505px;
    height: 433px;
    position: absolute;
    right: 0;
    top: 175px;
    > div:nth-child(1) {
      width: 264px;
      height: 40px;
      overflow: hidden;
      padding-left: 130px;
    }
  }
  > div:nth-child(6) {
    width: 555px;
    height: 403px;
    position: absolute;
    top: 533px;
    > div:nth-child(1) {
      width: 264px;
      height: 40px;
      overflow: hidden;
      padding-left: 150px;
    }
  }
  > div:nth-child(7) {
    width: 780px;
    height: 403px;
    position: absolute;
    left: 575px;
    top: 535px;
    > div:nth-child(1) {
      width: 264px;
      height: 40px;
      overflow: hidden;
      padding-left: 260px;
    }
  }
  > div:nth-child(8) {
    width: 505px;
    height: 223px;
    position: absolute;
    right: 0;
    top: 625px;
    > div:nth-child(1) {
      width: 264px;
      height: 40px;
      overflow: hidden;
      padding-left: 150px;
    }
  }
  > div:nth-child(9) {
    width: 555px;
    height: 290px;
    position: absolute;
    top: 955px;
    // border:none;
    > div:nth-child(1) {
      width: 264px;
      height: 40px;
      overflow: hidden;
      padding-left: 150px;
    }
  }
  > div:nth-child(10) {
    width: 778px;
    height: 485px;
    position: absolute;
    top: 955px;
    left: 575px;
    > div:nth-child(1) {
      width: 264px;
      height: 40px;
      overflow: hidden;
      padding-left: 150px;
    }
  }
  > div:nth-child(11) {
    width: 505px;
    height: 276px;
    position: absolute;
    right: 0;
    top: 867px;
    > div:nth-child(1) {
      width: 264px;
      height: 40px;
      overflow: hidden;
      padding-left: 130px;
    }
  }
  > div:nth-child(12) {
    width: 555px;
    height: 575px;
    position: absolute;
    top: 1265px;
  }
  .tingche {
    color: #fff;
    line-height: 20px;
    width: 220px;
    margin: 50px 0 0 30px;
    > p {
      > span {
        float: right;
      }
    }
  }
  > div:nth-child(13) {
    width: 381px;
    height: 385px;
    position: absolute;
    top: 1455px;
    left: 575px;
  }
  > div:nth-child(14) {
    width: 381px;
    height: 385px;
    position: absolute;
    top: 1455px;
    left: 972px;
  }
  > div:nth-child(15) {
    width: 505px;
    height: 683px;
    position: absolute;
    right: 0;
    top: 1157px;
    > div:nth-child(1) {
      width: 264px;
      height: 40px;
      overflow: hidden;
      padding-left: 130px;
    }
  }
}
.box > div {
  opacity: 0.7;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid #03c4dc;
}
.box > div:nth-child(9) {
  opacity: 0.7;
  background: rgba(0, 0, 0, 0.3);
  border: none;
}
#samll-a > div:nth-child(1) {
  width: 264px;
  // height:40px;
  overflow: hidden;
  // padding-left: 150px;
  margin: 0 auto;
}
.samllbox {
  border-top: 40px solid rgba(22, 48, 128, 1);
  opacity: 0.5;
  border-right: 50px solid rgba(0, 0, 0, 0);
  // border-bottom:50px solid rgba(0,0,0,0);
  border-left: 50px solid rgba(0, 0, 0, 0);
}
.tit {
  position: absolute;
  color: #00e4ff;
  font-size: 22px;
}
.el-progress__text {
  color: #fff;
}
.table {
  color: #fff;
  text-align: center;
  border-collapse: collapse;
  width: 240px;
  height: 294px;
  margin: 30px 0 0 100px;
  > tr {
    > th {
      background-color: rgba(101, 225, 251, 0.6);
    }
    > td {
      font-size: 13px;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>