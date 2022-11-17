/* eslint-disable no-unused-vars */

/**
 * 关于不同版本的vue
 * 1. vue.js 和vue.runtime.xxx.js的区别
 * （1）vue.js是完整版的vue，包含核心功能 + 模板解析器（template）
 * （2）vue.runtime.xxx.js是运行版的vue（打包后体积很小），只包含核心功能，没有模板解析器
 
 * 2. 因为vue.runtime.xxx.js 没有模板解析器，所以不能使用template配置项，徐亚
 		需要使用render函数接收到的creatElement函数去指定具体内容
 */

import Vue from 'vue';
// import Vue from 'vue/dist/vue';

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

Vue.use(ElementUI);
import router from '@/router';
import store from '@/store';

// 引入自定义插件
import plugin from '@/plugin/index';
// Vue.use调用insatll方法，应用插件
Vue.use(plugin, { store });

import '@/styles/common.scss'; // global css
import App from './App.vue';
// import '../components/css/demo.scss';
// import card from '../components/lib/card/index.js';

// 调用自定义组件库
import 'vuipeilu/componentsdist/css/index.css';
import VuiPeilu from 'vuipeilu';

Vue.use(VuiPeilu);

const demo = Vue.extend({});
Vue.prototype.x = demo;
// console.log(new demo());

new Vue({
	el: '#app',
	router, // 配置路由器
	store,
	// template: `<div>1</div>`
	/**
	* @desption render函数接受一个creatElement函数，创建html元素，简化之后 => render: h => h(App)
		如果引入的是一个不能解析template的vue, 需要借助render函数将app组件放入容器中 
		render: creatElement => {
			return c(App);
		}
	*/
	render: h => h(App),
	beforeCreate() {
		/**
		 * 安装全局事件总线（bus - 总线），把vm对象添加到Vue原型对象 就形成全局事件总线（vm）
		 	 全局所有的Vc和Vm都能访问 Vue.prototype.$bus = Vm
		 * 一个重要的内置关系  VueComponet.prototype.__proto__ = Vue.prototype
			  Creat.prototype.__proto__ === Object.prototype
		 */
		Vue.prototype.$bus = this;
	},
});
