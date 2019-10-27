// JavaScript Document
$(function(){
	
			setTimeout(function () {
				$(document).scrollTop(0);
			}, 50);
			

			var $navLi = $('.nav ul li');
			var $border = $('#border');
			var $nav = $('.nav');
			var $slideLi = $('#slide ul li');
			var index = 0;
			var nowTime = new Date();
			
			$navLi.mouseenter(function(){
				var thisWidth = $(this).width();
				var thisLeft = $(this).position().left;
				$(this).addClass('on').siblings().removeClass('on');
				$border.stop(true).animate({
					left : thisLeft+38 + 'px',
					width : thisWidth+28 + 'px'
				},300);
			});

			$nav.mouseleave(function(){
				$navLi.eq(0).addClass('on').siblings().removeClass('on');
				$border.stop(true).animate({
					left : '38px',
					width : '56px'
				},300);
			});
			
			$slideLi.click(function(){
				index = $(this).index();
				wheel();
			});

			$(document).mousewheel(function(e,d){
				if ( d < 0 )
				{
					index ++;
					index %= $slideLi.length
				}
				else
				{
					index --;
					if(index<0)index=$slideLi.length-1;
				}
				wheel();
			});

			$(window).resize(function(){
				var windowH = $(window).height();
				$(document).scrollTop( index * windowH );
			});

			function wheel(){
				$slideLi.eq(index).addClass('on').siblings().removeClass('on');
				var windowH = $(window).height();
				if( new Date() - nowTime > 1000 ){
					$('body,html').stop(true).animate({
						scrollTop : index * windowH
					},500);
				}
				else return false;
			};
});