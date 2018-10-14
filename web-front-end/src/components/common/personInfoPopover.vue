<template>
	<div class="personCenter" @click="feature()">
		<div class="info">
			<img :src="useravatar" alt="">
			<h2>{{username}}</h2>
			<p>读书时长: {{readingTime}} </p>
			<p>积分: {{integral}}</p>
		</div>
		<div class="category">
			<ul>
				<router-link to="/myself/mycollect">
					<li>
						<i class="el-icon-tickets"></i>我的书籍
					</li>
				</router-link>
				<router-link to="/myarticle">
					<li>
						<i class="el-icon-goods"></i>我的文章
					</li>
				</router-link>
				<router-link to="/write">
					<li><i class="el-icon-menu"></i>写文章</li>
				</router-link>
				<!-- <li><i class="el-icon-setting"></i>个人设置</li> -->
			</ul>
		</div>
		<div class="memory">
			<div v-if="hasrecentBook">
				<h2><i class="el-icon-time"></i>{{recentBook.title}}</h2>
				<p>{{recentBook.chapter}} {{recentBook.chpaterHead}}</p>
				<!-- <el-button type="text">继续</el-button> -->
			</div>
			<div v-else>
				<p>暂无最近阅读...</p>
			</div>
		</div>
		<div class="logout">
			<el-button type="text" @click="logout">安全退出</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: '', // 用户名字
				readingTime: '', // 读书时长
				useravatar: '',
				integral: '', // 积分
				recentBook: { // 最近阅读 
					title: '', // 书名
					chapter: '', // 作者
					chpaterHead: '' // 第几章
				},
				hasrecentBook: false,
			};
		},
		created() {
			this.getData()
		},
		computed: {},
		methods: {
			// 获取用户基本信息, 名字,读书时长,积分
			getData() {
				if (sessionStorage.user) {
					const user = JSON.parse(sessionStorage.user)
					this.username = user.nickname;
					this.useravatar = user.avatar
					this.readingTime = user.readingTime;
					this.integral = user.integral;
					// 判断用户是否有最近阅读记录
					if (typeof user.recentBook == 'undefined' ||
						typeof user.recentBook.title == 'undefined' ||
						typeof user.recentBook.chapter == 'undefined' ||
						typeof user.recentBook.chpaterHead == 'undefined') {
						this.hasrecentBook = false;
					} else {
						this.recentBook.title = user.recentBook[0].title;
						this.recentBook.chapter = user.recentBook[0].chapter;
						this.recentBook.chpaterHead = user.recentBook[0].chpaterHead;
						this.hasrecentBook = true;
					}
				}
			},
			// 退出
			logout() {
				this.$axios
					.get('/user/logout')
					.then(() => {
						sessionStorage.clear();
						location.reload();
						this.$router.push({
							path: '/home'
						});
					})
			},
			feature() {
				// this.$message('暂未开发,敬请期待');
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
				background-color: #e0e0e0;
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
				a {
					color: #555;
				}
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
					cursor: pointer;
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