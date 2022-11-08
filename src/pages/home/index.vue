<template>
	<div class="page-home">
		<!-- <card /> -->
		<button class="box" @click="changeData">获取数据</button>
		<router-link
			:to="{
				path: 'vuerouter',
				params: {
					id: 111,
					title: '11111',
				},
				query: {
					id: 111,
					title: '11111',
				},
			}"
			>切换路由</router-link
		>
	</div>
</template>

<script>
/* eslint-disable no-unused-vars */
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
			// this.$router.push({
			// 	path: '/vuerouter?name=11',
			// 	params: { id: 1 },
			// });
			const obj = {};
			this.defineReactive(obj, 'width', 100);
			
		},
		changeRoute() {},
	},
};
</script>

<style lang="scss">
.page-home {
	@include scrollBar();
}
</style>
