<template>
  <el-container>
    <el-header>{{ title }}</el-header>
    <el-main>
      <div class="login-wrap">
        <div class="login-img"></div>
        <div class="login-panel">
          <h3 style="color: teal;">超级管理员登录页面</h3>
          <div class="corner-ewm"></div>
          <el-tabs
            v-model="defaultLoginMethod"
            @tab-click="handleTabClick"
            type="card"
          >
            <el-tab-pane label="密码登录" name="passwordLogin">
              <el-form
                ref="passwordLoginForm"
                :model="passwordLoginForm"
                :rules="passwordLoginFormRules"
                status-icon
              >
                <el-form-item prop="account">
                  <el-input
                    size="medium"
                    prefix-icon="el-icon-user"
                    v-model="passwordLoginForm.account"
                    placeholder="请输入账号"
                  />
                </el-form-item>
                <el-form-item prop="password">
                  <el-input
                    size="medium"
                    prefix-icon="el-icon-key"
                    show-password
                    v-model="passwordLoginForm.password"
                    placeholder="请输入密码"
                  />
                </el-form-item>
                <el-form-item style="margin-bottom: 0;">
                  <el-col :span="13">
                    <el-input
                      size="medium"
                      prefix-icon="iconfont font-safe2"
                      v-model="passwordLoginForm.verifyCode"
                      placeholder="请输入验证码"
                    />
                  </el-col>
                  <el-col :span="10" :push="1">
                    <el-input
                      size="medium"
                      v-model="passwordLoginForm.codeImage"
                      placeholder="验证图片"
                    />
                  </el-col>
                </el-form-item>
                <el-form-item>
                  <el-checkbox label="下次自动登录"></el-checkbox>
                </el-form-item>
                <el-form-item style="margin-bottom: 0;">
                  <el-button
                    type="primary"
                    size="medium"
                    round
                    @click="submitForm('passwordLoginForm')"
                    style="width: 100%"
                  >
                    登 录
                  </el-button>
                </el-form-item>
                <el-form-item>
                  <el-col class="text-right" :span="11">
                    <el-link :underline="false" type="primary"
                      >立即注册</el-link
                    >
                  </el-col>
                  <el-col class="text-center" :span="2">
                    <el-link :underline="false" type="primary">|</el-link>
                  </el-col>
                  <el-col :span="11">
                    <el-link :underline="false" type="primary"
                      >忘记密码？</el-link
                    >
                  </el-col>
                </el-form-item>
              </el-form>
            </el-tab-pane>

            <el-tab-pane label="短信登录" name="msgLogin">
              <el-form>
                <el-form-item>
                  <el-input placeholder="手机号" size="medium">
                    <el-select
                      v-model="phonePrefix"
                      slot="prepend"
                      placeholder="请选择"
                    >
                      <el-option label="+86 中国大陆" value="1"></el-option>
                      <el-option label="+852 中国香港" value="2"></el-option>
                      <el-option label="+853 中国澳门" value="3"></el-option>
                      <el-option label="+86" value="1"></el-option>
                    </el-select>
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-input placeholder="请输入验证码" size="medium">
                    <el-button slot="append">获取验证码</el-button>
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-button
                    type="primary"
                    size="medium"
                    round
                    @click="submitForm('loginForm')"
                    style="width: 100%"
                  >
                    登 录
                  </el-button>
                </el-form-item>
                <el-form-item class="text-right">
                  <el-link :underline="false" type="primary">立即注册</el-link>
                </el-form-item>
              </el-form>
            </el-tab-pane>

            <el-tab-pane label="第三方登录" name="thirdLogin">
              <el-form>
                <el-form-item class="text-center">第三方账号登录</el-form-item>
                <el-form-item class="text-center">
                  <el-avatar
                    class="login-qq"
                    icon="iconfont font-qq1"
                    :size="40"
                  ></el-avatar>
                  <el-avatar class="login-wx" icon="iconfont font-wx" :size="40"
                    >WX</el-avatar
                  >
                  <el-avatar
                    class="login-github"
                    icon="iconfont font-github"
                    :size="40"
                    >Github</el-avatar
                  >
                </el-form-item>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </el-main>
    <el-footer>{{ footer }}</el-footer>
  </el-container>
