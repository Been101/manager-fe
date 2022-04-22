<!--
 * @Author: laibin.zheng
 * @Date: 2022-04-18 18:26:44
 * @LastEditTime: 2022-04-22 14:24:55
 * @LastEditors: laibin.zheng
 * @Description: 
 * @FilePath: \manger-fe\src\views\Login\Login.vue
 * 
-->
<template>
  <div>
    <el-button @click="handleLogin">Login</el-button>
  </div>
</template>
<script>
import { login } from '@/api/login'
</script>
<script setup >
function handleLogin() {
  const data = { name: '', password: 123 }
  login(data).then(res => {
    console.log(res);
  })
}
</script>
<style lang = 'scss' scoped>
</style>