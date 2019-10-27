// JavaScript Document
$(function(){
	var $tabLi = $('#banner .tab li');
	var $picLi = $('#banner .pic li');
	var $btn = $('#banner .btn');
	var $btnDiv = $('#banner .btn div');
	var $banner = $('#banner');
	var index = 0;
	var timer;
	
	$tabLi.hover(function(){
		index = $(this).index();

		
		$(this).addClass('on').siblings().removeClass('on');
		$picLi.eq(index).stop(true).fadeIn().siblings().stop(true).fadeOut();

	});
	
	$banner.hover(function(){
		$btn.show();
		clearInterval(timer);
	},function(){
		$btn.hide();
		timer = setInterval(function(){
			index++;
			if(index >= $tabLi.length) index = 0;
			else if(index < 0) index = $tabLi.length - 1;
			$tabLi.eq(index).addClass('on').siblings().removeClass('on');
			$picLi.eq(index).stop(true).fadeIn().siblings().stop(true).fadeOut();
		},3000);
	});
	
	$btnDiv.hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	}).click(function(){
		var i = $(this).index();
		i?index++:index--;
		if(index >= $tabLi.length) index = 0;
		else if(index < 0) index = $tabLi.length - 1;
		$tabLi.eq(index).addClass('on').siblings().removeClass('on');
		$picLi.eq(index).stop(true).fadeIn().siblings().stop(true).fadeOut();
		
	}).mousedown(function(){
		return false;
	});
	

});