<template>
  <div class="process">
    <el-form
      :inline="true"
      :model="config"
      class="processSet"
    >
      <el-form-item label="流程名称:">
        <el-input
          v-model="config.flowName"
          placeholder="流程名称"
        />
      </el-form-item>
      <el-form-item label="优先级:">
        <el-input
          v-model="config.flowPriority"
          placeholder="优先级"
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
        />
        <el-popover
          placement="bottom-end"
          :width="200"
          popper-style="width: auto;"
          trigger="hover"
          :content="tipContent"
        >
          <template #reference>
            <span class="iconfont icon-tishi"></span>
          </template>
        </el-popover>
      </el-form-item>
    </el-form>
    <div class="title">流程设计:</div>
    <FlowMap
      v-model:nodes="nodeList"
      @selectNode="getNode"
      @selectEdge="getEdge"
      :flowMapH="flowMapH"
    />
    <div class="btnBox">
      <el-button>取消</el-button>
      <el-button type="primary">保存</el-button>
    </div>
    <!-- 节点属性/连线设置弹框 -->
    <el-dialog
      v-model="setDialogVisible"
      :title="title"
      width="400px"
      align-center
      draggable
    >
      <el-form
        :model="nodeSetting"
        label-position="right"
        label-width="auto"
      >
        <el-form-item
          label="节点名称:"
          v-show="isNode"
        >
          <el-input
            v-model="nodeSetting.flowName"
            placeholder="节点名称"
            clearable
          />
        </el-form-item>
        <el-form-item
          label="处理人:"
          v-show="isNode"
        >
          <el-select
            v-model="nodeSetting.handler"
            clearable
            placeholder="处理人"
            @change="handlerChange"
          >
            <el-option
              v-for="item in handlerOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label=" "
          v-show="isNode && showFlowDes"
        >
          <el-checkbox
            v-model="nodeSetting.total"
            label="公司级"
          />
        </el-form-item>
        <el-form-item
          label="部门选人:"
          v-show="isNode"
        >
          <el-cascader
            v-model="nodeSetting.person"
            placeholder=""
            :options="userOptions"
            :props="userProps"
            @change="userChange"
          />
        </el-form-item>
        <div
          class="signUsers"
          v-show="isNode"
        ></div>
        <el-form-item
          label="连线名称"
          v-show="!isNode"
        >
          <el-input
            v-model="nodeSetting.lineName"
            placeholder="连线名称"
            clearable
          />
        </el-form-item>
        <el-form-item
          label="出口条件"
          v-show="!isNode"
        >
          <el-input
            type="textarea"
            v-model="nodeSetting.lineOut"
            placeholder="出口条件"
            clearable
            :rows="2"
            resize="none"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="setDialogVisible = false">取消</el-button>
          <el-button
            type="primary"
            @click="setDialogVisible = false"
          >
            确定
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
  import { ElForm, ElDialog, ElButton } from 'element-plus'
  import { FlowMap } from '@/components'
  const tipContent = '员工编号/员工名字/员工职位/部门名字/部门层级[等于]测试'
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
    if (e.data.type === 'circle') {
      return
    }
    isNode.value = true
    openSetDialog(e.data)
  }
  // 获取选中边
  function getEdge(e) {
    console.log(e, '获取边')
    isNode.value = false
    openSetDialog(e.data)
  }
  // 流程设置信息
  const config = ref({})
  const typeOptions = ref([
    {
      label: '责任状审批流程',
      value: 'method review'
    },
    {
      label: '绩效考评流程',
      value: 'method exam'
    },
    {
      label: '360评价审批流程',
      value: 'method360 review'
    }
  ])
  // 流程图高度
  const flowMapH = 500
  const isNode = ref(null)
  // 节点/连线标题
  const title = isNode.value ? '节点属性设置' : '出口属性设置'
  // 节点属性设置相关
  const nodeSetting = ref({})
  const handlerOptions = ref([
    {
      label: '直接上级',
      value: '会签节点'
    }
  ])
  const setDialogVisible = ref(null)
  function openSetDialog(data) {
    setDialogVisible.value = true
  }
  const showFlowDes = ref(null) // 是否显示公司级
  // 处理人变更事件
  function handlerChange(val) {
    showFlowDes.value = val === '会签节点'
  }
  const userOptions = ref([])
  // 部门选人级联选择器配置
  const userProps = ref({
    lazy: true,
    lazyLoad(node, resolve) {
      resolve([])
    }
  })
  // 部门选人事件
  function userChange() {}
</script>
<style scoped lang="scss">
  .process {
    height: 100%;
    padding: 20px 26px 20px 20px;
    background-color: #fff;
  }
  :deep(.processSet.el-form) {
    .el-form-item__content {
      position: relative;
    }
    .el-input__wrapper {
      padding-right: 18px;
    }
    .el-form-item {
      width: calc(25% - 32px);
    }
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
  .btnBox {
    display: flex;
    justify-content: center;
    padding: 15px 0 5px 0;
  }
  .el-button ~ .el-button {
    margin-left: 8px;
  }
  :deep(.el-dialog .el-cascader) {
    width: 100%;
  }
  .icon-tishi {
    color: #5185e6;
    position: absolute;
    right: 0;
    cursor: pointer;
  }
</style>
