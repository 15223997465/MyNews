define(function(require,exports,module){
	var getRandColor=require("getRandColor");
	var timer=setInterval(function(){
		$("#ok").css({"background":getRandColor.getRandColor()});
	},2500);

});
	$("#close").on("tap",function(e){
		var evt=e||event;
		$("#map").slideUp();
		evt.stopPropagation();
		return false;
	});
	$("#ok").on("tap",function(e){
		var evt=e||event;
		
		
		
		
			var succ=document.createElement("h1");
			var time=document.createElement("p");
			$(succ).css({"text-align":"center","color":"#DC143C","margin-top":"5rem"});
			$(time).css({"text-align":"center","color":"gray","margin-top":"5rem"});
			succ.innerText="更改密码成功";
			
			
			var i=5;
			var timer=setInterval(function(){
				i--;
				time.innerText=i+"秒后返回登录界面";
				
				if(i==0)
				{
					clearInterval(timer);
					$("#map").hide("slow").load("Login.html").slideDown();
				}
			},1000);
			//AJAX请求服务器，验证手机，待完善···
			
			$("#map").empty().append(succ).append(time);
		
		
		
		
		
		
		
		evt.stopPropagation();
		return false;
	});
	