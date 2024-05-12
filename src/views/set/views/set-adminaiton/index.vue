<template>
  <div class="nav-list">
    <NavList />
  </div>
  <div>管理设置</div>
</template>

<script setup>
  import { NavList } from '../../components'
</script>
<style scoped lang="scss">
  .nav-list {
    padding: 0 22px;
    padding-top: 20px;
    padding-bottom: 16px;
    background-color: white;
    color: #333333;
    font-size: 12px;
  }
</style>
