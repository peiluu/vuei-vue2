<!-- eslint-disable vue/no-unused-components -->
<template>
	<div id="app">
		<!--登入动画-->
		<transition name="rotate-fall">
			<!-- 不需要layout组件包裹的页面 -->
			<!-- <template v-if="isComponentRouter"> -->
				<transition>
					<keep-alive :include="cachedViews">
						<router-view :key="key"></router-view>
					</keep-alive>
				</transition>
			<!-- </template> -->

			<!-- <template v-else>
				<layout></layout>
			</template> -->
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
		cachedViews() {
			return this.$store.state.app.cachedViews;
		},
		key() {
			return this.$route.fullPath;
		},
		// 是否是组件路由，显示在layout里面
		isComponentRouter() {
			return notComponentRouter.includes(this.$route.path);
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
