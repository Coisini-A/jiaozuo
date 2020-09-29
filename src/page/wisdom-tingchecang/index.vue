<template>
    <!-- <div>应急指挥平台</div> -->
    <div class="box">
        <!-- 头部 -->
        <div class="top">
            <div>
                <span><img src="./../../assets/img/wenlv/tianqi.png" alt="">晴</span>
                <span><img src="./../../assets/img/wenlv/wendu.png" alt="">温度：31&#8451;</span>
            </div>
            <div>
            <span><img src="./../../assets/img/wenlv/tubiao1.png" alt="">云台山停车场数据分析</span>
            </div>
        
            <div class="time">
                <div style="color:#fff;border:1px solid #65E1FB;border-radius:10px;padding: 3px 20px;height:30px;line-height:30px;opacity: 0.5;">月&nbsp;<span style="color:#328EFC;font-size:18px;">﹀</span></div>&nbsp;&nbsp;
                <div style="color:#fff;border:1px solid #65E1FB;border-radius:10px;padding: 3px 25px;height:30px;line-height:30px;opacity: 0.5;"><img src="./../../assets/img/wenlv/tingchechang/rili.png" alt="">&nbsp;&nbsp;2020-03</div>&nbsp;&nbsp;
            {{ nowDate }}
            </div>
        </div>
        <!-- 查询 -->
        <div style="color:#fff;display: flex;position: relative;top:100px;left:24px;font-size:20px;">
            <div style="display: flex;">
                <p style="position:relative;margin-top:-10px;top:15px;">选择日期：</p>
                <div class="block">
                    <el-date-picker
                    v-model="value1"
                    size="333px,444px"
                    type="daterange"
                    range-separator="——"
                    start-placeholder="2020-03-03"
                    end-placeholder="2020-03-04">
                    </el-date-picker>
                </div>
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>停车场编号：<span style="font-size:18px;border:1px solid #65E1FB;border-radius:10px;padding: 10px 20px;opacity: 0.5;">云台山停车场&nbsp;&nbsp;&nbsp;<span style="font-size:26px;">▾</span></span></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button style="background-color:#65E1FB;color:#ffffff;border:none;outline:none;width: 133px;height: 44px;border-radius: 10px;font-size:20px;">查询</button>
        </div>
        <!-- 统计数据 -->
        <div class="concer">
            <div style="display:flex;width:1879px;height:405px;margin:130px auto 0;justify-content: space-between;">
                <!-- 云台山停车场总停车位统计 -->
                <div style="width:528px;height:403px;border:1px solid #03C4DC;opacity: 0.5;position:relative;">
                    <div style="width:370px;margin:0 auto;"><div class="samllbox"></div><p class="tit" style="top:-15px;left:130px;">云台山停车场总停车位统计</p></div>
                    <div><chewei style="position:absolute;top:60px;"></chewei><p style="color:#00DEFF;font-size:18px;position:absolute;bottom:35px;left:100px;">总停车位</p></div>
                    <div><p style="color:#00DEFF;font-size:18px;position:absolute;bottom:35px;left:350px;">剩余车位</p></div>
                </div>
                <!-- 云台山停车场进出统计 -->
                <div style="width:780px;height:403px;border:1px solid #03C4DC;opacity: 0.5;position:relative;">
                    <div style="width:320px;margin:0 auto;"><div class="samllbox"></div><p class="tit" style="top:-15px;left:280px;opacity: 1;">云台山停车场进出统计</p></div>
                    <!-- <div style="margin-left:30px;text-align: center;width:300px;"> -->
                        <!-- <div style="color:#fff;">
                            <p>云台山停车场总车辆数</p>
                            <p>6666666</p>
                            <img src="./../../assets/img/wenlv/tingchechang/che.png" alt="">
                        </div>
                        <div></div> -->
                    <!-- </div> -->
                </div>
                <!-- 云台山停车场进出车辆时间段分析 -->
                <div style="width:528px;height:403px;border:1px solid #03C4DC;opacity: 0.5;position:relative;">
                    <div style="width:461px;margin:0 auto;"><div class="samllbox"></div><p class="tit" style="top:-15px;left:100px;">云台山停车场进出车辆时间段分析</p></div>
                    <div id="zhexian" :style="{width:'500px',height:'340px',position:'absolute',top:'60px',left:'15px'}"></div>
                </div>
            </div>
            <!-- 云台山停车场内车辆统计 -->
            <div style="width:1879px;margin: 20px auto 0;height: 589px;opacity: 0.5;background: rgba(0,0,0,0.3);border: 1px solid #03c4dc;position:relative;">
                <div style="width:461px;margin:0 auto;"><div class="samllbox"></div><p class="tit" style="top:-15px;left:820px;">云台山停车场内车辆统计</p></div>
                <fenye1 style="position:absolute;top:75px;left:100px;"></fenye1>
            </div>
            <!-- 云台山停车场月租车出场明细 -->
            <div style="width:1879px;margin: 20px auto 0;height: 589px;opacity: 0.5;background: rgba(0,0,0,0.3);border: 1px solid #03c4dc;position:relative;">
                <div style="width:461px;margin:0 auto;"><div class="samllbox"></div><p class="tit" style="top:-15px;left:800px;">云台山停车场月租车出场明细</p></div>
                <fenye1 style="position:absolute;top:75px;left:100px;"></fenye1>
            </div>
            <!-- 云台山停车场临时车出场明细 -->
            <div style="width:1879px;margin: 20px auto 0;height: 589px;opacity: 0.5;background: rgba(0,0,0,0.3);border: 1px solid #03c4dc;position:relative;">
                <div style="width:461px;margin:0 auto;"><div class="samllbox"></div><p class="tit" style="top:-15px;left:800px;">云台山停车场临时车出场明细</p></div>
                <fenye1 style="position:absolute;top:75px;left:100px;"></fenye1>
            </div>
        </div>
    </div>
