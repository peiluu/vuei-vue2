<template>
	<div class="page-vuerouter">
		<card />
	
	</div>
</template>

<script>
/* eslint-disable no-unused-vars */
export default {
	name: 'vuerouter',
	components: {},
	data() {
		return {};
	},
	props: [],
	beforeMount() {},
	mounted() {
		console.log(this)

	},
	methods: {
		
		changeData() {
			const obj = {};
			this.defineReactive(obj, 'width', 100);
			console.log(obj);
		},
	},
};
</script>

<style lang="scss">
.page-vuerouter {
	@include scrollBar();
}
</style>
