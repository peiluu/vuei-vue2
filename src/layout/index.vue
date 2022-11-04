<template>
	<div class="app-wrapper">
		<side-bar />
		<div class="wrapper-container">
			<Header />
			<el-card class="container-main">
				<router-view></router-view>
				<!-- <app-main ref="appMain">
				
			</app-main> -->
			</el-card>
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import AppMain from './components/AppMain';
import SideBar from './components/SideBar';
import Header from './components/Header';

export default {
	name: 'layout',
	components: {
		SideBar,
		AppMain,
		Header,
	},

	computed: {},
	methods: {
		// handleClickOutside() {
		// 	this.$store.dispatch('CloseSideBar', { withoutAnimation: false });
		// },
	},
	mounted() {
		// sessionStorage.setItem('appWidth', this.$refs.appMain.$el.clientWidth);
	},
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
// $bgColor: '#E9ECF0';
.app-wrapper {
	display: flex;
	@include clearfix;
	position: relative;
	height: 100%;
	width: 100%;
}
.wrapper-container {
	flex: 1;
}
.container-main {
	margin: 16px;
}
.drawer-bg {
	background: #000;
	opacity: 0.3;
	width: 100%;
	top: 0;
	height: 100%;
	position: absolute;
	z-index: 999;
}
</style>
