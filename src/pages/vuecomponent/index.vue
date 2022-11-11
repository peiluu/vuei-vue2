<template>
	<div class="page-vuecomponent">
		<h6>vue组件相关</h6>
		<!-- <nav /> -->
	</div>
</template>

<script>
/* eslint-disable no-unused-vars */
import Vue from 'vue';
// 每次调用Vue.extend函数，返回的都是一个全新的VueComponent 
// const nav = Vue.extend({
// 	name: 'nav',
// 	template: '',
// });

export default {
	name: 'vuecomponent',
	components: {
		// nav,
	},
	data() {
		return {};
	},
	beforeMount() {},
	mounted() {
		console.log('1111111', this);
	},
	methods: {
		definObj() {
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
		},

		// 用闭包的方法替换临时变量temp，封装defineproperty方法
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

		changeData() {
			const obj = {};
			this.defineReactive(obj, 'width', 100);
			console.log(obj);
		},
	},
};
</script>

<style lang="scss">
.page-defineproperty {
	@include scrollBar();
}
</style>
