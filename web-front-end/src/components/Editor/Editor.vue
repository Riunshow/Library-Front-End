<template>
	<div class="editorModel">
		<el-container>
			<el-header>
				<div class="header">
					<span class="optName">写文章</span>
					<span class="saveContent">{{autoSave}}</span>
					<span class="otherOpt">
					<el-dropdown>
						<span class="el-dropdown-link">· · ·</span>
						<el-dropdown-menu slot="dropdown">
							<!-- <el-dropdown-item>草稿</el-dropdown-item>
							<el-dropdown-item>我的文章</el-dropdown-item> -->
							<router-link to="/ground">
								<el-dropdown-item>回到操场</el-dropdown-item>
							</router-link>
						</el-dropdown-menu>
					</el-dropdown>
					</span>
					<span class="optPublish"><el-button @click="publishArticle()" type="text">发布</el-button></span>
				</div>
			</el-header>
			<el-main>
				<div class="writeCotent">
					<div class="articleTitle">
						<el-input placeholder="请输入标题" v-model="title" clearable @keyup.native="judgeInput()" @keydown.native="changeWrite()"></el-input>
					</div>
					<vue-editor v-model="content" @imageAdded="handleImageAdded" @keyup.native="judgeInput()" @keydown.native="changeWrite()"></vue-editor>
				</div>
				<div class="showContent">
					<div class="showTitle" v-html="title"></div>
					<!-- <div class="showContent" v-html="content"></div> -->
					<div id="quill-container" class="ql-container ql-snow">
						<div class="contentBlock ql-editor" data-gramm="false" contenteditable="false" v-html="content">
						</div>
					</div>
				</div>
			</el-main>
		</el-container>
	</div>
</template>

<script>
	import {
		VueEditor
	} from 'vue2-editor'
	import './../../assets/js/lodash.min.js'
	export default {
		components: {
			VueEditor
		},
		data() {
			return {
				content: '',
				title: '',
				notWrite: false,
			};
		},
		computed: {
			autoSave: function() {
				localStorage.title = this.title
				localStorage.content = this.content
				if (this.notWrite == true) {
					return '草稿保存中...'
				} else {
					return '草稿已保存'
				}
			}
		},
		methods: {
			publishArticle() {
				if (this.title == '' || this.content == '') {
					this.$message.error("标题或内容不能为空")
				}else {
					this.$axios
						.post('community',{
							title:  this.title,
							content: this.content,
						})
						.then((results) => {
							console.log(results.data)
							this.$router.push('/ground')
						})
				}
			},
			handleImageAdded() {
				// var formData = new FormData();
				// formData.append('image', file)
				// axios({
				// 		url: 'https://fakeapi.yoursite.com/images',
				// 		method: 'POST',
				// 		data: formData
				// 	})
				// 	.then((result) => {
				// 		let url = result.data.url // Get url from response
				// 		Editor.insertEmbed(cursorLocation, 'image', url);
				// 		resetUploader();
				// 	})
				// 	.catch((err) => {
				// 		console.log(err);
				// 	})
			},
			changeWrite() {
				this.notWrite = true
			},
			stopWrite() {
				this.notWrite = false
			},
			judgeInput: _.debounce(function() {
				this.stopWrite()
			}, 2000)
		},
	}
</script>

<style lang="scss" scoped>
	.editorModel {
		background-color: #fff;
		width: 100%;
		height: 100%;
		.el-container {
			width: 100%;
			height: 100%;
			.el-header {
				line-height: 59px;
				height: 59px;
				width: 90%;
				margin-left: auto;
				margin-right: auto;
				border-bottom: 1px solid rgba(0, 0, 0, .08);
				span {
					font-size: 20px;
					font-weight: 600;
				}
				.optName {
					float: left;
				}
				.saveContent {
					float: left;
					margin-left: 15px;
					color: #8590a6;
					font-size: 18px;
				}
				.otherOpt {
					float: right;
					margin-right: 15px;
					cursor: pointer;
				}
				.optPublish {
					float: right;
					margin-right: 30px;
					.el-button {
						font-size: 20px;
						font-weight: 600;
					}
				}
			}
			.el-main {
				width: 90%;
				margin-left: auto;
				margin-right: auto;
				.writeCotent {
					float: left;
					width: 49%;
					.articleTitle {
						.el-input {
							margin-bottom: 15px;
							width: 100%;
							font-size: 30px;
							font-weight: 600;
						}
					}
					.quillWrapper {
						height: 70%;
					}
				}
				.showContent {
					float: left;
					width: 49%;
					margin-left: 1%;
					.showTitle {
						border: 1px solid #dcdfe6;
						border-radius: 4px;
						font-size: 30px;
						font-weight: 600;
						height: 38px;
						line-height: 38px;
						margin-bottom: 15px;
						padding: 0 15px;
					}
					.contentBlock {
						width: 100%;
						min-height: 281px;
						padding: 12px 15px;
						line-height: 1.42;
					}
				}
			}
		}
	}
</style>

<style lang="scss">

</style>
