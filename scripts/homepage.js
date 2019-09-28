$(function () {

	let sN = 0;
	const slg = [
			['Welcome to', 'the bonk.tk'],
			['Participate in', 'presitigious tournaments'],
			['Compete with', 'best football players'],
			['Play bonk.io in', 'a friendly atmosphere']
		];

	let sloganBox = `
	<section class="container">
		<div class="slogan-box">
			<h2 id="slogan-text">
				<span id="slogan-primary"></span>
				<span id="slogan-secondary" class="text-secondary"></span>
			</h2>
		</div>
	</section>
	`;

	$('main').prepend(sloganBox);


	$('#slogan-text').html(`<span>${slg[0][0]}</span><span class="text-secondary">${slg[0][1]}</span>`);

	let sloganText = () => {

		setTimeout(() => {
			$('#slogan-text').css("opacity", "1");
		}, 25);

		let slgNumber = slg[sN];
		$('#slogan-text').html(`<span>${slgNumber[0]}</span><span class="text-secondary">${slgNumber[1]}</span>`), sN++;

		if (sN === slg.length) {
			sN = 0;
		};

		setTimeout(() => {
			$('#slogan-text').css("opacity", "0");
		}, 4250);
	};

	setInterval(sloganText, 5000);

});
