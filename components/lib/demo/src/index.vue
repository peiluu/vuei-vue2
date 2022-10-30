<template>
	<section class="c-demo">
			这里是demo组件
	</section>
</template>

<script>
export default {
	name: 'demo',
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
