const routes = [
  {
    path: '/job',
    name: 'job',
    meta: {
      sort: 3,
      name: '岗位信息',
      hidden: false
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/job/list',
    children: [
      {
        path: '/job/list',
        name: 'jobpage',
        meta: {
          icon: 'icon-gangwei',
          name: '岗位信息',
          hidden: false
        },
        component: () => import('@/views/job/index.vue')
      }
    ]
  }
]

export default routes
