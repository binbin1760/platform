const routes = [
  {
    path: '/home',
    name: 'home',
    meta: {
      sort: 0,
      name: '主页',
      hidden: true
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/home/dashbord',
    children: [
      {
        path: '/home/dashbord',
        name: 'homepage',
        meta: {
          name: '主页',
          hidden: true
        },
        component: () => import('@/views/home/index.vue')
      }
    ]
  }
]

export default routes
