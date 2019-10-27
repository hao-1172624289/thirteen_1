// JavaScript Document
$(function(){
	
	var $top = $('#top');
	var $step = $('.main_step');
	var stepLength = $step.length;
	var $slideLi = $('#slide ul li');
	

	/*js的页面滚动： window.onscrol*/
	$(window).scroll(function(){
		
		var scrollTop = $(document).scrollTop();
		var index = 0;
		
			scrollTop>=150?$top.show():$top.hide();
		
			$step.each(function(i){
			
			var a = $(this).offset().top - $(document).scrollTop();          /*当前元素顶部到文档顶部 - 滚动高度*/
				if( a < 42 + 32* i ) {
					$slideLi.eq(i).show();
					index = i+1;
				}
			else {
					$slideLi.eq(i).hide();
			}
				});
		
				$step.eq(index).addClass('on').parent().siblings().find('.main_step').removeClass('on');
				index && $slideLi.eq(index-1).addClass('on').siblings().removeClass('on');
			});
		
		$slideLi.click(function(){
					
			var index = $(this).index();
			console.log($step.eq(index).offset().top);
			$('body,html').animate({
				scrollTop : $step.eq(index).offset().top
			},500);
			
			}).hover(function(){
				$(this).addClass('hover');
			},function(){
				$(this).removeClass('hover');
			});
		
		
		
		
		

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});