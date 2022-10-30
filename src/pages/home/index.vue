<template>
	<div class="main-page page-home">
		<demo />
		<card />
		<header1 />
		<demo />
		<div class="box">这里是主页</div>
	</div>
</template>

<script>
/* eslint-disable no-unused-vars */

import { post } from '@/utils/request.js';
export default {
	name: 'home',
	components: {},
	data() {
		return {};
	},
	mounted() {
		this.getData();
		// console.log(request);
		console.log(post);
	},
	methods: {
		getData() {
			post({
				url: '/api/login',
			});
			// get();
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
