$(document).ready(function(){
	/*HeaderButtons*/
	$('.toggle-menu').click(function(){
		$(this).toggleClass('toggle-menu_active');
		$('.nav').toggleClass('nav-active');
	});
	$('.btn-search').click(function(){
		$('.search_header').toggleClass('search_header_active');
	});

	/*Testimonials Slider*/
	$('.testimonials').slick({
	  dots: true,
	  nextArrow: '<div class="testimonials__arr-next"></div>',
  	  prevArrow: '<div class="testimonials__arr-prev"></div>',
	  infinite: true,
	  speed: 300,
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  responsive: [
	    {
	      breakpoint: 768,
	      arrows: false,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	  ]
	});

	/*Scroll to ID Hash*/
	$("a").on('click', function(event) {
	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();
	
	      // Store hash
	      var hash = this.hash;
	
	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 800, function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	      });
	    } // End if
	});



	/*TAgs*/
	$('.mb-tags__item').click(function(){
		var c = $(this).index();
		/*remove all checked inputs*/
		$('.iphone-type__item input[type="radio"]').prop('checked', false);
		$('.ipad-type__item input[type="radio"]').prop('checked', false);

		/*Make Property checked*/
		if( c == 0) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:first-child').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_iphone').addClass('active');

			
			/*Controlling inpput*/
			$('.iphone-type__item-x input').prop('checked',true);
			$('.fix-txt_iphoneX').addClass('active');
		}
		else if ( c == 1) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:first-child').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_iphone').addClass('active');

			
			/*Controlling inpput*/
			$('.iphone-type__item-8plus input').prop('checked',true);
			$('.fix-txt_iphone8plus').addClass('active');
		}
		else if ( c == 2) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:first-child').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_iphone').addClass('active');

			
			/*Controlling inpput*/
			$('.iphone-type__item-8 input').prop('checked',true);
			$('.fix-txt_iphone8').addClass('active');
		}
		else if ( c == 3) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:first-child').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_iphone').addClass('active');

			
			/*Controlling inpput*/
			$('.iphone-type__item-7plus input').prop('checked',true);
			$('.fix-txt_iphone7plus').addClass('active');
		}
		else if ( c == 4) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:first-child').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_iphone').addClass('active');

			
			/*Controlling inpput*/
			$('.iphone-type__item-7 input').prop('checked',true);
			$('.fix-txt_iphone7').addClass('active');
		}
		else if ( c == 5) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:first-child').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_iphone').addClass('active');

			
			/*Controlling inpput*/
			$('.iphone-type__item-6splus input').prop('checked',true);
			$('.fix-txt_iphone6splus').addClass('active');
		}
		else if ( c == 6) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:first-child').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_iphone').addClass('active');

			
			/*Controlling inpput*/
			$('.iphone-type__item-6s input').prop('checked',true);
			$('.fix-txt_iphone6s').addClass('active');
		}
		else if ( c == 7) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:first-child').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_iphone').addClass('active');

			
			/*Controlling inpput*/
			$('.iphone-type__item-6plus input').prop('checked',true);
			$('.fix-txt_iphone6plus').addClass('active');
		}
		else if ( c == 8) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:first-child').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_iphone').addClass('active');

			
			/*Controlling inpput*/
			$('.iphone-type__item-6 input').prop('checked',true);
			$('.fix-txt_iphone6').addClass('active');
		}
		else if ( c == 9) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:first-child').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_iphone').addClass('active');

			
			/*Controlling inpput*/
			$('.iphone-type__item-se input').prop('checked',true);
			$('.fix-txt_iphonese').addClass('active');
		}
		else if ( c == 10) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:first-child').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_iphone').addClass('active');

			
			/*Controlling inpput*/
			$('.iphone-type__item-5s input').prop('checked',true);
			$('.fix-txt_iphone5s').addClass('active');
		}
		else if ( c == 11) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:first-child').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_iphone').addClass('active');

			
			/*Controlling inpput*/
			$('.iphone-type__item-5c input').prop('checked',true);
			$('.fix-txt_iphone5c').addClass('active');
		}
		else if ( c == 12) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:first-child').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_iphone').addClass('active');

			
			/*Controlling inpput*/
			$('.iphone-type__item-5 input').prop('checked',true);
			$('.fix-txt_iphone5').addClass('active');
		}

		else if ( c == 13) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:nth-child(2)').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_ipad').addClass('active');

			
			/*Controlling inpput*/
			$('.ipad-type__item-pro97 input').prop('checked',true);
			$('.fix-txt_ipadpro97').addClass('active');
		}
		else if ( c == 14) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:nth-child(2)').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_ipad').addClass('active');

			
			/*Controlling inpput*/
			$('.ipad-type__item-mini4 input').prop('checked',true);
			$('.fix-txt_ipadmini4').addClass('active');
		}
		else if ( c == 15) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:nth-child(2)').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_ipad').addClass('active');

			
			/*Controlling inpput*/
			$('.ipad-type__item-pro129 input').prop('checked',true);
			$('.fix-txt_ipadpro129').addClass('active');
		}
		else if ( c == 16) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:nth-child(2)').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_ipad').addClass('active');

			
			/*Controlling inpput*/
			$('.ipad-type__item-mini3 input').prop('checked',true);
			$('.fix-txt_ipadmini3').addClass('active');
		}
		else if ( c == 17) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:nth-child(2)').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_ipad').addClass('active');

			
			/*Controlling inpput*/
			$('.ipad-type__item-air2 input').prop('checked',true);
			$('.fix-txt_ipadair2').addClass('active');
		}
		else if ( c == 18) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:nth-child(2)').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_ipad').addClass('active');

			
			/*Controlling inpput*/
			$('.ipad-type__item-mini2 input').prop('checked',true);
			$('.fix-txt_ipadmini2').addClass('active');
		}
		else if ( c == 19) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:nth-child(2)').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_ipad').addClass('active');

			
			/*Controlling inpput*/
			$('.ipad-type__item-air input').prop('checked',true);
			$('.fix-txt_ipadair').addClass('active');
		}
		else if ( c == 20) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:nth-child(2)').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_ipad').addClass('active');

			
			/*Controlling inpput*/
			$('.ipad-type__item-mini input').prop('checked',true);
			$('.fix-txt_ipadmini').addClass('active');
		}
		else if ( c == 21) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:nth-child(2)').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_ipad').addClass('active');

			
			/*Controlling inpput*/
			$('.ipad-type__item-4 input').prop('checked',true);
			$('.fix-txt_ipad4').addClass('active');
		}
		else if ( c == 22) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:nth-child(2)').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_ipad').addClass('active');

			
			/*Controlling inpput*/
			$('.ipad-type__item-3 input').prop('checked',true);
			$('.fix-txt_ipad3').addClass('active');
		}
		else if ( c == 23) {
			/*controlling tabs*/
			$('.fix__type-item').removeClass('active');
			$('.fix__type-item:nth-child(2)').addClass('active');

			$('.fix__content').removeClass('active');
			$('.fix__content_ipad').addClass('active');

			
			/*Controlling inpput*/
			$('.ipad-type__item-2 input').prop('checked',true);
			$('.fix-txt_ipad2').addClass('active');
		}
	});


	/*Select cherez J*/
	$('input[name="iphone"]').is(':checked', function(){
		var a = $(this).parent().index();
		$('.fix-txt').removeClass('active');
		if( a == 0) {
			$('.fix-txt_iphoneX').addClass('active');
		}
		else if ( a == 1) {
			$('.fix-txt_iphone8plus').addClass('active');
		}
		else if ( a == 2) {
			$('.fix-txt_iphone8').addClass('active');
		}
		else if ( a == 3) {
			$('.fix-txt_iphone7plus').addClass('active');
		}
		else if ( a == 4) {
			$('.fix-txt_iphone7').addClass('active');
		}

		else if ( a == 5) {
			$('.fix-txt_iphone6splus').addClass('active');
		}
		else if ( a == 6) {
			$('.fix-txt_iphone6s').addClass('active');
		}
		else if ( a == 7) {
			$('.fix-txt_iphone6plus').addClass('active');
		}
		else if ( a == 8) {
			$('.fix-txt_iphone6').addClass('active');
		}
		else if ( a == 9) {
			$('.fix-txt_iphonese').addClass('active');
		}
		else if ( a == 10) {
			$('.fix-txt_iphone5s').addClass('active');
		}
		else if ( a == 11) {
			$('.fix-txt_iphone5c').addClass('active');
		}
		else if ( a == 12) {
			$('.fix-txt_iphone5').addClass('active');
		}
	});
	$('input[name="ipad"]').is(':checked', function(){
		var a = $(this).parent().index();
		$('.fix-txt').removeClass('active');

		if ( a == 0) {
			$('.fix-txt_ipadpro97').addClass('active');
		}
		else if ( a == 1) {
			$('.fix-txt_ipadmini4').addClass('active');
		}
		else if ( a == 2) {
			$('.fix-txt_ipadpro129').addClass('active');
		}
		else if ( a == 3) {
			$('.fix-txt_ipadmini3').addClass('active');
		}

		else if ( a == 4) {
			$('.fix-txt_ipadair2').addClass('active');
		}
		else if ( a == 5) {
			$('.fix-txt_ipadmini2').addClass('active');
		}
		else if ( a == 6) {
			$('.fix-txt_ipadair').addClass('active');
		}
		else if ( a == 7) {
			$('.fix-txt_ipadmini').addClass('active');
		}
		else if ( a == 8) {
			$('.fix-txt_ipad4').addClass('active');
		}
		else if ( a == 9) {
			$('.fix-txt_ipad3').addClass('active');
		}
		else if ( a == 10) {
			$('.fix-txt_ipad2').addClass('active');
		}
		else if ( a == 11) {
			$('.fix-txt_ipad').addClass('active');
		}
	});
	$('input[name="iphone"]').click(function(){
		var a = $(this).parent().index();
		$('.fix-txt').removeClass('active');
		if( a == 0) {
			$('.fix-txt_iphoneX').addClass('active');
		}
		else if ( a == 1) {
			$('.fix-txt_iphone8plus').addClass('active');
		}
		else if ( a == 2) {
			$('.fix-txt_iphone8').addClass('active');
		}
		else if ( a == 3) {
			$('.fix-txt_iphone7plus').addClass('active');
		}
		else if ( a == 4) {
			$('.fix-txt_iphone7').addClass('active');
		}

		else if ( a == 5) {
			$('.fix-txt_iphone6splus').addClass('active');
		}
		else if ( a == 6) {
			$('.fix-txt_iphone6s').addClass('active');
		}
		else if ( a == 7) {
			$('.fix-txt_iphone6plus').addClass('active');
		}
		else if ( a == 8) {
			$('.fix-txt_iphone6').addClass('active');
		}
		else if ( a == 9) {
			$('.fix-txt_iphonese').addClass('active');
		}
		else if ( a == 10) {
			$('.fix-txt_iphone5s').addClass('active');
		}
		else if ( a == 11) {
			$('.fix-txt_iphone5c').addClass('active');
		}
		else if ( a == 12) {
			$('.fix-txt_iphone5').addClass('active');
		}
	});
	$('input[name="ipad"]').click(function(){
		var a = $(this).parent().index();
		$('.fix-txt').removeClass('active');
		if ( a == 0) {
			$('.fix-txt_ipadpro97').addClass('active');
		}
		else if ( a == 1) {
			$('.fix-txt_ipadmini4').addClass('active');
		}
		else if ( a == 2) {
			$('.fix-txt_ipadpro129').addClass('active');
		}
		else if ( a == 3) {
			$('.fix-txt_ipadmini3').addClass('active');
		}

		else if ( a == 4) {
			$('.fix-txt_ipadair2').addClass('active');
		}
		else if ( a == 5) {
			$('.fix-txt_ipadmini2').addClass('active');
		}
		else if ( a == 6) {
			$('.fix-txt_ipadair').addClass('active');
		}
		else if ( a == 7) {
			$('.fix-txt_ipadmini').addClass('active');
		}
		else if ( a == 8) {
			$('.fix-txt_ipad4').addClass('active');
		}
		else if ( a == 9) {
			$('.fix-txt_ipad3').addClass('active');
		}
		else if ( a == 10) {
			$('.fix-txt_ipad2').addClass('active');
		}
		else if ( a == 11) {
			$('.fix-txt_ipad').addClass('active');
		}
	});


});
$(window).scroll(function(){
	/*Header Activation*/
	if($(this).scrollTop() > 0){
		$('.header').addClass('header-active');
	}
	else {
		$('.header').removeClass('header-active');
	}

	/*Background Animation*/
	var a = $(this).scrollTop();
	if($(this).width() > 768) {
		for (var i = 0; i <= 0; i++) {
			var x = 142 + (a/10);
			var y = 100 + (a/10);
			$('.mb-banner').css('background-size', x + '%'+' '+ y + '%');
		}	
	}
	

});

(function($) {
	$(function() {

	  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
	    $(this)
	      .addClass('active').siblings().removeClass('active')
	      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	  });

	});
})(jQuery);