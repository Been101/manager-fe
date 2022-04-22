<!--
 * @Author: laibin.zheng
 * @Date: 2022-04-22 16:01:55
 * @LastEditTime: 2022-04-22 16:21:18
 * @LastEditors: laibin.zheng
 * @Description: 
 * @FilePath: \manger-fe\src\components\Layout\Layout.vue
 * 
-->
<template>
  <div class='basic-layout'>
    <div class="nav-side"></div>
    <div class="content-right">
      <div class="nav-top"></div>
      <div class="wrapper">
        <div class="wrapper-main">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup >
</script>
<style lang = 'scss' scoped>
.basic-layout {
  position: relative;
  .nav-side {
    position: fixed;
    width: 200px;
    height: 100vh;
    background-color: #001529;
    color: #fff;
    overflow-y: auto;
    transition: width 0.5s;
  }
  .content-right {
    display: flex;
    flex-direction: column;
    margin-left: 200px;
    height: 100vh;

    .nav-top {
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ddd;
      padding: 0 20px;
    }
    .wrapper {
      background: #eef0f3;
      padding: 20px;
      flex: 1;
      .wrapper-main {
        height: 100%;
        background-color: #fff;
      }
    }
  }
}
</style>