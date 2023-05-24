import request from '@/utils/request'

export function mockGetSingleNewsFashion(start_ts, end_ts, news_id) {
  console.log(news_id, start_ts, end_ts)
  return request({
    url: '/news/fashion',
    method: 'get'
  })
}

export function mockGetCategoryNewsChanging(start_ts, end_ts, category) {
  console.log(category, start_ts, end_ts)
  return request({
    url: '/news/category',
    method: 'get'
  })
}
