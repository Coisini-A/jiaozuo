<template>
  <div class="jindu">
    <div>
      <el-progress
        type="circle"
        :percentage="12"
        :width="50"
        color="#65E1FB"
      ></el-progress>
      <p>0-15岁</p>
    </div>
    <div>
      <el-progress
        type="circle"
        :percentage="12"
        :width="50"
        color="#65E1FB"
      ></el-progress>
      <p>16-25岁</p>
    </div>
    <div>
      <el-progress
        type="circle"
        :percentage="12"
        :width="50"
        color="#65E1FB"
      ></el-progress>
      <p>26-35岁</p>
    </div>
    <div>
      <el-progress
        type="circle"
        :percentage="12"
        :width="50"
        color="#65E1FB"
      ></el-progress>
      <p>36-45岁</p>
    </div>
    <div>
      <el-progress
        type="circle"
        :percentage="12"
        :width="50"
        color="#65E1FB"
      ></el-progress>
      <p>46-55岁</p>
    </div>
    <div>
      <el-progress
        type="circle"
        :percentage="12"
        :width="50"
        color="#65E1FB"
      ></el-progress>
      <p>55岁以上</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.jindu {
  display: flex;
  position: absolute;
  width: 90%;
  top: 235px;
  left: 40px;
  opacity: 0.8;
  div {
    flex: 1;
    p {
      // text-align: center;
      font-size: 16px;
      font-family: PingFang SC Regular, PingFang SC Regular-Regular;
      font-weight: 400;
      color: #f6feff;
      margin: 10px 0 0 -5px;
    }
  }
}
</style>
