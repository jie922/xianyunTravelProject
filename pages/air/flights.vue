<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <FlightsFilters :data='flightsData'/>

        <!-- 航班头部布局 -->
        <FlightsListHead />

        <!-- 航班信息 -->
        <div>
          <FlightsItem v-for="(item,index) in dataList" :key="index" :data="item" />
        </div>
        <div>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageIndex"
            :page-sizes="[5,10,15,20]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
      </div>
    </el-row>
  </section>
</template>

<script>
import moment from "moment";
import FlightsListHead from "@/components/air/flightsListHead.vue";
import FlightsItem from "@/components/air/flightsItem.vue";
import FlightsFilters from "@/components/air/flightsFilters.vue"
export default {
  data() {
    return {
      flightsData:{
        flights:[],
        info:{},
        options:{}
      },
      // 机票列表返回的总数据
      // flightsData: {},
      //当前显示的列表数组
      dataList:[],

      pageSize:5,//当前的条数
      pageIndex:1,//当前的页码
      total:0  //总条数

    };
  },
  mounted() {
    // 请求航班列表数据
    this.$axios({
      url: "airs",
      // 5个参数
      params: this.$route.query
    }).then(res => {
      console.log(res);
      // 赋值给总数据
      this.flightsData = res.data;
    //   当前列表数据
      this.dataList=this.flightsData.flights
    //   分页的总条数
    this.total=this.dataList.length
    // 第一页的数值
    this.dataList=this.flightsData.flights.slice(0,this.pageSize)
    });
  },
  methods:{
    //   每页条数切换时触发，val条数
    handleSizeChange(val){
        this.pageSize=val;
        // 切换列表显示的数据条数
        this.dataList=this.flightsData.flights.slice(0,val)
    },
    
    // 页码数切换时触发，vale点击的页码
    handleCurrentChange(vale){
        this.pageIndex=vale;
        this.dataList=this.flightsData.flights.slice(
            (this.pageIndex-1)*this.pageSize,
            this.pageIndex*this.pageSize
        )
    }
  },
  // 注册组件
  components: {
    FlightsListHead,
    FlightsItem,
    FlightsFilters
  }
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>