<template>
	<div class="main">
		<div class="asideSelect">
			<div class="category">
				<div class="group" v-for="(data, index) in category" :key="index" @mouseover="enter(index)">
					<!-- <el-popover  placement="right" width="400" trigger="hover" :visible-arrow="false">
														<div v-for="(cateName, cateIndex) in data.category" :key="cateIndex">
															{{cateName.name}}
														</div>
														<div class="showPopover" slot="reference">
															<a target="_blank">
																<span>{{data.title}}</span>
																<i class="el-icon-arrow-right"></i>
															</a>
														</div>
													</el-popover> -->
					<div class="showPopover" >
						<a target="_blank">
							<span>{{data.title}}</span>
							<i class="el-icon-arrow-right"></i>
						</a>
					</div>
				</div>

				<div class="suspended">
					<div class="cateName">
						<span v-for="(results,index) in category[nowHover].detail" :key="index">
							{{results.name}}
						</span>
					</div>
					<div class="recommand">
					</div>
				</div>
			</div>
		</div>
		<div class="slider">
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				nowHover: 0,
				category: [{
					title: '网络文学',
					detail: [{
						name:'小说'
					},{
						name:'文学'
					},{
						name:'传记'
					},{
						name:'青春文学'
					},{
						name:'动漫/幽默'
					},{
						name:'艺术'
					},{
						name:'摄影'
					},{
						name:'偶像明星'
					},{
						name:'涂色/填色'
					}]
				}, {
					title: '教育',
					detail: [],
				}, {
					title: '人文社科',
					detail: [],
				}, {
					title: '科技',
					detail: [],
					
				}, {
					title: '经管',
					detail: [],
					
				}, {
					title: '生活',
					detail: [],
					
				}, ],
			};
		},
		methods: {
			enter(index) {
				this.nowHover = index
			},
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		height: 400px;
		width: 80%;
		margin-left: auto;
		margin-right: auto;
		margin-top: 50px;
		background-color: rgba(7, 17, 27, .5);
		border-radius: 15px;
		box-shadow: 0 2px 8px 0 rgba(7, 17, 27, .06);
		.asideSelect {
			height: 400px;
			width: 20%;
			background-color: rgb(33, 38, 45);
			border-radius: 15px 0 0 15px;
			color: rgba(255, 255, 255, .6);
			float: left;
			.category {
				width: 90%;
				height: 360px;
				margin-left: 10px;
				top: 20px;
				position: relative;
				.group {
					height: 60px;
					line-height: 60px;
					.showPopover {
						height: 100%;
						width: 100%;
						span {
							margin-left: 10px;
							float: left;
						}
						i {
							line-height: 60px;
							margin-right: 10px;
							float: right;
						}
					}
				}
				.group:hover {
					border-radius: 5px;
					background-color: #777;
				}
				.suspended {
					color: #000;
					width: 700px;
					height: 400px;
					position: absolute;
					top: -20px;
					left: 105%;
					z-index: 100;
					background-color: #eee;
					display: none;
				}
				.group:hover~.suspended {
					display: block;
				}
			}
		}
		.slider {
			float: left;
			width: 80%;
			height: 300px;
			border-radius: 0 15px 0 0;
			background-color: wheat;
		}
	}
</style>