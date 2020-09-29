<template>
    <div class="block">
        <!-- <span class="demonstration">默认</span> -->
        <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="——"
        start-placeholder="2020-03-03"
        end-placeholder="2020-03-04">
        </el-date-picker>
    </div>
</template>
<script>
export default {
    
}
</script>