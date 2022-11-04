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
		definObj() {
			// this.$set(this.data, 'width', 100);
			const obj = {};
			let temp = 0;
			Object.defineProperty(obj, 'name', {
				// 数据劫持,
				get() {
					console.log('你在访问obj.ame');
					return temp;
				},
				set(newVal) {
					temp = newVal;
					console.log('你在改变obj.ame');
				},
			});
			obj.name = 2;
			obj.name++;
			console.log(obj.name);
		},
		// 用闭包的方法替换临时变量temp
		defineReactive(data, key, value) {
			if (arguments.length == 2) {
				value = data[key];
			}
			Object.defineProperty(data, key, {
				enumerable: true,
				configurable: true,
				// 数据劫持,
				get() {
					console.log('你在访问obj.ame');
					return value;
				},
				set(newVal) {
					value = newVal;
					console.log('你在改变obj.ame');
				},
			});
		},

		getData() {
			// commit 触发mutations
			// this.$store.commit('app/saveApps', {
			// 	width: 100,
			// 	age: 11,
			// });
			// // dispatch 触发actions
			// this.$store.dispatch('app/updateApps', {
			// 	width: 100,
			// 	sex: 'M'
			// });
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
			const obj = {};
			this.defineReactive(obj, 'width', 100);
			console.log(obj);
		},
	},
};
</script>

<style lang="scss">
.page-home {
	@include scrollBar();
}
</style>
