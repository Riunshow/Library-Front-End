<template>

</template>

<script>
	import Bus from './bus.js'
	export default {
		data() {
			return {};
		},
		mounted() {
			const _this = this
			Bus.$on('msg', (e) => {
				console.log(e);
			})
		}
	}
</script>

<style lang="css" scoped>

</style>