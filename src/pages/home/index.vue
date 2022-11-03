<template>
	<div class="main-page page-home">
		<!-- <card /> -->
		<button class="box" @click="changeData">获取数据</button>
	</div>
</template>

<script>
/* eslint-disable no-unused-vars */

// import { post, get, customePost } from '@/utils/request.js';
import store from '@/store';
export default {
	name: 'home',
	components: {},
	data() {
		return {};
	},
	beforeMount() {},
	mounted() {
		this.getData();
	},
	methods: {
		getData() {
			// commit 触发mutations
			this.$store.commit('app/saveApps', {
				width: 100,
				age: 11,
			});

			// dispatch 触发actions
			this.$store.dispatch('app/updateApps', {
				width: 100,
				sex: 'M'
			});
			// customePost({
			// 	method: 'post',
			// 	url: '/fxfx/deleteCollection',
			// 	params: { name: 1 },
			// });
			// get({
			// 	url: '/api/login/2',
			// });
			// post({
			// 	url: '/api/login/2',
			// });
		},
		changeData() {
			console.log(this.$store.state);
		},
	},
};
</script>

<style lang="scss">
.page-home {
}
</style>
