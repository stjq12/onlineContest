import request from '@/utils/request'

export function getClubs() {
  return request({
    url: '/api/getClubName',
    method: 'post'
  })
}

export function getRoles() {
  return request({
    url: '/api/getRoles',
    method: 'post'
  })
}

export function getAdministrators(list) {
  return request({
    url: '/api/getGserMesByString',
    method: 'post',
    params: {
      pageNum: list.page,
      pageSize: list.limit
    }
  })
}

export function addAdministrators(temp) {
  return request({
    url: '/api/AddGser',
    method: 'post',
    params: {
      realname: temp.realname,
      username: temp.username,
      password: temp.password,
      roleId: temp.roles,
      cid: temp.cid
    }
  })
}

export function deleteAdministrators(gid) {
  return request({
    url: '/api/DeleteGser',
    method: 'post',
    params: {
      gid: gid
    }
  })
}

export function updateAdministrators(temp) {
  return request({
    url: '/api/EditGser',
    method: 'post',
    params: {
      gid: temp.gid,
      realname: temp.realname,
      username: temp.username,
      password: temp.password,
      roleId: temp.roles,
      cid: temp.cid
    }
  })
}

// 检索
export function search(data) {
  return request({
    url: '/api/getGserMesByString',
    method: 'post',
    params: {
      pageNum: data.pageNum,
      pageSize: data.pageSize,
      realname: data.realname,
      username: data.username
    }
  })
}
