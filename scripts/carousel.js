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

let sloganNumber = 1;


function fadeout() {
	document.getElementById('slogan-text').style.opacity = '0';
}

function fadein() {
	document.getElementById('slogan-text').style.opacity = '1';
}


function sloganText() {
	let sloganPrimary = document.getElementById('slogan-primary');
	let sloganSecondary = document.getElementById('slogan-secondary');

	setTimeout(fadein, 25);

	if (sloganNumber === 1) {
		sloganPrimary.innerHTML = "Welcome to";
		sloganSecondary.innerHTML = "the bonk.tk";
		sloganNumber = 2;
	} else if (sloganNumber === 2) {
		sloganPrimary.innerHTML = "Participate in";
		sloganSecondary.innerHTML = "presitigious tournaments";
		sloganNumber = 3;
	} else if (sloganNumber === 3) {
		sloganPrimary.innerHTML = "Compete with";
		sloganSecondary.innerHTML = "best football players";
		sloganNumber = 4;
	} else if (sloganNumber === 4) {
		sloganPrimary.innerHTML = "Have a good time in";
		sloganSecondary.innerHTML = "a friendly atmosphere";
		sloganNumber = 1;
	}
	setTimeout(fadeout, 4250);
}

setInterval(sloganText, 5000);
