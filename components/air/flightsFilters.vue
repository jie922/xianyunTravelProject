<template>
  <div class="filters">
    <el-row type="flex" class="filters-top" justify="space-between" align="middle">
      <el-col :span="8">
        单程：
        广州 - 上海
        /
        2019-06-17
      </el-col>

      <el-col :span="4">
        <el-select size="mini" v-model="airport" placeholder="起飞机场">
          <el-option value="白云机场" label="白云机场"></el-option>
        </el-select>
      </el-col>

      <el-col :span="4">
        <el-select size="mini" v-model="takeoffTime" placeholder="起飞时间">
          <el-option value="1" label="00:00-06:00"></el-option>
        </el-select>
      </el-col>

      <el-col :span="4">
        <el-select size="mini" v-model="airline" placeholder="航空公司">
          <el-option></el-option>
        </el-select>
      </el-col>

      <el-col :span="4">
        <el-select size="mini" v-model="airSize" placeholder="机型">
          <el-option></el-option>
        </el-select>
      </el-col>
    </el-row>
    <div class="filter-cancel">
      筛选：
      <el-button type="primary" round plain size="mini" @click="handleFiltersCancel">撤销</el-button>
    </div>
  </div>
</template>

<script>
export default {
  daata() {
    return {
      airport: "", //机场
      takeoffTime: "", //起飞时间
      airline: "", //航空公司
      airSize: "" //机型大小
    };
  }
};
</script>

<style scoped lang="less">
.filters {
  margin-bottom: 20px;
}

.filters-top {
  > div {
    /deep/ .el-select {
      margin-left: 10px;
    }
  }
}

.filter-cancel {
  margin-top: 10px;
}
</style>