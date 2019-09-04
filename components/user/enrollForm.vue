<template>
  <el-form class="form">

    <el-form-item class="form-item">
      <el-input placeholder="用户名手机" v-model="form.username"></el-input>
    </el-form-item>

    <el-form-item class="form-item">
      <el-input placeholder="验证码" v-model="form.captcha">
        <template>
          <el-button slot="append">发送验证码</el-button>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item class="form-item">
      <el-input placeholder="你的名字" v-model="form.nickname"></el-input>
    </el-form-item>

    <el-form-item class="form-item">
      <el-input placeholder="密码" v-model="form.password"></el-input>
    </el-form-item>

    <el-form-item class="form-item">
      <el-input placeholder="确认密码" v-model="form.checkPassword"></el-input>
    </el-form-item>
    <el-button type="primary" class="submit">注册</el-button>
  </el-form>
</template>

<script>
export default {
  
  data(){
    return {
    // 表单数据绑定
      form:{
           username: "",   // 登录用户名/手机
            password: "" ,   // 登录密码
            checkPassword: "", // 确认密码
            nickname: "",	// 昵称
            captcha: ""		// 手机验证码
      }
    }
    
  }
};
</script>

<style lang='less' scoped>
.form {
  padding: 25px;
  .submit{
      width: 100%;
      margin-top:10px;
  }

}
</style>