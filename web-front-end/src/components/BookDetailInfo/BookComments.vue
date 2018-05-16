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
			</div>
			<div class="comment_main" v-for="item in 8">
				<div class="whoawhen">
					<span>zpy</span>
					<span>2018-4-4</span>
				</div>
				<div class="content">
					于大爷在此书提到了王世襄先生，让我不免惊喜。王先生是学者，把玩儿研究透了研究到头了，著作里透着知识分子的严谨。于大爷的书则多了几分市井气、江湖气。北京玩儿家的气象，能这么生生不息代代地传承下来，真好。
				</div>
				<div class="footer">
					<el-button icon="el-icon-caret-top" size="mini" type="primary" plain>13</el-button>
					<el-button icon="el-icon-caret-bottom" size="mini" type="primary" plain></el-button>
				</div>
			</div>
		</div>
		<div class="pagination_bottom">
			<div class="block">
				<el-pagination background layout="prev, pager, next" :total="50">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			};
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
