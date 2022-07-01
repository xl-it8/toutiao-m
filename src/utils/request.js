import axios from 'axios'
import store from '@/store'
// 方便复用 低耦合
const instance = axios.create({
  baseURL: 'http://toutiao.itheima.net/v1_0', // 基础路径
  timeout: 5000
})
// 请求拦截器
// 添加请求拦截器
// 名字要注意instance
// 统一发送 方便 不需要每个请求接口都要加一些内容 公共部分提取到请求拦截器中
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (store.state.user?.token) {
    config.headers = {
      Authorization: 'Bearer ' + store.state.user.token
    }
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
