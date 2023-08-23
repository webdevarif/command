


(function ($) {
	"use strict";
      

	$(document).ready(function() {
		$('.target-modal--login').on('click', function() {
		  $('#target-modal--login').stop(true, true).delay(50).show(0);
		});
		
		// Add a separate event handler for closing the modal
		$('#target-modal--login').on('click', function(event) {
		  if (!$(event.target).closest('.modal-body').length) {
			$(this).stop(true, true).delay(50).hide(0);
		  }
		});


		$('.burger-slider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: false,
			centerMode: true,
  			centerPadding: '350px',
            responsive: [{
                    breakpoint: 1441,
                    settings: {
                        slidesToShow: 2,
                        centerPadding: '250px',
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        centerPadding: '200px',
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '200px',
                    }
                },
				{
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '150px',
                    }
                },
            ]
         });


		$('.grid-slider-wrap').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
            prevArrow: "<i class='prev fas fa-angle-left'></i>",
            nextArrow: "<i class='next fas fa-angle-right'></i>",
            dots: false,
				responsive: [{
					breakpoint: 800,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 570,
					settings: {
						slidesToShow: 1,
					}
				},

		   ]
		});




	  });


	//   Mobile Toggler
	$(document).ready(function() {
		$('.navbar-toggler').on('click', function() {
		  $('#mobile-offcanvas').addClass('show');
		});
		
		// Add a separate event handler for closing the modal
		$('.offcanvas__close').on('click', function(event) {
			$('#mobile-offcanvas').removeClass('show');
		});
		
	  });
	  

//map trigger

	
})(jQuery);
