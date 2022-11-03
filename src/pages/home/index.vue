<template>
	<div class="main-page page-home">
		<!-- <card /> -->
		<div class="box">这里是主页</div>
	</div>
</template>

<script>
/* eslint-disable no-unused-vars */

import { post, get, customePost } from '@/utils/request.js';
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
			customePost({
				method: 'post',
				url: '/fxfx/deleteCollection',
				params: { name: 1 },
			});
				get({
					url: '/api/login/2',
				});
			// post({
			// 	url: '/api/login/2',
			// });
		},
	},
};
</script>

<style lang="scss">
.page-home {
	.box {
		@include circle;
	}
}
</style>
