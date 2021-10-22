/*
 * @Descripttion:路由入口文件
 * @version:
 * @Author: TJ
 * @Date: 2021-04-06 10:06:11
 * @LastEditors: RD
 * @LastEditTime: 2021-10-21 20:34:22
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
//#   导入系统管理路由
// 登录路由
import Login from '@/views/Login/index.vue'
// 基础布局路由
import Layout from '@/views/Layout/index.vue'
// 基础布局路由
import Index from './index/index'

export const constantRoutes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/login',
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
	{
		path: '/layout',
		name: 'Layout',
		component: Layout,
		children: [Index],
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes: constantRoutes,
})

// router.beforeEach((to, from, next) => {
//   // 登录权限验证
//   // if (to.path === '/login' || to.path === '/500') {
//   //   //登录页
//   //   next()
//   // } else if (to.matched.length === 0) {
//   //   next({
//   //     path: '/404',
//   //   })
//   // }
// })

export default router
