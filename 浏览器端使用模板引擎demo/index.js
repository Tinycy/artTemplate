
$(document).ready(function(){
	
	$.getJSON('file:///C:/Users/Roy/Desktop/2016-8-16/Roy-atrTemplate/浏览器端使用模板引擎demo/json/goods.json',function(responseData){
		
		console.log(responseData)
		//渲染模板
		var html =  template('goods',responseData)
		
		document.querySelector('main').innerHTML = html
		
		
		$('.aGood').hover(function(){


		$(this).find('img.large').css({
			
			filter:"blur(2px)"
		})
		
		$(this).find('.detail').stop().fadeIn(300)
		
	},function(){
		
		$(this).find('img.large').css({
			
			filter:"blur(0)"
		})
		
		$(this).find('.detail').stop().fadeOut(300)
	})
		
	})
	
	
	
})






