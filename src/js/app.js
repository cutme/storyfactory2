
(function(window, document, $, story, undefined) {
	'use strict';


	$(document).ready(function() {
	
		story.Nav.init();
		
		if (story.Helper.exist('.b-lazy')) story.Helper.blazy();
		
		$('.js-goto').on('click', function(e) {
			e.preventDefault();
			
			var id = $(this).attr('href');
			
			if ( $(this).hasClass('js-goto--index') ) {
				location.href = "index.html"+id;
			} else {
				story.Helper.goToTarget(id);
			}
			
		});		
	});


	$(window).on('load', function() {
		story.Helper.isInView();

		story.Helper.showOnScroll();

		if(window.location.hash) {
			story.Helper.goToTarget(window.location.hash);			
		}
	});

		
}(window, document, jQuery, window.story = window.story || {}));

