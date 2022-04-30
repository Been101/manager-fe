/*
 * @Author: laibin.zheng
 * @Date: 2022-04-18 11:55:38
 * @LastEditTime: 2022-04-22 18:43:08
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
  server: {
    port: 9876,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
