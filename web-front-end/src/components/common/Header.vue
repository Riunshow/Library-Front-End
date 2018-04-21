<template>
	<div class="headerModel">
		<div class="logoimg">
			<img src="./../../assets/logo.png" alt="">
		</div>
		<!-- 菜单 -->
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			<el-menu-item index="1">免费书籍</el-menu-item>
			<el-menu-item index="2">操场</el-menu-item>
			<el-menu-item index="3">手记</el-menu-item>
		</el-menu>
		<!-- 搜索框 -->
		<el-input placeholder="请输入图书名称" v-model="search" clearable></el-input>
		<el-row>
			
			<!-- 已登录 -->
			<div v-if="isLogin">
				<el-popover ref="popoverInfo" placement="bottom" width="300" v-model="info" trigger="hover">
					<personal-info />
				</el-popover>
				<img src="./../../assets/logo.png" alt="" v-popover:popoverInfo>
				<!-- 通知 -->
				<el-badge is-dot class="item">
					<i class="el-icon-bell"></i>
				</el-badge>
				<el-button class="download" round icon="el-icon-download" v-popover:appupload>下载APP</el-button>
			</div>
			<!-- 未登录 -->
			<div v-else>
				<el-button class="login" type="text" @click="dialogFormVisible = true">登录</el-button>
				<el-dialog title="登录" :visible.sync="dialogFormVisible">
					<el-form :model="form">
						<el-form-item label="用户名" :label-width="formLabelWidth">
							<el-input v-model="form.name" auto-complete="off"></el-input>
						</el-form-item>
						<el-form-item label="密码" :label-width="formLabelWidth">
							<el-input v-model="form.password" auto-complete="off" type="password"></el-input>
						</el-form-item>
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button @click="">取 消</el-button>
						<el-button type="primary" @click="login">确 定</el-button>
					</div>
				</el-dialog>
				<el-button class="download" round icon="el-icon-download" v-popover:appupload>下载APP</el-button>
			</div>
			<!-- app 下载 -->
			<el-popover ref="appupload" placement="bottom" width="100" v-model="appupload" trigger="click">
				<img src="./../../assets/appload.png" alt="" style="width: 150px;height:150px;">
			</el-popover>
		</el-row>
	</div>
</template>

<script>
	import PersonalInfo from './../common/personInfoPopover.vue'
	export default {
		components: {
			PersonalInfo
		},
		data() {
			return {
				activeIndex: '1',
				activeIndex2: '1',
				search: '',
				appupload: false,
				info: false,
				isLogin: false,
				dialogFormVisible: false,
				form: {
					name: '',
					password: '',
				},
				formLabelWidth: '120px'
			};
		},
		created() {
			this.isHasData()
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			login() {
				this.dialogFormVisible = false
				const _this = this
				this.$axios.post('/user/login', {
					user_num: _this.form.name,
					user_password: _this.form.password
				}).then(results => {
					console.log(results.data)
					results.data.code === 0 ? _this.isLogin = true : _this.isLogin = false
					sessionStorage.user = JSON.stringify(results.data)
				})
			},
			isHasData() {
				sessionStorage.user ? this.isLogin = true : this.isLogin = false
			}
		}
	}
</script>

<style lang="scss" scoped>
	.headerModel {
		min-width: 1080px;
		background-color: #fff;
		height: 60px;
		width: 100%;
		box-shadow: 0 4px 8px 0 rgba(7, 17, 27, .1);
		.logoimg {
			height: 100%;
			width: 200px; // margin-left: 30px; 
			// background-color: antiquewhite;
			float: left;
			text-align: center;
			img {
				margin-top: 5px;
				height: 50px;
				width: 50px;
			}
		}
		.el-menu {
			float: left;
			li {
				margin-right: 20px;
			}
		}
		.el-input {
			margin-top: 10px;
			margin-left: 30px;
			float: left;
		}
		.el-row {
			margin-top: 10px;
			float: right;
			.download {
				margin-right: 20px;
				float: right;
			}
			.login {
				float: right;
				margin-right: 30px;
			}
			.item {
				margin-top: 10px;
				font-size: 20px;
				margin-right: 40px;
				float: right;
			}
			img {
				height: 30px;
				width: 30px;
				border-radius: 15px;
				background-color: black;
				float: right;
				margin-top: 5px;
				margin-right: 30px;
			}
		}
	}
</style>

<style>
	.el-input {
		width: 250px;
	}
</style>
