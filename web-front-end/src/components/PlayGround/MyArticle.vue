<template>
	<div>
		<header-nav />
		<div id="messageModel">
			<div class="header">
				<p>我的文章</p>
				<el-button @click="redirectGround" class="toPlayGround" type="text">回到操场</el-button>
			</div>
			<div class="noArticle" v-if="message.count === 0">
				<p>暂未发表过文章, 快去发表文章吧</p>
			</div>
			<!-- 发表内容 -->
			<msg-model v-else v-for="(item, index) in message" 
				:key="index"
				:article_id="item.id"
				:title="item.title" 
				:content="item.content" 
				:commentsCount="item.CommunityComments.length" 
				:agreeCount="item.agreeCount" 
				:comments="item.CommunityComments"
				:author="author"
				:createTime="item.created_at"
				:likeNum="item.likedUser.length"
				:unlickNum="item.unlikedUser.length"
				/>
			<!-- 结束 -->
		</div>
	</div>
</template>

<script>
	import HeaderNav from './../common/Header'
	import MsgModel from './MsgModel'
	export default {
		components: {
			MsgModel,
			HeaderNav
		},
		data() {
			return {
				message: [],
				author: {
					id: '',
					nickname: ''
				}
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
				console.log(JSON.parse(sessionStorage.user))
				this.author.nickname = JSON.parse(sessionStorage.user).nickname
				this.$axios
					.get('/user/articles')
					.then((result) => {
						console.log(result.data)
						this.message = result.data.rows
					})

			},
			redirectGround() {
				this.$router.push({path: '/ground'})
			}
		}
	}
</script>

<style lang="scss" scoped>
	#messageModel {
		margin-top: 75px;
		margin-left: auto;
		margin-right: auto;
		width: 700px;
		height: 100%;
		.header {
			margin: 15px;
			height: 40px;
			p {
				float: left;
				line-height: 40px;
			}
			.toPlayGround {
				float: right;
			}
		}
		.noArticle{
			height: 60px;
			width: 100%;
			background-color: rgb(255, 255, 255);
			box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
			p {
				line-height: 60px;
				text-align: center;
			}
		}
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