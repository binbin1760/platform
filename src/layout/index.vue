<template>
  <el-container class="layout">
    <el-header class="header">
      <Header />
    </el-header>
    <el-container class="contain">
      <side-menu />
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup></script>
<style scoped lang="scss">
  .layout {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .header {
    padding: 0 30px 0 20px;
    height: 53px;
    line-height: 53px;
  }
  .contain {
    flex: 1;
    display: flex;
  }
  .main {
    padding: 12px 0 0 12px;
    background: #f2f2f2;
    height: 100%;
  }
  .el-main {
    --el-main-padding: 12px;
  }
</style>
