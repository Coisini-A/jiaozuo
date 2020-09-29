<template>
  <el-table
    :data="tableData"
    border
    style="width: 515px"
    height="195"
    :row-style="{ height: '35px' }"
    :header-cell-style="headClass"
    :cell-style="rowClass"
    
  >
    <el-table-column fixed prop="areaName" label="区县" width="80">
    </el-table-column>
    <el-table-column prop="venue" label="场馆" width="90"> </el-table-column>
    <el-table-column prop="activityName" label="活动" width="140"> </el-table-column>
    <el-table-column prop="count" label="订票数" width="82">
    </el-table-column>
    <el-table-column prop="time" label="时间" width="120"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        // {
          // county: "",
          // venve: "",
          // shaky: "",
          // tickets: "",
          // time: "",
          // },
        // },
      ],
    };
  },
  methods: {
    headClass() {
      return "text-align: center;background:rgba(22,48,128,1);color:#65E1FB;font-size:16px;opacity: .8;padding:1;";
    },
    rowClass() {
      return "text-align: center;font-size:14px;padding:0;backgroundColor:transparent;";
    },

    list() {
      this.$axios
        .get(
          "http://39.99.161.137:8080/public/PeopleSupermarket/getAll.html",
          {
            params: {
             id:"1"
            },
          }
        )
        .then((result) => {
          // console.log(result.data);
          // if(result.data.code==10000){
            this.tableData = result.data.data;
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
    this.list();
  },
};
</script>
<style lang="less" scoped>
.el-scrollbar__wrap {
  overflow-x: hidden;
}
 

</style>