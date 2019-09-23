$('.owl-features').owlCarousel({
	loop: true,
	nav: true,
	navText: [`<i class="fas fa-chevron-left"></i>`, `<i class="fas fa-chevron-right"></i>`],
	margin: 20,
	autoplay: true,
	autoplayTimeout: 5000,
	smartSpeed: 1000,
	dots: false,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: false
		},
		768: {
			items: 2
		}
	}
});

$('#hb-button').click(function () {
	$('.menu').slideToggle();
	$('.menu-dropdown').css('display', 'none');
});

$('.menu li').click(function () {
	$(this).siblings().find('ul').slideUp();
	$(this).find('ul').slideToggle();
});

$(window).resize(function () {
	if ($(window).width() * 768) {
		$('ul').removeAttr('style');
	};
});

$('.competitions').on('click', '#active', function () {
	$('.competitions li').show();
	$( "#active .fa-chevron-down" ).remove();
});

$('.competitions').on('click', 'li:not(#active)', function () {
	$('#active').removeAttr('id');
	$(this).attr('id', 'active');
	tit = $(this).data("event");
	$(this).append('<i class="fa fa-chevron-down"></i>');
	$('.competitions li').removeAttr('style');
	evra();
});