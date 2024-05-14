<template>
  <div class="performance">
    <div class="flex gap8">
      <div
        class="top-item"
        @click="toCreateTemplatePage"
      >
        创建绩效模板
      </div>
      <div class="top-item">绩效沟通模板</div>
    </div>
    <div class="performance-template-list">
      <DataTable
        :column="column"
        :data="data"
      />
    </div>
    <div class="pageiniate">
      <Pageiniation
        v-model="pages"
        @change="pageChange"
        @sizeChange="pageSizeChange"
      />
    </div>
  </div>
</template>

<script setup>
  import { DataTable, Pageiniation } from '@/components'
  const router = useRouter()
  const column = [
    {
      type: 'index',
      label: '序号',
      width: '80',
      index: (index) => {
        return index + 1
      }
    },
    {
      prop: 'model',
      label: '所属模块'
    },
    {
      prop: 'templateName',
      label: '模板绩效名称'
    },
    {
      prop: 'date',
      label: '生效日期'
    },
    {
      prop: 'power',
      label: '权重类型'
    },
    ,
    {
      prop: 'templateType',
      label: '模板类型'
    },
    {
      prop: 'explain',
      label: '说明'
    },
    {
      prop: 'operation',
      label: '操作',
      contentRender(row) {
        const query = h(
          'div',
          {
            style: { color: '#5284E7', marginRight: '8px', cursor: 'pointer' }
          },
          '查看'
        )
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
        return h('div', { style: { display: 'flex' } }, [query, edit, del])
      }
    }
  ]

  const data = ref([
    {
      model: '360',
      templateName: '360评价',
      date: '2024-2-1',
      power: '分值权重',
      templateType: '并表式',
      explain: '这都是假数据'
    },
    {
      model: '360',
      templateName: '360评价',
      date: '2024-2-1',
      power: '分值权重',
      templateType: '并表式',
      explain: '这都是假数据'
    },
    {
      model: '360',
      templateName: '360评价',
      date: '2024-2-1',
      power: '分值权重',
      templateType: '并表式',
      explain: '这都是假数据'
    }
  ])

  const pages = ref({
    total: 2000,
    pageSize: 20,
    page: 1
  })
  // page发生改变
  function pageChange(page) {
    pages.value.page = Number(page)
    console.log(pages.value)
  }
  // pagesize发生改变
  function pageSizeChange(value) {
    pages.value.pageSize = value
    console.log(pages.value)
  }

  function toCreateTemplatePage() {
    router.push('/setting/function/create/template')
  }
</script>
<style scoped lang="scss">
  .flex {
    display: flex;
  }
  .gap8 {
    gap: 8px;
  }
  .performance {
    background-color: white;
    margin-top: 12px;
    height: 100%;
  }
  .top-item {
    padding: 8px 14px;
    background: #5284e7;
    color: #ffffff;
    border-radius: 2px;
    font-size: 12px;
    cursor: pointer;
  }
  .performance-template-list {
    margin-top: 13px;
  }
  .pageiniate {
    margin-top: 18px;
    display: flex;
    justify-content: end;
  }
</style>
