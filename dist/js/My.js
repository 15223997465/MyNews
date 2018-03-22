$("#myCollection").on("tap", function(e) {
	console.log(1)
	var evt = e || event;
	$("#content_info").empty().show();
	$("#content").hide();
	$.ajax({
		type: "get",
		url: "../json/myCollection.json",
		async: true,
		dataType: "json",
		success: function(response, status, xhr) {
			var data = response;
			$("#content_info").empty();
			for(var item in data) {
				var title = document.createElement("a");
				var img = document.createElement("img");
				img.src = data[item].imgurl;

				title.href = data[item].docurl;
				title.innerText = data[item].title;

				var time = document.createElement("p");
				time.innerText = data[item].time.slice(0, 2) + "-" + data[item].time.slice(3, 5) + " " + data[item].time.slice(11, 16);
				var span = document.createElement("div");
				$(span).attr("class", "cSpan");
				span.appendChild(time);

				var obox = document.createElement("div");
				var oimg = document.createElement("a");
				obox.appendChild(title);
				obox.appendChild(span);
				oimg.appendChild(img);
				oimg.href = data[item].docurl;
				var oli = document.createElement("li");
				oli.appendChild(oimg);
				oli.appendChild(obox);

				$("#content_info").append(oli);
			}
		}
	});
	e.stopPropagation();
	return false;
})

$("#myInfo").on("tap", function(e) {

	$("#itemBox").remove();
	var evt = e || event;
	$("#content_info").empty().show();
	$("#content").hide();
	$.ajax({
		type: "get",
		url: "../json/myInfo.json",
		async: true,
		dataType: "json",
		success: function(response, status, xhr) {
			var data = response;
			$("#content_info").empty();
			var title = document.createElement("h3");
			$(title).text("个人资料");
			$("#content_info").append(title);
			for(var item in data) {
				if(data[item].username == $("#showUsername").text()) {
					var box = document.createElement("div");
					$(box).attr("class", "itemBox");
					$(box).attr("id", "itemBox");

					var usernamespan = document.createElement("div");
					var usernameLabel = document.createElement("b");
					$(usernameLabel).attr("class", "usernameLabel");
					$(usernameLabel).attr("id", "usernameLabel");
					var usernameInput = document.createElement("input");
					$(usernameInput).attr("class", "usernameInput");
					$(usernameInput).attr("type", "text");
					$(usernameInput).val(response[item].username);
					$(usernamespan).append(usernameLabel);
					$(usernamespan).append(usernameInput);

					var levelspan = document.createElement("div");
					var levelLabel = document.createElement("b");
					$(levelLabel).attr("class", "levelLabel");
					$(levelLabel).attr("id", "levelLabel");
					var levelInput = document.createElement("input");
					$(levelInput).attr("class", "levelInput");
					$(levelInput).attr("type", "text");
					$(levelInput).attr("disabled", "disabled");
					$(levelInput).val(response[item].level);
					$(levelspan).append(levelLabel);
					$(levelspan).append(levelInput);

					$(box).append(usernamespan);
					$(box).append(levelspan);

					$("#content_info").append(box);
				}

			}
			$("#usernameLabel").text("用户名:");
			$("#levelLabel").text("等级:");
			var save = document.createElement("button");

			$(save).text("保存");
			$("#itemBox").append(save);
			$(save).on("tap", function(e) {
				var evt = e || event;

				//上传个人资料到数据库
				$("#content_info").empty().hide();
				$("#content").show();
				evt.stopPropagation();
				return false;
			})
		}
	});
	e.stopPropagation();
	return false;

})

$("#close").on("tap", function(e) {
	var evt = e || event;
	$("#map").slideUp();
	evt.stopPropagation();
	return false;
});
$("#signOut").on("tap", function() {
	location.href = "News.html";
})
$("#back").on("tap", function(e) {
	var evt = e || event;
	$("#content_info").empty().hide();
	$("#content").show();
	evt.stopPropagation();
	return false;
});