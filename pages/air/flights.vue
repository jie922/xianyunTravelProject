<template>
<section class="contianer">
        <el-row  type="flex" justify="space-between">

            <!-- 顶部过滤列表 -->
            <div class="flights-content">
                <!-- 过滤条件 -->
                <div>
                    
                </div>
                
                <!-- 航班头部布局 -->
             <FlightsListHead/>
                
                
                <!-- 航班信息 -->
                <div>
                   <FlightsItem v-for="(item,index) in flightsData.flights"
                    :key='index' :data="item"/>
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
import moment from 'moment'
import FlightsListHead from '@/components/air/flightsListHead.vue'
import FlightsItem from '@/components/air/flightsItem.vue'
export default {
    data(){
        return {
            // 机票列表返回的总数据
            flightsData:{},
            // dataList:[]
        }
    },
    mounted(){
        // 请求航班列表数据
        this.$axios({
            url:"airs",
            // 5个参数
            params:this.$route.query
        }).then(res=>{
            console.log(res)
            // 赋值给总数据
            this.flightsData=res.data
            // 分页所需数据
            // this.dataList=res.flightsData.flights
        })
    },
    // 注册组件
    components:{
        FlightsListHead,
        FlightsItem
    }
}
</script>

<style scoped lang="less">
    .contianer{
        width:1000px;
        margin:20px auto;
    }

    .flights-content{
        width:745px;
        font-size:14px;
    }

    .aside{
        width:240px;
    } 
</style>