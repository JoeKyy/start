$(function () {
	$('.opportunities--slide').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	});

	$('.nav-button').click(function(){
		if (!$(this).hasClass('is-active')) {
			$(this).addClass('is-active');
			$('.menu nav').addClass('nav-menu--open');
			$('.menu nav').removeClass('nav-menu--close');
		} else {
			$(this).removeClass('is-active');
			$('.menu nav').removeClass('nav-menu--open');
			$('.menu nav').addClass('nav-menu--close');
		}
	});
});