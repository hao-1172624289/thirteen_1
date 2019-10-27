// JavaScript Document
$(function(){
	
	//页面刷新-解决缓存
	setTimeout(function(){
			$(document).scrollTop(0);
	},50);

	
	
	
	var $part = $('.part');
	var $li = $('#slide ul li');
	var wH = $(window).height();
	var index = 0;
	var $img = $('.part img');
	var nowTime = new Date();
	
	
	//初始化
	$li.eq(0).addClass('on');
	$part.append('<div class="logo"></div>');
	$part.each(function(i){
		var str = '';
		str='url(img/img_pc/'+(i+1)+'.jpg) no-repeat center / cover';
		$(this).css('background',str);
	
	});
	
	
	//页面滚动
	$li.click(function(){
		
		index = $(this).index();
		console.log(index);
		$(this).addClass('on').siblings().removeClass('on');
		
		$('body,html').animate({
			scrollTop : index*wH
		});
	
	});
	
	
	$(document).mousewheel(function(){
		
		if(new Date()-nowTime>500){
				nowTime = new Date();
				var d = arguments[1];
				index = d<0?(index>=$li.length-1?0:index+1):(index<=0?$li.length-1:index-1);
				move();
		}
		
		
	});
	
			
	
	
		function move() {
			wH = $(window).height();
			$li.eq(index).addClass('on').siblings().removeClass('on');
			$('body,html').animate({
				scrollTop: index * wH
			}, 500, function () {
				$part.eq(index).find('.img1').addClass('on');
				$part.eq(index).siblings().find('.img1').removeClass('on');
			});

			}
	
	
		/*//图片加载后盒子居中
		(function(){
			$img.each(function(){
				this.onload = function(){
					var width = $(this).width();
					var height = $(this).height();
					console.log(width);
					$(this).parent().css({
						width : width + 'px',
						height : height + 'px',
						marginTop : -height/2 + 'px',
						marginLeft : -width/2 + 'px'
						
					});
					
					
				};
				
			});
			
			
			
		})();*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});