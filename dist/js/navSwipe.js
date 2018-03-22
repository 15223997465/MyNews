define(function(require,exports,module){
	 function navSwipe(){
		$("#kinds").on("swipeleft",function(){
			var wid = $(this).width();
			var len = $(this).children().length;
			$(this).animate({"left":$(this).offset().left-wid/len*2},"fast")
			if($(this).offset().left<=-wid/2+wid/len*2)
			{
				$(this).animate({"left":-wid/2-wid/len*0.5},"fast")
			}
			return false;
		});
		$("#kinds").on("swiperight",function(){
			var wid = $(this).width();
			var len = $(this).children().length;
			$(this).animate({"left":$(this).offset().left+wid/len*2},"fast")
			if($(this).offset().left>0)
			{
				$(this).animate({"left":64},"fast")
			}
			return false;
		});
		}
	module.exports.navSwipe = navSwipe; //需要暴露出去的接口放到exports对象中	
})