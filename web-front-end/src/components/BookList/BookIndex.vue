<template>
	<div id="book_info">
		<header-nav />
		<cate-header />
		<cate-main />
		<footer-nav />
	</div>
</template>

<script>
	import HeaderNav from './../common/Header'
	import FooterNav from './../common/Footer'
	import CateHeader from './BookCateHeader.vue'
	import cateMain from './BookDetail.vue'
	export default {
		components: {
			HeaderNav,
			FooterNav,
			CateHeader,
			cateMain,
		},
		data() {
			return {};
		}
	}
</script>