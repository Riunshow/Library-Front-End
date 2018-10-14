<template>
	<div class="main">
		<div class="asideSelect">
			<div class="category">
				<div class="group" v-for="(data, index) in category" :key="index" @mouseover="enter(index, data.category)">
					<div class="showPopover">
						<a target="_blank">
							<span>{{data.category}}</span>
							<i class="el-icon-arrow-right"></i>
						</a>
					</div>
				</div>
				<div class="suspended">
					<!-- 分类名 -->
					<div class="cateName">
						<div class="baseBox">
							<div class="bannerLine">
								<span>{{nowTitle}}</span>
							</div>
							<div class="tagBox">
								<a class="cateDatail" v-for="(results,index) in category[nowHover].type" :key="index" @click="redirectToCate(results.id)">{{results.type}}</a>
							</div>
						</div>
					</div>
					<!-- 推荐书 -->
					<div class="recommand">
						<div class="recommandBook" v-if="category[nowHover].bookDetail.length !==0">
							<div class="bookDetail" v-for="(results,index) in category[nowHover].bookDetail" :key="index" >
								<img :src="results.img" alt="">
								<span>{{results.name}}</span>
								<p>{{results.info}}</p>
							</div>
						</div>
						<div class="recommandBook" v-else>
							<p>当前分类下暂无推荐书籍</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="slider">
			<el-carousel :interval="5000" arrow="always">
				<el-carousel-item v-for="(item, index) in sliderImg" :key="index">
					<img :src="item.img" alt="">
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="bottomShow">
			<ul>
				<li v-for="(items, index) in bottomShow">
					<i :class="items.icon"></i>
					<span>{{items.name}}</span>
					<p>{{items.intro}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				nowHover: 0,
				nowTitle: '',
				category: [{
					cate: '',
					type: [],
					bookDetail: [],
				}],
				// 轮播图
				sliderImg: [{
					img: require('./../../../static/sl1.jpg')
				}, {
					img: require('./../../../static/sl2.jpg')
				}, {
					img: require('./../../../static/sl3.jpg')
				}],
				// 一排小按钮
				bottomShow: [{
					icon: 'el-icon-loading',
					name: '网络文学',
					intro: '大神入住'
				},{
					icon: 'el-icon-loading',
					name: '教育',
					intro: '大神入住'
				},{
					icon: 'el-icon-loading',
					name: '人文社科',
					intro: '大神入住'
				},{
					icon: 'el-icon-loading',
					name: '科技',
					intro: '大神入住'
				},{
					icon: 'el-icon-loading',
					name: '经管',
					intro: '大神入住'
				},{
					icon: 'el-icon-loading',
					name: '励志',
					intro: '大神入住'
				},]
			};
		},
		created () {
			this.getCategory()
		},
		methods: {
			enter(index, title) {
				this.nowHover = index
				this.nowTitle = title
			},
			redirectToCate(cid) {
				this.$axios
					.get('/book?cid=' + cid)
					.then((results) => {
						this.$router.push({
							path: '/book',
							query: {
								typeid: cid
							},
						})
					})

				// this.$route.push({path:'/xxx',params:{id:1}});
			},
			getCategory() {
				this.$axios
					.get('/category/all')
					.then((results) => {
						for (const key in results.data) {
							results.data[key].cate = results.data[key].category
							results.data[key].type =  results.data[key].type
							results.data[key].bookDetail = []
						}
						this.category = results.data
					})

			},
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		height: 400px;
		width: 1100px;
		margin-left: auto;
		margin-right: auto;
		margin-top: 110px;
		background-color: rgb(251,251,251);
		border-radius: 10px;
		box-shadow: 0 12px 24px 0 rgba(7,17,27,.2);
		min-width: 1100px;
		.asideSelect {
			height: 400px;
			width: 200px;
			background-color: rgb(33, 38, 45);
			border-radius: 10px 0 0 10px;
			color: rgba(255, 255, 255, .6);
			float: left;
			.category {
				width: 100%;
				height: 360px;
				top: 20px;
				position: relative;
				.group {
					width: 185px;
					margin-left: 15px;
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
							margin-right: 15px;
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
					left: 200px;
					z-index: 100;
					background-color: #fff;
					display: none;
					.cateName {
						height: 100px;
						width: 600px;
						padding: 50px;
						.bannerLine {
							position: relative;
							height: 1px;
							margin: 0 0 23px;
							background-color: rgba(77, 85, 93, .08);
							span {
								position: absolute;
								top: -12px;
								left: 0;
								width: 50px;
								font-size: 12px;
								color: #07111B;
								line-height: 24px;
							}
						}
						.tagBox {
							word-wrap: break-word;
							a {
								font-size: 14px;
								color: #4D555D;
								line-height: 24px;
								margin-right: 20px;
							}
							a:hover {
								color: #ff7f24;
								cursor: pointer;
								text-decoration: underline;
							}
						}
					}
					.recommand {
						height: 200px;
						width: 700px;
						background-color: #F8FAFC;
						.recommandBook {
							height: 200px;
							width: 600px;
							margin-left: 50px;
							.bookDetail {
								height: 200px;
								width: 275px;
								float: left;
								img {
									margin-top: 5px;
									display: block;
									height: 100px;
									width: 100px;
								}
								span {
									height: 35px;
									width: 100px;
									font-size: 16px;
									line-height: 35px;
								}
								p {
									width: 250px;
									font-size: 13px;
									position: relative;
									line-height: 1.4em;
									height: 4.2em;
									overflow: hidden;
								}
								p::after {
									content: "...";
									font-weight: bold;
									position: absolute;
									bottom: 0;
									right: 0;
									padding: 0 20px 1px 45px;
									background: url(http://newimg88.b0.upaiyun.com/newimg88/2014/09/ellipsis_bg.png) repeat-y;
								}
							}
							.bookDetail:nth-child(1) {
								margin-right: 25px;
							}
							.bookDetail:hover {
								color: #ff7f24;
								cursor: pointer;
								text-decoration: underline;
							}
						}
					}
				}
				.group:hover~.suspended {
					transition: all .3s;
					display: block;
				}
				.suspended:hover {
					display: block;
				}
			}
		}
		.slider {
			float: left;
			width: 900px;
			height: 300px;
			border-radius: 0 10px 0 0;
			.el-carousel__item {
				img {
					border-radius: 0 10px 0 0;
					height: 100%;
					width: 100%;
				}
			}
		}
		.bottomShow {
			width: 900px;
			height: 100px;
			float: left;
			ul {
				height: 80px;
				width: 800px;
				padding: 20px 50px 0 50px;
				text-align: center;
				li {
					height: 100%;
					width: 130px;
					float: left;
					i {
						width: 130px;
					}
					span {
						font-size: 14px;
						line-height: 40px;
					}
					p {
						font-size: 10px;
						color: #555;
					}
				}
				li:hover {
					cursor: pointer;
					margin-top: -5px;
				}
			}
		}
	}
</style>