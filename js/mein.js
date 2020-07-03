$(function(){
	$('.slider__inner').slick({		
				
		arrows: false,
		fade: true,
		autoplay: true,
		asNavFor: '.slider-nav'
	 });
	 $('.slider-nav').slick({		
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: false,
		centerMode: true,		
		asNavFor: '.slider__inner',
		focusOnSelect: true,
		centerMode: false,
		focusOnSelect: true,
		variableWidth: true,
		responsive: [
			{
			  breakpoint: 970,
			  settings: {
				 slidesToShow: 4,
				 centerMode: true,
				 infinite: true,
				//  dots: true
			  }
			},
			
		 ]
	 });


	 $('.header__menu-btn').on('click', function(){
		$('.header__menu ul').slideToggle();
	 });


 });
		 

