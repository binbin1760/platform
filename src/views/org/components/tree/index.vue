<template>
  <el-tree
    :data="data"
    :props="defaultProps"
    @node-click="handleNodeClick"
  />
</template>
<script setup>
  import { ref, reactive } from 'vue'
  const props = defineProps(["data", "defaultProps"]);
  // watch(data, (newVal) => {
  //   console.log(newVal);
  // })
  function handleNodeClick() {}
</script>
<style lang="scss" scoped></style>
