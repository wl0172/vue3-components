import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next({
      path: '/homeView'
    })
  } else {
    next()
  }

  // console.log(to, '======')
  // next()
  // 获取 token 
  // const { token } = useCounterStore().token
  // // 如果有token
  // if (token !== null && token !== '') {
  //   // 带有token访问登录页面跳转至主页
  //   if (to.path === '/Login') {
  //     next({
  //       path: '/'
  //     })
  //   } else {
  //     // 带有token访问其他页面允许跳转
  //     next()
  //   }
  // } else {
  //   // 没有token
  //   // 没有token访问登录页面允许
  //   if (to.path === '/Login' || to.path === '/SignUp') {
  //     next()
  //   } else {
  //     // 没有token访问其他页面跳转至登录页面
  //     next({
  //       path: '/Login',
  //     })
  //   }
  // }
})

export default router


