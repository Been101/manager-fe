import request from "../utils/request"

/*
 * @Author: laibin.zheng
 * @Date: 2022-04-22 13:50:20
 * @LastEditTime: 2022-04-22 14:36:11
 * @LastEditors: laibin.zheng
 * @Description: 
 * @FilePath: \manger-fe\src\api\login.js
 * 
 */
export function login(data) {
  return request({
    method: 'post',
    url: '/login',
    data,
  })
}