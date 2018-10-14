<template>
	<div id="opt">
		<!-- <div class="opt_head">
			<ul>
				<li>
					<i class="el-icon-goods"></i>书城
				</li>
				<li>
					<i class="el-icon-message"></i>私信
				</li>
				<li>
					<i class="el-icon-bell"></i>通知
				</li>
				<li>
					<i class="el-icon-service"></i>咨询
				</li>
			</ul>
		</div> -->
		<!--  -->
		<div class="opt_footer">
			<div class="opt_footer_block">
				<ul>
					<li @click="redirectToMyCollect()"><i class="el-icon-star-on"></i>我的收藏</li>
					<li @click="redirectToMyArticle()"><i class="el-icon-question"></i>我发表的文章</li>
					<!-- <li><i class="el-icon-phone"></i>我的邀请</li> -->
					<li @click="feature()"><i class="el-icon-more"></i>更多内容敬请期待</li>
					<li>© 2018 Powered By <a target="_blanck" href="https://github.com/Riunshow">Rainbower</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			feature() {
				this.$message('暂未开发,敬请期待');
			},
			redirectToMyCollect() {
				console.log(1);
				this.$router.push({
					path: '/myself/mycollect'
				})
			},
			redirectToMyArticle() {
				console.log(1);
				this.$router.push({
					path: '/myarticle'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	#opt {
		color: #8590a6;
		width: 250px;
		height: 400px;
		.opt_head {
			width: 100%;
			height: 150px;
			margin-bottom: 15px;
			border-bottom: 1px solid #eee;
			background-color: rgb(255, 255, 255);
			box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
			ul {
				overflow: hidden;
				width: 100%;
				a {
					color: #555;
				}
				i {
					// margin-right: 5px;
				}
				li {
					display: -webkit-flex;
					display: flex;
					flex-direction: column;
					text-align: center;
					height: 75px;
					line-height: 75px;
					width: 50%;
					font-size: 14px;
					box-sizing: border-box;
					float: left;
					i {
						top: 20px;
						position: relative;
					}
				}
				li:hover {
					background-color: #E0E0E0;
					color: #000;
					cursor: pointer;
				}
			}
		}
		.opt_footer {
			box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
			background-color: rgb(255, 255, 255);
			width: 100%;
			height: 335px;
			.opt_footer_block {
				height: 335px;
				ul {
					font-size: 14px;
					overflow: hidden;
					width: 100%;
					a {
						color: #555;
					}
					i {
						margin-right: 15px;
					}
					li {
						padding-left: 30px;
						flex-direction: column;
						text-align: left;
						height: 50px;
						line-height: 50px;
						width: 100%;
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
		}
	}
</style>