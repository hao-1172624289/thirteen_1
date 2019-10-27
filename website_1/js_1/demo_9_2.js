// JavaScript Document
$(function(){
	
	var $tabLi = $('#wrap .tab li');
	var $picImg = $('#wrap .pic img');
	var $tabLiImg = $('#wrap .tab li img');
	var $picCover = $('.pic_cover');
	

	
	var $cover = $('#wrap .cover');
	var $show = $('#wrap .show')
	
	var imgArr = [];			/*图片数据*/
	var index = 0;
	var a = 0;


	
	$tabLi.hover(function(){


		index = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		var src = $(this).find('img').attr('src');  /*获取小图片的src*/
		$show.css('backgroundImage' , 'url('+src+')');
		$picImg.prop({
			src:src,
			width:imgArr[index].width*400,
			height:imgArr[index].height*400
		});
		
		$picCover.css({
			top : (400 - imgArr[index].height * 400 ) / 2,
			left : (400 - imgArr[index].width * 400 ) / 2
		});
		
		a = 400*$picCover.width() / imgArr[index].imgW + 'px'
		$cover.css({
			width : a,
			height : a
		});
		
		
	});
	
	
	
	$picCover.mousemove(function(ev){
	
		$cover.show();
		$show.show();
	
		var	pX = ev.pageX;
		var pY = ev.pageY;
		var picCoverX = $picCover.offset().left;
		var picCoverY = $picCover.offset().top;
		
		

		var minusX = pX-picCoverX-$cover.width()/2;
		var minusY = pY-picCoverY-$cover.width()/2;
		
		minusX = Math.max( minusX , 0 );
		minusX = Math.min( minusX , $picCover.width() - $cover.width() );
		minusY = Math.max( minusY , 0 );
		minusY = Math.min( minusY , $picCover.height() - $cover.height() );
		
		$cover.css({
			left:minusX + 'px',
			top:minusY + 'px'
		});
		
		$show.css('backgroundPosition' ,(-(minusX/$picCover.width())*imgArr[index].imgW) +'px '+ (-		  		                                                                 (minusY/$picCover.height())*imgArr[index].imgH) +'px');
		
	}).mouseleave(function(){
		$cover.hide();
		$show.hide();
	});
	
	/*	$show.mouseover(function(){
			$cover.hide();
			$(this).hide();
		}).mousemove(function(){
			return false;
		});*/
	

	
	init();
	
	function init(){
	
		
		$tabLiImg.each(function(i){
			$(this).load(function(){	/*等待图片载入*/
				var imgWidth = $(this).width();
				var imgHeight = $(this).height();
				 	if(imgWidth >= imgHeight ) {
						$(this).attr({
							width:50,
							height:50/imgWidth*imgHeight
						})	
						
						imgArr[i] = { width:1,
									  height:imgHeight/imgWidth,
									  imgW:imgWidth,
									  imgH:imgHeight
									}	
						
					}
					else {
						$(this).attr({
							width:50/imgHeight*imgWidth,
							height:50
						})
						
						imgArr[i] = { width:imgWidth/imgHeight,
									  height:1,
									  imgW:imgWidth,
									  imgH:imgHeight
									}	
						
						
						$(this).css({
							left:(50-50/imgHeight*imgWidth)/2
						});
					}
				$(this).show();
				
			});
		})
		
		
	}
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});