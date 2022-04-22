/*
 * @Author: laibin.zheng
 * @Date: 2022-04-18 11:55:38
 * @LastEditTime: 2022-04-18 19:56:01
 * @LastEditors: laibin.zheng
 * @Description: 
 * @FilePath: \manger-fe\vite.config.js
 * 
 */
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
