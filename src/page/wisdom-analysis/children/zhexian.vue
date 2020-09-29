<template>
  <div>
    <div style="width: 780px; height: 478px; opacity: 0.5; position: relative">
      <div
        id="zhexian"
        :style="{
          width: '680px',
          height: '400px',
          position: 'absolute',
          top: '50px',
          left: '50px',
        }"
      ></div>
    </div>
  </div>
</template>

<script>
var echarts = require("echarts");
export default {
  methods: {
    drawLine() {
      var chart = echarts.init(document.getElementById("zhexian"));
      let bgColor = "rgba(0,0,0,0)";
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
          name: "1",
          value1: 1400,
          value2: 1250,
        },
        {
          name: "3",
          value1: 2000,
          value2: 2300,
        },
        {
          name: "5",
          value1: 1300,
          value2: 900,
        },
        {
          name: "7",
          value1: 700,
          value2: 2400,
        },
        {
          name: "9",
          value1: 2300,
          value2: 1400,
        },
        {
          name: "11",
          value1: 600,
          value2: 1700,
        },
        {
          name: "13",
          value1: 1800,
          value2: 2600,
        },
        {
          name: "15",
          value1: 1600,
          value2: 1500,
        },
        {
          name: "17",
          value1: 1900,
          value2: 1600,
        },
        {
          name: "19",
          value1: 2810,
          value2: 2500,
        },
        {
          name: "21",
          value1: 1531,
          value2: 2068,
        },
        {
          name: "23",
          value1: 1316,
          value2: 2166,
        },
        {
          name: "25",
          value1: 1236,
          value2: 1686,
        },
        {
          name: "27",
          value1: 1600,
          value2: 1561,
        },
        {
          name: "29",
          value1: 1566,
          value2: 1366,
        },
        {
          name: "31",
          value1: 2756,
          value2: 1686,
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
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            let html = "";
            params.forEach((v) => {
              // console.log(v.value);
              html += `<div style="color: #666;font-size: 14px;line-height: 24px"><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;"></span>${
                v.seriesName
              }:<span style="color: ${
                color[v.componentIndex]
              };font-weight:700;font-size: 18px">${v.value}</span>人<br/>`;
            });

            return html;
          },
          extraCssText:
            "background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;",
          axisPointer: {
            type: "shadow",
            shadowStyle: {
              color: "rgba(0,0,0,0)",
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
                color: "#fff",
              },
            },
            data: xAxisData,
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "人数/时间",
            nameTextStyle: {
              color: "#fff",
              fontSize: 12,
              lineHeight: 40,
            },
            axisLabel: {
              textStyle: {
                color: "pink",
              },
            },
          },
        ],
        series: [
          {
            name: "景区一",
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
            name: "景区二",
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
  },
  mounted() {
    // this.currentTime();
    this.drawLine();
  },
};
</script>

<style lang="less" scoped>
</style>
