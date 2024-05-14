const routes = [
  {
    path: '/seting',
    name: 'setpage',
    meta: {
      sort: 5,
      name: '设置',
      hidden: true
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/setting/company',
    children: [
      {
        path: '/setting/company',
        name: 'set-company',
        meta: {
          name: '企业信息',
          hidden: true
        },
        component: () => import('@/views/set/views/company-info/index.vue')
      },
      {
        path: '/setting/permission',
        name: 'set-permission',
        meta: {
          name: '权限管理',
          hidden: true
        },
        component: () => import('@/views/set/views/set-permission/index.vue')
      },
      {
        path: '/setting/function',
        name: 'set-function',
        meta: {
          name: '功能管理',
          hidden: true
        },
        component: () => import('@/views/set/views/set-function/index.vue')
      },
      {
        path: '/setting/admin',
        name: 'set-admin',
        meta: {
          name: '管理设置',
          hidden: true
        },
        component: () => import('@/views/set/views/set-adminaiton/index.vue')
      },
      {
        path: '/setting/function/create/template',
        name: 'create-template',
        meta: {
          name: '创建模板',
          hidden: true
        },
        component: () =>
          import(
            '@/views/set/views/set-function/card-list/create-template/index.vue'
          )
      }
    ]
  }
]

export default routes
