import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import usersRouter from './modules/users'


const routes: Array<RouteRecordRaw> = [

  // 引入用户管理路由
  ...usersRouter,
  // about路由
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
