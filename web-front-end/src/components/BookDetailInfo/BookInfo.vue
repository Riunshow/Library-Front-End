<template>
	<div>
		<header-nav />
		<div id="bookDetailInfo">
			<book-intro />
			<book-comments />
		</div>
		<footer-nav />
	</div>
</template>

<script>
	import HeaderNav from './../common/Header'
	import BookIntro from './BookIntro'
	import BookComments from './BookComments.vue'
	import FooterNav from './../common/Footer.vue'
	export default {
		components: {
			BookIntro,
			HeaderNav,
			BookComments,
			FooterNav
		},
		data() {
			return {};
		}
	}
</script>

<style lang="scss" scoped>
	#bookDetailInfo {
		width: 1000px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 61px; // background-color: aliceblue;
	}
</style>
