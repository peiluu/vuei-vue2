/* eslint-disable no-unused-vars */
import Vue from 'vue';

import Router from 'vue-router';

import layout from '@/layout/index.vue';

// import Layout from '@/layout/index';
// 插件应用需要使用Vue.use方法应用
Vue.use(Router);
/**
 * @desption 配置非组件式路由，里面的path所对应的页面不会被layout组件包裹
 */
export const notComponentRouter = [];

/**
 * @desption - 自定义路由配置, 配置路由组件
 */
export const defalutRoutes = [
	// 配置重定向
	{
		path: '/',
		redirect: '/myhome',
		meta: {
			isMenu: false,
		},
	},

	{
		// 父级路由，path带斜杠
		path: '/home',
		// 命名路由，可以简化编码，用名字替换长路由
		name: 'shouye',
		// ？？ 为什么父级不用component会无法加载子级路由
		component: layout,
		// component: () => import('@/pages/home/index.vue'),

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
		// meta - 路由元信息，可自定义配置路由信息
		meta: {
			isAuth: false,
			title: '首页',
			iconClass: 'el-icon-location',
			isMenu: true,
		},
		// 独享路由守卫（独享路由守卫只有一个，没有前置后置），单独为某个路由配置
		beforeEnter: (to, from, next) => {
			next();
		},
		/**
		 *  @desption 嵌套路由配置, 用layout组件包裹内置组件, 要在嵌套的出口中渲染组件，需要在 VueRouter 的参数中使用 children 配置
		 *
		 */
		children: [
			{
				// 子级路由，path不需要带斜杠，對那個
				path: '/myhome',
				component: () => import('@/pages/home/index.vue'),
				meta: {
					isAuth: false,
					title: '二级首页',
				},
				children: [],
			},
		],
	},

	{
		path: '/systemsetting',
		component: layout,
		meta: {
			isAuth: false,
			title: '系统设置',
			isMenu: true,
		},
		children: [
			{
				path: '/systemsetting',
				meta: { title: '下层系统设置' },
				component: () => import('@/pages/systemsetting/index.vue'),
			},
		],
	},
	{
		path: '/vue',
		component: layout,
		meta: {
			isMenu: true,
			title: 'Vue基本知识',
		},
		children: [
			{
				path: '/vuerouter',
				props: true,
				meta: {
					isAuth: false,
					title: 'Vue路由',
				},
				component: () => import('@/pages/vuerouter/index.vue'),
				children: [],
			},
			{
				path: '/directive',
				props: true,
				meta: {
					isAuth: false,
					title: 'Vue指令',
				},
				component: () => import('@/pages/directive/index.vue'),
				children: [],
			},

			{
				path: '/defineproperty',
				component: () => import('@/pages/defineproperty/index.vue'),
				meta: {
					isAuth: false,
					title: 'defineproperty数据代理',
				},
				children: [],
			},
			{
				path: '/observer',
				component: () => import('@/pages/observer/index.vue'),
				meta: {
					isAuth: false,
					title: 'observers观察者模式',
				},
				children: [],
			},
			{
				path: '/dataResponsive',
				component: () => import('@/pages/dataResponsive/index.vue'),
				meta: {
					isAuth: false,
					title: '数据响应式原理',
				},
				children: [],
			},
			{
				path: '/vuex',
				component: () => import('@/pages/vuex/index.vue'),
				meta: {
					isAuth: false,
					title: 'Vuex',
				},
				children: [],
			},
			{
				path: '/vuecomponent',
				component: () => import('@/pages/vuecomponent/index.vue'),
				meta: {
					isAuth: false,
					title: 'Vue组件',
				},
				children: [],
			},
		],
	},
	{
		path: '/basicknowledge',
		meta: {
			isMenu: true,
			title: 'ES6基础知识学习',	
		},
		component: layout,
		children: [
			{
				path: '/generator',
				props: true,
				meta: {
					isAuth: false,
					title: 'generator',
				},
				component: () => import('@/pages/generator/index.vue'),
				children: [],
			},
			{
				path: '/other',
				props: true,
				meta: {
					isAuth: false,
					title: '其他特性',
				},
				component: () => import('@/pages/other/index.vue'),
				children: [],
			},
		],
	},
	{
		path: '/algorithm',
		meta: {
			isMenu: true,
			title: '算法题',	
		},
		component: layout,
		children: [
			{
				path: '/binaryTree',
				props: true,
				meta: {
					isAuth: false,
					title: '二叉树',
				},
				component: () => import('@/pages/algorithm/binaryTree.vue'),
				children: [],
			},
	
		],
	},
];

// 创建一个路由器
const router = new Router({
	// mode: 'history', //后端支持可开
	scrollBehavior: () => ({ y: 0 }),
	routes: defalutRoutes,
});

/**
 * @desption 全局前置路由守卫 => 初始化的时候被调用 | 每一次路由切换之前都会触发，可以 监听|阻止 路由的切换
 * @desption 一般应用于权限系统控制，每次路由的变化都去重新获取权限
 * @param {to} 来源路由
 * @param {from} 去往哪里
 * @param {next} 放行 | 满足判断条件就继续往下走
 */
router.beforeEach((to, from, next) => {
	next();
	// console.log('to', to);
	// console.log('from', from);
	// console.log('next', next);
	// 满足判断条件就继续往下走 | 不需要鉴权de
	// if (to.meta.isAuth) {
	// 	next();
	// }
});

/**
 * @desption 全局后置路由守卫 => 初始化的时候被调用 | 每一次路由切换之后都会触发
 * @param {to} 来源路由
 * @param {from} 去往哪里
 */
router.afterEach((to, from) => {
	// console.log('afterEachto', to);
	// console.log('afterEachfrom', from);
	// 可以动态设置页面标签名字
	document.title = to.meta.title || 'VUI';
});

// 将路由器暴露出去
export default router;
