
(function(window, document, $, story, undefined) {
	'use strict';


	$(document).ready(function() {
		
		if (story.Helper.exist('.b-lazy')) story.Helper.blazy();
		
		
		
		$('.js-goto').on('click', function(e) {
			e.preventDefault();
			story.Helper.goToTarget($(this).attr('href'));
			
		});
	});


	$(window).on('load', function() {
		story.Helper.isInView();
		
		story.Helper.showOnScroll();
	});

		
}(window, document, jQuery, window.story = window.story || {}));

