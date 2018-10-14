<template>
	<div id="book_intro">
		<div class="book_router">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/book' }">书库</el-breadcrumb-item>
				<el-breadcrumb-item>{{bookInfo.name}}</el-breadcrumb-item>
			</el-breadcrumb>
			<div class="collection">
				 <!-- <el-button v-if="!bookInfo.collection.status"  @click="collectBook()" type="primary" size="mini">收藏</el-button>
				 <el-button v-else @click="unCollectBook()" type="primary" size="mini">已收藏</el-button> -->
				 未收藏
				 <el-switch
				 	:disabled="checkIsLogin"
				 	@change="isCollectBook"
					v-model="bookInfo.collection.status"
					active-color="#13ce66"
					inactive-color="#ff4949">
				</el-switch>
				已收藏
			</div>
		</div>
		<div class="book_intro_header">
			<div class="book_img">
				<img :src="bookInfo.cover" alt="">
			</div>
			<div class="book_basic_info">
				<div class="book_basic_name">
					<span>名称: </span>
					<span>作者: </span>
					<span>出版社: </span>
					<span>图书位置: </span>
					<span>查看次数: </span>
				</div>
				<div class="book_basic_render">
					<span>{{bookInfo.name}}</span>
					<span>{{bookInfo.author}}</span>
					<span>{{bookInfo.company}}</span>
					<span>{{bookInfo.position}}</span>
					<span>{{bookInfo.views}}</span>
				</div>
			</div>
		</div>
		<div class="book_intro_main">
			<div class="head">
				<em>图</em>
				<em>书</em>
				<em>简</em>
				<em>介</em>
			</div>
			<div class="book_content">
				{{bookInfo.blurb}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bookId: 0,
				bookInfo: {
					collection: {
						status: 0
					}
				},
			};
		},
		created () {
			this.getBookId()
			this.getBookInfo()
		},
		computed: {
			checkIsLogin() {
				if(sessionStorage.user) {
					return false
				}else {
					return true
				}
			}
		},
		methods: {
			getBookId() {
				this.bookId = this.$route.params.bookid
			},
			getBookInfo() {
				this.$axios
					.get(`/book/${this.bookId}`)
					.then((result) => {
						this.bookInfo = result.data
					})
			},
			isCollectBook() {
				const isCollectBookStatus = this.bookInfo.collection.status
				console.log(isCollectBookStatus);
				if (isCollectBookStatus) {
					this.collectBook()
				}else {
					this.unCollectBook()
				}
			},
			collectBook() {
				if (sessionStorage.user) {
					this.$axios
					.post('/user/collect', {
						bid: this.bookId
					})
					.then((results) => {
						// this.getBookInfo()
					})
				}else {
					this.$message.error('请先登录');
				}
				
			},
			unCollectBook() {
				if (sessionStorage.user) {
					this.$axios
					.delete(`/user/collect/${this.bookId}`)
					.then((results) => {
						// this.getBookInfo()
					})
				}else {
					this.$message.error('请先登录');
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	#book_intro {
		width: 1000px;
		.book_router {
			width: 100%;
			height: 50px;
			border-bottom: 1px solid #A9A9A9;;
			.el-breadcrumb {
				padding-top: 25px;
				float: left;
			}
			.collection {
				float: right;
				line-height: 50px;
			}
		}
		.book_intro_header {
			height: 300px;
			width: 100%;
			border-bottom: 1px solid #A9A9A9;;
			.book_img {
				height: 200px;
				width: 200px;
				margin-top: 50px;
				margin-left: 100px;
				float: left;
				img {
					height: 200px;
					width: 200px;
				}
			}
			.book_basic_info {
				margin: 10px;
				margin-right: 100px;
				float: right;
				.book_basic_name {
					width: 100px;
					float: left;
					display: -webkit-flex;
					display: flex;
					flex-direction: column;
					span {
						line-height: 50px;
					}
				}
				.book_basic_render {
					width: 300px;
					float: left;
					display: -webkit-flex;
					display: flex;
					flex-direction: column;
					span {
						line-height: 50px;
					}
				}
			}
		}
		.book_intro_main {
			border-bottom: 1px solid #A9A9A9;;
			.head {
				height: 50px;
				line-height: 50px;
				width: 1000px;
				margin-left: auto;
				margin-right: auto;
				text-align: left;
				min-width: 1100px;
				em {
					font-size: 20px;
					font-weight: 600;
					color: #4D555D;
					margin: 0 3px;
				}
			}
			.book_content {
				padding-bottom: 5px;
				// height: 150px;
				font-size: 14px;
				color: #555;
				line-height: 30px;
			}
		}
	}
</style>