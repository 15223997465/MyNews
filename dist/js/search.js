define(function(require, exports, module) {
			function search() {
				var h = document.documentElement.clientHeight || document.body.clientHeight;
				
				$("#main-content").fadeOut("fast", function() {
						$("#main-header").animate({"height": h - $("#content-info").offset().top - $("#main-footer").height()},"fast");
						$("#search").animate({"height": h - $("#content-info").offset().top - $("#main-footer").height() - $("#search").offset().top},"fast")
						});
					
					
					
					$("#sbtn").css({
									"display": "none"
								});

					$("#inputBox").css({
									"display": "block"
								});
								
					$("input").attr("autofocus","autofocus");
								
								
								
					}
					module.exports.search = search; //需要暴露出去的接口放到exports对象中	
				})