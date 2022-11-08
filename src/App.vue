<!-- eslint-disable vue/no-unused-components -->
<template>
	<div id="app">
		<!--登入动画-->
		<transition name="rotate-fall">
			<!-- 不需要layout组件包裹的页面 -->
			<template v-if="notComponentRouter.includes(routerPath)">
				<router-view></router-view>
			</template>

			<template v-else>
				<layout></layout>
			</template>
		</transition>
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

import layout from '@/layout/index.vue';
import { notComponentRouter } from '@/router';

export default {
	name: 'App',
	components: {
		// eslint-disable-next-line vue/no-unused-components
		layout,
	},
	mounted() {},
	computed: {
		routerPath() {
			return this.$route.path;
		},
		notComponentRouter() {
			return notComponentRouter;
		},
	},
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;

	.box {
		// @include box
	}
}
</style>
