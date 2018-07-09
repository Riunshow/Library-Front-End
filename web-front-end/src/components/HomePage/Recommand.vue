<template>
	<div class="recommand">
		<em>图</em>
		<em>书</em>
		<em>推</em>
		<em>荐</em>
		<ul>
			<li v-for="(items, idex) in recommendBook">
				<img :src="items.cover" :alt="items.name">
				<span>{{items.name}}</span>
				<p>{{items.blurb}}</p>
				<!--  -->
				<div class="detail">
					<span class="cateName">{{items.Category.category}}/{{items.Category.type}}</span>
					<span class="view"><i class="el-icon-view"></i>{{items.views}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				recommendBook: []
			};
		},
		created() {
			this.getrecommendBook()
		},
		methods: {
			getrecommendBook() {
				const _this = this
				this.$axios.get('/book/recommend?num=5')
					.then((result) => {
						_this.recommendBook = result.data
					}).catch((err) => {
						console.log(err);
					});
			}
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
						width: 80px;
					}
					.view {
						float: right;
							i {
								margin-right: 5px;
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