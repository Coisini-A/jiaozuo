<template>
  <div>
    <template>
      <el-table
        :data="
          tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
        border
        background="transparent!important"
        style="width: 1696px"
        :cell-style="rowClass"
        :header-cell-style="headClass"
      >
        <el-table-column prop="xuhao" label="序号" width="100">
        </el-table-column>
        <el-table-column prop="chepai" label="车牌号" width="160">
        </el-table-column>
        <el-table-column prop="chexing" label="全部车型" width="145">
        </el-table-column>
        <el-table-column prop="biaozhun" label="收费标准" width="140">
        </el-table-column>
        <el-table-column prop="timed" label="停留时间" width="131">
        </el-table-column>
        <el-table-column prop="luming" label="出场道路名称" width="137">
        </el-table-column>
        <el-table-column prop="xingming" label="操作员姓名" width="119">
        </el-table-column>
        <el-table-column prop="rutu" label="入场图片" width="143">
        </el-table-column>
        <el-table-column prop="chutu" label="出场图片" width="148">
        </el-table-column>
        <el-table-column prop="rutime" label="入场时间" width="242">
        </el-table-column>
        <el-table-column prop="chutime" label="出场时间" width="231">
        </el-table-column>
        <el-table-column prop="leixing" label="免费类型" width="138">
        </el-table-column>
        <el-table-column prop="yingshou" label="应收金额" width="137">
        </el-table-column>
        <el-table-column prop="jianmian" label="减免金额" width="131">
        </el-table-column>
        <el-table-column prop="shishou" label="实收金额" width="137">
        </el-table-column>
        <el-table-column prop="xianshang" label="线上支付金额" width="127">
        </el-table-column>
        <el-table-column prop="hongbao" label="红包支付金额" width="137">
        </el-table-column>
        <el-table-column prop="fapiao" label="是否领取发票" width="130">
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>
        <div style="margin:0 auto">
            
            <el-pagination
            style="text-align:right;margin:20px 0;"
            background
            @size-change="handleSizeChange" 
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :total="1000">
            </el-pagination>
        </div>
    </div>
 
</template>
 
  <script>
