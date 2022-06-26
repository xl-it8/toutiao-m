<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar title="登录" />
    <!-- /导航栏 -->

    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field name="用户名" placeholder="请输入手机号" v-model="user.mobile">
        <i slot="left-icon" class="toutiao toutiao-shouji"></i>
      </van-field>
      <van-field
        type="password"
        name="验证码"
        placeholder="请输入验证码"
        v-model="user.code"
      >
        <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
        <template #button>
          <van-button class="send-sms-btn" round size="small" type="default"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <!-- /登录表单 -->
  </div>
</template>

<script>
// import { loginApi } from '@/api/users'
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data() {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() {

  },
  methods: {
    onSubmit() {
      // const res = await loginApi(this.user)
      // console.log(res)
    }
  }
}
</script>
<style scoped lang="less">
.login-container {
  .toutiao {
    font-size: 20px;
  }
  .send-sms-btn {
    width: 80px;
    height: 23px;
    line-height: 11px;
    background-color: #ededed;
    font-size: 11px;
    color: #666;
  }
  .login-btn-wrap {
    position: relative;
    padding: 53px 33px;
    .login-btn {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 347px;
      height: 44px;
      background-color: #6db4fb;
      border: none;
    }
  }
}
</style>
