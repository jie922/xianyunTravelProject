<template>
  <header class="header">
    <el-row type="flex" justify="space-between" class="main">
      <div class="logo">
        <!-- logo -->
        <nuxt-link to="/">
          <img src="@/images/logo.jpg" alt />
        </nuxt-link>
      </div>
      <!-- 菜单栏 -->
      <el-row type="flex" class="navs">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post/post_index">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel/hotel_index">酒店</nuxt-link>
        <nuxt-link to="/air/air_index">国内机票</nuxt-link>
      </el-row>
      <!-- 用户登录注册 -->
      <el-row type="flex" class="register">
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-bell el-icon--left icong"></i>消息<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>消息</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <div v-if="!$store.state.user.userInfo.token">
          <nuxt-link to="/user/login">登录/注册</nuxt-link>
        </div>
        <!-- 登录跳转 -->
        <div v-else class="imageName">
          <!-- 头像，昵称 -->
          
          <el-dropdown>
            <span class="el-dropdown-link">
              <img :src="`${$axios.defaults.baseURL}${$store.state.user.userInfo.user.defaultAvatar}`" />
              {{$store.state.user.userInfo.user.nickname}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item @click.native="Exit">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-row>
    </el-row>
  </header>
</template>

<script>
export default {
  // mounted() {
  //   console.log(this.$store);
  // }
  
  methods:{
    // 退出
    Exit(){
      this.$store.commit('user/deleteUserInfo');
      this.$message({
        type:'success',
        message:'退出成功'
      })
    }
    
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  line-height: 60px;
  .main {
    width: 1000px;
    margin: 0 auto;
  }
  .logo {
    width: 156px;
    padding-top: 8px;
    img {
      display: block;
      width: 100%;
    }
  }
  .navs {
    flex: 1;
    a {
      color: #000;
      padding: 0 20px;
      &:hover {
        color: #03d5fa;
        border-bottom: 5px #03d5fa solid;
      }
    }
    .nuxt-link-exact-active {
      color: #fff;
      background-color: #1423f7;
    }
  }
  .register {
    a {
      color: #000;
      margin: 0 5px;
      &:hover {
        color: #03d5fa;
        border-bottom: 5px #03d5fa solid;
      }
    }
    .icong{
      font-size:20px;
    }
    .imageName {
      img {
        width: 36px;
        height: 36px;
        vertical-align: middle;
        border-radius: 50%;
        border:2px #fff solid;
        box-sizing: border-box;
        &:hover{
          border:2px #03f2fa solid;
        }
      }
    }
  }
}
</style>