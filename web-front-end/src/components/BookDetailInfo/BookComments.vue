<template>
	<div id="bookComments">
		<div class="title">
			<em>精</em>
			<em>彩</em>
			<em>评</em>
			<em>论</em>
		</div>
		<div class="main">
			<div class="comment_head">
				<span class="isActive">最热</span>
				<span>最新</span>
				<el-button type="text" @click="isLogin()">发表评论</el-button>
			</div>
			<!-- 有评论 -->
			<div class="comment_main" v-for="item in commentList" v-if="commentList.length !== 0">
				<div class="whoawhen">
					<span>{{item.commentAuthor.nickname}}</span>
					<span>{{`${new Date(item.updated_at).getFullYear()}/${new Date(item.updated_at).getMonth()}/${new Date(item.updated_at).getDay()}`}}</span>
				</div>
				<div class="content">
					{{item.content}}
				</div>
				<div class="footer">
					<!-- 喜欢 -->
					<el-button v-if="!item.likedUser.status" @click="likedComment(item.id)" icon="el-icon-caret-top" size="mini" type="primary" plain>{{item.likedUser.count}}</el-button>
					<el-button v-else @click="likedComment(item.id)" size="mini" type="primary" plain>已点赞 {{item.likedUser.count}}</el-button>
					<!-- 不喜欢 -->
					<el-button v-if="!item.unlikedUser.status" @click="unLikedComment(item.id)" icon="el-icon-caret-bottom" size="mini" type="primary" plain>{{item.unlikedUser.count}}</el-button>
					<el-button v-else @click="unLikedComment(item.id)" icon="el-icon-caret-bottom" size="mini" type="primary" plain>已踩 {{item.unlikedUser.count}}</el-button>
				</div>
			</div>
			<!-- 无评论 -->
			<div class="comment_main" v-else>
				无评论
			</div>
		</div>
		<el-dialog title="发表评论" :visible.sync="dialogComment">
			<el-form :model="form">
				<el-form-item label="评论内容" :label-width="formLabelWidth">
					<el-input type="textarea" autosize v-model="form.comment" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogComment = false">取 消</el-button>
				<el-button type="primary" @click="submitComment">确 定</el-button>
			</div>
		</el-dialog>
		<div class="pagination_bottom" v-if="commentList.length !== 0">
			<div class="block">
				<el-pagination background layout="prev, pager, next" :total="commentsCount" @current-change="handleCurrentChange">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dialogComment: false,
				formLabelWidth: '180',
				form: {
					comment: '',
				},
				commentList: [],
				commentsCount: 0,
				likeCount: 0,
				isLike: true,
				isUnLike: true,
			};
		},
		created () {
			this.getAllComment()	
		},
		methods: {
			isLogin() {
				if (sessionStorage.user) {
					this.dialogComment = true
				}else {
					this.$message.error('请先登录');
				}
			},
			submitComment() {
				const bookId = this.$route.params.bookid
				this.$axios
					.post(`/book/${bookId}/comment`,{
						content: this.form.comment
					})
					.then((result) => {
						this.dialogComment = false
						this.form.comment = ''
						this.getAllComment()
					})
			},
			getAllComment() {
				const bookId = this.$route.params.bookid
				this.$axios
					.get(`/book/${bookId}/comment`)
					.then((results) => {
						this.commentsCount = results.data.count
						this.commentList = results.data.rows
					})
			},
			handleCurrentChange(val) {
				const bookId = this.$route.params.bookid
                this.$axios
                    .get(`/book/${bookId}/comment?offset=${val-1}`)
                    .then((results) => {
						this.commentList = results.data.rows				
                    })
			},
			likedComment(id) {
				this.$axios
					.get(`/book/comment/${id}/like`)
					.then((results) => {
						this.getAllComment()
					})
			},
			unLikedComment(id) {
				this.$axios
					.get(`/book/comment/${id}/unlike`)
					.then((results) => {
						this.getAllComment()
					})
			},
		}
	}
</script>

<style lang="scss" scoped>
	#bookComments {
		line-height: 50px;
		width: 1000px;
		margin-left: auto;
		margin-right: auto;
		text-align: left;
		min-width: 1100px;
		.title {
			em {
				font-size: 20px;
				font-weight: 600;
				color: #4D555D;
				margin: 0 3px;
			}
		}
		.main {
			width: 1000px;
			.comment_head {
				width: 100%;
				height: 50px;
				font-size: 14px;
				border-bottom: 1px solid #ddd;
				span {
					float: left;
					margin-right: 20px;
				}
				.isActive {
					color: #f01414;
				}
			}
			.comment_main {
				// height: 150px;
				width: 1000px;
				font-size: 14px;
				padding: 10px 0;
				border-bottom: 1px solid #ddd;
				.whoawhen {
					line-height: 30px;
					height: 30px;
					width: 100%;
					span {
						float: left;
						margin-right: 20px;
					}
				}
				.content {
					width: 1000px;
					line-height: 30px;
				}
				.footer {
					width: 100%;
					height: 50px;
					line-height: 50px;
					font-size: 13px;
				}
			}
		}
		.pagination_bottom {
			height: 50px;
			width: 1000px;
			text-align: center;
			margin-top: 50px; 
		}
	}
</style>
