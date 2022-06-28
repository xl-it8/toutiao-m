<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar title="登录" left-arrow @click-left="$router.go(-1)"/>
    <!-- /导航栏 -->

    <!-- 登录表单 -->
    <van-form @submit="onSubmit" ref="form">
      <van-field
        name="mobile"
        placeholder="请输入手机号"
        v-model="user.mobile"
        :rules="[{}, { validator: validator1, message: '请输入正确手机号' }]"
      >
        <i slot="left-icon" class="toutiao toutiao-shouji"></i>
      </van-field>
      <van-field
        type="number"
        name="code"
        placeholder="请输入验证码"
        v-model="user.code"
        :rules="[{ validator, message: '请输入正确验证码' }]"
      >
        <!-- <i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
         -->
        <MyIcon name="yanzhengma" slot="left-icon"></MyIcon>
        <template #button>
          <van-count-down
            :time="time"
            format="ss s"
            v-if="isCountDown"
            @finish="isCountDown = false"
          />
          <van-button
            v-else
            class="send-sms-btn"
            round
            size="small"
            type="default"
            @click="submitSms"
            native-type="button"
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
import { loginApi, getSmsCode } from '@/api/users'
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data() {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      },
      time: 5 * 1000,
      isCountDown: false
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() {
  },
  methods: {
    validator1(val) {
      return /^1[3|5|7|8]\d{9}$/.test(val)
    },
    validator(val) {
      return /^\d{6}$/.test(val)
    },
    async onSubmit() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      try {
        const res = await loginApi(this.user)
        this.$store.commit('saveUser', res.data.data)
        // window.localStorage.setItem('refresh_token', res.data.data.refresh_token)
        // console.log(res)
        this.$toast.success('登陆成功')
        this.$router.push({ name: 'home' })
      } catch (e) {
        // console.log(e)
        this.$toast.fail('登陆失败')
      }
    },
    async submitSms() {
      try {
        await this.$refs.form.validate('mobile')
        this.isCountDown = true
        try {
          await getSmsCode(this.user.mobile)
          this.$toast.fail('发送成功')
        } catch (e) {
          this.$toast.fail('发送失败')
        }
      } catch (e) {
        this.$toast.fail('校验失败')
      }
      // const res = await getSmsCode(this.user.mobile)
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
  .van-count-down {
    position: fixed;
    right: 18px;
    margin-top: -10px;
  }
  .send-sms-btn {
    position: fixed;
    right: 10px;
    margin-top: -10px;
  }
}
</style>
