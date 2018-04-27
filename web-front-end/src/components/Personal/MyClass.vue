<template>
	<div id="my_class">
		<el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router>
			<el-menu-item index="/myself/nearlyread">最近阅读</el-menu-item>
			<el-menu-item index="/myself/mycollect">我的收藏</el-menu-item>
		</el-menu>
		<div class="personal_block">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			};
		}
	}
</script>

<style lang="scss" scoped>
	#my_class {
		width: 800px;
		height: 100%;
		margin-left: auto;
		margin-right: auto;
		.el-menu {
			width: 192px;
			background-color: rgb(244, 244, 244);
			.is-active {
				background-color: rgb(244, 244, 244);
			}
			.el-menu-item:hover {
				background-color: rgb(244, 244, 244);
			}
		}
	}
</style>