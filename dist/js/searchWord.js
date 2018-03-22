define(function(require, exports, module) {
			function searchWord() {
				var scripts=$("script");
				for(var item in scripts)
				{
					if(scripts[item].id=="word_data")
					{
						scripts[item].remove();
						break;
					}
				}
				var textval=$("input").val();
				var myscrip=document.createElement("script");
				myscrip.setAttribute("id","word_data");	  				myscrip.src="http://nssug.baidu.com/su?wd="+textval+"&oe=utf-8&prod=news&json=1&p=3&sid=&cb=word_callback"
				document.body.appendChild(myscrip);			
					}
					module.exports.searchWord = searchWord; //需要暴露出去的接口放到exports对象中	
			})