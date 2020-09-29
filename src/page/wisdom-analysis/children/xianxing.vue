<template>
  <div class="xianxing">
    <div class="xianxiang_content">
      <div class="xianxing_item">
        <p>
          <span>云台山风景区</span>
          <span>3460人</span>
        </p>
        <div>
          <el-progress :percentage="90" :show-text="false" :stroke-width="16" color="#65E1FB"></el-progress>
        </div>
      </div>
      <div class="xianxing_item">
        <p>
          <span>博爱青天河风景区</span>
          <span>542人</span>
        </p>
        <div>
          <el-progress :percentage="40" :show-text="false" :stroke-width="16" color="#65E1FB"></el-progress>
        </div>
      </div>
      <div class="xianxing_item">
        <p>
          <span>温县陈家沟</span>
          <span>354人</span>
        </p>
        <div>
          <el-progress :percentage="35" :show-text="false" :stroke-width="16" color="#65E1FB"></el-progress>
        </div>
      </div>
      <div class="xianxing_item">
        <p>
          <span>嘉应观</span>
          <span>1340人</span>
        </p>
        <div>
          <el-progress :percentage="50" :show-text="false" :stroke-width="16" color="#65E1FB"></el-progress>
        </div>
      </div>
      <div class="xianxing_item">
        <p>
          <span>神农山景区</span>
          <span>240人</span>
        </p>
        <div>
          <el-progress :percentage="25" :show-text="false" :stroke-width="16" color="#65E1FB"></el-progress>
        </div>
      </div>
      <div class="xianxing_item">
        <p>
          <span>静影寺</span>
          <span>3460人</span>
        </p>
        <div>
          <el-progress :percentage="90" :show-text="false" :stroke-width="16" color="#65E1FB"></el-progress>
        </div>
      </div>
      <div class="xianxing_item">
        <p>
          <span>嘉应观</span>
          <span>1340人</span>
        </p>
        <div>
          <el-progress :percentage="75" :show-text="false" :stroke-width="16" color="#65E1FB"></el-progress>
        </div>
      </div>
      <div class="xianxing_item">
        <p>
          <span>神农山景区</span>
          <span>240人</span>
        </p>
        <div>
          <el-progress :percentage="50" :show-text="false" :stroke-width="16" color="#65E1FB"></el-progress>
        </div>
      </div>
      <div class="xianxing_item">
        <p>
          <span>静影寺</span>
          <span>3460人</span>
        </p>
        <div>
          <el-progress :percentage="20" :show-text="false" :stroke-width="16" color="#65E1FB"></el-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.xianxing {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  .xianxiang_content {
    margin-top: 18px;
  }
  .xianxing_item {
    width: 430px;
    padding: 3px 0;
    p {
      font-size: 16px;
      font-family: PingFang SC Regular, PingFang SC Regular-Regular;
      font-weight: 400;
      :last-child {
        position: absolute;
        right: 50px;
      }
    }
    div {
      opacity: 0.8;
    }
  }
}
</style>
