<template>
	<div class="page-directive">
		<h4>vue内置指令及自定义指令</h4>

		<div>你仍然需要对普通 DOM 元素进行底层操作，这时候就会用到自定义指令。</div>
		<input v-focus:title="200" />
		<button v-concat:arg.foo.bar="'expression'">v-concat</button>
		<button v-big-in>v-big-in</button>
		<button v-big-out:funcion="['onlineManager:btn_forceLogout']">
			v-big-out
		</button>

		<el-button
			size="mini"
			type="text"
			icon="el-icon-delete"
			v-permission:function="['onlineManager:btn_forceLogout']"
			>权限按钮</el-button
		>
	</div>
</template>

<script>
/* eslint-disable no-unused-vars */
import Vue from 'vue';

// 全局自定义指令，非必要不定义成全局指令
Vue.directive('big-in', {
	bind(el) {
		// console.log(1, el);
	},
	inserted(el) {
		// console.log(2, el);
		el.focus();
	},
	update(el) {
		// console.log(3, el);
	},
});
Vue.directive('big-out', (el, binding) => {
	// console.log(binding);
});

export default {
	name: 'directive',
	components: {},
	data() {
		return {};
	},
	beforeMount() {},
	mounted() {},
	methods: {},
	directives: {
		// 所有指令相关的this，都指向windows，不是vue，因为指令是为了去操作dom，
		// 局部注册 - 对象式自定义指令，里面有钩子函数，按照规则依次执行
		focus: {
			bind(el) {
				// console.log(1, el);
			},
			inserted(el) {
				// console.log(2, el);
				el.focus();
			},
			update(el) {
				// console.log(3, el);
			},
		},
		// 局部注册 - 对象式自定义指 - bind 和 update 时触发相同行为
		// focus函数何时会被调用:(1) 指令与元素成功绑定时（初始化）（2）指令所在的模板被重新解析时
		concat(el, binding) {
			// binding.modifiers = { bar: true, foo: true }
			// console.log('---', binding);
			el.style.background = '#fff';
		},
		'big-number'(el, binding) {},
	},
};
</script>
