<template>
  <div class="filters">
    <el-row type="flex" class="filters-top" justify="space-between" align="middle">
      <el-col :span="8">
        单程：
        {{data.info.departCity}} - {{data.info.destCity}}
        /
        {{data.info.departDate}}
      </el-col>

      <el-col :span="4">
        <el-select size="mini" v-model="airport" placeholder="起飞机场" @change="handleAirport">
          <el-option
            v-for="(item,index) in data.options.airport"
            :key="index"
            :value="item"
            :label="item"
          ></el-option>
        </el-select>
      </el-col>

      <el-col :span="4">
        <el-select size="mini" v-model="takeofTime" placeholder="起飞时间" @change="handleFlightTimes">
          <el-option
            v-for="(item,index) in data.options.flightTimes"
            :key="index"
            :value="`${item.from},${item.to}`"
            :label="`${item.from}:00 - ${item.to}:00`"
          ></el-option>
        </el-select>
      </el-col>

      <el-col :span="4">
        <el-select size="mini" v-model="airline" placeholder="航空公司" @change="handleCompany">
          <el-option
            v-for="(item,index) in data.options.company"
            :key="index"
            :value="item"
            :label="item"
          ></el-option>
        </el-select>
      </el-col>

      <el-col :span="4">
        <el-select size="mini" v-model="airSize" placeholder="机型" @change="handleAirSize">
          <el-option
            v-for="(item,index) in sizeOptions"
            :key="index"
            :value="item.size"
            :label="item.name"
          ></el-option>
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
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      airport: "", //机场
      takeofTime: "", //起飞时间
      airline: "", //航空公司
      airSize: "", //机型大小
      //   机型类型
      sizeOptions: [
        { name: "大", size: "L" },
        { name: "中", size: "M" },
        { name: "小", size: "S" }
      ]
    };
  },
  methods: {
    //   选择机场时触发
    handleAirport(value) {
      // 过滤，只保留选中的数据
      const arr = this.data.flights.filter(v => {
        return v.org_airport_name === value;
      });
      this.$emit("setDataList", arr);
    },

    // 选择起飞时间时触发
    handleFlightTimes(value) {
      // console.log(value)
      // 解构赋值
      const [from, to] = value.split(",");
      // 过滤，只保留选中的数据
      //  出发时间
      const arr = this.data.flights.filter(v => {
        const current = +v.dep_time.split(":")[0]; //"+"将字符串转为数据
        return from <= current && current < to;
      });
      this.$emit("setDataList", arr);
    },

    // 选择航空公司是触发
    handleCompany(value) {
      // 过滤，只保留选中的数据
      const arr = this.data.flights.filter(v => {
        return v.airline_name === value;
      });
      //  console.log(arr)
      this.$emit("setDataList", arr);
    },
    //  选择机型大小时触发
    handleAirSize(value) {
      // 过滤，只保留选中的数据
      const arr = this.data.flights.filter(v => {
        return v.plane_size === value;
      });
      //  console.log(arr)
      this.$emit("setDataList", arr);
    },
    // 撤销条件是触发
    handleFiltersCancel() {
      this.airport = ""; //机场
      this.takeofTime = ""; //起飞时间
      this.airline = ""; //航空公司
      this.airSize = ""; //机型大小
      this.$emit("setDataList", this.data.flights); //传回原先数据
    }
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