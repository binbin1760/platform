import { defineStore } from 'pinia'
import { store } from '@/store'
import { toRaw } from 'vue'
import router from '@/router/index'

//所有页面组件
const layout = () => import('@/layout/index.vue')
const home = () => import('@/views/home/index.vue')
const system = () => import('@/views/system/index.vue')
// 生成路由s
// function generateRoute(route) {
//   return {
//     path: route.path,
//     name: route.name,
//     meta: route.meta, //类型Record 索引有问题
//     component: () => import(`@/${route.componentSrc}`)
//   }
// }

export const useAsyncRoute = defineStore({
  id: 'side-menu',
  state: () => ({
    asyncRoutes: [
      {
        path: '/platform',
        name: 'layout',
        meta: {
          icon: '图标',
          name: '主页'
        },
        component: layout,
        redirect: '/platform/home',
        children: [
          {
            path: '/platform/home',
            name: 'homepage',
            meta: {
              icon: '图标',
              name: '主页'
            },
            component: home
          },
          {
            path: '/platform/system',
            name: 'systempage',
            meta: {
              icon: '图标',
              name: '系统'
            },
            component: system
          }
        ]
      }
    ]
  }),
  getters: {
    sideMenuRoutes(state) {
      return state.asyncRoutes.flatMap((item) => item.children)
    }
  },
  actions: {
    getMenu() {
      //todoo
    },
    // 计算菜单
    computedMenu() {},
    // 添加动态路由
    addAsyncRoutes() {}
  }
})

export function asyncRoute() {
  return useAsyncRoute(store)
}
