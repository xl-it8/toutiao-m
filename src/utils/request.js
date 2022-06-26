import axios from 'axios'
// 方便复用 低耦合
export default axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 基础路径
})
