define(function(require, exports, module) {
			function searchSwipe(mh,sh) {
				
						$("#main-content").fadeIn("slow", function() {
							$("#main-header").animate({"height": mh},"fast");
							$("#search").animate({"height":sh},"fast");
						});
								$("#sbtn").css({
									"display": "inline-block"
								});

								$("#inputBox").css({
									"display": "none"
								});

								$("#input").val("");
								$("#wordInfo").empty();
								$("#wordInfo").hide();
					}
					module.exports.searchSwipe = searchSwipe; //需要暴露出去的接口放到exports对象中	
				})