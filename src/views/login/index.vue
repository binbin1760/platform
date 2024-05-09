<template>
  <!-- <div @click="toHomePage">前往主页</div> -->
  <div class="login">
    <div class="loginBox">
      <div class="loginRegisterTitle">
        <img
          src="@/assets/images/logo.png"
          alt="奇绩云"
        />
      </div>
      <div class="loginV1">
        <div class="tab">
          <div class="current">账号登录</div>
        </div>
        <div class="bottomBox">
          <el-form
          :model="ruleForm"
          :rules="rules"
        >
          <el-form-item
            label=""
            prop="account"
          >
            <el-input
              v-model="ruleForm.account"
              style="width: 100%"
              :prefix-icon="User"
              autocomplete="off"
              placeholder="手机号"
            />
          </el-form-item>
          <el-form-item
            label=""
            prop="pass"
          >
            <el-input
              v-model="ruleForm.pass"
              type="password"
              style="width: 100%"
              :prefix-icon="Lock"
              autocomplete="off"
              placeholder="密码（8-16位，区分大小写）"
            />
          </el-form-item>
        </el-form>
        <div class="othersBox">
          <el-checkbox
            v-model="autoLogin"
            size="small"
          >下次自动登录</el-checkbox>
          <div class="forget">忘记密码?</div>
        </div>
        <el-button id="loginBtn" @click="toHomePage">立即登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  import { ElForm, ElCheckbox, ElButton } from 'element-plus'
  import {User, Lock} from '@element-plus/icons-vue'
  const router = useRouter()
  function toHomePage() {
    router.push('/platform/home')
  }
  const ruleForm = ref({}); // 表单数据
  const rules = ref({}); // 校验
  const autoLogin = ref(null); // 下次自动登录
  // const
</script>
<style scoped lang="scss">
  * {
    color: #fff;
  }
  .login {
    height: 100%;
    width: 100%;
    background-image: url('@/assets/images/loginBg.jpg');
    background-size: 100%;
  }
  .loginBox {
    width: 480px;
    height: 478px;
    position: absolute;
    top: 45%;
    left: 50%;
    margin-left: -226px;
    margin-top: -208px;
  }
  .loginRegisterTitle {
    text-align: center;
    line-height: 70px;
    margin-bottom: 20px;
    width: 100%;
  }
  .loginRegisterTitle img {
    width: 200px;
    display: inline-block;
  }
  .loginV1 {
    border: solid 1px rgba(237, 128, 28, 0.1);
    background-color: rgba(255, 255, 255, 0.05);
  }
  .tab {
    height: 47px;
    margin-bottom: 30px;
    line-height: 47px;
    font-size: 14px;
  }
  .tab .current {
    color: #ed801c;
    border-bottom: 3px solid #ed801c;
    width: 100%;
    text-align: center;
    line-height: 43px;
    cursor: pointer;
  }
  .bottomBox {
    padding: 0 50px;
  }
  .el-form-item {
    display: flex;
    font-size: 14px;
    margin-bottom: 18px;
  }
  :deep(.el-form) {
    .el-form-item__content {
      width: 100%;
    }
    .el-input__wrapper {
      background-color: transparent;
      box-shadow: 0 0 0 0 var(--el-input-border-color,var(--el-border-color)) inset;
      border-bottom: 1px solid #7A92AC;
      border-radius: 0;
    }
    input {
      color: #fff;
    }
  }
  :deep(.othersBox) {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    .el-checkbox__original {
      background-color: transparent;
    }
  }
  :deep(.el-button) {
    background-color: rgb(237,128,28);
    width: 100%;
    height: 36px;
    line-height: 36px;
  }
  :deep(#loginBtn) {
    margin: 30px 0;
    border: none;
    border-radius: 3px;
    &:hover {
      color: #fff;
    }
  }
  :deep(.el-checkbox__input) {
    background-color: transparent;
    .el-checkbox__inner {
      background-color: transparent;
      /* border: 1px solid rgb(187,195,206); */
      border-radius: 50%;
    }
  }
  .forget {
    color: #A4AEBF;
  }
</style>
