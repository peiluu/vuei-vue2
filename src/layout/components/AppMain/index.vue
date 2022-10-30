<template>
	<section class="app-main">
		<slot></slot>
	</section>
</template>

<script>
export default {
	name: 'AppMain',
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
