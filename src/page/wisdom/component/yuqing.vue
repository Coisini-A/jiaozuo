<template>
  <div class="box1">
    <div
      id="yuqing1"
      :style="{
        width: '170px',
        height: '110px',
        color: '#fff',
        margin: '27px 0 0 0',
      }"
    ></div>
  </div>
</template>
<script>
var echarts = require("echarts/lib/echarts");
// require('echarts/lib/chart/bar')
// require('echarts/lib/component/tooltip')
// require('echarts/lib/component/title')
// import echarts from 'echarts'
import echartsLiquidfill from "echarts-liquidfill";
export default {
  name: "",
  data() {
    return {
      counter: 1,
    };
  },
  mounted() {
    this.drawLine();
    this.num()
  },
  methods: {
    num(){
      this.$axios
        .post("http://39.99.161.137:8080/public/appraise/getByTime.html",)
        .then((result) => {
          console.log(result.data);
          // if(result.data.code==10000){
          // }else{
            // alert("shibai ")
          // }
          
        })
        .catch((err) => {
          console.log(err);
        });
    },
    drawLine() {
      let yuqing = echarts.init(document.getElementById("yuqing1"));
      var seriesData = 70;
      var colorArr = ["#0C95FF", "#1362EB"];
      var data = [
        {
          value: seriesData,
          name: "已完成",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: colorArr[0],
              },
              {
                offset: 1,
                color: colorArr[1],
              },
            ]),
          },
        },
        {
          value: 100 - seriesData,
          name: "进行中",
          itemStyle: {
            color: "#111F42",
          },
        },
      ];
      var Filldata = data[0].value / (data[0].value + data[1].value);
     let option = {
        tooltip: {
          trigger: "item",
          formatter: function (res) {
            if (res.componentSubType == "liquidFill") {
              return "";
            } else {
              return "" + res.name + "：" + res.data.value + "项";
            }
          },
        },
        title: {
          text: (Filldata * 100).toFixed(0) + "%",
          left: "center",
          top: "47%",
          textStyle: {
            fontSize: 34,
            fontWeight: "normal",
            color: "#BECBE3",
          },
        },
        series: [
          {
            type: "liquidFill",
            data: [
              {
                value: Filldata,
              },
              {
                value: Filldata,
              },
            ],
            backgroundStyle: {
              color: "transparent",
            },
            color: ["rgba(68,165,255, 0.3)", "rgba(68,165,255, 0.5)"],
            radius: "86%",
            center: ["50%", "50%"],
            label: {
              normal: {
                formatter: "",
              },
            },
            outline: {
              show: false,
            },
          },
          {
            type: "pie",
            radius: ["86%", "92%"],
            label: {
              show: false,
            },
            labelLine: {
              normal: {
                show: false,
              },
            },
            hoverAnimation: false,
            data: data,
          },
        ],
      };
      yuqing.setOption(option);
    },
  },
};
</script>
<style lang="less" scoped>
</style>