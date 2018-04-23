<template>
	<div class="message">
		<div class="detailMsg">
			<div class="msgContent">
				<div class="msgTime">
					zpy发布了消息 · 5 小时前
				</div>
				<div class="contentInfo">
					<div class="contentTitle">
						<h2>{{title}}</h2>
					</div>
					<div class="content">
						<p>
							{{showData}}
							<el-button type="text" class="readAll" @click="showAll = !showAll" v-show="!showAll">{{word}}<i class="el-icon-arrow-down"></i></el-button>
						</p>
					</div>
				</div>
				<div class="publishTime" v-show="showAll">
					发布于 09:39
				</div>
				<div class="msgFooter">
					<el-button class="setFloat" type="primary" plain size="mini" icon="el-icon-caret-top">{{agreeCount}}</el-button>
					<el-button class="setFloat" type="primary" plain size="mini" icon="el-icon-caret-bottom"></el-button>
					<div class="footer_comments setFloat" v-if="commentsCount == 0">
						<i class="el-icon-document"></i> 添加评论
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
				<!-- 展示评论 -->
				<div class="show_comments" v-show="showComments">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			title: String,
			content: String,
			commentsCount: Number,
			agreeCount: Number,
		},
		data() {
			return {
				showAll: false,
				showComments: false,
			};
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
					return '收起'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.message {
		min-height: 213px;
		max-height: 100%;
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
						p {
							width: 100%;
							height: 100%;
							font-size: 14px;
							position: relative;
							line-height: 30px;
							overflow: hidden;
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
					height: 500px;
					margin-top: 10px;
					border: 1px solid #ebebeb;
					box-shadow: 0 1px 3px rgba(26,26,26,.1);
				}
			}
		}
	}
</style>