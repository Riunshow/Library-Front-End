<template>
	<div class="message">
		<div class="detailMsg">
			<div class="msgContent">
				<div class="msgTime">
					{{author.nickname}}发布了消息
				</div>
				<div class="contentInfo">
					<div class="contentTitle">
						<h2>{{title}}</h2>
					</div>
					<div class="content">
						<div v-html="showData"></div>
							<!-- {{showData}} -->
						<el-button type="text" class="readAll" @click="showAll = !showAll" v-show="!showAll">{{openWord}}<i class="el-icon-arrow-down"></i></el-button>
					</div>
				</div>
				<div class="publishTime" v-show="showAll">
					发布于 {{`${new Date(createTime).getFullYear()} - ${new Date(createTime).getMonth()} - ${new Date(createTime).getDay()}`}}
				</div>
				<div class="msgFooter">
					<el-button class="setFloat" type="primary" plain size="mini" icon="el-icon-caret-top">{{agreeCount}}</el-button>
					<el-button class="setFloat" type="primary" plain size="mini" icon="el-icon-caret-bottom"></el-button>
					<div class="footer_comments setFloat" v-if="commentsCount == 0" @click="showComments = !showComments">
						<i class="el-icon-document"></i> {{inputCommentWord}}
					</div>
					<div class="footer_comments setFloat" @click="showComments = !showComments" v-else>
						<i class="el-icon-document"></i> {{commentWord}}
					</div>
					<div class="footer_report setFloat">
						<el-dropdown trigger="click">
							<span class="el-dropdown-link">···</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item>举报</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</div>
					<div class="packUp" v-show="showAll">
						<el-button type="text" class="readAll" @click="showAll = !showAll">{{openWord}}<i class="el-icon-arrow-up"></i></el-button>
					</div>
				</div>
				<!-- 若有评论,展示评论 -->
				<div class="show_comments" v-show="showComments">
					<div class="comments_detail">
						<!-- 评论头部 -->
						<div class="comments_title">
							<div class="comments_title_left">
								{{commentsCount}} 条评论
							</div>
							<div class="comments_title_right" @click="timeSort = !timeSort">
								​<i class="el-icon-sort"></i>切换为{{changeSort}}
							</div>
						</div>
						<!-- 评论主体 -->
						<div class="comments_list" v-for="(item, index) in comments">
							<div class="comment_item">
								<div class="item_head">
									<span class="item_left comment_from_img"><img :src="item.headImg" alt=""></span>
									<span class="item_left comment_from">{{item.name}}</span>
									<span class="item_right comment_time">{{item.time}}</span>
								</div>
								<div class="item_info">
									<span>{{item.content}}</span>
								</div>
								<reply-model :likes="item.like" />
							</div>
						</div>
						<!-- 分页 -->
						<div class="sorter" v-show="showSorter">
							<div class="block">
								<el-pagination layout="prev, pager, next" :page-size="5" :total="commentsCount">
								</el-pagination>
							</div>
						</div>
						<!-- 输入评论 -->
						<div class="input_comment">
							<el-input v-model="typeContent" type="textarea" autosize placeholder="请输入评论内容" clearable></el-input>
							<el-button size="small" type="primary" plain>提交</el-button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ReplyModel from './ReplyModel'
	export default {
		components: {
			ReplyModel
		},
		props: {
			title: String,
			content: String,
			commentsCount: Number,
			agreeCount: Number,
			comments: Array,
			author: Object,
			createTime: String,
		},
		data() {
			return {
				showAll: false,
				showComments: false,
				timeSort: true,
				showSorter: false,
				typeContent: '',
			};
		},
		created() {
			this.changeSorter()
		},
		computed: {
			showData: function() {
				const contentLength = this.content.replace(/[\u0391-\uFFE5]/g, "aa").length;
				if (this.showAll == false) {
					if (contentLength > 240) {
						const newContent = this.content.slice(0, 130).replace(/([^x00-xff])/g, "$1") + ' ...';
						return newContent;
					} else {
						return this.content;
					}
				} else {
					return this.content;
				}
			},
			openWord: function() {
				if (this.showAll == false) {
					return '展开全部'
				} else {
					return '收起'
				}
			},
			commentWord: function() {
				if (this.showComments == false) {
					return this.commentsCount + ' 条评论'
				} else {
					return '收起评论'
				}
			},
			inputCommentWord: function() {
				if (this.showComments == false) {
					return '添加评论'
				} else {
					return '收起评论'
				}
			},
			changeSort: function() {
				if (this.timeSort == false) {
					return '默认排序'
				} else {
					return '时间排序'
				}
			},
		},
		methods: {
			changeSorter: function() {
				if (this.commentsCount <= 5) {
					this.showSorter = false
				} else {
					this.showSorter = true
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.message {
		min-height: 213px;
		max-height: 100%;
		box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
		.detailMsg {
			margin-top: 15px;
			width: 100%;
			.msgContent {
				padding: 15px;
				background-color: rgb(255, 255, 255);
				.msgTime {
					height: 20px;
					color: #8590a6;
					font-size: 14px;
				}
				.contentInfo {
					.contentTitle {
						font-size: 18px;
						font-weight: 600;
						color: #1a1a1a;
						padding: 5px 0;
					}
					.content {
						div {
							width: 100%;
							height: 100%;
							font-size: 14px;
							position: relative;
							line-height: 30px;
							overflow: hidden;
							word-wrap:break-word;
							.readAll {
								padding: 0;
							}
						}
						i {
							margin-left: 5px;
						}
					}
				}
				.publishTime {
					height: 20px;
					line-height: 20px;
					font-size: 14px;
					margin-top: 20px;
					color: #8590a6;
				}
				.msgFooter {
					margin-top: 5px;
					height: 40px;
					width: 670px;
					bottom: 0;
					position: relative;
					color: #8590a6;
					font-size: 14px;
					line-height: 40px;
					.setFloat {
						float: left;
					}
					.el-button {
						margin-top: 5px;
					}
					.el-button:nth-child(1) {
						margin-right: -5px;
					}
					.footer_comments {
						margin-left: 30px;
						cursor: pointer;
					}
					.footer_comments:hover {
						color: #555;
					}
					.footer_report {
						margin-left: 30px;
						cursor: pointer;
					}
					.footer_report:hover {
						color: #555;
					}
					.packUp {
						float: right;
						i {
							margin-left: 5px;
						}
					}
				}
				.show_comments {
					width: 100%;
					margin-top: 10px;
					border: 1px solid #ebebeb;
					box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
					.comments_detail {
						height: 100%;
						width: 610px;
						margin-left: auto;
						margin-right: auto;
						.comments_title {
							height: 50px;
							line-height: 50px;
							border-bottom: 1px solid #ebebeb;
							.comments_title_left {
								font-size: 15px;
								color: #1a1a1a;
								-webkit-tap-highlight-color: rgba(26, 26, 26, 0);
								float: left;
							}
							.comments_title_right {
								color: #8590a6;
								font-size: 14px;
								float: right;
								i {
									margin-right: 5px;
								}
							}
							.comments_title_right:hover {
								cursor: pointer;
								color: #1a1a1a;
							}
						}
						.comments_list {
							width: 100%;
							.comment_item {
								// height: 110px;
								border-bottom: 1px solid #ebebeb;
								padding: 10px 0;
								.item_head {
									height: 30px;
									line-height: 30px;
									font-size: 15px;
									.comment_from_img {
										img {
											height: 30px;
											width: 30px;
										}
									}
									.comment_from {
										margin-left: 10px;
									}
									.item_left {
										float: left;
									}
									.item_right {
										color: #8590a6;
										float: right;
									}
								}
								.item_info {
									line-height: 20px;
									font-size: 14px;
									margin-top: 20px;
								}
							}
						}
						.sorter {
							text-align: center;
							padding: 15px 0;
							border-bottom: 1px solid #ebebeb;
						}
						.input_comment {
							padding: 15px 0;
							.el-textarea {
								width: 530px;
								margin-right: 15px;
							}
						}
					}
				}
			}
		}
	}
</style>