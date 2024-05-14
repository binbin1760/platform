<template>
  <div class="ifrem">
    <div class="title">{{ props.title }}</div>
    <slot>内容</slot>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true
    }
  })
</script>
<style scoped lang="scss">
  .title {
    font-size: 13px;
    color: #333333;
    font-weight: 400;
    padding: 12px 0;
    border-bottom: 1px solid #e9e9e9;
    margin-bottom: 12px;
  }
</style>
