const routes = [
  {
    path: '/',
    name: 'homeView',
    component: () => import('@/components/ComLayout/index.vue'),
    meta: {
      title: 'layout'
    },
    children: [
      // homeView
      { path: '/homeView', name: 'homeView',
        component: () => import('@/views/HomeView.vue'),
        meta: { title: '首页 - homeView' },
      },
      // 指令
      {
        path: '/directive', name: 'directive',
        component: () => import('@/views/template/directive.vue'),
        meta: { title: '自定义指令 - directive' },
      },
      // 对话框 - dialogView
      { path: '/dialogView', name: 'dialogView',
        component: () => import('@/views/template/dialogView.vue'),
        meta: { title: '对话框 - dialogView' },
      },
      // 抽屉 - driawer
      { path: '/driawer', name: 'driawer',
        component: () => import('@/views/template/driawer.vue'),
        meta: { title: '抽屉 - driawer' },
      },
      // 弹出tip - popover
      { path: '/popover', name: 'popover',
        component: () => import('@/views/template/popover.vue'),
        meta: { title: '弹出tip - popover' },
      },
      // 动态表单- form
      { path: '/form', name: 'form',
        component: () => import('@/views/template/comForm/index.vue'),
        meta: { title: '动态表单- form' },
      },
      // 测试 - pinia - state
      { path: '/piniaState', name: 'piniaState',
        component: () => import('@/views/template/piniaState.vue'),
        meta: { title: '测试 - pinia - state' },
      },
      // 测试jsx组件 - vnodeJsx
      { path: '/vnodeJsx', name: 'vnodeJsx',
        component: () => import('@/views/template/vnodeJsx/index.vue'),
        meta: { title: '测试jsx组件 - vnodeJsx' },
      },
      // 周报 ----------------------------------------
      { path: '/weekReport', name: 'weekReport',
        component: () => import('@/views/template/weekReport.vue'),
        meta: { title: '周报 - weekReport' },
      },
      // 月报
      { path: '/monthlyReport', name: 'monthlyReport',
        component: () => import('@/views/template/monthlyReport.vue'),
        meta: { title: '月报 - monthlyReport' },
      }
    ]
  },
]

export default routes