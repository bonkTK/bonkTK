class competition {
	constructor(type, name, date, podium) {
		this.type = type;
		this.name = name;
		this.date = date;
		this.podium = podium;
	}
}

let season = ['23 Jun - 8 Jul 2017', '13 Jul - 31 Jul 2017', '1 Aug - 15 Aug 2017', '15 Aug - 31 Aug 2017', '10 Sep - 1 Oct 2017', '25 Oct - 3 Dec 2017', '15 Dec - 31 Dec 2017']

const newCompetition = [
	
	/* League 1vs1 */
   new competition('league-1vs1', 'League 1vs1', season[1], [['zmudx'], ['Trxior'], ['Bunniesss']]),
   new competition('league-1vs1', 'League 1vs1', season[2], [['Trxior'], ['Bunniesss'], ['zmudx']]),
   new competition('league-1vs1', 'League 1vs1', season[3], [['Trxior'], ['GSpeku'], ['General_Richt']]),
   new competition('league-1vs1', 'League 1vs1', season[4], [['Bunniesss'], ['Trxior'], ['GSpeku']]),
   new competition('league-1vs1', 'League 1vs1', season[5], [['GSpeku'], ['Trxior'], ['Nub1']]),
   new competition('league-1vs1', 'League 1vs1', season[6], [['TheAngryBull'], ['General_Richt'], ['zmudx']]),

	/* Cup 1vs1 */
   new competition('cup-1vs1', 'Cup 1vs1', season[1], [['zmudx'], ['Trxior']]),
   new competition('cup-1vs1', 'Cup 1vs1', season[2], [['Trxior'], ['Bunniesss']]),
   new competition('cup-1vs1', 'Cup 1vs1', season[3], [['Bunniesss'], ['GSpeku']]),
   new competition('cup-1vs1', 'Cup 1vs1', season[4], [['Trxior'], ['Bunniesss']]),
   new competition('cup-1vs1', 'Cup 1vs1', season[5], [['Nub1'], ['General_Richt']]),
   new competition('cup-1vs1', 'Cup 1vs1', season[6], [['Trxior'], ['RaV8']]),

	/* Super Cup 1vs1 */
   new competition('supercup-1vs1', 'Super Cup 1vs1', season[2], [['Trxior'], ['zmudx']]),
   new competition('supercup-1vs1', 'Super Cup 1vs1', season[3], [['Trxior'], ['Bunniesss']]),
   new competition('supercup-1vs1', 'Super Cup 1vs1', season[4], [['Bunniesss'], ['Trxior']]),
   new competition('supercup-1vs1', 'Super Cup 1vs1', season[5], [['Trxior'], ['Bunniesss']]),
   new competition('supercup-1vs1', 'Super Cup 1vs1', season[6], [['Nub1'], ['GSpeku']]),

	/* Tournaments 1vs1 */
   new competition('tournaments-1vs1', 'November 1vs1', '11 Nov 2017', [['Trxior'], ['GSpeku'], ['TheAngryBull']]),
   new competition('tournaments-1vs1', 'December 1vs1', '7 Dec 2017', [['Trxior'], ['Nub1'], ['GSpeku']]),

	/* League 2vs2 */
   new competition('league-2vs2', 'League 2vs2', season[1], [['Trxior', 'General_Richt', 'zmudx'], ['GSpeku', 'Bunniesss', 'Trocir'], ['bbbZG', 'leftright', 'Pimpektron1']]),
   new competition('league-2vs2', 'League 2vs2', season[2], [['GSpeku', 'Bunniesss', 'Trocir'], ['Trxior', 'General_Richt', 'zmudx'], ['bbbZG', 'leftright', 'Pimpektron1']]),

	/* Cup 2vs2 */
   new competition('cup-2vs2', 'Cup 2vs2', season[1], [['GSpeku', 'Bunniesss', 'Trocir'], ['Trxior', 'General_Richt', 'zmudx']]),
   new competition('cup-2vs2', 'Cup 2vs2', season[2], [['GSpeku', 'Bunniesss', 'Trocir'], ['Trxior', 'General_Richt', 'zmudx']]),

	/* Super Cup 2vs2 */
   new competition('supercup-2vs2', 'Super Cup 2vs2', season[2], [['Trxior', 'General_Richt', 'zmudx'], ['GSpeku', 'Bunniesss', 'Trocir']]),
   new competition('supercup-2vs2', 'Super Cup 2vs2', season[3], [['Trxior', 'General_Richt', 'zmudx'], ['GSpeku', 'Bunniesss', 'Trocir']]),

	/* Tournaments 2vs2 */
   new competition('tournaments-2vs2', 'Summer Cup 2vs2', '20 Aug 2017', [['General_Richt', 'Trxior'], ['GSpeku', 'Nub1'], ['stussyg', 'SxC Swish']]),
   new competition('tournaments-2vs2', 'September 2vs2', '29 Sep 2017', [['GSpeku', 'Bunniesss'], ['General_Richt', 'R3YM4Rjr'], ['Trxior', 'zmudx']]),
   new competition('tournaments-2vs2', 'October 2vs2', '28 Oct 2017', [['GSpeku', 'Trxior'], ['mesney', 'Sm4ck'], ['Nemenick', 'Victom']]),
   new competition('tournaments-2vs2', 'Autumn Cup 2vs2', '11 Nov 2017', [['General_Richt', 'GSpeku'], ['TheAngryBull', 'Trxior'], ['Miinato', 'R3YM4Rjr']]),
   new competition('tournaments-2vs2', 'November 2vs2', '25 Nov 2017', [['TheAngryBull', 'Trxior'], ['RaV8', 'zmudx'], ['GSpeku', 'Le Createur']]),
   new competition('tournaments-2vs2', 'December 2vs2', '16 Dec 2017', [['R3YM4Rjr', 'Trxior'], ['captainvodka', 'GSpeku'], ['merlin67', 'XClutch2']]),
];

