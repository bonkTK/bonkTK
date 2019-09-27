let hostIndex, awayIndex, names = [];

let match = (host, hostElo, hostScore, away, awayElo, awayScore) => {

	names = newPlayers.map(function (item) {
		return item['name'];
	});

	hostIndex = names.indexOf(host), awayIndex = names.indexOf(away);

	let hostRes = 1,
		awayRes = 1,
		hostBoost = 20,
		awayBoost = 20;

	if (hostScore > awayScore) {
		hostRes = 1, awayRes = 0;
		newPlayers[hostIndex].wins++, newPlayers[awayIndex].loses++;
	} else if (awayScore > hostScore) {
		hostRes = 0, awayRes = 1;
		newPlayers[hostIndex].loses++, newPlayers[awayIndex].wins++;
	} else {
		hostRes = 0.5, awayRes = 0.5;
		newPlayers[hostIndex].draws++, newPlayers[awayIndex].draws++;
	};

	if (newPlayers[hostIndex].played < 5) {
		hostBoost = 60;
	} else if (newPlayers[hostIndex].played < 10) {
		hostBoost = 40;
	};

	if (newPlayers[awayIndex].played < 5) {
		awayBoost = 60;
	} else if (newPlayers[awayIndex].played < 10) {
		awayBoost = 40;
	};

	let hostExpect = 1 / (1 + Math.pow(10, -(hostElo - awayElo) / 400)),
		awayExpect = 1 / (1 + Math.pow(10, -(awayElo - hostElo) / 400)),
		res = Math.abs(hostScore - awayScore),
		goalDiff = (11 + res) / 8,
		newHostElo = Math.round(hostElo + hostBoost * goalDiff * (hostRes - hostExpect)),
		newAwayElo = Math.round(awayElo + awayBoost * goalDiff * (awayRes - awayExpect));

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

	newPlayers[hostIndex].rank = newHostElo, newPlayers[awayIndex].rank = newAwayElo;
	newPlayers[hostIndex].played++, newPlayers[awayIndex].played++;
	newPlayers[hostIndex].goalsScored += hostScore, newPlayers[hostIndex].goalsConceded += awayScore;
	newPlayers[awayIndex].goalsScored += awayScore, newPlayers[awayIndex].goalsConceded += hostScore;

}

let displayRanking = () => {

	for (let i = 0; i < newMatches.length; i++) {
		let host = newMatches[i].host,
			away = newMatches[i].away;

		names = newPlayers.map(function (item) {
			return item['name'];
		});
		hostIndex = names.indexOf(host), awayIndex = names.indexOf(away);

		match(newMatches[i].host, newPlayers[hostIndex].rank, newMatches[i].hostScore, newMatches[i].away, newPlayers[awayIndex].rank, newMatches[i].awayScore, newMatches[i].competitions);
	};

	let compareName = (a, b) => {
			let textA = a.name.toUpperCase(),
				textB = b.name.toUpperCase();
			return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
		},
		sortLadder = (a, b) => {
			return b.rank - a.rank || b.wins - a.wins || (b.goalsScored - b.goalsConceded) - (a.goalsScored - a.goalsConceded) || b.goalsScored - a.goalsScored || b.played - a.played || compareName(a, b);
		};

	newPlayers.sort(sortLadder);

	let ladder = document.querySelector('.ladder-1v1');

	for (let i = 0, p = 0; i < newPlayers.length; i++) {

		let playerBox = document.createElement('div'),
			tier;

		if (newPlayers[i].rank >= 500) {
			tier = `style="border-right: inset 2px #E3132C"`;
		} else if (newPlayers[i].rank >= 400) {
			tier = `style="border-right: inset 2px #1773C1"`;
		} else if (newPlayers[i].rank >= 300) {
			tier = `style="border-right: inset 2px #FFBD1B"`;
		} else if (newPlayers[i].rank >= 200) {
			tier = `style="border-right: inset 2px #C0C0C0"`;
		} else {
			tier = `style="border-right: inset 2px #B24A02"`;
		}

		let gD = newPlayers[i].goalsScored - newPlayers[i].goalsConceded;

		if (gD > 0) {
			gD = `+${gD}`;
		}

		if (newPlayers[i].played > 0) {
			p++;
			playerBox.innerHTML =
				`
		<div class="player-box">
			<div class="position" ${tier}>${p}</div>
			<div class="player-right">
				<div class="player-info">
					<img src="img/${newPlayers[i].flag}.png">
					<span class="name">${newPlayers[i].name}</span>
				</div>
				<div class="player-stats">
					<span class="matches">${newPlayers[i].played}</span>
					<span class="wins mobile-hidden">${newPlayers[i].wins}</span>
					<span class="draws mobile-hidden">${newPlayers[i].draws}</span>
					<span class="loses mobile-hidden">${newPlayers[i].loses}</span>
					<span class="scored mobile-hidden">${newPlayers[i].goalsScored}</span>
					<span class="conceded mobile-hidden">${newPlayers[i].goalsConceded}</span>
					<span class="goaldiff mobile-hidden">${gD}</span>
					<span class="rank">${newPlayers[i].rank}</span>
				</div>
			</div>
		</div>
		`
			ladder.appendChild(playerBox);
		};

	};

};

let latestMatch = () => {

	let matchesAll = newMatches.length - 1;
	names = newPlayers.map(function (item) {
		return item['name'];
	});
	let latestHost = names.indexOf(newMatches[matchesAll].host),
		latestAway = names.indexOf(newMatches[matchesAll].away);

	let latestMatchBox = `
<div id="latest-match">
<header class="box-header second-header"><span>Latest match</span></header>
<div class="player-box">
	<div class="player-right">
		<div class="player-info">
			<img src="img/${newPlayers[latestHost].flag}.png">
			<span class="name">${newMatches[matchesAll].host}</span>
		</div>

		<div class="player-stats">
			<span class="score">${newMatches[matchesAll].hostScore}</span>
		</div>
	</div>
</div>
<div class="player-box">
	<div class="player-right">
		<div class="player-info">
			<img src="img/${newPlayers[latestAway].flag}.png">
			<span class="name">${newMatches[matchesAll].away}</span>
		</div>

		<div class="player-stats">
			<span class="score">${newMatches[matchesAll].awayScore}</span>
		</div>
	</div>
</div>
</div>
`;
	$('.competition-info').append(latestMatchBox);
};

let stats = (v, t) => {

	let compareResult = (a, b) => {
		return b[v] - a[v] || b.rank - a.rank;
	};
	newPlayers.sort(compareResult);

	let indivStats = `
<div id="${v}">
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
</div>
`;
	$('.competition-info').append(indivStats);
};

$(function () {
	displayRanking();
	latestMatch();
	stats('highestRank', 'Highest ELO of all time');
	stats('played', 'Most matches played');
	stats('wins', 'Most matches won');
	stats('goalsScored', 'Most goals scored');
});
