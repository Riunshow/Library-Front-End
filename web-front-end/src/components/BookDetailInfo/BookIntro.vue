<template>
	<div id="book_intro">
		<div class="book_router">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/book' }">书库</el-breadcrumb-item>
				<el-breadcrumb-item>彼岸花</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="book_intro_header">
			<div class="book_img">
				<img src="./../../../static/logo.png" alt="">
			</div>
			<div class="book_basic_info">
				<div class="book_basic_name">
					<span>名称: </span>
					<span>作者: </span>
					<span>出版社: </span>
					<span>图书位置: </span>
					<span>剩余数量: </span>
				</div>
				<div class="book_basic_render">
					<span>彼岸花</span>
					<span>zpy</span>
					<span>人民邮电出版社</span>
					<span>D33 第三排 403</span>
					<span>3</span>
				</div>
			</div>
		</div>
		<div class="book_intro_main">
			<div class="head">
				<em>图</em>
				<em>书</em>
				<em>简</em>
				<em>介</em>
			</div>
			<div class="book_content">
				“什么叫喜欢？就是你愿意照顾它，伺候它，琢磨它，不怕脏，不嫌累。” 于谦说：“我想说的东西，跟钱关系不大。” 于谦，人称谦儿哥。相声界公认头号玩主，郭德纲认证捧哏巨匠。世事洞明却低调内敛，温润豁达而又随遇而安。抽烟、喝酒、烫头之外，谦哥爱交友，爱大自然，尤其喜爱各种小动物。在《玩儿》精装典藏版中，谦哥记录了自己多年来养猫、粘鸟儿、养鸽子、摸鱼、遛狗、熬鹰、驯马的各种心得体会。字里行间都浸润着亲切、厚道、朴实、局气的老北京四九城内的文化气息，稚儿擎瓜柳蓬下,细犬逐蝶深巷中，百姓烟火人间温情尽汇于此，堪称人间大美。
				同时，《玩儿》中又处处可见于谦对生活的思考、对友谊的珍重和对理想的追求，从捧哏巨匠到摇滚大爷，谦哥随遇而安的外表下，隐藏着怎样的热血、智慧和自由的灵魂？“什么叫喜欢？就是你愿意照顾它，伺候它，琢磨它，不怕脏，不嫌累。” 于谦说：“我想说的东西，跟钱关系不大。” 于谦，人称谦儿哥。相声界公认头号玩主，郭德纲认证捧哏巨匠。世事洞明却低调内敛，温润豁达而又随遇而安。抽烟、喝酒、烫头之外，谦哥爱交友，爱大自然，尤其喜爱各种小动物。在《玩儿》精装典藏版中，谦哥记录了自己多年来养猫、粘鸟儿、养鸽子、摸鱼、遛狗、熬鹰、驯马的各种心得体会。字里行间都浸润着亲切、厚道、朴实、局气的老北京四九城内的文化气息，稚儿擎瓜柳蓬下,细犬逐蝶深巷中，百姓烟火人间温情尽汇于此，堪称人间大美。
				同时，《玩儿》中又处处可见于谦对生活的思考、对友谊的珍重和对理想的追求，从捧哏巨匠到摇滚大爷，谦哥随遇而安的外表下，隐藏着怎样的热血、智慧和自由的灵魂？
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		}
	}
</script>

<style lang="scss" scoped>
	#book_intro {
		width: 1000px;
		.book_router {
			width: 100%;
			height: 50px;
			border-bottom: 1px solid #A9A9A9;;
			.el-breadcrumb {
				padding-top: 25px;
			}
		}
		.book_intro_header {
			height: 300px;
			width: 100%;
			border-bottom: 1px solid #A9A9A9;;
			.book_img {
				height: 200px;
				width: 200px;
				margin-top: 50px;
				margin-left: 100px;
				float: left;
				img {
					height: 200px;
					width: 200px;
				}
			}
			.book_basic_info {
				margin: 10px;
				margin-right: 100px;
				float: right;
				.book_basic_name {
					width: 100px;
					float: left;
					display: -webkit-flex;
					display: flex;
					flex-direction: column;
					span {
						line-height: 50px;
					}
				}
				.book_basic_render {
					width: 300px;
					float: left;
					display: -webkit-flex;
					display: flex;
					flex-direction: column;
					span {
						line-height: 50px;
					}
				}
			}
		}
		.book_intro_main {
			border-bottom: 1px solid #A9A9A9;;
			.head {
				height: 50px;
				line-height: 50px;
				width: 1000px;
				margin-left: auto;
				margin-right: auto;
				text-align: left;
				min-width: 1100px;
				em {
					font-size: 20px;
					font-weight: 600;
					color: #4D555D;
					margin: 0 3px;
				}
			}
			.book_content {
				padding-bottom: 5px;
				// height: 150px;
				font-size: 14px;
				color: #555;
				line-height: 30px;
			}
		}
	}
</style>