</template>
<script>
let echarts = require('echarts/lib/echarts')
import  'echarts-liquidfill'
import fenye1 from '@/page/wisdom/component/fenyetb.vue'
import chewei from '@/page/wisdom/component/chewei.vue'
export default {
    name: "tingchechang",
    components:{
        fenye1,
        chewei
    },
    data(){
        return {
        nowDate: "", // 当前日期
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
        let weekArr = [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];
        let hour = date.getHours(); // 时
        hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
        let minute = date.getMinutes(); // 分
        minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
        let second = date.getSeconds(); // 秒
        second = second < 10 ? "0" + second : second; // 如果只有一位，则前面补零
        this.nowDate = `${hour}:${minute}:${second}    ${weekArr[week]}`;
        },

// 进出车辆时间段分析
        drawLine(){
            var chart = echarts.init(document.getElementById('zhexian'));
            let bgColor = "rgba(0,0,0,0)";
            let color = [
                "#0090FF",
                "#36CE9E",
                "#FFC005",
                "#FF515A",
                "#8B5CFF",
                "#00CA69"
            ];
            let echartData = [{
                    name: "03：00",
                    value1: 1400,
                    value2: 1250
                },
                {
                    name: "06：00",
                    value1: 2000,
                    value2: 2300
                },
                {
                    name: "09：00",
                    value1: 1300,
                    value2: 900
                },
                {
                    name: "12：00",
                    value1: 700,
                    value2: 2400
                },
                {
                    name: "15：00",
                    value1: 2300,
                    value2: 1400
                },
                {
                    name: "18：00",
                    value1: 600,
                    value2: 1700
                }
            ];

            let xAxisData = echartData.map(v => v.name);
            let yAxisData1 = echartData.map(v => v.value1);
            let yAxisData2 = echartData.map(v => v.value2);
            const hexToRgba = (hex, opacity) => {
                let rgbaColor = "";
                let reg = /^#[\da-f]{6}$/i;
                if (reg.test(hex)) {
                    rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
                "0x" + hex.slice(3, 5)
                )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
                }
                return rgbaColor;
            }
                        window.onresize = function (){
                            chart.resize();
                        };
                        chart.setOption({
                            backgroundColor: bgColor,
                color: color,
                legend: {
                    right: 10,
                    top: 10
                },
                tooltip: {
                    trigger: "axis",
                    formatter: function(params) {
                        let html = '';
                        params.forEach(v => {
                            console.log(v)
                            html += `<div style="color: #666;font-size: 14px;line-height: 24px">
                            <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;"></span>
                            ${v.seriesName}.${v.name}
                            <span style="color:${color[v.componentIndex]};font-weight:700;font-size: 18px">${v.value}</span>
                            辆`;
                        })



                        return html
                    },
                    extraCssText: 'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
                    axisPointer: {
                        type: 'shadow',
                        shadowStyle: {
                            color: '#ffffff',
                            shadowColor: 'rgba(225,225,225,1)',
                            shadowBlur: 5
                        }
                    }
                },
                xAxis: [{
                    type: "category",
                    boundaryGap: false,
                    axisLabel: {
                        formatter: '{value}',
                        textStyle: {
                            color: "#fff"
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#D9D9D9"
                        }
                    },
                    data: xAxisData
                }],
                yAxis: [{
                    type: "value",
                    name: '车辆/时间',
                    nameTextStyle: {
                        color: "#666",
                        fontSize: 12,
                        lineHeight: 40
                    },
                }],
                series: [{
                    name: "进车辆",
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
                                [{
                                        offset: 0,
                                        color: hexToRgba(color[0], 0.3)
                                    },
                                    {
                                        offset: 1,
                                        color: hexToRgba(color[0], 0.1)
                                    }
                                ],
                                false
                            ),
                            shadowColor: hexToRgba(color[0], 0.1),
                            shadowBlur: 10
                        }
                    },
                    data: yAxisData1
                }, {
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
                                [{
                                        offset: 0,
                                        color: hexToRgba(color[1], 0.3)
                                    },
                                    {
                                        offset: 1,
                                        color: hexToRgba(color[1], 0.1)
                                    }
                                ],
                                false
                            ),
                            shadowColor: hexToRgba(color[1], 0.1),
                            shadowBlur: 10
                        }
                    },
                    data: yAxisData2
                }]
                        })
                    }
                },
                mounted() {
                    this.currentTime();
                    this.drawLine();
                },
                // 销毁定时器
                beforeDestroy() {
                    if (this.formatDate) {
                    clearInterval(this.formatDate); // 在Vue实例销毁前，清除时间定时器
                    }
                }
            }
