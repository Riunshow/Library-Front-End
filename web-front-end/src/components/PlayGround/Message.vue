<template>
	<div id="messageModel">
		<div class="msgOpt">
			<div class="detailOpt">
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
		<msg-model 
			v-for="(item, index) in message" 
			:key="index" 
			:title="item.title" 
			:content="item.content" 
			:commentsCount="item.commentsCount" 
			:agreeCount="item.agreeCount"
			:comments="item.comments"
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
				message: [{
					title: '什么情况下你会毫不犹豫地辞职？',
					content: '在校期间我的大部分精力花在c++上，但是也比较擅长js，校招的时候阴差阳错得做了前端，感觉自己的c++水平无用武之地，怎么破？只知道可以写webassembly，node拓展，但是工作中根本没有应用场景，大家都是在什么情况下用到c++的？在校期间我的大部分精力花在c++上，但是也比较擅长js，校招的时候阴差阳错得做了前端，感觉自己的c++水平无用武之地，怎么破？只知道可以写webassembly，node拓展，但是工作中根本没有应用场景，大家都是在什么情况下用到c++的？',
					commentsCount: 12,
					agreeCount: 10,
					comments: [{
						headImg: require('./../../assets/logo.png'),
						name: 'utchi12138',
						time: '3 天前',
						content: '我觉得不错',
						like: '30',
					}],
				}, {
					title: 'C++中cout一个地址可以固定一个值吗？',
					content: '你一直都没改过len的值。我猜，因为你cout了len的地址，使得len这个变量存在了，而不是全部被替换成5。至于后面访问地len是不是真的去读变量而没有直接用5代替，你还得反汇编一下才知道。可能因为一个从来不会读的len变量的存在，使得你的越界的后果不见了。',
					commentsCount: 0,
					agreeCount: 30,
				}],
			};
		},

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
			box-shadow: 0 1px 3px rgba(26,26,26,.1);
			.detailOpt {
				line-height: 60px;
				margin-left: 30px;
				margin-right: 10px;
				float: left;
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