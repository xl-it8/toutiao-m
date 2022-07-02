import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.locale('zh-cn')
dayjs.extend(relativeTime)
export default {
  install(Vue) {
    const obj = {
      dateFormat(time) {
        return dayjs(time).fromNow()
      }
    }
    // 添加过滤器
    Object.keys(obj).forEach(key => Vue.filter(key, obj[key]))
    // console.log(11)
  }

}
