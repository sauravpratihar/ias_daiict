$(document).ready(function() {
	if ($.fn.cssOriginal!=undefined)
		$.fn.css = $.fn.cssOriginal;

	/*-------------------------------------------------*/
	
	$('.fullwidthbanner3').each(function() {
		$(this).revolution({    
			
												dottedOverlay:"none",
						delay:10000,
						startwidth:1090,
						startheight:550,
						hideThumbs:200,

						thumbWidth:100,
						thumbHeight:50,
						thumbAmount:3,
						
												
						simplifyAll:"off",

						navigationType:"bullet",
						navigationArrows:"solo",
						navigationStyle:"round",

						touchenabled:"on",
						onHoverStop:"on",
						nextSlideOnWindowFocus:"off",

						swipe_threshold: 75,
						swipe_min_touches: 1,
						drag_block_vertical: false,
						
												
												
						keyboardNavigation:"off",

						navigationHAlign:"center",
						navigationVAlign:"bottom",
						navigationHOffset:0,
						navigationVOffset:20,

						soloArrowLeftHalign:"left",
						soloArrowLeftValign:"center",
						soloArrowLeftHOffset:20,
						soloArrowLeftVOffset:0,

						soloArrowRightHalign:"right",
						soloArrowRightValign:"center",
						soloArrowRightHOffset:20,
						soloArrowRightVOffset:0,

						shadow:0,
						fullWidth:"on",
						fullScreen:"off",

												spinner:"spinner0",
												
						stopLoop:"on",
						stopAfterLoops:-1,
						stopAtSlide:-1,

						autoHeight:"on",
						forceFullWidth:"on",
						shuffle:"off",

						
						
						hideTimerBar:"on",
						hideThumbsOnMobile:"off",
						hideNavDelayOnMobile:1500,
						hideBulletsOnMobile:"off",
						hideArrowsOnMobile:"off",
						hideThumbsUnderResolution:0,

												hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						startWithSlide:0					});
	});

	/*-------------------------------------------------*/

	$('.b-switch').on('click', function() {
		$('.tp-rightarrow').trigger('click');
	});
});