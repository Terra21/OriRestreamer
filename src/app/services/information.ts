import { Tracker } from './tracker';

export class Information {
    seed: string = null;

    player1Id: number = 1;
    player2Id: number = 2;
    player3Id: number = 3;
    player4Id: number = 4;
    player1_timerVisible: boolean = false;
    player2_timerVisible: boolean = false;
    player1_finishTime: string = '0:00:00';
    player2_finishTime: string = '0:00:00';
    player1_stats: number = 0;
    player2_stats: number = 0;
    currentAudioOnPlayer: number = 1;
    commentators: string = 'Sigmasin, RooseSR';
    background: string = 'BlackrootDashTree';
    // groupName: string = 'Round of 32/Round of 16/Quarterfinal/Semifinal/Final';
    groupName: string = 'Round of 32';
	matchType: string = this.groupName;
    zoomBracket: boolean = false;
    bestOf: number = 0;
	tournament: number = 1;
	bracket: string = "Singles (Left)";
    randomizer: boolean = false;
    player1_winCount: number = 0;
	player2_winCount: number = 0;

	soloWinner: number = 0;

	currentSeries: Array<any> = [{ winner: 0, name: 'Match 1'}, {winner: 0, name: 'Match 2'}, {winner: 0, name: 'Match 3'}];

    players: Array<any> = [
		{
			'id': 1,
			'name': 'Vulajin',
			'preferredName': 'Vulajin',
			'allSkills': true,
			'allCells': false,
			'seed': null
        },
        {
			'id': 2,
			'name': 'HydraSR',
			'preferredName': 'Hydra',
			'allSkills': true,
			'allCells': false,
			'seed': null
        }
        ,
        {
			'id': 3,
			'name': 'Terra21',
			'preferredName': 'Terra',
			'allSkills': true,
			'allCells': false,
			'seed': null
        },
        {
			'id': 4,
			'name': 'shedd_',
			'preferredName': 'shedd',
			'allSkills': true,
			'allCells': false,
			'seed': null
        },
        {
			'id': 5,
			'name': 'Eviona2',
			'preferredName': 'Eviona',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 6,
			'name': 'Grifs99',
			'preferredName': 'Grifs',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 7,
			'name': 'ThisIsNotSully',
			'preferredName': 'Sully',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 8,
			'name': 'rainbowpoogle',
			'preferredName': 'poogle',
			'allSkills': true,
			'allCells': false,
			'seed': null
        },
        {
			'id': 9,
			'name': 'bdbrufus',
			'preferredName': 'Rufus',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 10,
			'name': 'Grimelios',
			'preferredName': 'Grimelios',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 11,
			'name': 'UncleRonny',
			'preferredName': 'Ronny',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 12,
			'name': 'umbra_bug',
			'preferredName': 'umbra',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 13,
			'name': 'nfnite',
			'preferredName': 'nfnite',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 14,
			'name': 'MrGreeZ',
			'preferredName': 'GreeZ',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 15,
			'name': 'Monkley6',
			'preferredName': 'Monkley',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 16,
			'name': 'Willson',
			'preferredName': 'Willson',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 0,
			'name': 'twitch',
			'preferredName': 'stream name',
			'allSkills': true,
			'allCells': false,
			'seed': null
		}
      ];
}