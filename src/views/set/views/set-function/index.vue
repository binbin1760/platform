<template>
  <div class="nav-list">
    <NavList />
  </div>
  <div class="set-function">
    <el-tabs>
      <el-tab-pane name="home">
        <template #label>
          <div class="custom-label">首页</div>
        </template>
        首页
      </el-tab-pane>
      <el-tab-pane name="team">
        <template #label>
          <div class="custom-label">团队</div>
        </template>
        团队
      </el-tab-pane>
      <el-tab-pane name="window">
        <template #label>
          <div class="custom-label">视窗</div>
        </template>
        视窗
      </el-tab-pane>
      <el-tab-pane name="originztaion">
        <template #label>
          <div class="custom-label">组织/员工管理</div>
        </template>
        组织员工管理
      </el-tab-pane>
      <el-tab-pane name="workerAdamin">
        <template #label>
          <div class="custom-label">人事管理</div>
        </template>
        人事管理
      </el-tab-pane>
      <el-tab-pane name="job">
        <template #label>
          <div class="custom-label">岗位管理</div>
        </template>
        岗位管理
      </el-tab-pane>
      <el-tab-pane name="performance">
        <template #label>
          <el-popover
            :offset="12"
            :show-arrow="false"
          >
            <template #reference>
              <div class="custom-label">绩效管理</div>
            </template>
            <div class="popover-list">
              <div class="popover-item">绩效范围类型</div>
              <div class="popover-item">绩效范围类型</div>
              <div class="popover-item">绩效范围类型</div>
            </div>
          </el-popover>
        </template>
        绩效管理
      </el-tab-pane>
      <el-tab-pane name="ability">
        <template #label>
          <div class="custom-label">能力评估</div>
        </template>
        能力评估
      </el-tab-pane>
      <el-tab-pane name="workergrow">
        <template #label>
          <div class="custom-label">员工成长</div>
        </template>
        员工成长
      </el-tab-pane>
    </el-tabs>
  </div>
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
  .set-function {
    background: #ffffff;
    margin-top: 12px;
    border-radius: 2px;
    padding: 0 24px;
  }
  .custom-label {
    font-size: 12px;
  }
  .tabs-item:hover {
    background: rgba(82, 132, 231, 0.2);
  }
  .popover-list {
    font-size: 12px;
    text-align: center;
  }
  .popover-item {
    padding: 6px;
    border-radius: 2px;
    cursor: pointer;
  }
  .popover-item:hover {
    padding: 6px;
    background: rgba(82, 132, 231, 0.2);
  }
</style>
