import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '*',
      component: () => import('../views/errorPage/404'),
    },
    {
      name: '403',
      path: '/403',
      component: () => import('../views/errorPage/403'),
      meta: {requireAuth: false}
    },
    {
      name: '登录页',
      path: '/login',
      component: () => import('../views/login/login'),
      meta: {requireAuth: false}
    },
    {
      name: '网站首页',
      path: '/',
      component: () => import('../components/layouts/BasicLayout'),
      meta: {requireAuth: true},
      redirect: '/article/index',
      children: [
        {
          name: '文章',
          path: '/article',
          redirect: '/article/index',
          component: () => import('../components/layouts/RouteView'),
          meta: {requireAuth: true}
        }
      ]
    },
    {
      name:"21312",
      path:"/Index",
      component: () => import('../views/index'),
      meta: {requireAuth: true},
      children: [
      ]
    }
  ]
})
