<template>
	<div id="cateHeader">
		<div class="wrap">
			<div class="top">
				<div class="categoryContent">
					<!-- 方向 -->
					<div class="cate_row">
						<span class="cate_name">方向:</span>
						<div class="cate_detail">
							<ul>
								<li v-for="(item, index) in direction" :key="index">
									<span class="directionInfo" :class="resultDirect === index?'active':''" @click="getClickDirect(index)">{{item.title}}</span>
								</li>
							</ul>
						</div>
					</div>
					<!-- 分类 -->
					<div class="cate_row">
						<span class="cate_name">分类:</span>
						<div class="cate_detail">
							<ul>
								<li v-for="(item, index) in direction[whichItem].detail" :key="index">
									<span class="directionInfo" :class="resultCate === index?'active':''" @click="getClickCate(index)">{{item.name}}</span>
								</li>
							</ul>
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
				direction: [{
						title: '全部',
						detail: [{
							name: '全部'
						}]
					}, {
						title: '网络文学',
						detail: [{
							name: '全部'
						},{
							name: '男频'
						}, {
							name: '女频'
						}, {
							name: '玄幻奇幻'
						}, {
							name: '现代都市'
						}, {
							name: '武侠仙侠'
						}, {
							name: '现代言情'
						}, {
							name: '穿越重生'
						}, {
							name: '古装言情'
						}],
					},
					{
						title: '教育',
						detail: [{
							name: '全部'
						},{
							name: '中小学教辅'
						}, {
							name: '考试'
						}, {
							name: '外语工具书'
						}, {
							name: '教师用书'
						}, {
							name: '英语四六级'
						}, {
							name: '考研'
						}, {
							name: '公务员'
						}],
					},
					{
						title: '人文社科',
						detail: [{
							name: '全部'
						},{
							name: '哲学宗教'
						}, {
							name: '历史'
						}, {
							name: '政治军事'
						}, {
							name: '文化'
						}, {
							name: '社会科学'
						}, {
							name: '心理学'
						}, {
							name: '古籍'
						}, {
							name: '法律'
						}],
					},
					{
						title: '科技',
						detail: [{
							name: '全部'
						},{
							name: '科普读物'
						}, {
							name: '计算机/网络'
						}, {
							name: '医学'
						}, {
							name: '工业技术'
						}, {
							name: '建筑'
						}, {
							name: '自然科学'
						}, {
							name: '农业/林业'
						}],
					},
					{
						title: '经管',
						detail: [{
							name: '全部'
						},{
							name: '经济'
						}, {
							name: '管理'
						}, {
							name: '投资理财'
						}, {
							name: '股票'
						}, {
							name: '金融'
						}, {
							name: '市场/销售'
						}, {
							name: '会计'
						}, {
							name: '互联网'
						}],
					}, {
						title: '励志',
						detail: [{
							name: '全部'
						},{
							name: '励志/成功'
						}, {
							name: '心灵修养'
						}, {
							name: '职场'
						}, {
							name: '人生哲学'
						}, {
							name: '人际交往'
						}, {
							name: '口才/演讲/辩论'
						}],
					}
				],
				whichItem: 0,
				whichCate: 0,
			};
		},
		computed: {
			resultDirect() {
				return this.whichItem;
			},
			resultCate() {
				return this.whichCate;
			}
		},
		methods: {
			getClickDirect(index) {
				this.whichItem = index
				this.whichCate = 0
			},
			getClickCate(index) {
				this.whichCate = index
			},
			bus() {
				Bus.$emit('msg', 'something')
			}
		}
	}
</script>

<style lang="scss" scoped>
	#cateHeader {
		height: 160px;
		width: 100%;
		margin-top: 61px;
		.wrap {
			height: 215px;
			width: 100%;
			background-color: #fff;
			.top {
				width: 1200px;
				height: 200px;
				margin-left: auto;
				margin-right: auto;
				.categoryContent {
					padding-top: 15px;
					height: 100%;
					width: 100%;
					.cate_row {
						height: 30px;
						width: 100%;
						padding: 16px 5px;
						border-bottom: 1px solid #edf1f2;
						.cate_name {
							line-height: 30px;
							font-weight: 700;
							font-size: 14px;
							color: #07111b;
							text-align: right;
							float: left;
						}
						.cate_detail {
							margin-left: 35px;
							line-height: 30px;
							font-size: 14px;
							color: #1c1f21;
							float: left;
							ul {
								overflow: hidden;
								width: 100%;
								li {
									display: inline-block;
									margin: 0 15px;
									.directionInfo {
										padding: 10px;
									}
									.active {
										background: #2b333b;
										color: #fff;
									}
								}
								li:hover {
									color: rgb(233, 0, 18);
									cursor: pointer;
								}
							}
						}
					}
				}
			}
		}
	}
</style>