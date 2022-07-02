export const getItem = (key) => {
  const res = window.localStorage.getItem(key)
  try {
    // 解析的对象必须是双引号的 如"['a']" 这样会报错 不符合规范
    // 要这样 [
    // "esnext",
    //   "dom",
    //   "dom.iterable",
    //   "scripthost"
    // // ]
    return JSON.parse(res)
  } catch (e) {
    return res
  }
}

// 保存数据
export const setItem = (key, data) => {
  if (typeof data === 'object') {
    window.localStorage.setItem(key, JSON.stringify(data))
  } else {
    // 基本数据类型会帮忙转为字符串格式
    window.localStorage.setItem(key, data)
  }
}

export const deleteItem = (key) => window.localStorage.removeItem(key)

export const clearItem = () => window.localStorage.clearItem()
