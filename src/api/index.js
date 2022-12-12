import { request } from "./request";

export function getList(data) {
  return request({
    url: '/graphql',
    method: "post",
    data
  })
}

export function uploadImage(data) {
  return request({
    url: '/pc/admin/upload',
    method: "post",
    data,
    contentType: 'multipart/form-data'
  })
}

