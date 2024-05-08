<template>
  <div class="menu">
    <div
      class="collspe-menu"
      @click="collapse = !collapse"
    >
      开关
    </div>
    <el-menu
      class="el-menu"
      mode="vertical"
      :default-active="route.fullPath"
      :collapse="collapse"
    >
      <Menu :routes="sideMenuRoutes" />
    </el-menu>
  </div>
</template>

<script setup>
  import { useAsyncRoute } from '@/store/modules/menu'
  import { Menu } from './components'
  import { useRoute } from 'vue-router'
  const collapse = ref(false)
  const route = useRoute()
  const { sideMenuRoutes } = storeToRefs(useAsyncRoute())
</script>
<style scoped lang="scss">
  .menu {
    background: #ffffff;
    height: 100vh;
  }
  .el-menu {
    border-right: none;
  }
  .el-menu:not(.el-menu--collapse) {
    width: 200px;
  }
</style>
