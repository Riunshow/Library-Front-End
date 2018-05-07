<template>
	<div class="main">
		<div class="asideSelect">
			<div class="category">
				<div class="group" v-for="(data, index) in category" :key="index" @mouseover="enter(index, data.title)">
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
					<div class="showPopover">
						<a target="_blank">
							<span>{{data.title}}</span>
							<i class="el-icon-arrow-right"></i>
						</a>
					</div>
				</div>
				<div class="suspended">
					<div class="cateName">
						<div class="baseBox">
							<div class="bannerLine">
								<span>{{nowTitle}}</span>
							</div>
							<div class="tagBox">
								<a @click="redirectToCate()" class="cateDatail" v-for="(results,index) in category[nowHover].detail" :key="index">{{results.name}}</a>
							</div>
						</div>
					</div>
					<div class="recommand">
						<div class="recommandBook">
							<div class="bookDetail" v-for="(results,index) in category[nowHover].bookDetail" :key="index">
								<img :src="results.img" alt="">
								<span>{{results.name}}</span>
								<p>{{results.info}}</p>
							</div>
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
				// 大分类套小分类
				category: [{
					title: '网络文学',
					detail: [{
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
					bookDetail: [{
						img: require('./../../../static/1.jpg'),
						name: '失乐园',
						info: '渡边淳一代表作，长期雄踞日本畅销书排行榜榜首，由黑木瞳、役所广司主演的电影引发“失乐园”热。此次的全新林少华译本，将带你体味不一样的渡边淳一，不一样的失乐园。',
					}, {
						img: require('./../../../static/2.jpg'),
						name: '我不',
						info: '百万级畅销书作家大冰2017年新书！用温暖的故事结一段小善缘，陪你微笑着对命运说：我不！不屈不挠、不破不立，他们因不，而不同，乃至不凡！随书奉送20余首有钱也买不到的民谣。',
					}],
				}, {
					title: '教育',
					detail: [{
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
					bookDetail: [{
						img: require('./../../../static/3.jpg'),
						name: '岛上书店',
						info: '现象级全球畅销书！一年之内畅销美英德法日等30国！感动全球千万读者的阳光治愈小说！美国独立书商推荐阅读桂冠、美国图书馆推荐阅读桂冠。每个人的生命中，都有无比艰难的那一年，将人生变得美好而辽阔。读客出品',
					}, {
						img: require('./../../../static/4.jpg'),
						name: '夏日终曲',
						info: '2018奥斯卡获奖影片Call me by your name原著小说。十七岁的爱情以身伺火，三十七岁时却温暖余生 睽违二十年的漫长告白：请以你的名字呼唤我',
					}],
				}, {
					title: '人文社科',
					detail: [{
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
					bookDetail: [{
						img: require('./../../../static/5.jpg'),
						name: '摆渡人2：重返荒原',
						info: '百万畅销心灵治愈小说《摆渡人》第二季重磅来袭！如果生命进入再次的轮回，你又愿意为此付出怎样的代价？）白马时光',
					}, {
						img: require('./../../../static/6.jpg'),
						name: '刺杀骑士团长',
						info: '简体中文版正式上市！【王俊凯3月书单】村上春树时隔七年长篇巨著,关于创伤、内省、对峙、重生的力量之作,2017年度日本小说类榜首！',
					}],
				}, {
					title: '科技',
					detail: [{
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
					bookDetail: [{
						img: require('./../../../static/7.jpg'),
						name: '肯·福莱特世纪三部曲',
						info: '《巨人的陨落》《世界的凛冬》《永恒的边缘》套装共9册，全球读者平均3个通宵读完的超级小说！火遍全球的20世纪人类史诗。我亲眼目睹，每一个迈向死亡的生命都在热烈地生长。首次登陆中国。读客出品 ',
					}, {
						img: require('./../../../static/8.jpg'),
						name: '橘子不是唯一的水果',
						info: '橘子不是唯 一的水果，你的人生，还有别的可能！张悦然、蒋方舟、任晓雯、刘瑜一致推荐的当代英国天才女作家 。一部大胆的、光芒四射的小说。就天赋与灵气而言，少有作家能与珍妮特·温特森相比！',
					}],
				}, {
					title: '经管',
					detail: [{
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
					bookDetail: [{
						img: require('./../../../static/1.jpg'),
						name: '失乐园',
						info: '渡边淳一代表作，长期雄踞日本畅销书排行榜榜首，由黑木瞳、役所广司主演的电影引发“失乐园”热。此次的全新林少华译本，将带你体味不一样的渡边淳一，不一样的失乐园。',
					}, {
						img: require('./../../../static/2.jpg'),
						name: '我不',
						info: '百万级畅销书作家大冰2017年新书！用温暖的故事结一段小善缘，陪你微笑着对命运说：我不！不屈不挠、不破不立，他们因不，而不同，乃至不凡！随书奉送20余首有钱也买不到的民谣。',
					}],
				}, {
					title: '励志',
					detail: [{
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
					bookDetail: [{
						img: require('./../../../static/3.jpg'),
						name: '岛上书店',
						info: '现象级全球畅销书！一年之内畅销美英德法日等30国！感动全球千万读者的阳光治愈小说！美国独立书商推荐阅读桂冠、美国图书馆推荐阅读桂冠。每个人的生命中，都有无比艰难的那一年，将人生变得美好而辽阔。读客出品',
					}, {
						img: require('./../../../static/4.jpg'),
						name: '夏日终曲',
						info: '2018奥斯卡获奖影片Call me by your name原著小说。十七岁的爱情以身伺火，三十七岁时却温暖余生 睽违二十年的漫长告白：请以你的名字呼唤我',
					}],
				}, ],
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
		methods: {
			enter(index, title) {
				this.nowHover = index
				this.nowTitle = title
			},
			redirectToCate() {
				this.$router.push({path:'/book'})
			}
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