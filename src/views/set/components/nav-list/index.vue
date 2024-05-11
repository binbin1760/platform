<template>
  <div class="nav-list">
    <div
      :class="seletctedPath === item.path ? ' actived' : 'active'"
      v-for="(item, index) in navlist"
      @click="getSelectedItem(item, index)"
    >
      {{ item.nav }}
    </div>
  </div>
</template>

<script setup>
  const router = useRouter()
  const route = useRoute()
  const seletctedPath = computed(() => {
    return route.fullPath
  })
  const navlist = ref([
    {
      nav: '企业信息',
      path: '/setting/company'
    },
    {
      nav: '权限管理',
      path: '/setting/permission'
    },
    {
      nav: '功能设置',
      path: '/setting/function'
    },
    {
      nav: '管理设置',
      path: '/setting/admin'
    }
  ])
  function getSelectedItem(item) {
    router.push(item.path)
  }
</script>
<style scoped lang="scss">
  .nav-list {
    display: flex;
    align-items: baseline;
    gap: 36px;
    padding: 0 22px;
    padding-top: 20px;
    padding-bottom: 16px;
    background-color: white;
    color: #333333;
    font-size: 12px;
  }
  .active {
    cursor: pointer;
    padding: 0 6px;
    padding-bottom: 10px;
  }
  .actived {
    cursor: pointer;
    padding: 0 6px;
    padding-bottom: 10px;
    border-bottom: 2px solid #5185e6;
  }
</style>
