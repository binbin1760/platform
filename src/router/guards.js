import { asyncRoute } from '@/store/modules/menu'
import { toRaw } from 'vue'
export function createRouterGuards(Router) {
  Router.beforeEach(async (to, _from, next) => {
    const list = asyncRoute().asyncRoutes
    list.forEach((item) => Router.addRoute(toRaw(item)))
    if (to.matched.length === 0) {
      next({ ...to, replace: true })
    } else {
      next()
    }
  })
}
