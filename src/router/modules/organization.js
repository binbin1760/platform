const routes = [
  {
    path: '/org',
    name: 'org',
    meta: {
      sort: 6,
      icon: 'icon-org',
      name: '组织人事',
      hidden: false
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/org/organ',
    children: [
      {
        path: '/org/organ',
        name: 'organ',
        meta: {
          name: '组织机构',
          hidden: false
        },
        component: () => import('@/views/org/views/organ/index.vue')
      },
      {
        path: '/org/employeeManage',
        name: 'employeeManage',
        meta: {
          name: '员工管理',
          hidden: false
        },
        component: () => import('@/views/org/views/employeeManage/index.vue')
      },
      {
        path: '/home/employeeInfo',
        name: 'employeeInfo',
        meta: {
          name: '员工信息设置',
          hidden: false
        },
        component: () => import('@/views/org/views/employeeInfo/index.vue')
      },
    ]
  }
]

export default routes
