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
        <nuxt-link to="/">消息</nuxt-link>
        <nuxt-link to="/user/login">登录/注册</nuxt-link>
      </el-row>
    </el-row>
  </header>
</template>

<script>
export default {};
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
      &:hover{
        color:#03d5fa;
        border-bottom: 5px #03d5fa solid;
      }
    }
    .nuxt-link-exact-active{
      color:#fff;
      background-color:#1423f7;
      
    }
  }
  .register{
    a {
      color: #000;
      margin: 0 5px; 
      &:hover{
        color:#03d5fa;
        border-bottom: 5px #03d5fa solid;
      }
    }
  }
}
</style>