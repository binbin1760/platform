import { createRouter, createWebHistory } from 'vue-router'

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
    path: '/test/layout',
    name: 'layout',
    meta: {
      name: '测试layout'
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/test/layout/1',
    children: [
      {
        path: '/test/layout/1',
        name: 'layout1',
        meta: {
          name: '测试'
        },
        component: () => import('@/views/home/index.vue')
      }
    ]
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
}

export default router
