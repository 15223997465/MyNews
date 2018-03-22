define(function(require, exports, module) {
	function setInfoHeight() {
		
		var h = document.documentElement.clientHeight || document.body.clientHeight;
		$("#content-info").css({"height":h-$("#content-info").offset().top-$("#main-footer").height()});
	}
	module.exports.setInfoHeight = setInfoHeight; //需要暴露出去的接口放到exports对象中	
})