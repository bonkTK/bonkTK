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
];

let newMatches = [];

class matches {
	constructor(host, hostScore, away, awayScore, competitions) {
		this.host = host;
		this.hostScore = hostScore;
		this.away = away;
		this.awayScore = awayScore;
		this.competitions = competitions;
        newMatches.push(this);
	}
}

const tournament = 30;
const friendly = 20;
let som;
let playerA;
let playerB;
let playerAname;
let playerBname;
let resultA;
let resultB;

for (let i = 0; i < 2500; i++) {
	
playerA = Math.floor((Math.random() * newPlayers.length));
playerB = Math.floor((Math.random() * newPlayers.length));
resultA = Math.floor((Math.random() * 3) + 4);
resultB = Math.floor((Math.random() * 2) + 3);

som = [
   new matches(newPlayers[playerA].name, resultA, newPlayers[playerB].name, resultB, tournament),
];
	
}


/*
class matches {
	constructor(host, hostScore, away, awayScore, competitions) {
		this.host = host;
		this.hostScore = hostScore;
		this.away = away;
		this.awayScore = awayScore;
		this.competitions = competitions;
	}
}

const tournament = 16;
const friendly = 8;

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
   new matches('Trxior', 0, 'GSpeku', 6, tournament),
   new matches('Trxior', 4, 'Trocir', 6, tournament),
   new matches('Trxior', 0, 'General_Richt', 6, tournament),
   new matches('Trxior', 6, 'zmudx', 1, tournament),
   new matches('Trxior', 2, 'bbbZG', 5, tournament),
   new matches('Trxior', 2, 'zmudx', 5, tournament),
   new matches('Trxior', 2, 'GSpeku', 6, tournament),
   new matches('Trxior', 6, 'GSpeku', 0, tournament),
   new matches('Trxior', 6, 'GSpeku', 0, tournament),
   new matches('Trxior', 6, 'GSpeku', 2, tournament),
   new matches('XClutch2', 4, 'Victom', 3, tournament),
   new matches('XClutch2', 4, 'Victom', 3, tournament),
   new matches('XClutch2', 4, 'Nemenick', 3, tournament),
   new matches('XClutch2', 4, 'zmudx', 6, tournament),
   new matches('Trxior', 4, 'zmudx', 6, tournament),
   new matches('Nub1', 4, 'zmudx', 6, tournament),
   new matches('Nub1', 4, 'Trxior', 4, tournament),
   new matches('Nub1', 4, 'Trocir', 4, tournament),
   new matches('Nub1', 4, 'Trocir', 6, tournament),
   new matches('Nub1', 4, 'Trocir', 6, tournament),
   new matches('Nub1', 4, 'Trocir', 3, tournament),
   new matches('Nub1', 4, 'Nemenick', 3, tournament),
   new matches('Nub1', 4, 'XClutch2', 3, tournament),
   new matches('Nub1', 4, 'Trxior', 3, tournament),
   new matches('RaV8', 4, 'Trxior', 3, tournament),
   new matches('RaV8', 4, 'bbbZG', 3, tournament),
];*/