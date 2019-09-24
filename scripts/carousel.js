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
	$(this).attr('id', 'active').append('<i class="fa fa-chevron-down"></i>');
	$('.competitions li').removeAttr('style');
	tournamentType = $(this).data("event");
	displayAwards();
});