<template>
	<div id="my_class">
		<el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router>
			<el-menu-item index="/myself/nearlyread">最近阅读</el-menu-item>
			<el-menu-item index="/myself/mycollect">我的收藏</el-menu-item>
			<!-- <el-menu-item index="/myself/fans">我的粉丝</el-menu-item>
			<el-menu-item index="/myself/follows">我的关注</el-menu-item> -->
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
				read: false,
				fans: false
			};
		},
		created() {
			this.checkURL()
		},
		methods: {
			checkURL() {
				if (this.$route.fullPath == '/myself/mycollect' || this.$route.fullPath == '/myself/nearlyread') {
					this.read = true
					this.fans = false
				} else if (this.$route.fullPath == '/myself/fans' || this.$route.fullPath == '/myself/follows') {
					this.fans = true
					this.read = false
				}
			}
		},
		watch: {
			// 如果路由有变化，会再次执行该方法
			"$route": "checkURL"
		}
	}
</script>

<style lang="scss" scoped>
	#my_class {
		width: 800px;
		// height: 100%;
		margin-left: auto;
		margin-right: auto;
		.el-menu {
			// width: 384px;
			// background-color: rgb(244, 244, 244) !important;
			.is-active {
				background-color: rgb(244, 244, 244);
			}
			.el-menu-item:hover {
				background-color: rgb(244, 244, 244);
			}
		}
	}
</style>