</template>

<script>
const Apis = {
  passwordLogin: '/api/user/login'
};
export default {
  data() {
    const validateAccount = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请输入账号'));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请输入密码'));
      } else {
        const len = value.length;
        if (len >= 6 && len < 13) {
          return callback();
        } else {
          callback(new Error('请输入6~12位密码'));
        }
      }
    };
    return {
      title: '代码改变世界',
      footer:
        '有志者事竟成，破釜沉舟，百二秦关终属楚；苦心人天不负，卧薪尝胆，三千越甲可吞吴。',
      defaultLoginMethod: 'passwordLogin',
      passwordLoginForm: {
        account: '',
        password: '',
        verifyCode: '',
        codeImage: ''
      },
      passwordLoginFormRules: {
        account: [{ validator: validateAccount, trigger: 'blur' }],
        password: [{ validator: validatePassword, trigger: 'blur' }]
      },
      phonePrefix: '1',
      Apis
    };
  },
  methods: {
    handleTabClick(tab, event) {
      console.log(tab, event);
    },
    passwordLogin(data) {
      this.$axios.post(this.Apis.passwordLogin, data).then(res => {
        console.log('登录成功: ', res);
        this.loginSuccess();
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let params = {
            account: this.passwordLoginForm.account,
            password: this.passwordLoginForm.password
          };
          this.passwordLogin(params);
        }
      });
    },
    loginSuccess() {
      this.$router.push('/blogs');
      this.$message({
        message: '欢迎回来！',
        type: 'success'
      });
    }
  } // the end of methods
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
  // background: radial-gradient(ellipse at center, #2d9b95 0%, #0e1329 100%);
  background-image: url('~@/assets/images/bg/wallhaven-2eqpzm.png');
  background-repeat: no-repeat;
  background-size: cover;

  .el-header {
    line-height: 60px;
    color: purple;
    font-family: cursive;
    font-size: x-large;
  }
  .login-wrap {
    position: absolute;
    display: flex;
    width: 788px;
    height: 432px;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
    // background: linear-gradient(45deg, #9a444e, #e06267);
    background: #fff;
    border-radius: 6px 0 6px 6px;
    .login-img {
      width: 55%;
      background-image: url('~@/assets/images/kobe/kobe15.jpg');
      background-repeat: no-repeat;
      background-size: 100%;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    .login-panel {
      position: relative;
      width: 45%;
      padding: 0 18px;
      ::v-deep .el-tabs__nav {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .el-tabs__item {
          width: 33.33%;
        }
      }
      ::v-deep .el-input-group__prepend {
        background-color: #fff;
        .el-select {
          width: 86px;
        }
      }
      .login-qq,
      .login-wx,
      .login-github {
        ::v-deep .iconfont {
          font-size: 23px;
        }
      }
      .login-qq {
        &:hover {
          background-color: rgb(27, 193, 250);
          cursor: pointer;
        }
      }
      .login-wx {
        margin: 0 25px;
        &:hover {
          background-color: rgb(70, 187, 54);
          cursor: pointer;
        }
      }
      .login-github {
        &:hover {
          background-color: rgb(125, 48, 145);
          cursor: pointer;
        }
      }
    }
  }
  .el-footer {
    line-height: 60px;
    color: darkgray;
    text-align: center;
  }
}
</style>

<style lang="scss" scoped>
.corner-ewm {
  position: absolute;
  right: 0;
  top: 0;
  width: 52px;
  height: 52px;
  background-image: url('~@/assets/images/login/ewm-hd.png');
  background-repeat: no-repeat;
  background-size: contain;
  &:hover {
    cursor: pointer;
    background-image: url('~@/assets/images/login/ewm-hh.png');
  }
}
</style>
