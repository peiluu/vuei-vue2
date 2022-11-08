<template>
	<div class="page-systemsetting">这里是系统设置页面</div>
</template>

<script>
/* eslint-disable no-unused-vars */

import { post } from '@/utils/request.js';
export default {
	name: 'systemsetting',
	components: {},
	data() {
		return {
			a:1
		};
	},
	mounted() {
		// console.log(request);

	},
	methods: {},
};
</script>

<style lang="scss">
$bG: 'red';
.page-systemsetting {
	.box {
		color: $bG;
		// @include box
	}
}
</style>
