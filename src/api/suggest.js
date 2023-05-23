import request from '@/utils/request'

export function mockGetSuggestNews() {
  return request({
    url: '/suggest/news',
    method: 'get'
  })
}
