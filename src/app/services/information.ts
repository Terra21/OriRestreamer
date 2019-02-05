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
    groupName: string = 'Qualifier/Round of 32/Round of 16/Quarterfinal/Semifinal/Final';
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
			'seed': null,
			'statsStartColumn': 'B52',
			'statsEndColumn': 'J52'
        },
        {
			'id': 2,
			'name': 'HydraSR',
			'preferredName': 'Hydra',
			'allSkills': true,
			'allCells': false,
			'seed': null,
			'statsStartColumn': 'B18',
			'statsEndColumn': 'J18'
        }
        ,
        {
			'id': 3,
			'name': 'Terra21',
			'preferredName': 'Terra',
			'allSkills': true,
			'allCells': false,
			'seed': null,
			'statsStartColumn': 'B44',
			'statsEndColumn': 'J44'
        },
        {
			'id': 4,
			'name': 'shedd_',
			'preferredName': 'shedd',
			'allSkills': true,
			'allCells': false,
			'seed': null,
			'statsStartColumn': 'B39',
			'statsEndColumn': 'J39'
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
			'id': 17,
			'name': 'Phant_TV',
			'preferredName': 'Phant',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 18,
			'name': 'SeaAverage',
			'preferredName': 'SeaAverage',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 19,
			'name': 'lurkingassassin',
			'preferredName': 'LurkingAssassin',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 20,
			'name': 'Tritonite_',
			'preferredName': 'Tritonite',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 21,
			'name': 'Cleanfel',
			'preferredName': 'Clean',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 22,
			'name': 'AC9_Nineball',
			'preferredName': 'Nineball',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 23,
			'name': 'Covert_Muffin',
			'preferredName': 'CovertMuffin',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 24,
			'name': 'og1764',
			'preferredName': 'og1764',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 25,
			'name': 'Sparik',
			'preferredName': 'Sparik',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 26,
			'name': 'CheeseLover',
			'preferredName': 'Cheese Lover',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 27,
			'name': 'TheFlyingMarlin',
			'preferredName': 'Marlin',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 28,
			'name': 'sloaters27',
			'preferredName': 'sloaters',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 29,
			'name': 'loopyloo77',
			'preferredName': 'loopyloo',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 30,
			'name': 'ogNdrahciR',
			'preferredName': 'ogNdrahciR',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 31,
			'name': 'TAS_Snoop',
			'preferredName': 'Snoop',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 32,
			'name': 'Lusther',
			'preferredName': 'LusTher',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 33,
			'name': 'Foopyo',
			'preferredName': 'Foopyo',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 34,
			'name': 'Mattermonkey',
			'preferredName': 'Mattermonkey',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 35,
			'name': 'Whoopee_Cushion',
			'preferredName': 'Whoopee',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 36,
			'name': 'Skulblaka17',
			'preferredName': 'Skul',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 37,
			'name': 'cereberon',
			'preferredName': 'cereberon',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 38,
			'name': 'AHuntersPixxel',
			'preferredName': 'Pix',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 39,
			'name': 'LostDedew',
			'preferredName': 'Dedew',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 40,
			'name': 'j_halcyon',
			'preferredName': 'Hal',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 41,
			'name': 'skurryisoffline',
			'preferredName': 'Skurry',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 42,
			'name': 'primorix',
			'preferredName': 'Primorix',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 43,
			'name': 'athos213',
			'preferredName': 'Athos',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 44,
			'name': 'Jelluh24',
			'preferredName': 'Jelluh',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 45,
			'name': 'Kirefel',
			'preferredName': 'Kirefel',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 46,
			'name': 'Elojimmini',
			'preferredName': 'Elojimmini',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 47,
			'name': 'XeroGoFast',
			'preferredName': 'Xero',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 48,
			'name': 'Brynhold2',
			'preferredName': 'Brynhold',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 49,
			'name': 'Nightfighter47',
			'preferredName': 'Nightfighter',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 50,
			'name': 'IMRaziel',
			'preferredName': 'Raziel',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 51,
			'name': 'Lusidus',
			'preferredName': 'Lusidus',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 52,
			'name': 'noxitu',
			'preferredName': 'Noxitu',
			'allSkills': true,
			'allCells': false,
			'seed': null
		},
        {
			'id': 53,
			'name': 'hitachihex',
			'preferredName': 'hitachihex',
			'allSkills': true,
			'allCells': false,
			'seed': null
		}
      ];
}