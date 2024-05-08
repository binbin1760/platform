<template>
  <div @click="toHomePage">前往主页</div>
</template>

<script setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  function toHomePage() {
    router.push('/platform/home')
  }
</script>
<style scoped lang="scss"></style>
