<template>
	<div>
		<header-nav />
		<cate-header />
		<footer-nav />
	</div>
</template>

<script>
	import HeaderNav from './../common/Header'
	import FooterNav from './../common/Footer'
	import CateHeader from './BookCateHeader.vue'
	export default {
		components: {
			HeaderNav,
			FooterNav,
			CateHeader,
		},
		data() {
			return {};
		}
	}
</script>

<style lang="css" scoped>

</style>