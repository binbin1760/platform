<template>
  <div class="pageination">
    <div class="total">共{{ pages.total }}条</div>
    <el-pagination
      class="el-pagination"
      v-model:current-page="pages.page"
      :total="pages.total"
      :page-size="pages.pageSize"
      layout="prev, pager, next"
      @prev-click="preClick"
      @next-click="nextClick"
      @current-change="currentChange"
      @size-change="pageSizeChange"
    >
      <template #>
        <div>跳转至</div>
      </template>
    </el-pagination>
    <el-select
      class="page-size-select"
      v-model="seletVal"
      size="small"
      style="width: 77px"
      @change="pageSizeChange"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <div class="jump">
      <div>跳转</div>
      <div class="jump-input">
        <el-input
          v-model="jumpPage"
          size="small"
          style="width: 37px"
          @blur="toJumpPage"
        />
      </div>
      <div>页</div>
    </div>
  </div>
</template>

<script setup>
  const seletVal = ref(5)
  const options = ref([
    {
      value: 5,
      label: '5条/页'
    },
    {
      value: 10,
      label: '10条/页'
    },
    {
      value: 15,
      label: '15条/页'
    },
    {
      value: 20,
      label: '20条/页'
    }
  ])
  const jumpPage = ref()
  const pages = defineModel({ type: Object }) // total pagesize page
  const emit = defineEmits(['change', 'sizeChange'])
  function toJumpPage() {
    emit('change', jumpPage.value)
  }
  function preClick(value) {
    emit('change', value)
  }
  function nextClick(value) {
    emit('change', value)
  }
  function currentChange(value) {
    emit('change', value)
  }
  function pageSizeChange(value) {
    emit('sizeChange', value)
  }
</script>
<style scoped lang="scss">
  .pageination {
    display: flex;
    align-items: center;
    color: #666666;
    font-size: 12px;
  }
  .total {
    margin-right: 13px;
  }
  .el-pagination:deep(.el-pager li.is-active) {
    --el-pagination-button-width: 24px;
    height: 24px;
    padding: 0;
    color: #5284e7;
    border: 1px solid #5284e7;
    background-color: white;
    font-weight: 400;
  }
  .page-size-select {
    font-size: 12px;
  }
  .jump {
    display: flex;
    align-items: center;
    margin-left: 4px;
  }
  .jump-input {
    margin: 0 4px;
  }
</style>
