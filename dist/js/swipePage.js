define(function(require, exports, module) {
			function swipePage(str) {
				var index=0;
				var btns=$("#kinds").children();
				for(var i=1;i<btns.length;i++)
				{
					if(btns[i].className=="cutt")
					{
						index=i;
					}
				}
			if(str=="right")
			{
				
				if(index==0)
				{
					index=0;
				}
				else{
					index--;
				}
				btns[index].click();
				if(index<btns.length-1)
				{
					var wid = $("#kinds").width();
					var len = $("#kinds").children().length;
					$("#kinds").animate({"left":$("#kinds").offset().left+wid/len},"fast")
					if($("#kinds").offset().left>0)
					{
						$("#kinds").animate({"left":64},"fast")
					}
				}
				
			}
			else{
				if(index==btns.length-1)
				{
					index=btns.length-1;
				}
				else{
					index++;
				}
				btns[index].click();
				
				if(index>1)
				{
					var wid = $("#kinds").width();
					var len = $("#kinds").children().length;
					$("#kinds").animate({"left":$("#kinds").offset().left-wid/len},"fast")
					if($("#kinds").offset().left<=-wid/2+wid/len*2)
					{
						$("#kinds").animate({"left":-wid/2-wid/len*0.5},"fast")
					}
				}
				
				
				
				
				
			}		
			}
					module.exports.swipePage = swipePage; //需要暴露出去的接口放到exports对象中	
				})
