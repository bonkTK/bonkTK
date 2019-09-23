let hostIndex;
let awayIndex;
let names = [];

let match = (host, hostElo, hostScore, away, awayElo, awayScore, comp) => {

	let hostRes = 1;
	let awayRes = 1;

	let hostRank = Math.pow(10, hostElo / 400);
	let awayRank = Math.pow(10, awayElo / 400);

	let hostExpect = hostRank / (hostRank + awayRank);
	let awayExpect = awayRank / (hostRank + awayRank);

	if (hostScore > awayScore) {
		hostRes = 1;
		awayRes = 0;
		newPlayers[hostIndex].wins++;
		newPlayers[awayIndex].loses++;
	} else if (awayScore > hostScore) {
		hostRes = 0;
		awayRes = 1;;
		newPlayers[hostIndex].loses++;
		newPlayers[awayIndex].wins++;
	} else {
		hostRes = 0.5;
		awayRes = 0.5;;
		newPlayers[hostIndex].draws++;
		newPlayers[awayIndex].draws++;
	}

	let goalDiff = 1;
	let res = Math.abs(hostScore - awayScore);

	if (res === 0) {
		goalDiff = 1;
	} else {
		goalDiff = (11 + (res)) / 6;
	}

	names = newPlayers.map(function (item) {
		return item['name'];
	});

	hostIndex = names.indexOf(host);
	awayIndex = names.indexOf(away);

	let hostBoost = 1;
	let awayBoost = 1;

	if (newPlayers[hostIndex].wins < 3) {
		hostBoost = 2;
	}

	if (newPlayers[awayIndex].wins < 3) {
		awayBoost = 2;
	}

	let newHostElo = Math.round(hostElo + comp * hostBoost * goalDiff * (hostRes - hostExpect));
	let newAwayElo = Math.round(awayElo + comp * awayBoost * goalDiff * (awayRes - awayExpect));

	if (hostElo < 100 && hostElo > newHostElo) {
		newHostElo = hostElo;
	}

	if (awayElo < 100 && awayElo > newAwayElo) {
		newAwayElo = awayElo;
	}

	if (hostElo >= 100 && newHostElo < 100) {
		newHostElo = 100;
	}

	if (awayElo >= 100 && newAwayElo < 100) {
		newAwayElo = 100;
	}

	if (newHostElo > newPlayers[hostIndex].highestRank) {
		newPlayers[hostIndex].highestRank = newHostElo;
	}

	if (newAwayElo > newPlayers[awayIndex].highestRank) {
		newPlayers[awayIndex].highestRank = newAwayElo;
	}

	newPlayers[hostIndex].rank = newHostElo;
	newPlayers[awayIndex].rank = newAwayElo;
	newPlayers[hostIndex].played++;
	newPlayers[awayIndex].played++;
	newPlayers[hostIndex].goalsScored += hostScore;
	newPlayers[hostIndex].goalsConceded += awayScore;
	newPlayers[awayIndex].goalsScored += awayScore;
	newPlayers[awayIndex].goalsConceded += hostScore;

}

