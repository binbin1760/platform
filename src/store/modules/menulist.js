const user = () => import('@/views/user/index.vue')
const team = () => import('@/views/team/index.vue')
const job = () => import('@/views/job/index.vue')
const dashboard = () => import('@/views/dashboard/index.vue')
const organization = () => import('@/views/organization/index.vue')
const focus = () => import('@/views/focus/index.vue')
const performance = () => import('@/views/performance/index.vue')
const system = () => import('@/views/system/index.vue')
const salary = () => import('@/views/salary/index.vue')
const ability = () => import('@/views/ability/index.vue')
const staffGrow = () => import('@/views/staff-grow/index.vue')
const feedback = () => import('@/views/feedback/index.vue')

export const routerlist = [
  {
    path: '/platform/user',
    name: 'userpage',
    meta: {
      icon: 'icon-user',
      name: '个人中心',
      hidden: false
    },
    component: user
  },
  {
    path: '/platform/team',
    name: 'teampage',
    meta: {
      icon: 'icon-tuandui',
      name: '团队架构',
      hidden: false
    },
    component: team
  },
  {
    path: '/platform/job',
    name: 'jobpage',
    meta: {
      icon: 'icon-gangwei',
      name: '岗位信息',
      hidden: false
    },
    component: job
  },
  {
    path: '/platform/dashboard',
    name: 'windowpage',
    meta: {
      icon: 'icon-zhuzhuangtu',
      name: '视窗图表',
      hidden: false
    },
    component: dashboard
  },
  {
    path: '/platform/organization',
    name: 'organizationpage',
    meta: {
      icon: 'icon-zuzhiqunzu',
      name: '人事组织',
      hidden: false
    },
    component: organization
  },
  {
    path: '/platform/focus',
    name: 'focuspage',
    meta: {
      icon: 'icon-miaozhun',
      name: '重点工作',
      hidden: false
    },
    component: focus
  },
  {
    path: '/platform/performance',
    name: 'performancepage',
    meta: {
      icon: 'icon-KJ_020',
      name: '绩效管理',
      hidden: false
    },
    component: performance
  },
  {
    path: '/platform/salary',
    name: 'salarypage',
    meta: {
      icon: 'icon-jisuanqi',
      name: '薪酬绩效',
      hidden: false
    },
    component: salary
  },
  {
    path: '/platform/ability',
    name: 'abilitypage',
    meta: {
      icon: 'icon-leidatu',
      name: '能力评估',
      hidden: false
    },
    component: ability
  },
  {
    path: '/platform/staffGrow',
    name: 'staffGrowpage',
    meta: {
      icon: 'icon-yuangongchengchangjilu',
      name: '员工成长',
      hidden: false
    },
    component: staffGrow
  },
  {
    path: '/platform/feedback',
    name: 'feedbackpage',
    meta: {
      icon: 'icon-bianji',
      name: '留言反馈',
      hidden: false
    },
    component: feedback
  },
  {
    path: '/platform/system',
    name: 'systempage',
    meta: {
      icon: 'icon-shezhi',
      name: '系统设置',
      hidden: false
    },
    component: system
  }
]
