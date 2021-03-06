import request from '@/utils/request'

export function addMatch(temp) {
  return request({
    url: '/api/addMatchMes',
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: temp
  })
}

export function deleteMatch(id) {
  return request({
    url: '/api/deleteMatchMes',
    method: 'post',
    params: {
      mid: id
    }
  })
}

export function updateMatch(temp) {
  return request({
    url: '/api/updateMatchMes',
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: temp
  })
}

// 检索
export function getMatchtableList(data) {
  return request({
    url: '/api/getMatchMesByString',
    method: 'post',
    params: {
      pageNum: data.page,
      pageSize: data.limit,
      name: data.name,
      project: data.project,
      type: data.type,
      poster: data.poster
    }
  })
}

// 获得协会名称
export function getClubName() {
  return request({
    url: '/api/getClubName',
    method: 'post'
  })
}

// 修改上线状态
export function ShowMatch(data) {
  return request({
    url: '/api/isShowMatchMes',
    method: 'post',
    params: {
      mid: data.mid,
      onTime: data.onTime
    }
  })
}

// 是否归档
export function isSortMatch(data) {
  return request({
    url: '/api/isSortMatch',
    method: 'post',
    params: {
      mid: data.mid.toString(),
      isSort: data.isSort.toString()
    }
  })
}

// 是否为作品赛
export function isProjectMatch(data) {
  return request({
    url: '/api/isProjectMatch',
    method: 'post',
    params: {
      mid: data.mid,
      isProject: data.isProject
    }
  })
}

// 是否为课程赛
export function isCourseMatch(data) {
  return request({
    url: '/api/isCourseMatch',
    method: 'post',
    params: {
      mid: data.mid,
      isCourse: data.isCourse
    }
  })
}
