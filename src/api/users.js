
import request from '@/utils/request'
import store from '@/store'
// 用户认证 获取用户信息
export const loginApi = (data) => request({
  url: '/authorizations',
  data,
  method: 'POST'
})

// 发送短信验证码
export const getSmsCode = (mobile) => request({
  url: `/sms/codes/${mobile}`
})

// 获取用户信息
export const getUserInfo = () => request({
  url: '/user',
  headers: {
    Authorization: 'Bearer ' + store.state.user.token
  }
})
