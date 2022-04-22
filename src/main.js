/*
 * @Author: laibin.zheng
 * @Date: 2022-04-18 11:55:38
 * @LastEditTime: 2022-04-18 18:34:27
 * @LastEditors: laibin.zheng
 * @Description: 
 * @FilePath: \manger-fe\src\main.js
 * 
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'

console.log(import.meta.env)

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.mount('#app')