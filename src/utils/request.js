import axios from 'axios'
// 方便复用 低耦合
export default axios.create({
  baseURL: 'http://toutiao.itheima.net/v1_0', // 基础路径
  timeout: 5000
})
