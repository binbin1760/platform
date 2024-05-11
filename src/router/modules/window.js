const routes = [
  {
    path: '/window',
    name: 'window',
    meta: {
      sort: 5,
      name: '视窗图表',
      icon: 'icon-zhuzhuangtu',
      hidden: false
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/window/dashbord',
    children: [
      {
        path: '/window/dashbord',
        name: 'windowpage',
        meta: {
          name: '视窗图表',
          hidden: false
        },
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/window/dashbord',
        name: 'windowpage',
        meta: {
          name: '视窗图表',
          hidden: false
        },
        component: () => import('@/views/home/index.vue')
      }
    ]
  }
]

export default routes
