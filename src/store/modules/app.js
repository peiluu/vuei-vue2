// import config from '@/config';

export default {
	namespaced: true,
	state: {
		apps: {
			data: {}
		},
		width: 0,
	},
	mutations: {
		// store 中的状态是响应式的， Mutation 需遵守 Vue 的响应规则、
		// 无法s更新整个响应式对象，只能更新
		saveApps(state, params) {
			state.apps = {
				...state.apps,
				...params,
			};
			console.log(state);
		},
	},
	actions: {
		updateApps(context, params) {
			context.commit('saveApps', params);
		},
	},
	getters: {
		apps: state => state.app.apps,
	},
};
