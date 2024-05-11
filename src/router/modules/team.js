const routes = [
  {
    path: '/team',
    name: 'team',
    meta: {
      sort: 2,
      name: '团队',
      hidden: false
    },
    component: () => import('@/layout/index.vue'),
    redirect: '/team/index',
    children: [
      {
        path: '/team/index',
        name: 'teampage',
        meta: {
          icon: 'icon-tuandui',
          name: '我的团队',
          hidden: false
        },
        component: () => import('@/views/team/index.vue')
      }
    ]
  }
]

export default routes
