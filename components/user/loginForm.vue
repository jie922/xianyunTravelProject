<template>
  <el-form :model="form" class="form" :rules="rules" ref="form">
    <!-- 用户名输入框 -->
    <el-form-item class="form-item" prop="username">
      <el-input placeholder="用户名/手机"></el-input>
    </el-form-item>

    <!-- 密码输入框 -->
    <el-form-item class="form-item" prop="password">
      <el-input placeholder="密码"></el-input>
    </el-form-item>

    <P class="form-text">
      <nuxt-link to="#">忘记密码</nuxt-link>
    </P>

    <el-button type="primary" class="submit" @click="handleLogin">登录</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      // 表单数据
      form: {
        username: "", //用户名
        password: "" //密码
      },
      // 表单验证数据
      rules:{
        username:[
          {required:true,message:'请输入用户名',trigger:'blur'}
        ],
        password:[
          {required:true,message:'请输入密码',trigger:'blur'}
        ]
      }

    };
  },
  methods:{
    handleLogin(){
      console.log(this.form)
    }
  }
};
</script>

<style lang="less" scoped>
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>