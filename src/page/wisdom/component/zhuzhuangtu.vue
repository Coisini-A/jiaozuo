<template>
  <div id="zhuzhuang">
    <div id="zhexiantu" style="width: 505px; height: 278px"></div>
  </div>
</template>

<script>
var echarts = require("echarts");

export default {
  methods: {
    drawLine() {
      var myCharts = echarts.init(document.getElementById("zhexiantu"));

      myCharts.setOption({
        title: {
          text: "人均消费",
          textStyle: {
            color: "#fff",
            fontSize: 14,
            fontFamily: "'PingFang SC Regular', 'PingFang SC Regular-Regular'",
            fontWeight: 400,
          },
          left: 50,
        },
        xAxis: {
          type: "category",
          data: ["吃饭", "住宿", "门票", "购物", "娱乐", "其他"],
          textStyle: {
            color: "#fff",
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            textStyle: {
              color: "#fff",
            },
          },
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(220, 220, 220, 0.8)",
            },
            label: {
              position: "top",
              show: true,
              color: "#65E1FB",
              fontSize: 12,
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                offset: 0,
                color: "#65E1FB",
                },
                {
                  offset: 0.2,
                  color: "#65E1FB",
                },
                {
                offset: 1,
                color: "rgba(0, 0, 0, 0 )",
                },
            ]),
            },
            },
            barWidth: 24,
          },
        ],
      });
    },
  },
  mounted() {
    this.drawLine();
  },
};
</script>

<style lang="less" scoped>
</style>
