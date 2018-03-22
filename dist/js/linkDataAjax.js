define(function(require, exports, module) {
	function linkDataAjax() {
		
		$.ajax({
			type: "get",
			url: "../json/data.json",
			async: true,
			dataType: "json",
			success: function(response, status, xhr) {
				var navTap=require("navTap");
				navTap.navTap(response);
			}
		});
	}
	module.exports.linkDataAjax = linkDataAjax; //需要暴露出去的接口放到exports对象中	
})