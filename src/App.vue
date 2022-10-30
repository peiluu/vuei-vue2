<template>
	<div id="app">
		<!--登入动画-->
		<transition name="rotate-fall">
			<layout></layout>
			
			<!-- <router-view class="app-router-view"></router-view> -->
		</transition>
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

import layout from '@/layout/index.vue';

export default {
	name: 'App',
	components: {
		layout,
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
