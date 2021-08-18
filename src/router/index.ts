import { createRouter, createWebHistory,createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Layout from '@/layout/index.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component: Layout,
    name: '控制台',
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: '主页',
        meta: { title: '主页', icon: 'dashboard', affix: true }
      }
    ]
   
  },

  {
    path: '/page',
    component: Layout,
    name: '页面示例',
    // component: () => import('@/views/home/index')
    children: [
      {
        path: 'tab',
        name: 'tab页',
        component: () => import('@/views/page/tab.vue')
      },{
        path: 'table',
        name: '表格页',
        component: () => import('@/views/page/table.vue')
      },
      {
        path: 'form',
        name: '表单页',
        component: () => import('@/views/page/form.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(''),
  routes

})
export default router