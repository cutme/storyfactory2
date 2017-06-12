(function(window, document, $, story, undefined) {
	'use strict';

	var Helper = function() {
        return {
        	exist: exist,
        	blazy: blazy,
        	goToTarget: goToTarget,
        	isWindowSmallerThan: isWindowSmallerThan
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
			o = $(target).offset().top;
			
		//offset = offset || 0;		

		$viewport.animate({
			scrollTop: o + offset
		}, {
			easing: 'easeOutCubic',
			duration: 500
		});
	}
	
	function isWindowSmallerThan(resBorder) {
        return window.innerWidth < parseInt(resBorder, 10);
    }
	
	story.Helper = new Helper();

}(window, document, jQuery, window.story = window.story || {}));