
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
<<<<<<< HEAD
})

// 获取用户信息
export const getUserInfo = () => request({
  url: '/user'
=======
>>>>>>> ab3c3c799e5895f326ff0451f8c4d318b24693fa
})
