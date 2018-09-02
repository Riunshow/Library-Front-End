<template>
	<div id="messageModel">
		<div class="msgOpt">
			<div class="detailOpt" @click="routeToWrite">
				<i class="el-icon-edit"></i> 写想法
			</div>
			<div class="detailOpt">
				<i class="el-icon-edit-outline"></i> 写文章
			</div>
			<div class="draft">
				草稿
			</div>
		</div>
		<!-- 发表内容 -->
		<msg-model v-for="(item, index) in message" 
			:key="index"
			:article_id="item.id"
			:title="item.title" 
			:content="item.content" 
			:commentsCount="item.CommunityComments.length" 
			:agreeCount="item.agreeCount" 
			:comments="item.CommunityComments"
			:author="item.author"
			:createTime="item.created_at"
			/>
		<!-- 结束 -->
	</div>
</template>

<script>
	import MsgModel from './MsgModel'
	export default {
		components: {
			MsgModel,
		},
		data() {
			return {
				message: [],
			};
		},
		created () {
			this.getAticle()	
		},
		methods: {
			routeToWrite() {
				this.$router.push({path: '/write'})
			},
			getAticle() {
				this.$axios
					.get('/community')
					.then((result) => {
						this.message = result.data.rows
					})

			}
		}
	}
</script>

<style lang="scss" scoped>
	#messageModel {
		height: 100%;
		width: 100%;
		.msgOpt {
			height: 60px;
			width: 100%;
			background-color: rgb(255, 255, 255);
			box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
			.detailOpt {
				line-height: 60px;
				margin-left: 30px;
				margin-right: 10px;
				float: left;
			}
			.detailOpt:hover {
				color: #1a1a1a;
				cursor: pointer;
			}
			.draft {
				line-height: 60px;
				margin-right: 20px;
				float: right;
				color: #8590a6;
			}
		}
	}
</style>