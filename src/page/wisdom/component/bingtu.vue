<template>
  <div>
    <div
      id="meter"
      :style="{ width: '505px', height: '175px', color: '#fff' }"
    ></div>
  </div>
</template>
<script>
let echarts = require("echarts/lib/echarts");
import "echarts-liquidfill";
// import '../../../js/echarts.min.js';
export default {
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      var chart = echarts.init(document.getElementById("meter"));
      window.onresize = function () {
        chart.resize();
      };
      chart.setOption({
        //         title: {
        //     text: '某站点用户访问来源',
        //     subtext: '纯属虚构',
        //     left: 'center'
        // },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "36",
          top: "56",
          data: ["吃饭", "住宿", "门票", "购物", "娱乐", "其他"],
          height: "60%",
          icon: "square",
          textStyle: {
            color: "#fff",
            padding: [10, 15, 10, -5],
            fontSize: 12,
            fontFamily: "'PingFang SC Regular', 'PingFang SC Regular-Regular'",
            fontWeight: 400,
          },
        },
        color: [
          "#5CB7FE",
          "#5CB7FE",
          "#6C5AF4",
          "#E57051",
          "#8DDFB6",
          "#FFD75D",
        ],
        series: [
          {
            // name: '访问来源',
            type: "pie",
            radius: "60%",
            center: ["75%", "55%"],
            data: [
              { value: 150, name: "吃饭" },
              { value: 200, name: "住宿" },
              { value: 180, name: "门票" },
              { value: 180, name: "购物" },
              { value: 200, name: "娱乐" },
              { value: 80, name: "其他" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    },
  },
};
</script>
<style lang="less" scoped>
</style>
