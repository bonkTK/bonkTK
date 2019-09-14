$('.owl-features').owlCarousel({
	loop: true,
	nav: true,
	navText: [`<i class="fas fa-chevron-left"></i>`, `<i class="fas fa-chevron-right"></i>`],
	margin: 20,
	autoplay: true,
	autoplayTimeout: 10000,
	smartSpeed: 1250,
	dots: false,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1
		},
		768: {
			items: 2
		}
	}

});
$('.owl-videos').owlCarousel({
	loop: true,
	nav: true,
	navText: [`<i class="fas fa-chevron-left"></i>`, `<i class="fas fa-chevron-right"></i>`],
	margin: 20,
	smartSpeed: 1250,
	dots: false,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1
		},
		900: {
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

const staff = {
	Alex2810: {
		url: 'https://cdn.discordapp.com/avatars/327884155062845442/f3ffcdfb54fc5e1844142eb4dcd56d01.jpg?size=1024',
		name: 'Alex2810',
		index: '#9933'
	},
	TLJXEDO: {
		url: 'https://cdn.discordapp.com/avatars/324964304052813825/4e94d68774b009c3a86e84d6caa90c52.jpg?size=1024',
		name: 'Vague',
		index: '#2375'
	},
	Trxior: {
		url: 'https://cdn.discordapp.com/avatars/324964304052813825/4e94d68774b009c3a86e84d6caa90c52.jpg?size=1024',
		name: 'Żau Feligz',
		index: '#1669'
	},
	zmudx: {
		url: 'https://cdn.discordapp.com/avatars/327884155062845442/f3ffcdfb54fc5e1844142eb4dcd56d01.jpg?size=1024',
		name: 'El Bullo',
		index: '#5889'
	}
}

let player = document.querySelectorAll('.season__player--box');

for (let i = 0; i < player.length; i++) {
	player[i].addEventListener('click', function () {

		let discordCard = document.querySelector('#discord-card');
		let member = player[i].dataset.member

		let cardInfo = '<div class="discord-avatar"><img src="' + staff[member].url + '"></div>' +
			'<h2><span class="discord-name">' + staff[member].name + '</span><span class="discord-index">' + staff[member].index + '</span></h2>';

		discordCard.innerHTML = cardInfo;
	})
};
