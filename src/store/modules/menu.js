import { defineStore } from 'pinia'
import { store } from '@/store'
// CompanyInfo, SetFunction, SetPermission, SetAdimination
//所有页面组件
const layout = () => import('@/layout/index.vue')
const home = () => import('@/views/home/index.vue')
const system = () => import('@/views/system/index.vue')
const set = () => import('@/views/set/index.vue')
const CompanyInfo = () => import('@/views/set/views/company-info/index.vue')
const SetFunction = () => import('@/views/set/views/set-function/index.vue')
const SetPermission = () => import('@/views/set/views/set-permission/index.vue')
const SetAdimination = () => import('@/views/set/views/set-adminaiton/index.vue')
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
              name: '主页',
              hidden: true
            },
            component: home
          },
          {
            path: '/platform/system',
            name: 'systempage',
            meta: {
              icon: '图标',
              name: '系统',
              hidden: false
            },
            component: system
          },
          {
            path: '/platform/setting',
            name: 'setpage',
            meta: {
              name: '设置',
              hidden: true
            },
            redirect: '/platform/setting/company',
            component: set
          },
          {
            path: '/platform/setting/company',
            name: 'company',
            meta: {
              name: '企业信息',
              hidden: true
            },
            component: CompanyInfo
          },
          {
            path: '/platform/setting/permission',
            name: 'permission',
            meta: {
              name: '权限管理',
              hidden: true
            },
            component: SetPermission
          },
          {
            path: '/platform/setting/function',
            name: 'setfunction',
            meta: {
              name: '功能管理',
              hidden: true
            },
            component: SetFunction
          },
          {
            path: '/platform/setting/admin',
            name: 'setadmin',
            meta: {
              name: '管理设置',
              hidden: true
            },
            component: SetAdimination
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
