import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import user from './modules/user';
import getters from './getters';
Vue.use(Vuex);

export default new Vuex.Store({
	// vuex 模块化 + 命名空间，让多种数据分类更加明确，让代码更好维护
	modules: {
		app,
		user,
	},
	state: {
		num: 1,
		message: 'Vuex实践',
	},
	mutations: {
		sub(state, params) {
			state.num -= params.num;
		},
		save(state, params) {
			state.num += params.num;
		},
	},
	actions: {
		add(context, params) {
			context.commit('save', params);
		},
	},
	// getters用于将state里面的数据进行加工得出新的数据，类似于computed属性
	getters: {
		id: state => state.user.id,
		...getters,
	},
	// 在非生产下使用严格模式
	// 在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。
	// 这能保证所有的状态变更都能被调试工具跟踪到。
	strict: process.env.NODE_ENV !== 'production',
});
