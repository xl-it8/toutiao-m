import request from '@/utils/request'

export const getSearchList = (params) => request({
  url: 'suggestion',
  params
})

// 获取搜索结果
export const getSearchResult = (params) => request({
  url: 'search',
  params
})
