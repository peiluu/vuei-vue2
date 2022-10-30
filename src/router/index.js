import Vue from 'vue';

import Router from 'vue-router';
import Layout from '@/layout/index';

Vue.use(Router);

const defalutRoutes = [
	{
		path: '',
		component: Layout,
		redirect: '/home',
	},
	{
		path: '/home',
		name: '首页',
		// component: Layout,
		component: () => import('@/pages/home/index.vue'),
		children: [
			// 当 /user/:id 匹配成功
			// UserHome 将被渲染到 User 的 <router-view> 内部
			// { path: '', component: UserHome },
			// ...其他子路由
		],
	},
	{
		path: '/systemsetting',
		name: '系统设置',
		// component: Layout,
		component: () => import('@/pages/systemsetting/index.vue'),
		children: [
			// 当 /user/:id 匹配成功
			// UserHome 将被渲染到 User 的 <router-view> 内部
			// { path: '', component: UserHome },
			// ...其他子路由
		],
	},
	
];
export default new Router({
	// mode: 'history', //后端支持可开
	scrollBehavior: () => ({ y: 0 }),
	routes: defalutRoutes,
});
