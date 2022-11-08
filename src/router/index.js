import Vue from 'vue';

import Router from 'vue-router';
// import Layout from '@/layout/index';
// 插件应用需要使用Vue.use方法应用
Vue.use(Router);

/**
 * @desption - 自定义路由配置, 配置路由组件
 */
export const defalutRoutes = [
	{
		// 父级路由，path带斜杠
		path: '/home',
		label: '首页',
		// 命名路由，可以简化编码，用名字替换长路由
		name: 'shouye',
		iconClass: 'el-icon-location',
		// ？？ 为什么父级不用component会无法加载子级路由
		component: () => import('@/pages/home/index.vue'),

		// props的第一种写法，值为对象，该对象中的所有key - value都会以props的形式传到该组件
		// props: {
		// 	type: 1,
		// },

		// props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数以props的形式传到该组件
		// props: true,//

		// props的第三种写法，值为回调函数
		// props属性可以让路由组件在接受参数的时候可以更加畅快，减少参数
		props(route) {
			return {
				id: route.query.id,
				title: route.query.title,
			};
		},
		children: [
			{
				// 子级路由，path不需要带斜杠，對那個
				path: '/home/home',
				label: '二级首页',
				component: () => import('@/pages/home/index.vue'),
				children: [],
			},
		],
	},
	{
		path: '/systemsetting',
		label: '系统设置',
		component: () => import('@/pages/systemsetting/index.vue'),
		children: [
			{
				path: '/systemsetting',
				label: '下层系统设置',
				// component: () => import('@/pages/systemsetting/index.vue'),
				children: [
					{
						path: '/systemsetting',
						label: '下层系统设置',
						props: true,
						component: () => import('@/pages/systemsetting/index.vue'),
						children: [],
					},
				],
			},
		],
	},
	{
		path: '/vuerouter',
		label: 'vue学习',
		component: () => import('@/pages/vuerouter/index.vue'),
		children: [
			{
				path: 'vuerouter',
				name: 'luyou',
				label: 'vue-router',
				props: true,
				component: () => import('@/pages/vuerouter/index.vue'),
				children: [],
			},
			{
				path: 'defineproperty',
				label: 'Object.defineproperty',
				component: () => import('@/pages/defineproperty/index.vue'),
				children: [],
			},
		],
	},
];

/**
 * @desption - 配置非组件式路由，里面的path所对应的页面不会被layout组件包裹
 */
export const notComponentRouter = ['/systemsetting'];

// 创建并暴露一个路由器
export const router = new Router({
	// mode: 'history', //后端支持可开
	scrollBehavior: () => ({ y: 0 }),
	routes: defalutRoutes,
});
