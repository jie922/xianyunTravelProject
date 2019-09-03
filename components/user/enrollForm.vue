<template>
  <el-form class="form">

    <el-form-item class="form-item">
      <el-input placeholder="用户名手机"></el-input>
    </el-form-item>

    <el-form-item class="form-item">
      <el-input placeholder="验证码">
        <template>
          <el-button slot="append">发送验证码</el-button>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item class="form-item">
      <el-input placeholder="你的名字"></el-input>
    </el-form-item>

    <el-form-item class="form-item">
      <el-input placeholder="密码"></el-input>
    </el-form-item>

    <el-form-item class="form-item">
      <el-input placeholder="确认密码"></el-input>
    </el-form-item>
    <el-button type="primary" class="submit">注册</el-button>
  </el-form>
</template>

<script>
export default {};
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