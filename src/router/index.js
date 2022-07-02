import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/layout'
const routes = [
  {
    path: '/',
    component: Layout
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  }
]

const router = createRouter({
  // 使用hash模式的路由
  history: createWebHashHistory(),
  routes
})

export default router
