(function(window, document, $, story, undefined) {
	'use strict';
	
	var Nav = story.Nav = function () { },
		trigger = $('.js-nav'),
		body = document.getElementsByTagName('body'),
		listenKeys,
		m = false,
		page_offset;
	
	Nav.prototype.init = function() {
		this.menu();
		this.show();
	};
	
	Nav.prototype.show = function() {
		var w = $(window), pos = 0, nav = $('.c-nav'), b = $('body'), h = $('.js-nav');

		w.on('scroll', function() {
			
			if  (w.scrollTop() > 160) {
			
				b.addClass('nav-full').removeClass('nav-default');
				h.addClass('is-visible');
				nav.addClass('fadeOut');

			} else {
			
				nav.removeClass('fadeOut');

				if ( b.hasClass('is-visible') ) { } else {
					b.removeClass('nav-full').addClass('nav-default');
					h.removeClass('is-visible');
				}
			}
		});
	};
	
	Nav.prototype.menuHide = function() {

		m = false;
		
		$(trigger).toggleClass('icon-navicon icon-close');

		$(body).removeClass('no-scroll is-visible');
		document.removeEventListener('keydown', listenKeys);
	};

	Nav.prototype.menuShow = function() {
		
		m = true;
		page_offset = $(document).scrollTop();
			
		$(trigger).toggleClass('icon-navicon icon-close');

		$(body).addClass('no-scroll is-visible');
		document.addEventListener('keydown', listenKeys, false);
		
		listenKeys = function(evt) {			
		    evt = evt || window.event;
		    if (evt.keyCode == 27) {
		    	hideMenu();
		    }
		};
		
		$(document).scrollTop(page_offset);		
	};

	Nav.prototype.menu = function() {	

		trigger.on('click', function(e) {
			e.preventDefault();
			
			if (m === false) {
				Nav.prototype.menuShow();
			
			} else {
				Nav.prototype.menuHide();
			}
		});
		
		$('.no-click').on('click', function(e) {
			e.preventDefault();	
		});
	};


	story.Nav = new Nav();

}(window, document, jQuery, window.story = window.story || {}));


