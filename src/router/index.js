/*
 * @Author: laibin.zheng
 * @Date: 2022-04-18 18:00:25
 * @LastEditTime: 2022-04-22 09:50:09
 * @LastEditors: laibin.zheng
 * @Description: 
 * @FilePath: \manger-fe\src\router\index.js
 * 
 */
import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Login from '@/views/Login/Login.vue'
import NotFound from '@/views/NotFound/index.vue'
const routes = [
  { path: '/', component:  Home}, //() => import('@/views/Home/Home') },
  { path: '/login', component:  Login}, //() => import('@/views/Home/Home') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }// () => import('@/views/NotFound/index')  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

export default router