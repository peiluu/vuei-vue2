<template>
	<section class="c-card">
			这里是card组件
	</section>
</template>

<script>
export default {
	name: 'card',
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
