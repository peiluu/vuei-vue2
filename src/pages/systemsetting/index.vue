<template>
	<div class="p-page">这里是系统设置页面</div>
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
$bG: 'red';
.page-home {
	.box {
		color: $bG;
		// @include box
	}
}
</style>
