<template>
  <el-form class="form" :rules="rules" :model="form" ref="form">
    <el-form-item class="form-item" prop="username">
      <el-input placeholder="用户名手机" v-model="form.username"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="captcha">
      <el-input placeholder="验证码" v-model="form.captcha">
        <template>
          <el-button slot="append" @click='verificationCode'>发送验证码</el-button>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="nickname">
      <el-input placeholder="你的名字" v-model="form.nickname"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="password">
      <el-input placeholder="密码" v-model="form.password"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="checkPassword">
      <el-input placeholder="确认密码" v-model="form.checkPassword"></el-input>
    </el-form-item>
    <el-button type="primary" class="submit" @click="loginSubmit">注册</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      // 表单数据绑定
      form: {
        username: "", // 登录用户名/手机
        password: "", // 登录密码
        checkPassword: "", // 确认密码
        nickname: "", // 昵称
        captcha: "" // 手机验证码
      },
      // 表单规则
      rules: {
        username: [ {required: true, message: "请输入手机号码", trigger: "blur"} ],
        password:[ {required: true, message: "请输入密码", trigger:"blur"} ],
        checkPassword:[ {required:true, message:"请确认密码", trigger:"blur"} ],
        nickname:[ {required:true, message:"请输入昵称", trigger:"blur"} ],
        captcha:[ {required:true, message:"请输入手机验证码", trigger:"blur"} ],
      }
    };
  },
  methods: {
    // 发送验证码
    verificationCode(){
      if(!this.form.username){
        this.$message.error('手机号不能为空，请输入！')
        return
      }
      // if(!this.form.username.match(/^1[358]\d{9}$/)){
      //   this.$message.error('手机号格式错误，请重新输入！')
      //   return
      // }
      this.$axios({
        url:'/captchas',
        method:'POST',
        data:{
          tel:this.form.username
        }
      }).then(res=>{
          console.log(res)
          this.$message.success('验证码已发送到手机')
        })
    },
    // 注册
    loginSubmit(){
      this.$refs.form.validate(valide=>{
        // 去掉确认密码的数据
        const {checkPassword, ...rest}=this.form;
        if(valide){
          this.$axios({
            url:'/accounts/register',
            method:'POST',
            data: rest
          }).then(res=>{
            // 注册成功后自动登录
            this.$store.commit('user/setUserInfo',res.data)
          })
        }
      })

    }

  },
};
</script>

<style lang='less' scoped>
.form {
  padding: 25px;
  .submit {
    width: 100%;
    margin-top: 10px;
  }
}
</style>