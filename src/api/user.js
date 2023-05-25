import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

export function mockGetUserInterestChanging(start_ts, end_ts, news_id) {
  console.log(news_id, start_ts, end_ts)
  return request({
    url: '/user/interest',
    method: 'get'
  })
}

export function mockGetUserIdRange() {
  return request({
    url: '/range/userid',
    method: 'get'
  })
}

export function mockGetUserRecommendation() {
  return request({
    url: '/websocket',
    method: 'get'
  })
}
