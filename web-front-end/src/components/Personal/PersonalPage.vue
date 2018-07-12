<template>
	<div>
		<header-nav />
		<personal-nav />
		<personal-class />
		<FooterNav />
	</div>
</template>

<script>
	import HeaderNav from './../common/Header'
	import PersonalNav from './PersonalHeader.vue'
	import PersonalClass from './MyClass.vue'
	import FooterNav from './../common/Footer'

	export default {
		components: {
			HeaderNav,
			PersonalNav,
			PersonalClass,
			FooterNav,
		},
		data() {
			return {};
		}
	}
</script>