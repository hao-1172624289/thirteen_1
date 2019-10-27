// JavaScript Document

$(function(){
	
	var $li = $('#wrap ul li');
	
	$li.hover(function(ev){

		move.call(this,ev,true);
		
	},function(ev){
		
		move.call(this,ev,false);
	
		
	});


	function move(ev,www){
		
		var top = $(this).offset().top;
		var bottom = top + $(this).height();
		var left = $(this).offset().left;
		var right = left + $(this).width();
		
		var x = ev.pageX;
		var y = ev.pageY;
		
		var sT = Math.abs(y - top),
			sB = Math.abs(y - bottom),
			sL = Math.abs(x - left),
			sR = Math.abs(x - right);
		
		var a = Math.min(sT,sB,sL,sR);
		

		switch ( a ){
			case sT:
				if ( www ) {
						$(this).find('.cover').css({
								left : 0,
								top : '-360px'
							}).stop().animate({
								top : 0
									},200);
					}
					else {
						$(this).find('.cover').stop().animate({
								top : '-360px'
									},200);
					}
							
					break;

			case sB:
				if ( www ) {
						$(this).find('.cover').css({
								left : 0,
								top : '360px'
							}).stop().animate({
								top : 0
									},200);
					}
				else {
								$(this).find('.cover').stop().animate({
								top : '360px'
									},200);
							}
							break;
						
			case sL:		
				if ( www ){
						$(this).find('.cover').css({
								top : 0,
								left : '-230px'
							}).stop().animate({
								left : 0
									},200);
							}
							else {
								$(this).find('.cover').stop().animate({
								left : '-230px'
									},200);
							}
							
							break;
						
			case sR:
				if ( www ){
						$(this).find('.cover').css({
								top : 0,
								left : '230px'
							}).stop().animate({
								left : 0
									},200);
							}
							else{
								$(this).find('.cover').stop().animate({
								left : '230px'
									},200);
							}
							break;
					}
		
		
		
		
				}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});