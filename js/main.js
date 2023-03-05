(function ($) {
	'use strict';

	var albireoApp = {  
		/* ---------------------------------------------
			## One Page Menu Script
		--------------------------------------------- */
		onePageMenu: function () {
			if ($('.site-header.header-style-one').length || $('.site-header.header-style-two').length || $('.site-header.header-style-three').length || $('.site-header.header-style-four').length || $('.site-header.header-style-five').length) {
				$('.navbar > li > a').on('click', function (e) {
					var anchor = $(this); 
					$('html, body').stop().animate({
						scrollTop: $(anchor.attr('href')).offset().top - 75
					}, 1200);
					e.preventDefault();
				});
			}
		},
		scroll_top: function () {
			$('body').append(
				"<a href='#top' id='scroll-top' class='topbutton btn-hide'><span  class='icofont-arrow-up'></span></a>"
			);
			var $scrolltop = $('#scroll-top');
			$(window).on('scroll', function () {
				if ($(this).scrollTop() > $(this).height()) {
					$scrolltop.addClass('btn-show').removeClass('btn-hide');
				} else {
					$scrolltop.addClass('btn-hide').removeClass('btn-show');
				}
			});
			$("a[href='#top']").on('click', function () {
				$('html, body').animate(
					{
						scrollTop: 0,
					},
					'normal'
				);
				return false;
			});
		},
      
		/* ---------------------------------------------
		 function initializ
		 --------------------------------------------- */
		initializ: function () {
			albireoApp.scroll_top();
			albireoApp.onePageMenu(); 
		},
	};
	/* ---------------------------------------------
	 Document ready function
	 --------------------------------------------- */
	$(function () {
		
		$("#loader-overlay").delay(500).fadeOut();
		$(".loader").delay(1000).fadeOut("slow");

		albireoApp.initializ();
	});

	$(window).on('load', function () {
 
	});
})(jQuery);
