import { createRouter, createWebHistory } from 'vue-router'
import { createRouterGuards } from './guards'

const modules = import.meta.glob('./modules/**/*.js', {
  eager: true
})

const ModuleList = Object.keys(modules)
export const routesModuleList = ModuleList.reduce((list, key) => {
  const mod = modules[key].default ?? {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  return [...list, ...modList]
}, [])

function RoutesSort(a, b) {
  return (a.meta?.sort ?? 0) - (b.meta?.sort ?? 0)
}

export const asyncRoutes = routesModuleList.sort(RoutesSort)

const constantRoute = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      name: '登录'
    },
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    meta: {
      name: '重定向login',
      isRoot: true
    },
    redirect: '/login'
  }
]

const routes = [...constantRoute]
const routerHistory = createWebHistory()
const customRouterOptions = {
  history: routerHistory,
  routes: routes,
  scrollBehavior(_to, _from, savePosition) {
    if (savePosition) {
      return savePosition
    } else {
      return { top: 0 }
    }
  }
}

const router = createRouter(customRouterOptions)
export function setupRouter(app) {
  app.use(router)
  // 路由守卫
  createRouterGuards(router)
}

export default router
