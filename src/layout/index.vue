<template>
	<div class="app-wrapper">
		<side-bar />
		<div class="wrapper-container">
			<Header />
			<el-card class="container-main">
				<router-view></router-view>
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
.app-wrapper {
	display: flex;
	@include clearfix;
	position: relative;
	height: 100vh;

	.wrapper-container {
		background: $bgColor;
		flex: 1;
		height: 100vh;
	}
	.container-main {
		margin: 16px;
		height: 100%;
	}
}
</style>
