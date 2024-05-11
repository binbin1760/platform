const routes = [
  {
    path: '/user',
    name: 'user',
    meta: {
      sort: 1,
      name: '个人中心',
      hidden: false
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/user/center',
    children: [
      {
        path: '/user/center',
        name: 'userpage',
        meta: {
          icon: 'icon-user',
          name: '个人中心',
          hidden: false
        },
        component: () => import('@/views/user/index.vue')
      }
    ]
  }
]

export default routes
