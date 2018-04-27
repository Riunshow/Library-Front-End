<template>
	<div>
		<header-nav />
		<personal-nav />
		<personal-class />
	</div>
</template>

<script>
	import HeaderNav from './../common/Header'
	import PersonalNav from './PersonalHeader.vue'
	import PersonalClass from './MyClass.vue'
	export default {
		components: {
			HeaderNav,
			PersonalNav,
			PersonalClass,
		},
		data() {
			return {};
		}
	}
</script>