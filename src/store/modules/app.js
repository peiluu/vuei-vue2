// import config from '@/config';

export default {
	namespaced: true,
	state: {
		apps: {},
	},
	mutations: {
		save(state, param) {
			return {
				...state,
				...param,
			};
		},
	},
	actions: {
		updateStore(context, param) {
			context.commit('save', param);
		},
	},
	getters: {
		apps: state => state.app.apps,
	},
};
