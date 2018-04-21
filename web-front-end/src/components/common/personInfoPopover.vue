<template>
	<div class="personCenter">
		<div class="info">
			<img src="./../../assets/logo.png" alt="">
			<h2>{{username}}</h2>
			<p>经验: {{experience}} </p>
			<p>积分: {{integral}}</p>
		</div>
		<div class="category">
			<ul>
				<li><i class="el-icon-tickets"></i>我的书籍</li>
				<li><i class="el-icon-goods"></i>订单中心</li>
				<li><i class="el-icon-menu"></i>积分商城</li>
				<li><i class="el-icon-setting"></i>个人设置</li>
			</ul>
		</div>
		<div class="memory">
			<h2><i class="el-icon-time"></i>{{memoryBook.title}}</h2>
			<p>{{memoryBook.chapter}} {{memoryBook.chpaterHead}}</p>
			<el-button type="text">继续</el-button>
		</div>
		<div class="logout">
			<el-button type="text">安全退出</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				experience: '',
				integral: '',
				memoryBook: {
					title: '',
					chapter: '',
					chpaterHead: ''
				},
			};
		},
		mounted(){
			this.getData()
		},
		methods: {
			getData() {
				const user = JSON.parse(sessionStorage.user)

				if (sessionStorage.user) {
					this.username = user.username
					this.experience = user.experience
					this.integral = user.integral
					this.memoryBook.title = user.memoryBook.title
					this.memoryBook.chapter = user.memoryBook.chapter
					this.memoryBook.chpaterHead = user.memoryBook.chpaterHead
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.personCenter {
		height: 390px;
		.info {
			// background-color: aquamarine;
			margin-top: 10px;
			margin-left: 10px;
			img {
				height: 70px;
				width: 70px;
				border-radius: 35px;
				background-color: black;
				float: left;
			}
			h2,
			p {
				float: left;
				margin-left: 30px;
			}
			h2 {
				font-size: 18px;
				color: #555;
				width: 140px;
			}
			p {
				font-size: 13px;
				color: #888;
				margin-top: 20px;
			}
		}
		.category {
			top: 20px;
			position: relative;
			text-align: center;
			ul {
				overflow: hidden;
				width: 100%;
				li {
					i {
						margin-right: 10px;
					}
					height: 10%;
					width: 50%;
					padding: 10%;
					font-size: 13px;
					box-sizing: border-box;
					float: left;
				}
				li:hover {
					background-color: #E0E0E0;
					color: #000;
				}
			}
		}
		.memory {
			top: 20px;
			position: relative;
			padding: 10%;
			h2,
			p {
				float: left;
			}
			h2 {
				i {
					margin-right: 5px;
				}
				width: 180px;
			}
			p {
				margin-left: 20px;
				margin-top: 10px;
			}
			.el-button {
				float: right;
			}
		}
		.logout {
			text-align: center;
			top: 75px;
			position: relative;
			border-top: 1px solid #E0E0E0;
		}
	}
</style>