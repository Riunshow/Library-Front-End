<template>
	<div class="headerModel">
		<div class="logoimg">
			<img src="./../../../static/logo.png" alt="" @click="toHomePage">
		</div>
		<!-- 菜单 -->
		<el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal"router>
			<el-menu-item index="/home">首页</el-menu-item>
			<el-menu-item index="/ground">操场</el-menu-item>
			<el-menu-item index="/book">书库</el-menu-item>
		</el-menu>
		<!-- 搜索框 -->
		<!-- <el-input placeholder="请输入图书名称" v-model="search" clearable></el-input> -->
		<el-row>
			<!-- 已登录 -->
			<div v-if="isLogin">
				<el-popover ref="popoverInfo" placement="bottom" width="300" v-model="info" trigger="hover">
					<personal-info />
				</el-popover>
				<img :src="user.avatar" alt="" v-popover:popoverInfo>
				<!-- 通知 -->
				<!-- <el-badge is-dot class="item">
					<i class="el-icon-bell"></i>
				</el-badge> -->
				<el-button class="download" round icon="el-icon-download" v-popover:appupload>下载APP</el-button>
			</div>
			<!-- 未登录 -->
			<div v-else>
				<!-- 注册 -->
				<!-- <el-button class="login" type="text" @click="dialogFormLRegister = true">注册</el-button>
				<el-dialog title="注册" :visible.sync="dialogFormLRegister" :modal-append-to-body="false">
					<el-form :model="registerForm" status-icon :rules="checkTwicePwdRules" ref="registerForm" label-width="100px" class="demo-ruleForm">
						<el-form-item label="用户名" :label-width="formLabelWidth">
							<el-input v-model="registerForm.id" auto-complete="off"></el-input>
						</el-form-item>
						<el-form-item label="密码" prop="pass" :label-width="formLabelWidth">
							<el-input type="password" v-model="registerForm.pass" auto-complete="off"></el-input>
						</el-form-item>
						<el-form-item label="确认密码" prop="checkPass" :label-width="formLabelWidth">
							<el-input type="password" v-model="registerForm.checkPass" auto-complete="off"></el-input>
						</el-form-item>
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button @click="resetForm('registerForm')">重 置</el-button>
						<el-button type="primary" @click="register('registerForm')">确 定</el-button>
					</div>
				</el-dialog> -->
				<!-- 登录 -->
				<el-button class="login" type="text" @click="dialogFormLogin = true">登录</el-button>
				<el-dialog title="登录" :visible.sync="dialogFormLogin" :modal-append-to-body="false">
					<el-form :model="loginForm">
						<el-form-item label="用户名" :label-width="formLabelWidth">
							<el-input v-model="loginForm.id" auto-complete="off"></el-input>
						</el-form-item>
						<el-form-item label="密码" :label-width="formLabelWidth">
							<el-input v-model="loginForm.password" auto-complete="off" type="password"></el-input>
						</el-form-item>
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button @click="">取 消</el-button>
						<el-button type="primary" @click="login">确 定</el-button>
					</div>
				</el-dialog>
				<!-- 下载 app -->
				<el-button class="download" round icon="el-icon-download" v-popover:appupload>下载APP</el-button>
			</div>
			<!-- app 下载 浮层 -->
			<el-popover ref="appupload" placement="bottom" width="100" v-model="appupload" trigger="click">
				<img src="./../../../static/appload.png" alt="" style="width: 150px;height:150px;">
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
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if (this.registerForm.checkPass !== '') {
						this.$refs.registerForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.registerForm.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				search: '',
				appupload: false,
				info: false,
				isLogin: false,
				dialogFormLogin: false,
				dialogFormLRegister: false,
				user: {},
				registerForm: {
					id: '',
					pass: '',
					checkPass: '',
				},
				loginForm: {
					id: '',
					password: '',
				},
				formLabelWidth: '120px',
				changeShow: {
					type: 'password',
					class: 'el-icon-star-on'
				},
				eyes: true,
				checkTwicePwdRules: {
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}]
				}
			};
		},
		created() {
			this.isHasData()
		},
		methods: {
			// 密码可见切换
			changeShowPwd() {
				if (this.eyes) {
					this.changeShow = {
							type: 'text',
							class: 'el-icon-star-off'
						},
						this.eyes = !this.eyes;
				} else {
					this.changeShow = {
							type: 'password',
							class: 'el-icon-star-on'
						},
						this.eyes = !this.eyes;
				}
			},
			// 重置
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			// 注册
			// register(formName) {
			// 	this.$refs[formName].validate((valid) => {
			// 		if (valid) {
			// 			// 关闭注册弹出框
			// 			this.dialogFormLRegister = false
			// 			const _this = this
			// 			this.$axios.post('/user/register', {userList: [{
			// 				account: _this.registerForm.id, // 用户账号
			// 				password: _this.registerForm.pass // 用户密码
			// 			}]
			// 			}).then(results => {
			// 				this.$message({
			// 					message: '注册成功,请登录',
			// 					type: 'success'
			// 				});
			// 				// 注册成功
			// 				this.dialogFormLogin = true;
			// 				_this.loginForm.id = _this.registerForm.id
			// 				_this.loginForm.password = _this.registerForm.pass
			// 			}).catch((err) => {
			// 				this.$message.error(err.response.data.data);
			// 				this.dialogFormLRegister = true
			// 			})
			// 		} else {
			// 			return false;
			// 		}
			// 	});
			// },
			// 登录
			login() {
				this.dialogFormLogin = false
				this.$axios.post('/user/login', {
					account: this.loginForm.id,
					password: this.loginForm.password
				}).then(results => {
					// error为false, 则设置登录
					results.data.error === false ? this.isLogin = true : this.isLogin = false
					sessionStorage.user = JSON.stringify(results.data.data.user)
					this.user = JSON.parse(sessionStorage.user)
					console.log(this.user)
				}).catch((err) => {
					// this.$message.error(err.response.data.data);
					console.log(err);
					this.dialogFormLogin = true
					this.$message.error('用户名或密码错误');
				})
			},
			// 判断是否登录,展示 用户信息 或 登录注册
			isHasData() {
				sessionStorage.user ? this.isLogin = true : this.isLogin = false
			},
			toHomePage() {
				this.$router.push({
					path: '/home'
				})
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
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		.logoimg {
			height: 100%;
			width: 200px;
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
				color: #000;
			}
			li:hover {
				background-color: #e0e0e0;
			}
		}
		.el-input {
			margin-top: 10px; // margin-left: 30px;
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
			img:hover {
				background-color: #e0e0e0;
			}
		}
	}
</style>

<style>
	.el-input {
		width: 250px !important;
	}
</style>
