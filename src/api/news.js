import request from '@/utils/request'

export function mockGetSingleNewsFashion(start_ts, end_ts, news_id) {
  console.log(news_id, start_ts, end_ts)
  return request({
    url: '/news/fashion',
    method: 'get'
  })
}

export function mockGetCategoryNewsChanging(start_ts, end_ts, categorys) {
  console.log(categorys, start_ts, end_ts)
  return request({
    url: '/news/category',
    method: 'get'
  })
}

export function mockGetAllCategoryList() {
  return request({
    url: '/category',
    method: 'get'
  })
}

export function mockGetConprehensiveInfo(start_ts, end_ts, news_id, category, min_headline_length, max_headline_length, min_content_length, max_content_length) {
  console.log(start_ts, end_ts, news_id, category, min_headline_length, max_headline_length, min_content_length, max_content_length)
  return request({
    url: '/comprehensive',
    method: 'get'
  })
}

export function mockGetNewsHeadlineAndContentRange() {
  return request({
    url: '/range/length',
    method: 'get'
  })
}

export function mockGetNewsContent(news_id) {
  console.log(news_id)
  return request({
    url: '/news/content',
    method: 'get'
  })
}
