/* eslint-disable no-unused-vars */

export default {
	install(Vue, options) {
		// 全局过滤器
		Vue.filter('myFilter', value => {
			return value.slice(0, 1);
		});

		// 自定义全局指令
		Vue.directive('fing', {
			// 当被绑定的元素插入到 DOM 中时触发
			inserted: function (el, binding, vnode) {},
		});

		// 定义混入
		Vue.mixin({
			data() {
				return {
					a: 1,
					b: 2,
				};
			},
		});

		// 给Vue原型上添加方法
		Vue.prototype.hello = permissions => {};
	},
};
