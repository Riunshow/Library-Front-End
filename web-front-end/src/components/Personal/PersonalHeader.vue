<template>
	<div class="personal_header">
		<img src="./../../../static/logo.png" alt="">
		<div class="personInfo">
			<div class="name">
				user
			</div>
			<div class="info">
				<ul>
					<li>
						<p>读书时长</p>
						<p>213h</p>
					</li>
					<li>
						<p>积分</p>
						<p>2000</p>
					</li>
					<li>
						<p>粉丝</p>
						<p>20</p>
					</li>
					<li>
						<p>关注</p>
						<p>10</p>
					</li>
					<li>
						<el-button type="primary" size="mini" plain>签到</el-button>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		}
	}
</script>

<style lang="scss" scoped>
	.personal_header {
		min-width: 1300px;
		height: 150px;
		width: 100%;
		color: #fff;
		margin-top: 61px;
		background-image: url('https://www.imooc.com/static/img/u/temp1.png');
		img {
			height: 90px;
			width: 90px;
			border-radius: 50px;
			border: 5px solid #eee;
			background-color: #1a1a1a;
			margin-left: 180px;
			margin-top: 25px;
			float: left;
		}
		.personInfo {
			margin-top: 25px;
			margin-left: 15px;
			height: 100px;
			width: 1000px;
			float: left;
			.name {
				float: left;
				line-height: 100px;
				font-size: 25px;
				font-weight: 600;
			}
			.info {
				float: right;
				ul {
					overflow: hidden;
					width: 100%;
					li {
						height: 50px;
						width: 100px;
						padding: 37px 0;
						font-size: 13px;
						font-weight: 600;
						box-sizing: border-box;
						float: left;
						p:nth-child(1) {
							margin-bottom: 5px;
						}
					}
				}
			}
		}
	}
</style>