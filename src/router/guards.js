import { asyncRoute } from '@/store/modules/menu'
import { toRaw } from 'vue'

export function createRouterGuards(Router) {
  Router.beforeEach(async (to, _from, next) => {
    const list = asyncRoute().asyncRoutes
    console.log(list, 'pinia里面的假数据')
    list.forEach((item) => {
      Router.addRoute(toRaw(item))
    })
    console.log(Router.options.routes, '添加操作失败')
    next()
  })
}
