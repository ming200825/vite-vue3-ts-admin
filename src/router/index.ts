import { createRouter, createWebHistory,createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Layout from '@/layout/index.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    name: '主页'
    // component: () => import('@/views/home/index')
  },
  {
    path: '/dog',
    component: Layout,
    name: '狗子世界',
    // component: () => import('@/views/home/index')
    children: [
      {
        path: 'erha',
        name: '哈士奇',
        component: () => import('@/views/dog/erha.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(''),
  routes

})
export default router