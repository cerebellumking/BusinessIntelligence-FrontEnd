import request from '@/utils/request'

export function mockGetNewsFashion(start_ts, end_ts, news_id) {
  console.log(news_id, start_ts, end_ts)
  return request({
    url: '/news/fashion',
    method: 'get'
  })
}
