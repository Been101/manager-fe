/*
 * @Author: laibin.zheng
 * @Date: 2022-04-18 19:57:37
 * @LastEditTime: 2022-04-22 11:17:37
 * @LastEditors: laibin.zheng
 * @Description: 
 * @FilePath: \manger-fe\src\config\index.js
 * 
 */
const env = import.meta.env.MODE || 'prod'
export default {
  env: 'dev',
  mock: true,
  baseApi: 'http://127.0.0.1:4523/mock/893668'
}