</script>
<style lang="less" scoped>
    .box{
        width: 1920px ;
        height: 2481px ; 
        margin: 0;
        padding: 0;
        background-image: url(./../../assets/img/wenlv/bj.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        
        -moz-background-size: 100% 100%;
    }
    .top{
        display: flex;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .top>div:nth-child(1){
        height: 24px;
        font-size: 24px;
        font-family: PingFang SC Medium, PingFang SC Medium-Medium;
        font-weight: 500;
        text-align: left;
        color: #f7feff;
        line-height: 30px;
        >span{
            display: inline-block;
            padding: 20px 0 36px 50px;
            >img{
                position: relative;
                padding-right: 20px;
                top: 7px; 
            }
        }
    }
    .top>div:nth-child(2){
        width: 500px;
        height: 50px;
        background-image: linear-gradient(top,#eff3f2,#73BABF);
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
        >span{
            display: inline-block;
            >img{
                position: relative;
                padding-right: 20px;
                top: 9px;
                
            }
        }
    }
    .time{
        color: #fff;
        position: relative;
        right: -540px;
        top: 35px;
        font-size: 24px;
        display: flex;
    }
    .samllbox{
        border-top:50px solid rgba(22,48,128,1);
        border-right:50px solid rgba(0,0,0,0);
        border-bottom:50px solid rgba(0,0,0,0);
        border-left:50px solid rgba(56, 51, 51, 0);
        
        
    }
    .tit{
        position:absolute;
        color:#65E1FB;
        font-size:22px;
    }    
</style>