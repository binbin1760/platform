import { defineStore } from 'pinia'
import { store } from '@/store'
import { asyncRoutes } from '@/router/index'
//所有页面组件

function routesFilter(routes) {
  const menu = routes.map((item) => {
    if (item.children) {
      const children = routesFilter(item.children)
      item = {
        path: item.path,
        name: item.name,
        meta: item.meta,
        children: children
      }
    } else {
      item = {
        path: item.path,
        name: item.name,
        meta: item.meta
      }
    }
    return item
  })

  return menu
}

export const useAsyncRoute = defineStore({
  id: 'side-menu',
  state: () => ({
    asyncRoutes: asyncRoutes
  }),
  getters: {},
  actions: {
    getMenu() {
      //todoo
    },
    // 计算菜单
    generateSideMenu() {
      return routesFilter(asyncRoutes)
    },
    // 生成路由
    generateAsyncRoutes() {}
  }
})

export function asyncRoute() {
  return useAsyncRoute(store)
}
