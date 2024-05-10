<template>
  <div class="process">
    <el-form
      :inline="true"
      :model="config"
    >
      <el-form-item label="流程名称:">
        <el-input
          v-model="config.flowName"
          placeholder="流程名称"
          clearable
        />
      </el-form-item>
      <el-form-item label="优先级:">
        <el-input
          v-model="config.flowPriority"
          placeholder="优先级"
          clearable
        />
      </el-form-item>
      <el-form-item label="类型:">
        <el-select
          v-model="config.type"
          placeholder="类型"
        >
          <el-option
            v-for="item in typeOptions"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="作用范围:">
        <el-input
          v-model="config.conditions"
          placeholder="作用范围"
          clearable
        />
      </el-form-item>
    </el-form>
    <div class="title">流程设计:</div>
    <FlowMap
      v-model:nodes="nodeList"
      @selectNode="getNode"
      :flowMapH="flowMapH"
    />
  </div>
</template>

<script setup>
  import { ElForm } from 'element-plus'
  import { FlowMap } from '@/components'

  // 需要传入渲染的节点
  const nodeList = ref([
    {
      id: '1',
      type: 'rect',
      x: 200,
      y: 100,
      text: '节点1'
    },
    {
      id: '2',
      type: 'circle',
      x: 300,
      y: 200,
      text: '节点2'
    }
  ])
  // 获取选中节点
  function getNode(e) {
    console.log(e, '获取节点')
  }
  const config = ref({})
  const typeOptions = ref([
    {
      label: "责任状审批流程",
      value: "method review",
    },
    {
      label: "绩效考评流程",
      value: "method exam",
    },
    {
      label: "360评价审批流程",
      value: "method360 review",
    },
  ])
  const flowMapH = 500;
</script>
<style scoped lang="scss">
  .process {
    height: 100%;
    padding: 20px 26px 20px 20px;
    background-color: #fff;
  }
  :deep(.el-form .el-form-item) {
    width: calc(25% - 32px);
    .el-form-item__label {
      color: #000;
    }
  }
  .title {
    font-size: 14px;
    margin-bottom: 10px;
  }
  .flowmap {
    border: 1px solid #d3d3d3;
  }
</style>
