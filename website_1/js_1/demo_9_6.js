// JavaScript Document
$(function () {


	setTimeout(function () {
		$(document).scrollTop(0);
	}, 50);


	var $part = $('.part');
	var $li = $('#slide ul li');
	var $img = $('.part img');

	//初始化
	(function () {
		$li.eq(0).addClass('on');
		$part.append('<div class="logo"></div>');
		$part.each(function (i) {
			var str = i != 1 ? 'url(img_1/9_6_' + (i + 1) + '.jpg) no-repeat center / cover' : '#D97F5C';
			$(this).css('background', str);
		});
	})();

	//页面滚动
	(function () {
		var index = 0;
		var wH = $(window).height();
		var nowTime = new Date();

		$(window).resize(function () {
			wH = $(window).height();
		});
		$li.click(function () {
			index = $(this).index();
			move();
		});
		
		$(document).mousewheel(function () {
			if (new Date() - nowTime > 500) {
				nowTime = new Date();
				var d = arguments[1];
				index = d < 0 ? (index >= $li.length - 1 ? 0 : index + 1) : (index <= 0 ? $li.length - 1 : index - 1);
				move();
			};
		});

		function move() {
			$li.eq(index).addClass('on').siblings().removeClass('on');
			$('body,html').animate({
				scrollTop: index * wH
			}, 500, function () {
				$part.eq(index).find('.img1').addClass('on');
				$part.eq(index).siblings().find('.img1').removeClass('on');
			});

		}
	})();

	//图片加载完后盒子居中









});
