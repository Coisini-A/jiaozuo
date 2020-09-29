<template>
  <div id="bing">
    <div id="bing_main" style="width: 450px; height: 450px"></div>
  </div>
</template>

<script>
var echarts = require("echarts");

export default {
  data() {
    return {};
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("bing_main"));
    // 绘制图表
    myChart.setOption({
      tooltip: {
        trigger: "item",
        formatter: "{b} ({c}%)",
      },
      legend: {
        left: "auto",
        top: "bottom",
        itemWidth: 14,
        icon: "circle",
        textStyle: {
          color: "#fff",
          fontSize: 16,
          fontFamily: "'PingFang SC Regular', 'PingFang SC Regular-Regular'",
          fontWeight: 400,
          padding: [10, 14, 10, 15],
        },
        data: [
          "云台山风景区",
          "青云河风景区",
          "温县陈家沟",
          "嘉应观",
          "神农山景区",
          "静影寺",
          "樱桃沟旅游景区",
        ],
      },
      color: [
        "#5CB7FE",
        "#65E1FB",
        "#FFD75D",
        "#E57051",
        "#2A6FE2",
        "#6C5AF4",
        "#EE5D82",
      ],
      series: [
        {
          name: "面积模式",
          type: "pie",
          radius: [20, 100],
          center: ["45%", "30%"],
          roseType: "area",
          label: {
            color: "#fff",
          },
          data: [
            { value: 30, name: "云台山风景区" },
            { value: 14, name: "青云河风景区" },
            { value: 10, name: "温县陈家沟" },
            { value: 20, name: "嘉应观" },
            { value: 11, name: "神农山景区" },
            { value: 8, name: "静影寺" },
            { value: 7, name: "樱桃沟旅游景区" },
          ],
        },
      ],
    });
  },
};
</script>

<style lang="less" scoped>
#bing {
  position: relative;
  #bing_main {
    position: absolute;
    top: 40px;
    left: 45px;
  }
}
</style>