let tournamentType = `league-1vs1`, titPd, awaPd;
let newSeasonBox = (n) => {

	switch (tournamentType) {
		case 'league-1vs1':
			titPd = ['Champion', '2nd place', '3rd place'];
			awaPd = [['crown', 'first-place'], ['second-place'], ['third-place']];
			break;
		case 'league-2vs2':
			titPd = ['Champions', '2nd place', '3rd place'];
			awaPd = [['crown', 'first-place'], ['second-place'], ['third-place']];
			break;
		case 'cup-1vs1':
			titPd = ['Winner', 'Runner-up'];
			awaPd = [['trophy'], false];
			break;
		case 'cup-2vs2':
			titPd = ['Winners', 'Runners-up'];
			awaPd = [['trophy'], false];
			break;
		case 'supercup-1vs1':
			titPd = ['Winner', 'Runner-up'];
			awaPd = [['super-trophy'], false];
			break;
		case 'supercup-2vs2':
			titPd = ['Winners', 'Runners-up'];
			awaPd = [['super-trophy'], false];
			break;
		case 'tournaments-1vs1':
			titPd = ['Winner', '2nd place', '3rd place'];
			awaPd = [['ribbon'], false, false];
			break;
		case 'tournaments-2vs2':
			titPd = ['Winners', '2nd place', '3rd place'];
			awaPd = [['ribbon'], false, false];
			break;
		default:
	};
	
	let bk = ``, compTitle = `
		<div class="season__title">
			<h2>${newCompetition[n].name}</h2>
			<h3>${newCompetition[n].date}</h3>
		</div>
	`;

	for (let i = 0; i < newCompetition[n].podium.length; i++) {

		let jb = ``, ec = ``;
		for (let j = 0; j < awaPd[i].length; j++) {
			let eb = `
				<span class="award"><img src="img/${awaPd[i][j]}.png"></span>
			`;
			jb += eb;
		};

		for (let k = 0; k < newCompetition[n].podium[i].length; k++) {
			let names = newPlayers.map(function (item) {
				return item['name'];
			});
			names = names.indexOf(newCompetition[n].podium[i][k]);
			let gl = `
					<div class="player-box">
						<div class="player-right">
							<div class="player-info">
								<img src="img/${newPlayers[names].flag}.png">
								<span class="name">${newCompetition[n].podium[i][k]}</span>
							</div>
							<div class="player-stats">
								${jb}
							</div>
						</div>
					</div>
				`;
			ec += gl;
		};

		let compList = `
		<div class="season__player--box">
			<p>${titPd[i]}</p>
			${ec}
		</div>
	`;
		bk += compList;
	};

	let compBox = `
		<section class="season__box">
		 ${compTitle}
		 ${bk}
		</section>
	`;
	$(compBox).appendTo('.awards-list');
};

let displayAwards = () => {
	$('.season__box').remove();
	for (let i = 0; i < newCompetition.length; i++) {
		if (newCompetition[i].type === tournamentType) {
			newSeasonBox(i);
		}
	};
};

$(function() {
	displayAwards();
});