let displayRanking = () => {

	for (let i = 0; i < newMatches.length; i++) {

		let host = newMatches[i].host;
		let away = newMatches[i].away;

		names = newPlayers.map(function (item) {
			return item['name'];
		});

		hostIndex = names.indexOf(host);
		awayIndex = names.indexOf(away);

		match(newMatches[i].host, newPlayers[hostIndex].rank, newMatches[i].hostScore, newMatches[i].away, newPlayers[awayIndex].rank, newMatches[i].awayScore, newMatches[i].competitions);

	};

	let compareName = (a, b) => {
		var textA = a.name.toUpperCase();
		var textB = b.name.toUpperCase();
		return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
	}

	let jebanie = (a, b) => {
		return b.rank - a.rank || b.wins - a.wins || (b.goalsScored - b.goalsConceded) - (a.goalsScored - a.goalsConceded) || b.goalsScored - a.goalsScored || b.played - a.played || compareName(a, b);
	};

	newPlayers.sort(jebanie);

	let ladder = document.querySelector('.ladder-1v1');

	for (let i = 0, p = 1; i < newPlayers.length; i++, p++) {

		let playerBox = document.createElement('div');
		let kurwy;
		
		if (newPlayers[i].rank >= 300) {
			kurwy = `style="border-right: inset 2px #cc0088"`;
		} else if (newPlayers[i].rank >= 225) {
			kurwy = `style="border-right: inset 2px #ccaa22"`;
		} else if (newPlayers[i].rank >= 150) {
			kurwy = `style="border-right: inset 2px #ccc"`;
		} else {
			kurwy = `style="border-right: inset 2px #882200"`;
		}
		
		let gD = newPlayers[i].goalsScored - newPlayers[i].goalsConceded;
		
		if (gD > 0) {
			gD = `+${gD}`;
		}

		if (newPlayers[i].played >= 0) {
			playerBox.innerHTML =
				`
		<div class="player-box">
			<div class="position" ${kurwy}>${p}</div>
			<div class="player-right">
				<div class="player-info">
					<img src="img/${newPlayers[i].flag}.png">
					<span class="name">${newPlayers[i].name}</span>
				</div>
				<div class="player-stats">
					<span class="matches">${newPlayers[i].played}</span>
					<span class="wins">${newPlayers[i].wins}</span>
					<span class="draws">${newPlayers[i].draws}</span>
					<span class="loses">${newPlayers[i].loses}</span>
					<span class="scored">${newPlayers[i].goalsScored}</span>
					<span class="conceded">${newPlayers[i].goalsConceded}</span>
					<span class="goaldiff">${gD}</span>
					<span class="rank">${newPlayers[i].rank}</span>
				</div>
			</div>
		</div>
		`


			ladder.appendChild(playerBox);
		};

	};

};

let lastMatch = () => {

	let matchesAm = newMatches.length - 1;

	let names;
	names = newPlayers.map(function (item) {
		return item['name'];
	});
	let hoster = names.indexOf(newMatches[matchesAm].host);
	let awayer = names.indexOf(newMatches[matchesAm].away);

	let herz = `		
<header class="box-header second-header"><span>Last match</span></header>
<div class="player-box">
	<div class="player-right">
		<div class="player-info">
			<img src="img/${newPlayers[hoster].flag}.png">
			<span class="name">${newMatches[matchesAm].host}</span>
		</div>

		<div class="player-stats">
			<span class="score">${newMatches[matchesAm].hostScore}</span>
		</div>
	</div>
</div>
<div class="player-box">
	<div class="player-right">
		<div class="player-info">
			<img src="img/${newPlayers[awayer].flag}.png">
			<span class="name">${newMatches[matchesAm].away}</span>
		</div>

		<div class="player-stats">
			<span class="score">${newMatches[matchesAm].awayScore}</span>
		</div>
	</div>
</div>
`;
	$('#last-match').html(herz);
};

lastMatch();

let stats = (v, t) => {

	let compareResult = (a, b) => {
		return b[v] - a[v] || b.rank -a.rank;
	};

		newPlayers.sort(compareResult);

	let elol = `
<header class="box-header second-header"><span>${t}</span></header>
<div class="player-box">
	<div class="player-right">
		<div class="player-info">
			<img src="img/${newPlayers[0].flag}.png">
			<span class="name">${newPlayers[0].name}</span>
		</div>

		<div class="player-stats">
			<span class="score">${newPlayers[0][v]}</span>
		</div>
	</div>
</div>
`;
	$(`#${v}`).html(elol);
};


displayRanking();

stats('highestRank', 'Highest rank of all time');
stats('played', 'Most matches played');
stats('wins', 'Most matches won');
stats('goalsScored', 'Most goals scored');
