import request from '@/utils/request'

// 获取 用户频道接口
export const getMyChannels = () => request({
  url: 'user/channels'
})

// 获取文章列表
export const getArticles = (params) => request({
  url: 'articles',
  params
})

// 获取所有频道列表
export const getAllArticles = () => request({
  url: 'channels'
})

// 数据持有化
export const saveData = (channels) => request({
  url: 'user/channels',
  method: 'PUT',
  data: {
    channels
  }
})
