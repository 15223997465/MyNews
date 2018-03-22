define(function(require,exports,module){
	var navSwipe = require("navSwipe");
	var linkDataAjax=require("linkDataAjax");
	var setInfoHeight=require("setInfoHeight");
	var search=require("search");
	var searchSwipe=require("searchSwipe");
	var searchWord=require("searchWord");
	var swipePage=require("swipePage");
	var mh = $("#main-header").height();
	var sh = $("#search").height();
	function exec(){
		navSwipe.navSwipe();
		linkDataAjax.linkDataAjax();
		setInfoHeight.setInfoHeight();
		$(".ui-loader").remove();
		$("#search").on("tap",function(){
			
			search.search();
		});
		$("#search").on("swipeleft",function(){
			
			searchSwipe.searchSwipe(mh,sh);
		});
		$("#search").on("swiperight",function(){
			
			searchSwipe.searchSwipe(mh,sh);
		});
		$("#index").on("tap",function(){
			searchSwipe.searchSwipe(mh,sh);
		});
		$("#input").on("input",function(){
			searchWord.searchWord();
		});
		$("#content-info").on("swipeleft",function(e){
			var evt=e||event;
			swipePage.swipePage("left");
			evt.stopPropagation();
			
		});
		$("#content-info").on("swiperight",function(e){
			var evt=e||event;
			swipePage.swipePage("right");
			evt.stopPropagation();
		});
		
		$("#login").unbind("tap").bind("tap",function(e){
			var evt=e||event;
			$("#map").empty();		
				$("#map").load("Login.html").slideDown();
				$.getScript("../js/My.js");
			evt.stopPropagation();
			
		});
		$("#press").on("tap",function(e){
			var evt=e||event;
			$("#map").empty();
				$("#map").load("Press.html").slideDown();
				
				$.getScript("../js/My.js");
			evt.stopPropagation();
			
		});
}
	exec();
});





function showData(data){
	$("#content-info").empty();
	for(var item in data)
	{
		var title=document.createElement("a");
		var img=document.createElement("img");
		img.src=data[item].imgurl;
		title.href=data[item].docurl;
		title.innerText=data[item].title;
	
		var time=document.createElement("p");
		time.innerText=data[item].time.slice(0,2)+"-"+data[item].time.slice(3,5)+" "+data[item].time.slice(11,16);
		var span=document.createElement("div");
		$(span).attr("class","cSpan");
		var collection=document.createElement("b")
		collection.innerText="收藏";
		span.appendChild(collection)
		span.appendChild(time);
	
	var obox=document.createElement("div");
	var oimg=document.createElement("a");
	obox.appendChild(title);
	obox.appendChild(span);
	oimg.appendChild(img);
	oimg.href=data[item].docurl;
	var oli=document.createElement("li");
	oli.appendChild(oimg);
	oli.appendChild(obox);

	
	$("#content-info").append(oli);
	
	
		}
}
function showWord(_data){
	var data=_data.s;
	console.log(data);
	$("#wordInfo").empty();
	for(let item in data)
	{
		var word=document.createElement("p");
		word.innerText=data[item];
		
		$(word).on("tap",function(){
			$("#input").val(data[item]);
			$("#wordInfo").empty();
		});
		$("#wordInfo").append(word);
	}
}
