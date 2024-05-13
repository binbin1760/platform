<script>
  import { ElTable } from 'element-plus'
  import { creatColumn } from './table-column'
  export default defineComponent({
    name: 'data-table',
    props: {
      data: {
        type: Array
      },
      style: {
        type: Object,
        default: {
          with: '100%'
        }
      },
      column: {
        type: Array
      },
      // 没数据时渲染的内容
      emptyRender: {
        type: Object,
        default: h('div', null, '没有数据')
      }
    },
    setup(props) {
      const { data, style, column, emptyRender } = props
      const list = column ? column.map((item) => creatColumn(item)) : []
      return () =>
        h(
          ElTable,
          {
            data: data ? data : [],
            style,
            border: false,
            headerCellStyle: {
              background: '#f5f5f5f5 !important',
              fontSize: '12px',
              color: '#333333',
              fontWeight: '400'
            },
            cellStyle: {
              fontSize: '12px',
              color: '#333333',
              fontWeight: '400'
            }
          },
          // 没数据时的插槽
          { default: () => list, empty: () => emptyRender }
        )
    }
  })
</script>
<style scoped lang="scss"></style>
