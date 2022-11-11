/* eslint-disable no-unused-vars */
import Vue from 'vue';

import Router from 'vue-router';
// import Layout from '@/layout/index';
// 插件应用需要使用Vue.use方法应用
Vue.use(Router);

import layout from '@/layout/index.vue';
/**
 * @desption 配置非组件式路由，里面的path所对应的页面不会被layout组件包裹
 */
export const notComponentRouter = ['/systemsetting'];

/**
 * @desption - 自定义路由配置, 配置路由组件
 */
export const defalutRoutes = [
	{
		// 父级路由，path带斜杠
		path: '/home',
		title: '首页',
		// 命名路由，可以简化编码，用名字替换长路由
		name: 'shouye',
		iconClass: 'el-icon-location',
		// ？？ 为什么父级不用component会无法加载子级路由
		// component: () => import('@/pages/home/index.vue'),

		component: layout,
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
		},
		// 独享路由守卫（独享路由守卫只有一个，没有前置后置），单独为某个路由配置
		beforeEnter: (to, from, next) => {},
		children: [
			{
				// 子级路由，path不需要带斜杠，對那個
				path: '/home',
				title: '二级首页',
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
		name: 'xitongshezhi',
		title: '系统设置',
		component: () => import('@/pages/systemsetting/index.vue'),
		meta: {
			isAuth: false,
			title: '系统设置',
		},
		children: [
			{
				path: '/systemsetting',
				title: '下层系统设置',
				// component: () => import('@/pages/systemsetting/index.vue'),
			},
		],
	},
	{
		path: '/vue',
		title: 'vue学习',
		component: layout,
		// 嵌套路由配置, 用layout组件包裹内置组件

		children: [
			{
				path: '/vue/vuerouter',
				name: 'luyou',
				title: 'vue-router',
				props: true,
				meta: {
					isAuth: false,
					title: '路由',
				},
				component: () => import('@/pages/vuerouter/index.vue'),
				children: [],
			},

			{
				path: 'directive',
				name: 'zhiling',
				title: 'vue指令',
				props: true,
				meta: {
					isAuth: false,
					title: 'vue指令',
				},
				component: () => import('@/pages/directive/index.vue'),
				children: [],
			},

			{
				path: 'defineproperty',
				title: 'defineproperty',
				component: () => import('@/pages/defineproperty/index.vue'),
				meta: {
					isAuth: false,
					title: '数据代理',
				},
				children: [],
			},
			{
				path: 'vuecomponent',
				title: 'vuecomponent',
				component: () => import('@/pages/vuecomponent/index.vue'),
				meta: {
					isAuth: false,
					title: '组件',
				},
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
 * @desption 全局前置路由守卫 => 初始化的时候被调用 | 每一次路由切换之前都会触发，可以阻止路由的切换
 * @desption 一般应用于权限系统控制
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
