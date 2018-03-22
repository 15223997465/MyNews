define(function(require,exports,module){
	  function getRandColor() {
				var r = Math.floor(Math.random() * 255);
				var g = Math.floor(Math.random() * 255);
				var b = Math.floor(Math.random() * 255);
				return "rgb("+r + "," + g + "," + b+")";
			}
 
	
	module.exports.getRandColor = getRandColor; //需要暴露出去的接口放到exports对象中	
})