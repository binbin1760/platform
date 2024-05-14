<template>
  <div class="organ">
    <div class="treeBox">
      <div class="switch">
        <el-button
          type="primary"
          class="org itemBtn"
        >
          组织机构
        </el-button>
        <el-button class="project itemBtn">项目组织</el-button>
      </div>
      <el-input
        v-model="userName"
        clearable
        class="searchBox"
        :suffix-icon="Search"
        placeholder="姓名/工号"
      ></el-input>
      <Tree class="tree" />
    </div>
    <div class="rightBox">
      <el-tabs
        v-model="depAndUserTitle"
        class="demo-tabs"
      >
        <el-tab-pane
          label="组织机构"
          name="dep"
        ></el-tab-pane>
        <el-tab-pane
          label="部门成员"
          name="user"
        ></el-tab-pane>
      </el-tabs>
      <div class="btns">
        <el-button type="primary">新增</el-button>
        <el-button type="primary">导入</el-button>
      </div>
      <DataTable
        :column="column"
        :data="data"
        class="list"
      />
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  import { ElButton, ElTabs } from 'element-plus'
  import { Search } from '@element-plus/icons-vue'
  import { DataTable, Pageiniation } from '@/components'
  import { Tree } from "../../components"
  const userName = ref('')
  const depAndUserTitle = ref('dep')
  const columnUser = [
    {
      type: 'index',
      label: '序号',
      width: '80',
      index: (index) => {
        return index + 1
      }
    },
    {
      prop: 'name',
      label: '姓名'
    },
    {
      prop: 'telephone',
      label: '工号'
    },
    {
      prop: '',
      label: '汇报关系'
    },
    {
      prop: '',
      label: '员工类型'
    },
    {
      prop: '',
      label: '职层'
    },
    {
      prop: '',
      label: '序列'
    },
    {
      prop: '',
      label: '阳光荣誉'
    },
    {
      prop: 'operation',
      label: '操作',
      contentRender(row) {
        const edit = h(
          'div',
          {
            style: { color: '#5284E7', marginRight: '8px', cursor: 'pointer' }
          },
          '编辑'
        )
        const up = h(
          'div',
          {
            style: { color: '#5284E7', marginRight: '8px', cursor: 'pointer' }
          },
          '上移'
        )
        const del = h(
          'div',
          {
            style: { color: '#5284E7', marginRight: '8px', cursor: 'pointer' }
          },
          '删除'
        )
        return h('div', { style: { display: 'flex' } }, [edit, up, del])
      }
    }
  ]
  const columnDep = [
  {
      type: 'index',
      label: '序号',
      width: '80',
      index: (index) => {
        return index + 1
      }
    },
    {
      prop: 'name',
      label: '组织名称'
    },
    {
      prop: '',
      label: '负责人'
    },
    {
      prop: 'operation',
      label: '操作',
      contentRender(row) {
        const edit = h(
          'div',
          {
            style: { color: '#5284E7', marginRight: '8px', cursor: 'pointer' }
          },
          '编辑'
        )
        const del = h(
          'div',
          {
            style: { color: '#5284E7', marginRight: '8px', cursor: 'pointer' }
          },
          '删除'
        )
        return h('div', { style: { display: 'flex' } }, [edit, del])
      }
    }
  ]
  let column = ref(columnDep);
  const data = ref([])
  watch(depAndUserTitle, (newVal) => {
    column.value = newVal === 'dep' ? columnDep : columnUser;
  })
  const treeData = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]
</script>
<style lang="scss" scoped>
  .organ {
    background-color: #fff;
    height: 100%;
    padding: 20px 26px 20px 20px;
    display: flex;
    column-gap: 10px;
  }
  .treeBox {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-right: 10px;
    row-gap: 16px;
  }
  .rightBox {
    flex: 3;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
  .tree {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .list {
    flex: 1;
  }
</style>
