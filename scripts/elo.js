let hostIndex;
let awayIndex;
let names = [];

const tournament = 20;
const friendly = 10;


let match = (host, hostElo, hostScore, away, awayElo, awayScore, comp) => {

	let hostRes = 1;
	let awayRes = 1;

	let hostRank = Math.pow(10, hostElo / 200);
	let awayRank = Math.pow(10, awayElo / 200);

	let hostExpect = hostRank / (hostRank + awayRank);
	let awayExpect = awayRank / (hostRank + awayRank);

	if (hostScore > awayScore) {
		hostRes = 1;
		awayRes = 0;
	} else if (awayScore > hostScore) {
		hostRes = 0;
		awayRes = 1;
	} else {
		hostRes = 0.5;
		awayRes = 0.5;
	}

	let goalDiff = 1;
	let res = Math.abs(hostScore - awayScore);

	if (res === 1 || res === 0) {
		goalDiff = 1;
	} else if (res === 2) {
		goalDiff = 1.5;
	} else {
		goalDiff = (11 + (res)) / 8;
	}

	names = newPlayers.map(function (item) {
		return item['name'];
	});

	hostIndex = names.indexOf(host);
	awayIndex = names.indexOf(away);

	let hostBoost = 1;
	let awayBoost = 1;

	if (newPlayers[hostIndex].matchesPlayed < 3) {
		hostBoost = 2;
	}

	if (newPlayers[awayIndex].matchesPlayed < 3) {
		awayBoost = 2;
	}

	let newHostElo = hostElo + comp * hostBoost * goalDiff * (hostRes - hostExpect);
	let newAwayElo = awayElo + comp * awayBoost * goalDiff * (awayRes - awayExpect);

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


	console.log(`${host} - ${newHostElo} ${hostElo}`);
	console.log(`${away} - ${newAwayElo} ${awayElo}`);

	newPlayers[hostIndex].rank = Math.round(newHostElo);
	newPlayers[awayIndex].rank = Math.round(newAwayElo);
	newPlayers[hostIndex].matchesPlayed++;
	newPlayers[awayIndex].matchesPlayed++;

}

class players {
	constructor(name, flag) {
		this.name = name;
		this.flag = flag;
		this.rank = 0;
		this.matchesPlayed = 0;
	}
}

const newPlayers = [
   new players('Trxior', 'Poland'),
   new players('zmudx', 'Poland'),
   new players('GSpeku', 'Germany'),
   new players('General_Richt', 'Russia'),
   new players('frozenkiller', 'Netherlands'),
   new players('Bunniesss', 'United-States'),
   new players('Trocir', 'Serbia'),
   new players('bbbZG', 'Croatia'),
   new players('Pimpektron1', 'Serbia'),
   new players('vAZz', 'Germany'),
   new players('Bunniesss', 'United-States'),
   new players('Trocir', 'Serbia'),
   new players('bbbZG', 'Croatia'),
   new players('Pimpektron1', 'Serbia'),
   new players('vAZz', 'Germany'),
];

class matches {
	constructor(host, hostScore, away, awayScore, competitions) {
		this.host = host;
		this.hostScore = hostScore;
		this.away = away;
		this.awayScore = awayScore;
		this.competitions = competitions;
	}
}

const newMatches = [
   new matches('Trxior', 6, 'zmudx', 0, tournament),
   new matches('Trxior', 6, 'Trocir', 0, tournament),
   new matches('GSpeku', 6, 'zmudx', 0, tournament),
   new matches('Trxior', 6, 'GSpeku', 0, tournament),
   new matches('GSpeku', 6, 'zmudx', 0, tournament),
   new matches('GSpeku', 6, 'zmudx', 0, tournament),
   new matches('Trxior', 6, 'GSpeku', 0, tournament),
   new matches('Trxior', 6, 'GSpeku', 0, tournament),
   new matches('Trxior', 6, 'GSpeku', 0, tournament),
   new matches('Trxior', 6, 'GSpeku', 8, tournament),
   new matches('Trxior', 6, 'Trocir', 6, tournament),
   new matches('Trxior', 6, 'Trocir', 7, tournament),
   new matches('Trxior', 0, 'General_Richt', 6, tournament),
   new matches('Trxior', 6, 'zmudx', 1, tournament),
   new matches('Trxior', 6, 'bbbZG', 7, tournament),
   new matches('Trxior', 6, 'zmudx', 7, tournament),
   new matches('Trxior', 6, 'GSpeku', 0, tournament),
   new matches('Trxior', 6, 'GSpeku', 0, tournament),
   new matches('Trxior', 6, 'GSpeku', 0, tournament),
];

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

let compareRank = (a, b) => {
	return b.rank - a.rank;
}

newPlayers.sort(compareRank);

console.log(newPlayers);

let ladder = document.querySelector('.ladder-1v1');

for (let i = 0, p = 1; i < newPlayers.length; i++, p++) {

	let playerBox = document.createElement('div');
	
		if (newPlayers[i].matchesPlayed > 0) {
	playerBox.innerHTML =
		`
		<div class="player-box">
			<div class="position">${p}</div>
			<div class="player-right">
				<div class="player-info">
					<img src="img/${newPlayers[i].flag}.png">
					<span class="name">${newPlayers[i].name}</span>
				</div>
				<div class="player-stats">
					<span class="matches">${newPlayers[i].matchesPlayed}</span>
					<span class="rank">${newPlayers[i].rank}</span>
				</div>
			</div>
		</div>
		`


	ladder.appendChild(playerBox);
		};

};
