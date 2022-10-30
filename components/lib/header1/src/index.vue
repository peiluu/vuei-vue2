<template>
	<section class="c-header">
			这里是header组件
	</section>
</template>

<script>
export default {
	name: 'header1',
	computed: {
		// cachedViews() {
		// 	// return this.$store.state.tagsView.cachedViews;
		// },
		key() {
			return this.$route.fullPath;
		},
	},
};
</script>
