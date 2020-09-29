<template>
    <div class="box">
        <p>月客流量：</p>
        <div id="myChart" :style="{width:'520px',height:'330px',color:'#fff'}"></div>
    </div>
    
</template>

<script>
import '../../../js/echarts.min.js';
var echarts = require("echarts");

export default {
   mounted(){
       this.drawLine();
   },
   methods:{
       drawLine(){
        var myChart=echarts.init(document.getElementById('myChart'));
        var option = {
            color: ['#ff1'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['A景区', 'B景区', 'C景区', 'D景区', 'E景区', 'F景区'],
            colo:'#fff',
            axisTick: {
                alignWithLabel: true
            },
             axisLabel:{
                textStyle:{
                    color:'#fff'
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel:{
                textStyle:{
                    color:'#fff'
                }
            }
        }
    ],
    
    series: [
        {
            name: '客流量',
            type: 'bar',
            barWidth: '50%',
            data: [2200, 3000, 3500, 2000, 2100, 1100],
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
        },
        
    ]
        }
        myChart.setOption(option);

       }
   },
}
</script>
<style lang="less" scoped>
.box{
    width: 530px;
    height: 100px;
    margin-top: -120px;
    >p{
        position: relative;
        left:   30px;
        top:    40px;
    }
}
</style>