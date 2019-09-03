<template>
  <div class="container">
    <el-row type="flex" class="main" align="middle" justify="center">
      <div class="form-wrapper">
        <!-- 登录/注册tab栏 -->
        <el-row type="flex" class="tabs">
          <span v-for="(item,index) in ['登录','注册']" :key="index" 
          :class='{active:index===tabIndex}' @click='loginTabs(index)'>{{item}}</span>
        </el-row>

        <!-- 登录功能组件 -->
        <loginForm v-if='tabIndex===0'/>
        <!-- 注册功能组件 -->
        <enrollForm v-if='tabIndex===1'/>

      </div>
    </el-row>
  </div>
</template>

<script>
// 引入功能组件
import loginForm from '@/components/user/loginForm.vue'
import enrollForm from '@/components/user/enrollForm'
export default {
  data(){
    return {
      tabIndex:0

    }
  },
  // 注册组件
  components:{
    loginForm,
    enrollForm
  },
  methods: {
    loginTabs(index){
      this.tabIndex=index
    }
  },
};
</script>

<style lang="less" scoped>
.container {
  background: url(http://157.122.54.189:9095/assets/images/th03.jfif) center 0;
  height: 700px;
  min-width: 1000px;

  .main {
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    position: relative;

    .form-wrapper {
      width: 400px;
      margin: 0 auto;
      background: #fff;
      box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
      overflow: hidden;

      .tabs {
        span {
          display: block;
          width: 50%;
          height: 50px;
          box-sizing: border-box;
          border-top: 2px #eee solid;
          background: #eee;
          line-height: 48px;
          text-align: center;
          cursor: pointer;
          color: #666;

          &.active {
            color: orange;
            border-top-color: orange;
            background: #fff;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>