<template>
  <div id="keyuandi" style="display: flex; position: relative">
    <div>
      <table class="table">
        <tr>
          <th colspan="3" style="text-align: left; padding-left: 20px">
            本月省客流来源
          </th>
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
          <td>12345人</td>
        </tr>
        <tr>
          <td>5</td>
          <td>山东省</td>
          <td>12345人</td>
        </tr>
        <tr>
          <td>6</td>
          <td>山东省</td>
          <td>12345人</td>
        </tr>
        <tr>
          <td>7</td>
          <td>山东省</td>
          <td>12345人</td>
        </tr>
        <tr>
          <td>8</td>
          <td>山东省</td>
          <td>12345人</td>
        </tr>
      </table>
    </div>
    <div style="width: 450px; position: relative; top: 20px; left: -30px">
      <el-row style="position: absolute; left: 230px">
        <el-button size="medium">省客流量</el-button>
        <el-button size="medium">市客流量</el-button>
      </el-row>
      <ditu style="margin-top: 30px"></ditu>
    </div>
  </div>
</template>

<script>
import ditu from "../children/ditu";
export default {
  components: {
    ditu,
  },
};
</script>

<style lang="less" scoped>
.table {
  color: #fff;
  text-align: center;
  border-collapse: collapse;
  width: 240px;
  height: 294px;
  margin: 30px 0 0 70px;
  > tr {
    opacity: 0.8;
    > th {
      background-color: rgba(101, 255, 251, 0.6);
      border-radius: 5px 5px 0 0;
    }
    > td {
      font-size: 13px;
      background-color: rgba(0, 0, 0, 0.3);
    }
    :first-child {
      padding-left: 12px;
    }
  }
}
.el-button {
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  border: 1px solid #4eb7fc;
}
</style>
