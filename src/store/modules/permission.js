// import config from '@/config';

export default {
	namespaced: true,
	state: {
		apps: {
			data: {},
			cachedViews: ['/vuerouter'],
		},
		width: 0,
	},
	mutations: {
		// store 中的状态是响应式的， Mutation 需遵守 Vue 的响应规则、
		// 无法s更新整个响应式对象，只能更新
		// 对于已经创建的实例，Vue 不允许动态添加根级别的响应式 property
		saveApps(state, params) {
			state.apps = {
				...state.apps,
				...params,
			};
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
