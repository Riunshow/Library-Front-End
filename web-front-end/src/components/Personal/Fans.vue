<template>
	<div class="fans">
		<div class="fansContent">
			<div class="person">
				<div class="headImg">
					<img src="./../../../static/logo.png" alt="">
				</div>
				<div class="personInfo">
					<div class="personName">
						<p>名字</p>
					</div>
					<div class="personJob">
						<p>学生</p>
					</div>
					<div class="followAfans">
						<div>
							<p>关注</p>
							<span>2</span>
						</div>
						<div>
							<p>粉丝</p>
							<span>2</span>
						</div>
					</div>
					<div class="options">
						<el-button plain size="mini">已关注</el-button>
					</div>
				</div>
			</div>
			<div class="person">
			</div>
			<div class="person">
			</div>
			<div class="person">
			</div>
			<div class="person">
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
	.fans {
		width: 930px; // background-color: antiquewhite;
		.fansContent {
			padding: 15px;
			.person {
				margin: 10px 15px;
				height: 150px;
				width: 270px;
				background-color: #fff;
				float: left;
				.headImg {
					height: 100%;
					width: 70px;
					float: left;
					img {
						height: 50px;
						width: 50px;
						border-radius: 25px;
						background-color: antiquewhite;
						margin-top: 10px;
						margin-left: 10px;
					}
				}
				.personInfo {
					color: #93999f;
					margin-top: 10px;
					float: left;
					.personName {
						color: #000;
						line-height: 30px;
					}
					.personJob {
						font-size: 12px;
						line-height: 30px;
					}
					.followAfans {
						font-size: 12px;
						line-height: 30px;
						div {
							float: left;
							p {
								float: left;
							}
							span {
								margin-left: 5px;
							}
							&:nth-child(2) {
								margin-left: 15px;
							}
						}
						div:hover {
							color: #ba2636;
							cursor: pointer;
						}
					}
					.followAfans:after {
						clear: both;
						content: "";
						width: 0;
						height: 0;
						display: block;
						visibility: hidden;
					}
					.options {
						padding-top: 5px;
					}
				}
			}
		}
		.fansContent:after {
			clear: both;
			content: "";
			width: 0;
			height: 0;
			display: block;
			visibility: hidden;
		}
	}
</style>