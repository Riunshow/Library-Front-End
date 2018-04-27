<template>
	<div class="nearlyRead">
		<div class="readDetail" v-for="(item, index) in book">
			<div class="nearlyTime">
				<span class="year">{{item.year}}</span>
				<span class="monthAday">{{item.date}}</span>
			</div>
			<div class="bookInfo">
				<img :src="item.img" alt="">
				<div class="detailInfo">
					<span class="bookName">{{item.name}}</span>
					<span class="readProgress">已读 {{item.progress}}</span>
					<span class="readRecord">读到 {{item.where}}</span>
					<span class="continueRead"><el-button type="text">继续阅读</el-button></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				book: []
			};
		},
		created() {
			this.getNearlyBook()
		},
		methods: {
			getNearlyBook() {
				const _this = this
				this.$axios.get('/user/nearlyread')
					.then((result) => {
						_this.book = result.data
					}).catch((err) => {
						console.log(err);
					});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nearlyRead {
		width: 100%;
		height: 600px; // background-color: salmon;
		margin-top: 15px;
		.readDetail {
			width: 100%;
			height: 150px;
			margin-bottom: 30px;
			.nearlyTime {
				height: 100%;
				width: 99px;
				float: left; // background-color: rosybrown;
				color: #333;
				border-right: 1px solid #E0E0E0;
				.year {
					width: 100%;
					float: left;
					font-size: 25px;
				}
				.monthAday {
					margin-top: 10px;
					float: left;
				}
			}
			.bookInfo {
				height: 100%;
				margin-left: 5%;
				width: 600px;
				float: left; // background-color: plum;
				padding-bottom: 15px;
				border-bottom: 1px solid #E0E0E0;
				img {
					height: 150px;
					width: 150px;
					float: left;
				}
				.detailInfo {
					float: left;
					height: 100%;
					margin-left: 30px;
					width: 350px;
					.bookName {
						height: 80px;
						line-height: 80px;
						width: 100%;
						float: left;
						font-size: 20px;
						font-weight: 400;
					}
					.readProgress {
						height: 40px;
						line-height: 40px;
						float: left;
						font-size: 15px;
						color: #787d82;
						margin-right: 15px;
					}
					.readRecord {
						height: 40px;
						line-height: 40px;
						float: left;
						font-size: 15px;
						color: #787d82;
					}
					.continueRead {
						float: right;
					}
				}
			}
		}
	}
</style>