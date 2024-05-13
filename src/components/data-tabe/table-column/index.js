import { ElTableColumn } from 'element-plus'
import { h } from 'vue'
/**
 *
 * @param {*} config
 * @returns
 *
 * config 为 ElTableColumn的配置属性
 * props 为结构config 中 ElTableColumn的组件自有属性    属性表参考element plus 官网的ElTableColumn属性说明
 * headerRender 为自定义头部的渲染函数  返回一个vnode
 * contentRender 为自定义cell的渲染函数 返回一个vnode
 */
export function creatColumn(config) {
  const { headerRender, contentRender, ...rest } = config
  const props = rest

  if (headerRender && !contentRender) {
    return h(ElTableColumn, props, { header: () => headerRender() })
  }

  if (!headerRender && contentRender) {
    return h(ElTableColumn, props, {
      default: (scope) => {
        return contentRender(scope)
      }
    })
  }

  if (headerRender && contentRender) {
    return h(ElTableColumn, props, {
      header: () => headerRender(),
      default: (row) => {
        return contentRender(row)
      }
    })
  } else {
    return h(ElTableColumn, props)
  }
}
