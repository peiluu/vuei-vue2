import Vue from 'vue';

import Router from 'vue-router';
// import Layout from '@/layout/index';

Vue.use(Router);

const defalutRoutes = [
	{
		path: '/home',
		name: '首页',
		iconClass: 'el-icon-location',
		component: () => import('@/pages/home/index.vue'),
		children: [
			{
				path: '/home',
				name: '二级首页',
				iconClass: 'el-icon-location',
				component: () => import('@/pages/home/index.vue'),
				children: [
					{
						path: '/home',
						name: '三级首页',
						iconClass: 'el-icon-location',
						component: () => import('@/pages/home/index.vue'),
						children: [],
					},
				],
			},
			{
				path: '/systemsetting',
				name: '系统设置',
				component: () => import('@/pages/systemsetting/index.vue'),
				children: [
					{
						path: '/systemsetting',
						name: '下层系统设置',
						component: () => import('@/pages/systemsetting/index.vue'),
						children: [],
					},
				],
			},
		],
	},
	{
		path: '/systemsetting',
		name: '系统设置',
		component: () => import('@/pages/systemsetting/index.vue'),
		children: [
			{
				path: '/systemsetting',
				name: '下层系统设置',
				component: () => import('@/pages/systemsetting/index.vue'),
				children: [],
			},
		],
	},
];

export const router = new Router({
	// mode: 'history', //后端支持可开
	scrollBehavior: () => ({ y: 0 }),
	routes: defalutRoutes,
});

export default defalutRoutes;
