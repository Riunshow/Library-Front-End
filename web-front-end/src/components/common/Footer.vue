<template>
	<div class="footer">
		<p>© 2018 Powered By <a target="_blanck" href="https://github.com/Riunshow">Rainbower</a></p>
	</div>
</template>

<script>
	export default {
		name: "component_name",
		data() {
			return {};
		}
	}
</script>

<style lang="scss" scoped>
	.footer {
		min-width: 1080px;
		background-color: rgb(255,255,255);
		height: 100px;
		width: 100%;
		margin-top: 50px;
		text-align: center;
		p {
			color: #555;
			top: 50px;
			position: relative;
		}
	}
</style>