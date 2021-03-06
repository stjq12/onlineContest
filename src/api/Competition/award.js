import request from '@/utils/request'

export function getGLWorksMes(data) {
  return request({
    url: '/api/getGLWorksByString',
    method: 'post',
    params: {
      pageNum: data.page,
      pageSize: data.limit,
      match_name: data.match_name,
      match_project: data.match_project,
      work_name: data.work_name,
      type: data.type,
      teamname: data.teamname,
      author1_name: data.author1_name,
      teacher: data.teacher
    }
  })
}

// 获得未发奖金列表
export function getWorksNoRewardMes(data) {
  return request({
    url: '/api/getWorksNoRewardMesByString',
    method: 'post',
    params: {
      match_name: data.match_name,
      match_project: data.match_project,
      work_name: data.work_name,
      type: data.type,
      teamname: data.teamname,
      author1_name: data.author1_name,
      teacher: data.teacher,
      pageNum: data.page,
      pageSize: data.limit,
      prize_name: data.prize_name
    }
  })
}

// 获得已发奖金列表
export function getWorksRewardMes(data) {
  return request({
    url: '/api/getWorksRewardMesByString',
    method: 'post',
    params: {
      match_name: data.match_name,
      match_project: data.match_project,
      work_name: data.work_name,
      type: data.type,
      teamname: data.teamname,
      author1_name: data.author1_name,
      teacher: data.teacher,
      pageNum: data.page,
      pageSize: data.limit,
      prize_name: data.prize_name
    }
  })
}

export function toCXForMatch() {
  return request({
    url: '/api/toCXForMatch',
    method: 'post'
  })
}

export function toTuiHui(wid) {
  return request({
    url: '/api/toTuiHui',
    method: 'post',
    data: {
      wid: wid
    }
  })
}

// 获得决赛列表
export function getJSWorksMes(data) {
  return request({
    url: '/api/getJSWorksByString',
    method: 'post',
    params: {
      match_name: data.match_name,
      match_project: data.match_project,
      work_name: data.work_name,
      type: data.type,
      teamname: data.teamname,
      author1_name: data.author1_name,
      teacher: data.teacher,
      pageNum: data.page,
      pageSize: data.limit,
      prize_name: data.prize_name,
      normalization: data.normalization
    }
  })
}

// 获得奖项信息
export function getPrizeName(wid) {
  return request({
    url: '/api/getPrizeNameWithID',
    method: 'post',
    params: {
      wid: wid
    }
  })
}

// 颁发奖项信息
export function getReward(data) {
  return request({
    url: '/api/getReward',
    method: 'post',
    params: {
      wid: data.wid,
      reward: data.reward
    }
  })
}

// 修改奖项信息
export function updateCertificate(data) {
  return request({
    url: '/api/updateCertificate',
    method: 'post',
    params: {
      wid: data.wid,
      certificate: data.tempRadio[1],
      reward_date: data.reward_date
    }
  })
}

// 导出决赛列表excel
export function downloadJSWorksMes() {
  return request({
    url: '/api/downloadJSWorksMes',
    method: 'post'
  })
}

// 导出已发奖金列表excel
export function downloadRewardMes() {
  return request({
    url: '/api/downloadRewardMes',
    method: 'post'
  })
}
