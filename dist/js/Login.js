define(function(require, exports, module) {
	var getRandColor = require("getRandColor");
	
	var timer = setInterval(function() {
		$("#lb").css({
			"background": getRandColor.getRandColor()
		});
		$("#rb").css({
			"background": getRandColor.getRandColor()
		});
	}, 2500);
	
	
});
var data;
	$.ajax({
		type: "get",
		url: "../json/myInfo.json",
		async: true,
		dataType: "json",
		success: function(response, status, xhr) {
			data = response;

		}

	});
$("#lb").unbind("tap").bind("tap", function(e) {
		var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		var evt = e || event;
		//服务器操作
		if(!$("#tel").val()) {
			alert("手机号不能为空！");
		} else if(!$("#pwd").val()) {
			alert("密码不能为空！");

		} else if(!reg.test($("#tel").val())) {
			alert("手机号格式不正确，请重新输入");
			$("#tel").val("");
			$("#pwd").val("");

		}
		else{
			var index;
			for(var i in data) {
				 if($("#tel").val().toString() == data[i].phoneNum.toString())
				 {
				 	index=i;
				 	break;
				 }
			}
			if(i==data.length)
			{
				alert("用户不存在，请注册！");
			}
			else  if($("#tel").val().toString() == data[index].phoneNum.toString() && $("#pwd").val() == data[index].password) {
				$("#press").css({
					"display": "block"
				});

				$("#login").html("<i>个人中心</i>");
				$("#login").attr("id", "my");
				$("#my").attr("class", "my");
				$("#my").on("tap", function() {
					$("#map").empty().load("My.html",function(){
						console.log($("#showUsername"));
						$("#showUsername").text(data[index].username);
					}).show();
					
					return false;
				});
				$("#map").slideUp();
				return;

			} else {
				alert("密码不正确，请重新输入！");
				$("#pwd").val("");
			}

			
			//$("#tel").val("手机号或密码不正确，请重新输入");
		
		}
		
		//服务器刷新页面
		evt.stopPropagation();
		return false;
	});
$("#close").on("tap", function(e) {
	var evt = e || event;
	$("#map").slideUp();
	evt.stopPropagation();
	return false;
});
$("#rb").on("tap", function(e) {
	var evt = e || event;
	$("#map").hide().empty().load("Register.html").slideDown();
	evt.stopPropagation();
	return false;
});
$("#fg").on("tap", function(e) {
	var evt = e || event;
	$("#map").hide().empty().load("Repassword.html").slideDown();
	evt.stopPropagation();
	return false;
});
$("#back").on("tap", function() {
	console.log("loginback")
	$("#content_info").empty().hide();
	$("#content").show();
});
$("#tel").on("change", function() {
	var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	if($("#tel").val() && reg.test($("#tel").val())) {
		$("#tel").css({
			"color": "green"
		});
	} else {
		$("#tel").css({
			"color": "red"
		});
	}
})