define(function(require,exports,module){
	 function navTap(response){
	 		
			
			var tapList = $("#kinds").children();
				for(var i = 0; i < tapList.length; i++) {
					(function(i) {
						$(tapList[i]).on("click", function() {
							$(tapList[i]).addClass("cutt").siblings().removeClass("cutt");
							
							var scripts=$("script");
							for(var j in scripts)
							{
								if(scripts[j].charset=="gb2312")
								{
									scripts[j].remove();
									break;
								}
							}
							
							
							var myscript = document.createElement("script");
							myscript.charset = "gb2312";
							document.body.appendChild(myscript);
							myscript.src = response[i];
						})
					})(i)

				}
		}
	
	module.exports.navTap = navTap; //需要暴露出去的接口放到exports对象中	
})