/*
 * @Author: laibin.zheng
 * @Date: 2022-04-22 11:19:41
 * @LastEditTime: 2022-04-22 15:47:16
 * @LastEditors: laibin.zheng
 * @Description: 
 * @FilePath: \manger-fe\src\utils\request.js
 * 
 */

import axios from 'axios'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
const router = useRouter()
import config from '@/config/index'


const TOKEN_INVALID = 'Token Invalid'
const NETWORK_ERROR = 'Network Error'
const serve = axios.create({
  baseURL: config.baseApi,
  timeout: 8000
})

// 请求拦截

serve.interceptors.request.use((req) => {
  const headers = req.headers
  if(!headers.Authorization) {
    headers.Authorization = 'Bear Bean'
  }
  return req
})

serve.interceptors.response.use((res) => {
  const { code, data, msg} = res.data
  if(code === 200) {
    return data
  }else if(code === 40001) {
    setTimeout(() => {
      router.push('/login')
    }, 1500)
    ElMessage.error(TOKEN_INVALID)
    return Promise.reject(TOKEN_INVALID)
  }else {
    const errorMsg = msg || NETWORK_ERROR
    ElMessage.error(errorMsg)
    return Promise.reject(errorMsg)
  }
})

export default function request(options) {
  if (config.env === 'prod') {
    serve.defaults.baseURL = config.baseApi
  } else {
    serve.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
  }
  return serve(options)
}