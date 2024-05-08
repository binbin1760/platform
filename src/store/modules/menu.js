import { defineStore } from 'pinia'
import { store } from '@/store'
import { toRaw } from 'vue'
import router from '@/router/index'

//所有页面组件
const layout = () => import('@/layout/index.vue')
const home = () => import('@/views/home/index.vue')
const system = () => import('@/views/system/index.vue')

export const useAsyncRoute = defineStore({
  id: 'side-menu',
  state: () => ({
    asyncRoutes: [
      {
        path: '/platform',
        name: 'layout',
        meta: {
          name: ''
        },
        component: layout,
        redirect: '/platform/home',
        children: [
          {
            path: '/platform/home',
            name: 'homepage',
            meta: {
              name: '主页'
            },
            component: home
          }
        ]
      }
    ]
  }),
  getters: {},
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
