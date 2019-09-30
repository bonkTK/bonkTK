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
   new players('General_Richt', 'Russia'),
   new players('GSpeku', 'Germany'),
   new players('Bunniesss', 'United-States'),
   new players('Trocir', 'Serbia'),
   new players('bbb86', 'Croatia'),
   new players('Pimpektron1', 'Serbia'),
   new players('leftright', 'Albania'),
   new players('Nub1', 'Lebanon'),
   new players('TheAngryBull', 'United-States'),
   new players('SxC Swish', 'United-States'),
   new players('stussyg', 'United-States'),
   new players('RaV8', 'Poland'),
   new players('R3YM4Rjr', 'United-Kingdom'),
   new players('Victom', 'United-States'),
   new players('Nemenick', 'Italy'),
   new players('mesney', 'Canada'),
   new players('Sm4ck', 'Israel'),
   new players('Miinato', 'Algeria'),
   new players('captainvodka', 'Norway'),
   new players('merlin67', 'Iran'),
   new players('Le Createur', 'United-States'),
   new players('XClutch2', 'United-States'),
   new players('Alex28102', 'Canada'),
   new players('xXGET REKTXx', 'United-States'),
   new players('Chiilzz', 'United-States'),
   new players('13wbaldwi', 'United-Kingdom'),
   new players('Rick1985', 'United-States'),
   new players('ACS v2', 'United-States'),
   new players('XXSPINWHEELXX', 'United-States'),
   new players('didisiah', 'United-States'),
   new players('coldrex', 'Tunisia'),
   new players('FIyJam', 'United-States'),
   new players('xCapone', 'Kazakhstan'),
   new players('jgameplayer', 'Colombia'),
   new players('I Anger People', 'United-States'),
   new players('NJDevil', 'United-States'),
   new players('Smiley Smiley 2', 'Ireland'),
   new players('lévin', 'Turkey'),
   new players('Thetrueninja101', 'United-States'),
   new players('NeyM1TOoficial', 'Brazil'),
   new players('Netzz II', 'Brazil'),
   new players('The Reds__', 'Brazil'),
   new players('sGap_Striker', 'Brazil'),
   new players('Bolo_lendario', 'Brazil'),
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
   new matches('Alex28102', 5, 'Chiilzz', 3),
   new matches('ACS v2', 6, 'Rick1985', 1),
   new matches('Chiilzz', 6, 'Rick1985', 1),
   new matches('ACS v2', 2, 'Alex28102', 6),
   new matches('coldrex', 3, 'Alex28102', 6),
   new matches('Chiilzz', 0, 'Netzz II', 6),
   new matches('Alex28102', 3, 'FIyJam', 6),
   new matches('jgameplayer', 3, 'Netzz II', 6),
   new matches('jgameplayer', 4, 'FIyJam', 6),
   new matches('I Anger People', 3, 'FIyJam', 5),
];
