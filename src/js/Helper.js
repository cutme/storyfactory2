(function(window, document, $, story, undefined) {
	'use strict';

	var Helper = function() {
        return {
        	exist: exist,
        	blazy: blazy,
        	goToTarget: goToTarget,
        	isInView: isInView,
        	isWindowSmallerThan: isWindowSmallerThan,
        	showOnScroll: showOnScroll
        };
    };
    
	function blazy() {

		var bLazy = new Blazy({
			breakpoints: false,	
			success: function(element){
			    setTimeout(function(){					
					
					if ($(element).parent().hasClass('o-bgfoto')) {
						$(element).parents('.c-section').addClass('b-loaded');
					} else {
						
					}
					
			    }, 200);
	        }
	   });
	}

    function exist(o) {
		return ($(o).length > 0) ? true : false;
	}
	
	function goToTarget(target, offset) {
		var $viewport = $('body, html'), 
			o = $(target).offset().top,
			page_offset = $(document).scrollTop(),
			offset_diff = Math.abs(o - page_offset),
			base_speed  = 500,
			speed       = (offset_diff * base_speed) / 1000;
			
		offset = offset || 0;

		$viewport.animate({
			scrollTop: o + offset + 2
		}, {
			easing: 'easeOutCubic',
			duration: speed
		});
		
		if ( $('body.nav-full.is-visible').length>0 ) {
			story.Nav.menuHide();
		}
	}
	
	function isInView() {
		var bottomOfWindow = $(window).scrollTop() + $(window).height();

		$('.anim').each(function() {
			if ( $(this).offset().top < bottomOfWindow ) {
				$(this).addClass('anim--done');
			}
		});
	}
	
	function isWindowSmallerThan(resBorder) {
        return window.innerWidth < parseInt(resBorder, 10);
    }
    
    function showOnScroll() {
    	var body = $(window), elements;
    	
    	function sos() {
	    	
    	}

		var handler = body.on('scroll', function() {	
		
			elements = $('.anim').not('.anim--done').length;
			
			if (elements) {
		        $('.anim').not('.anim--done').each( function(){
					var bottomOfObject = $(this).offset().top + 100,
			          	bottomOfWindow = $(window).scrollTop() + $(window).height();
		
					if( bottomOfWindow > bottomOfObject ) {
						$(this).addClass('anim--done');
					}
				});
			} else {
				body.off('scroll', handler);
			}
		});
    }
	
	story.Helper = new Helper();

}(window, document, jQuery, window.story = window.story || {}));