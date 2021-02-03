// 用户管理模块相关路径

import Home from '@/views/user/Home.vue'
const usersRouter = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    
    {
      path: '/add',
      name: 'Add',
      component: () => import('@/views/user/Add.vue')
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: () => import('@/views/user/Details.vue')
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: () => import('@/views/user/Edit.vue')
    }
  
  ]
  export default usersRouter