export default {
  data() {
    return {
      tableData: [
        {
          xuhao: "1",
          chepai: "浙A 55628",
          chexing: "月租车",
          biaozhun: "1min/0.5元",
          timed: "126分钟",
          luming: "B277",
          xingming: "张二蛋",
          rutu: "",
          chutu: "",
          rutime: "2020-10-01  13:24:50",
          chutime: "2020-10-01  13:24:50",
          leixing: "军车",
          yingshou: "666",
          jianmian: "666",
          shishou: "666",
          xianshang: "666",
          hongbao: "666",
          fapiao: "否",
        },
        {
          xuhao: "2",
          chepai: "浙A 55628",
          chexing: "月租车",
          biaozhun: "1min/0.5元",
          timed: "126分钟",
          luming: "B277",
          xingming: "张二蛋",
          rutu: "",
          chutu: "",
          rutime: "2020-10-01  13:24:50",
          chutime: "2020-10-01  13:24:50",
          leixing: "否",
          yingshou: "666",
          jianmian: "666",
          shishou: "666",
          xianshang: "666",
          hongbao: "666",
          fapiao: "否",
        },
        {
          xuhao: "3",
          chepai: "浙A 55628",
          chexing: "月租车",
          biaozhun: "1min/0.5元",
          timed: "126分钟",
          luming: "B277",
          xingming: "张二蛋",
          rutu: "",
          chutu: "",
          rutime: "2020-10-01  13:24:50",
          chutime: "2020-10-01  13:24:50",
          leixing: "否",
          yingshou: "666",
          jianmian: "666",
          shishou: "666",
          xianshang: "666",
          hongbao: "666",
          fapiao: "否",
        },
        {
          xuhao: "4",
          chepai: "浙A 55628",
          chexing: "月租车",
          biaozhun: "1min/0.5元",
          timed: "126分钟",
          luming: "B277",
          xingming: "张二蛋",
          rutu: "",
          chutu: "",
          rutime: "2020-10-01  13:24:50",
          chutime: "2020-10-01  13:24:50",
          leixing: "否",
          yingshou: "666",
          jianmian: "666",
          shishou: "666",
          xianshang: "666",
          hongbao: "666",
          fapiao: "否",
        },
        {
          xuhao: "5",
          chepai: "浙A 55628",
          chexing: "月租车",
          biaozhun: "1min/0.5元",
          timed: "126分钟",
          luming: "B277",
          xingming: "张二蛋",
          rutu: "",
          chutu: "",
          rutime: "2020-10-01  13:24:50",
          chutime: "2020-10-01  13:24:50",
          leixing: "否",
          yingshou: "666",
          jianmian: "666",
          shishou: "666",
          xianshang: "666",
          hongbao: "666",
          fapiao: "否",
        },
        {
          xuhao: "6",
          chepai: "浙A 55628",
          chexing: "月租车",
          biaozhun: "1min/0.5元",
          timed: "126分钟",
          luming: "B277",
          xingming: "张二蛋",
          rutu: "",
          chutu: "",
          rutime: "2020-10-01  13:24:50",
          chutime: "2020-10-01  13:24:50",
          leixing: "否",
          yingshou: "666",
          jianmian: "666",
          shishou: "666",
          xianshang: "666",
          hongbao: "666",
          fapiao: "否",
        },
        {
          xuhao: "7",
          chepai: "浙A 55628",
          chexing: "月租车",
          biaozhun: "1min/0.5元",
          timed: "126分钟",
          luming: "B277",
          xingming: "张二蛋",
          rutu: "",
          chutu: "",
          rutime: "2020-10-01  13:24:50",
          chutime: "2020-10-01  13:24:50",
          leixing: "否",
          yingshou: "666",
          jianmian: "666",
          shishou: "666",
          xianshang: "666",
          hongbao: "666",
          fapiao: "否",
        },
        {
          xuhao: "8",
          chepai: "浙A 55628",
          chexing: "月租车",
          biaozhun: "1min/0.5元",
          timed: "126分钟",
          luming: "B277",
          xingming: "张二蛋",
          rutu: "",
          chutu: "",
          rutime: "2020-10-01  13:24:50",
          chutime: "2020-10-01  13:24:50",
          leixing: "否",
          yingshou: "666",
          jianmian: "666",
          shishou: "666",
          xianshang: "666",
          hongbao: "666",
          fapiao: "否",
        },
        {
          xuhao: "9",
          chepai: "浙A 55628",
          chexing: "月租车",
          biaozhun: "1min/0.5元",
          timed: "126分钟",
          luming: "B277",
          xingming: "张二蛋",
          rutu: "",
          chutu: "",
          rutime: "2020-10-01  13:24:50",
          chutime: "2020-10-01  13:24:50",
          leixing: "否",
          yingshou: "666",
          jianmian: "666",
          shishou: "666",
          xianshang: "666",
          hongbao: "666",
          fapiao: "否",
        },
        {
          xuhao: "10",
          chepai: "浙A 55628",
          chexing: "月租车",
          biaozhun: "1min/0.5元",
          timed: "126分钟",
          luming: "B277",
          xingming: "张二蛋",
          rutu: "",
          chutu: "",
          rutime: "2020-10-01  13:24:50",
          chutime: "2020-10-01  13:24:50",
          leixing: "否",
          yingshou: "666",
          jianmian: "666",
          shishou: "666",
          xianshang: "666",
          hongbao: "666",
          fapiao: "否",
        },
        {
          xuhao: "11",
          chepai: "浙A 55628",
          chexing: "月租车",
          biaozhun: "1min/0.5元",
          timed: "126分钟",
          luming: "B277",
          xingming: "张二蛋",
          rutu: "",
          chutu: "",
          rutime: "2020-10-01  13:24:50",
          chutime: "2020-10-01  13:24:50",
          leixing: "否",
          yingshou: "666",
          jianmian: "666",
          shishou: "666",
          xianshang: "666",
          hongbao: "666",
          fapiao: "否",
        },
        {
          xuhao: "12",
          chepai: "浙A 55628",
          chexing: "月租车",
          biaozhun: "1min/0.5元",
          timed: "126分钟",
          luming: "B277",
          xingming: "张二蛋",
          rutu: "",
          chutu: "",
          rutime: "2020-10-01  13:24:50",
          chutime: "2020-10-01  13:24:50",
          leixing: "否",
          yingshou: "666",
          jianmian: "666",
          shishou: "666",
          xianshang: "666",
          hongbao: "666",
          fapiao: "否",
        },
        {
          xuhao: "13",
          chepai: "浙A 55628",
          chexing: "月租车",
          biaozhun: "1min/0.5元",
          timed: "126分钟",
          luming: "B277",
          xingming: "张二蛋",
          rutu: "",
          chutu: "",
          rutime: "2020-10-01  13:24:50",
          chutime: "2020-10-01  13:24:50",
          leixing: "否",
          yingshou: "666",
          jianmian: "666",
          shishou: "666",
          xianshang: "666",
          hongbao: "666",
          fapiao: "否",
        },
        {
          xuhao: "14",
          chepai: "浙A 55628",
          chexing: "月租车",
          biaozhun: "1min/0.5元",
          timed: "126分钟",
          luming: "B277",
          xingming: "张二蛋",
          rutu: "",
          chutu: "",
          rutime: "2020-10-01  13:24:50",
          chutime: "2020-10-01  13:24:50",
          leixing: "否",
          yingshou: "666",
          jianmian: "666",
          shishou: "666",
          xianshang: "666",
          hongbao: "666",
          fapiao: "否",
        },
        {
          xuhao: "15",
          chepai: "浙A 55628",
          chexing: "月租车",
          biaozhun: "1min/0.5元",
          timed: "126分钟",
          luming: "B277",
          xingming: "张二蛋",
          rutu: "",
          chutu: "",
          rutime: "2020-10-01  13:24:50",
          chutime: "2020-10-01  13:24:50",
          leixing: "否",
          yingshou: "666",
          jianmian: "666",
          shishou: "666",
          xianshang: "666",
          hongbao: "666",
          fapiao: "否",
        },
        {
          xuhao: "16",
          chepai: "浙A 55628",
          chexing: "月租车",
          biaozhun: "1min/0.5元",
          timed: "126分钟",
          luming: "B277",
          xingming: "张二蛋",
          rutu: "",
          chutu: "",
          rutime: "2020-10-01  13:24:50",
          chutime: "2020-10-01  13:24:50",
          leixing: "否",
          yingshou: "666",
          jianmian: "666",
          shishou: "666",
          xianshang: "666",
          hongbao: "666",
          fapiao: "否",
        },
        {
          xuhao: "17",
          chepai: "浙A 55628",
          chexing: "月租车",
          biaozhun: "1min/0.5元",
          timed: "126分钟",
          luming: "B277",
          xingming: "张二蛋",
          rutu: "",
          chutu: "",
          rutime: "2020-10-01  13:24:50",
          chutime: "2020-10-01  13:24:50",
          leixing: "否",
          yingshou: "666",
          jianmian: "666",
          shishou: "666",
          xianshang: "666",
          hongbao: "666",
          fapiao: "否",
        },
        {
          xuhao: "18",
          chepai: "浙A 55628",
          chexing: "月租车",
          biaozhun: "1min/0.5元",
          timed: "126分钟",
          luming: "B277",
          xingming: "张二蛋",
          rutu: "",
          chutu: "",
          rutime: "2020-10-01  13:24:50",
          chutime: "2020-10-01  13:24:50",
          leixing: "否",
          yingshou: "666",
          jianmian: "666",
          shishou: "666",
          xianshang: "666",
          hongbao: "666",
          fapiao: "否",
        },
        {
          xuhao: "19",
          chepai: "浙A 55628",
          chexing: "月租车",
          biaozhun: "1min/0.5元",
          timed: "126分钟",
          luming: "B277",
          xingming: "张二蛋",
          rutu: "",
          chutu: "",
          rutime: "2020-10-01  13:24:50",
          chutime: "2020-10-01  13:24:50",
          leixing: "否",
          yingshou: "666",
          jianmian: "666",
          shishou: "666",
          xianshang: "666",
          hongbao: "666",
          fapiao: "否",
        },
        {
          xuhao: "20",
          chepai: "浙A 55628",
          chexing: "月租车",
          biaozhun: "1min/0.5元",
          timed: "126分钟",
          luming: "B277",
          xingming: "张二蛋",
          rutu: "",
          chutu: "",
          rutime: "2020-10-01  13:24:50",
          chutime: "2020-10-01  13:24:50",
          leixing: "否",
          yingshou: "666",
          jianmian: "666",
          shishou: "666",
          xianshang: "666",
          hongbao: "666",
          fapiao: "否",
        },
        {
          xuhao: "21",
          chepai: "浙A 55628",
          chexing: "月租车",
          biaozhun: "1min/0.5元",
          timed: "126分钟",
          luming: "B277",
          xingming: "张二蛋",
          rutu: "",
          chutu: "",
          rutime: "2020-10-01  13:24:50",
          chutime: "2020-10-01  13:24:50",
          leixing: "否",
          yingshou: "666",
          jianmian: "666",
          shishou: "666",
          xianshang: "666",
          hongbao: "666",
          fapiao: "否",
        },
      ],
      currentPage: 1, // 当前页码
      total: 100, // 总条数
      pageSize: 6, // 每页的数据条数
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    headClass() {
      return "text-align: center;background-color: transparent!important;color:#65E1FB;height:60px;";
    },
    rowClass() {
      return "text-align: center;background-color: transparent!important;color:red;height:60px;";
    },
  },
};
</script>