<template>
  <div class="menu">
    <el-menu
      class="el-menu"
      mode="vertical"
      background-color="#5284e7"
      text-color="#ffffff"
      active-text-color="#ffffff"
      popper-class="poper"
      :default-active="route.fullPath"
      :collapse="collapse"
    >
      <Menu :routes="sideMenuRoutes" />
    </el-menu>
    <div
      class="expand-menu iconfont"
      :class="collapse ? 'icon-expand' : 'icon-collaspe'"
      @click="collapse = !collapse"
    ></div>
  </div>
</template>

<script setup>
  import { useAsyncRoute } from '@/store/modules/menu'
  import { Menu } from './components'
  import { useRoute } from 'vue-router'
  const collapse = ref(false)
  const route = useRoute()
  const asyncRoute = useAsyncRoute()
  const sideMenuRoutes = asyncRoute.generateSideMenu()
</script>
<style scoped lang="scss">
  .menu {
    height: 100%;
    background: #5284e7;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .el-menu {
    border-right: none;
  }
  .el-menu:not(.el-menu--collapse) {
    width: 200px;
  }
  .collspe-menu {
    text-align: center;
    margin-bottom: 20px;
  }
  .expand-menu {
    font-size: 24px;
    color: #ffffff;
    margin-left: 20px;
    margin-bottom: 20px;
  }
  .poper {
    background-color: red;
  }
</style>
