
import request from '@/utils/request'

// 用户认证 获取用户信息
export const loginApi = (data) => request({
  url: '/app/v1_0/authorizations',
  data,
  methods: 'POST'
})
