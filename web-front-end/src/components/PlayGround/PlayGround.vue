<template>
	<div id="ground_main">
		<header-nav />
		<div id="playGround">
			<div class="groundLayout">
				<div class="leftMessage">
					<message />
				</div>
				<div class="rightOptions">
					<div class="optionsDetail">
						<options />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import HeaderNav from './../common/Header'
	import FooterNav from './../common/Footer'
	import Message from './Message.vue'
	import Options from './Options.vue'
	export default {
		components: {
			HeaderNav,
			FooterNav,
			Message,
			Options,
		},
		data() {
			return {};
		},
		updated() {
			window.scroll(0, 0);
		},
	}
</script>

<style lang="scss" scoped>
	#ground_main {
		#playGround {
			width: 1000px;
			height: 100%;
			margin-left: auto;
			margin-right: auto;
			.groundLayout {
				display: flex;
				display: -webkit-flex;
				flex-direction: row;
				flex-wrap: nowrap;
				margin-left: auto;
				margin-right: auto;
				width: 1000px;
				height: 100%;
				min-width: 1000px;
				margin-top: 80px;
				.leftMessage {
					width: 700px;
				}
				.rightOptions {
					width: 300px;
					height: 600px;
					padding-left: 15px;
					.optionsDetail {
						width: 250px;
						height: 500px;
						position: fixed;
					}
				}
			}
		}
	}
</style>
