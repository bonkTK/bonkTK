class players {
	constructor(name, flag) {
		this.name = name;
		this.flag = flag;
		this.rank = 0;
		this.played = 0;
		this.wins = 0;
		this.draws = 0;
		this.loses = 0;
		this.goalsScored = 0;
		this.goalsConceded = 0;
		this.highestRank = 0;
	}
}

const newPlayers = [
   new players('Trxior', 'Poland'),
   new players('zmudx', 'Poland'),
   new players('klajster', 'Poland'),
   new players('General_Richt', 'Russia'),
   new players('GSpeku', 'Germany'),
   new players('vAZz', 'Germany'),
   new players('Bunniesss', 'United-States'),
   new players('Trocir', 'Serbia'),
   new players('bbbZG', 'Croatia'),
   new players('Pimpektron1', 'Serbia'),
   new players('leftright', 'Albania'),
   new players('Nub1', 'Lebanon'),
   new players('LORDBAZ', 'Lebanon'),
   new players('TheAngryBull', 'United-States'),
   new players('SxC Swish', 'United-States'),
   new players('stussyg', 'United-States'),
   new players('RaV8', 'Poland'),
   new players('R3YM4Rjr', 'United-Kingdom'),
   new players('Victom', 'United-States'),
   new players('Nemenick', 'Italy'),
   new players('anxiety', 'Italy'),
   new players('ITA 9', 'Italy'),
   new players('mesney', 'Canada'),
   new players('Sm4ck', 'Israel'),
   new players('Miinato', 'Algeria'),
   new players('captainvodka', 'Norway'),
   new players('merlin67', 'Iran'),
   new players('Le Createur', 'United-States'),
   new players('XClutch2', 'United-States'),
   new players('Alex2810', 'Canada'),
   new players('bonk.tk', 'ribbon'),
];

/*let newMatches = [];

class matches {
	constructor(host, hostScore, away, awayScore, competitions) {
		this.host = host;
		this.hostScore = hostScore;
		this.away = away;
		this.awayScore = awayScore;
		newMatches.push(this);
	}
}

let som, playerA, playerB, playerAname, playerBname, resultA, resultB;

for (let i = 0; i < 2500; i++) {
	playerA = Math.floor((Math.random() * newPlayers.length));
	playerB = Math.floor((Math.random() * newPlayers.length));
	resultA = Math.floor((Math.random() * 3) + 4);
	resultB = Math.floor((Math.random() * 2) + 3);

	som = [new matches(newPlayers[playerA].name, resultA, newPlayers[playerB].name, resultB)];
};*/

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
   new matches('Trxior', 6, 'bonk.tk', 0),
   new matches('zmudx', 6, 'bonk.tk', 0),
];
