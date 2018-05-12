<template>
	<div class="bookDetail">
		<div class="bookMain">
			<div class="bookHeader_left">
				<span class="left_item active">最热</span>
				<span class="left_item">最新</span>
			</div>
			<div class="book_content">
				<!-- 循环书 -->
				<div class="one_book" v-for="(item,index) in 8" :key="index" @click="getBookId(index)">
					<div class="downImg">
						<img src="./../../../static/1.jpg" alt="">
					</div>
					<div class="popModel">
						<h3 class="bookname">失乐园</h3>
						<span class="catename">玄幻奇幻</span>
						<div class="readCount">
							<i class="el-icon-view"></i> 2333
						</div> 
						<div class="bookInfo">
							<p>这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍这里是介绍</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Bus from './bus.js'
	export default {
		data() {
			return {
				currentDate: new Date()
			};
		},
		mounted() {
			const _this = this
			Bus.$on('msg', (e) => {
				console.log(e);
			})
		},
		methods: {
			getBookId(id) {
				this.$router.push({path: `/bookinfo/${id}`})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bookDetail {
		width: 100%;
		background: #f3f5f7;
		.bookMain {
			height: 100%;
			width: 1140px;
			margin-left: auto;
			margin-right: auto;
			padding: 0 30px;
			.bookHeader_left {
				margin-top: 15px;
				width: 100%;
				height: 50px;
				line-height: 50px;
				font-size: 14px;
				.left_item {
					margin-left: 15px;
					color: #787d82;
				}
				.active {
					color: #f01414;
				}
			}
			.book_content {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				width: 100%;
				.one_book {
					width: 200px;
					height: 320px;
					margin-right: 35px;
					margin-top: 15px;
					color: #787d82;
					.downImg {
						img {
							width: 200px;
							height: 200px;
						}
					}
					.downImg:hover {
						// cursor: pointer;
						// box-shadow: 0 5px 8px 0 rgba(7, 17, 27, .1);
					}
					.popModel {
						height: 120px;
						width: 100%;
						.bookname {
							width: 100%;
							font-size: 16px;
							color: #07111B;
							word-wrap: break-word;
							overflow: hidden;
							text-overflow: ellipsis;
							padding-left: 10px;
							padding-top: 10px;
						}
						.catename {
							float: left;	
							font-size: 13px;
							padding-left: 10px;
							padding-top: 10px;
						}
						.readCount {
							margin-left: 10px;
							float: left;
							font-size: 13px;
							padding-left: 10px;
							padding-top: 10px;
						}
						.bookInfo {
							margin-top: 15px;
							width: 90%;
							height: 38px;
							font-size: 13px;
							padding-left: 10px;
							padding-top: 10px;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 3;
							overflow: hidden;
						}
					}
				}
				.one_book:hover {
					color: #07111B;
					cursor: pointer;
					img {
						box-shadow: 0 12px 24px 0 rgba(7, 17, 27, .2);
					}
				}
				.one_book:nth-child(5n+0) {
					margin-right: -35px
				}
			}
		}
	}
</style>