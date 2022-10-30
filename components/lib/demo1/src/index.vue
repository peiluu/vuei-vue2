<template>
	<section class="c-demo1">
			这里是demo组件
	</section>
</template>

<script>
export default {
	name: 'demo1',
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
