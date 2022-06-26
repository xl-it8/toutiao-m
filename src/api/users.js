
import request from '@/utils/request'

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
