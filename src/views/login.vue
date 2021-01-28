<template>
  <div class="loginContain">
    <div class="loginBox">
      <h2 class="loginH2">未来科技城商城</h2>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item prop="userName">
          <el-input
            type="text"
            v-model="ruleForm.userName"
            autocomplete="off"
            placeholder="用户名"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
            placeholder="密码"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    return {
      ruleForm: {
        pass: '',
        userName: '',

      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ]

      }
    }
  },
  created() {
    let _this = this
    document.onkeydown = function () {
      let key = window.event.keyCode;
      if (key === 13 || key === 32) {
        _this.submitForm();
      }
    }
  },
  methods: {
    submitForm() {

      this.$refs.ruleForm.validate((valid) => {
        if (valid) {

          this.$store.commit("logo/longinToken", { token: "sssddf542f52gd65fdv15d" });
          this.$router.push('/Home');

        } else {
          console.log('error submit!!');
          this.$refs.ruleForm.model.userName = null
          this.$refs.ruleForm.model.pass = null
          return false;
        }
      });
    },

  },
  mounetd() {
    document.addEventListener('keydow', (e) => {
      console.log(e.keyCode)
    })
  }

}
</script>

<style lang="scss" scoped>
$inputHeight: 48px;
.loginContain {
  width: 100%;
  height: 100%;
  background-image: url("../assets/image/login1.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}

.loginBox {
  height: 445px;
  width: 550px;
  margin: 0 auto;
  position: relative;
  top: 25%;
}

.loginH2 {
  color: white;
  font-size: 28px;
  text-align: center;
}
.el-input {
  background-color: transparent;
  border-radius: 20px;
  height: $inputHeight;
  color: #ffff !important;
  border: rgba(255, 255, 255, 0.2) 2px solid !important;
}
::v-deep .el-input__inner {
  padding-left: 30px;
  background-color: transparent !important;
  border: none !important;
  height: $inputHeight !important;
  color: #ffff !important;
}
</style>