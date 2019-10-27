// JavaScript Document

$(function(){
	
	var $tabLi = $('#banner .tab li');
	var $picUl = $('#banner .pic ul');
	var $banner = $('#banner');
	var $btn = $('#banner .btn');
	var $btnDiv = $('#banner .btn div');
	var imgWidth = $('#banner .pic li').width();
	var index = 0;
	var nowTime = new Date();
	var timer1;
	
	$tabLi.click(function(){
		index = $(this).index();
		
		$(this).addClass('on').siblings().removeClass('on');
		
		$picUl.animate({
			marginLeft : -imgWidth*(index+1)+'px'
		},300);
		
	});
	
	$banner.hover(function(){
		$btn.show();
		clearInterval(timer1);
	},function(){
		$btn.hide();
		timer1 = setInterval(function(){
			index++;
			if(index<5)
			$tabLi.eq(index).addClass('on').siblings().removeClass('on');
			else $tabLi.eq(0).addClass('on').siblings().removeClass('on');
			$picUl.animate({
				marginLeft : -imgWidth*(index+1)+'px'
			},300,function(){
				if(index<0){
					index = $tabLi.length - 1;
					$picUl.css(
						'marginLeft', -imgWidth*(index+1)+'px'
						
					);
				}
			else if(index >= $tabLi.length){
					index = 0;
					$picUl.css(
						'marginLeft' ,-imgWidth*(index+1) + 'px'
					);
				}

			});
			
		},3000);
	});
	
	
	$btnDiv.hover(function(){
		$(this).addClass('hover');
	},function(){
		$(this).removeClass('hover');
	}).click(function(){
		if(new Date() - nowTime > 350 ){
		nowTime = new Date();
		var i = $(this).index();
		i?index++:index--;
		
		if(index<5)
		$tabLi.eq(index).addClass('on').siblings().removeClass('on');
		else $tabLi.eq(0).addClass('on').siblings().removeClass('on');
		$picUl.animate({
			marginLeft : -imgWidth*(index+1)+'px'
		},300,function(){
			if(index<0){
				index = $tabLi.length - 1;
				$picUl.css(
					'marginLeft', -imgWidth*(index+1)+'px'
					
				);
			}
		else if(index >= $tabLi.length){
				index = 0;
				$picUl.css(
					'marginLeft' ,-imgWidth*(index+1) + 'px'
				);
			}
			
		});
		}
	}).mousedown(function(){
		return false;
	});

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});