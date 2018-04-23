<template>
	<div class="recommand">
		<em>图</em>
		<em>书</em>
		<em>推</em>
		<em>荐</em>
		<ul>
			<li v-for="(items, idex) in recommandBook">
				<img :src="items.img" alt="">
				<span>{{items.name}}</span>
				<p>{{items.info}}</p>
				<!--  -->
				<div class="detail">
					<span class="cateName">{{items.cateName}}</span>
					<span class="view"><i class="el-icon-view"></i>{{items.view}}</span>
					<span class="stars">
						<i class="el-icon-star-on"></i>
						<i class="el-icon-star-on"></i>
						<i class="el-icon-star-on"></i>
						<i class="el-icon-star-on"></i>
						<i class="el-icon-star-on"></i>						
					</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				recommandBook: [{
					img: require('./../../assets/1.jpg'),
					name: '失乐园',
					info: '渡边淳一代表作，长期雄踞日本畅销书排行榜榜首，由黑木瞳、役所广司主演的电影引发“失乐园”热。此次的全新林少华译本，将带你体味不一样的渡边淳一，不一样的失乐园。',
					cateName: '玄幻奇幻',
					view: '123',
				}, {
					img: require('./../../assets/2.jpg'),
					name: '我不',
					info: '百万级畅销书作家大冰2017年新书！用温暖的故事结一段小善缘，陪你微笑着对命运说：我不！不屈不挠、不破不立，他们因不，而不同，乃至不凡！随书奉送20余首有钱也买不到的民谣。',
					cateName: '现代都市',
					view: '345',
				}, {
					img: require('./../../assets/3.jpg'),
					name: '岛上书店',
					info: '现象级全球畅销书！一年之内畅销美英德法日等30国！感动全球千万读者的阳光治愈小说！美国独立书商推荐阅读桂冠、美国图书馆推荐阅读桂冠。每个人的生命中，都有无比艰难的那一年，将人生变得美好而辽阔。读客出品',
					cateName: '武侠仙侠',
					view: '5566',
				}, {
					img: require('./../../assets/4.jpg'),
					name: '夏日终曲',
					info: '2018奥斯卡获奖影片Call me by your name原著小说。十七岁的爱情以身伺火，三十七岁时却温暖余生 睽违二十年的漫长告白：请以你的名字呼唤我',
					cateName: '现代言情',
					view: '784',
				}, {
					img: require('./../../assets/5.jpg'),
					name: '摆渡人2：重返荒原',
					info: '百万畅销心灵治愈小说《摆渡人》第二季重磅来袭！如果生命进入再次的轮回，你又愿意为此付出怎样的代价？）白马时光',
					cateName: '穿越重生',
					view: '554',
				}]
			};
		}
	}
</script>

<style lang="scss" scoped>
	.recommand {
		height: 400px;
		width: 1100px;
		margin-left: auto;
		margin-right: auto;
		padding-top: 50px;
		text-align: center;
		min-width: 1100px;
		em {
			font-size: 20px;
			font-weight: 600;
			color: #4D555D;
			margin: 0 3px;
		}
		ul {
			width: 1100px;
			height: 350px;
			padding: 50px 0 0 0;
			li {
				height: 300px;
				width: 200px; // background-color: tan;
				float: left;
				margin: 0 10px;
				img {
					height: 150px;
					width: 200px;
					background-color: snow;
					display: block;
				}
				span {
					height: 35px;
					width: 200px;
					font-size: 16px;
					line-height: 35px;
				}
				p {
					width: 200px;
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
					padding: 0 0 1px 5px;
					background: rgb(244, 244, 244);
				}
				.detail {
					width: 200px;
					height: 20px;
					color: #93999F;
					span {
						float: left;
						font-size: 5px;
						width: 60px;
					}
					.stars {
						i {
							margin-right: -5px;
						}
					}
				}
			}
			li:hover {
				color: #ff7f24;
				cursor: pointer;
				text-decoration: underline;
				img {
					box-shadow: 0 12px 24px 0 rgba(7, 17, 27, .2);
				}
			}
		}
	}
</style>