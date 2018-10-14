<template>
	<div>
		<div class="item_options" v-show="!isShowReply">
			<!-- <span><el-button icon="el-icon-caret-top" size="mini" plain>{{likes}}</el-button></span> -->
			<span @click="isShowReply = !isShowReply"><i class="el-icon-edit"></i>回复</span>
			<span><i class="el-icon-phone-outline"></i>举报</span>
		</div>
		<div class="reply" v-show="isShowReply">
			<el-input v-model="typeReply" type="textarea" autosize placeholder="请输入回复内容" clearable></el-input>
			<div class="replyOpt">
				<el-button size="small" type="primary" plain @click="commitReply(to, article_id)">提交</el-button>
				<el-button size="small" type="danger" plain @click="isShowReply = !isShowReply">取消</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			likes: String,
			to: String,
			article_id: Number
		},
		data() {
			return {
				typeReply: '',
				isShowReply: false,
			};
		},
		methods: {
			commitReply (nickname, article_id) {
				if (this.typeReply === '') {
					this.$message({
						message: '输入内容不能为空!',
						type: 'warning'
					});
				}
				this.$axios
					.post(`/community/${article_id}`, {
						content: `@${nickname}  ${this.typeReply}`
					})
					.then((result) => {
						window.location.reload() 						
					})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.item_options {
		font-size: 13px;
		color: #8590a6;
		margin-top: 20px;
		line-height: 20px;
		span {
			margin-right: 25px;
			i {
				margin-right: 5px;
			}
		}
		span:hover {
			cursor: pointer;
			color: #1a1a1a;
		}
	}
	.reply {
		padding-top: 15px;
		.el-textarea {
			margin-bottom: 15px;
		}
		.replyOpt {
			text-align: right;
		}
	}
</style>