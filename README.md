# Library-Front-End

图书馆pc web前端界面 to 用户端


___
* 记录
	1. 富文本编辑器 采用 vue2-editor 实现,编辑时采用lodash的debounce方法延迟保存,防止过多的使用 @keyup & @keydown
	2. element-ui 使用键盘事件不成功,需要改成默认事件,加上native,如:@keyup.native
