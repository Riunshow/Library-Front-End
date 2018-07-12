<template>
	<div id="cateHeader">
		<div class="wrap">
			<div class="top">
				<div class="categoryContent">
					<div class="cate_row">
						<span class="cate_name">方向:</span>
						<div class="cate_detail">
							<ul>
								<li v-for="(item, index) in category" :key="index">
									<span class="directionInfo" :class="resultCate == index?'active':''" @click="getClickDirect(index)">{{item.category}}</span>
								</li>
							</ul>
						</div>
					</div>
					<div class="cate_row">
						<span class="cate_name">分类:</span>
						<div class="cate_detail">
							<ul>
								<li v-for="(item, index) in category[whichCate].type" :key="index">
									<span class="directionInfo" :class="resultType == index?'active':''" @click="getClickCate(index,item.id)">{{item.type}}</span>
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
				whichType: 0,
				whichCate: 0,
				category: [{
					cate: '',
					type: [],
				}],
				typeID: 0,
			};
		},
		computed: {
			resultCate() {
				return this.whichCate;
			},
			resultType() {
				return this.whichType;
			}
		},
		created () {
			this.getCategory(),
			this.getTypeId()
		},
		methods: {
			getTypeId() {
				if (this.$route.params.typeid) {
					this.typeID = this.$route.params.typeid
				}
			},
			getCategory() {
				this.$axios
					.get('/category/all')
					.then((results) => {
						this.category = results.data
						for (const x in this.category) {
							for (const y in this.category[x].type) {
								if (this.category[x].type[y].id == this.typeID) {
									this.whichCate = x
									this.whichType = y
								}
							}
						}
						if (!this.$route.params.typeid) {
							this.bus(this.category[0].type[0].id)
						}
					})

			},
			getClickDirect(index) {
				this.whichCate = index
				this.whichType = 0
				this.bus(this.category[index].type[0].id)
			},
			getClickCate(index, cid) {
				this.whichType = index
				this.bus(cid)
			},
			bus(cid) {
				Bus.$emit('cid', cid)
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