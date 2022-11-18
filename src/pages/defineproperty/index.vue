<template>
	<div class="page-defineproperty">
		<h4>Vue Defineproperty</h4>

		<el-button class="box" @click="changeData">获取数据</el-button>
	</div>
</template>

<script>
/* eslint-disable no-unused-vars */

export default {
	name: 'defineproperty',
	components: {},
	data() {
		return {};
	},
	beforeMount() {},
	mounted() {},
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
