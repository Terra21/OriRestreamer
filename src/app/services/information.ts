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
    bestOf: number = 1;
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
			'seed': '12',
			'statsStartColumn': 'B33',
			'statsEndColumn': 'K33',
			'raceStatsStartColumn': 'B50',
			'raceStatsEndColumn': 'CP50'
        },
        {
			'id': 2,
			'name': 'HydraSR',
			'preferredName': 'Hydra',
			'allSkills': true,
			'allCells': false,
			'seed': '16',
			'statsStartColumn': 'B13',
			'statsEndColumn': 'K13',
			'raceStatsStartColumn': 'B17',
			'raceStatsEndColumn': 'CP17'
        },
        {
			'id': 3,
			'name': 'Terra21',
			'preferredName': 'Terra',
			'allSkills': true,
			'allCells': false,
			'seed': '7',
			'statsStartColumn': 'B30',
			'statsEndColumn': 'K30',
			'raceStatsStartColumn': 'B42',
			'raceStatsEndColumn': 'CP42'
        },
        {
			'id': 4,
			'name': 'shedd_',
			'preferredName': 'shedd',
			'allSkills': true,
			'allCells': false,
			'seed': '4',
			'statsStartColumn': 'B27',
			'statsEndColumn': 'K27',
			'raceStatsStartColumn': 'B38',
			'raceStatsEndColumn': 'CP38'
        },
        {
			'id': 6,
			'name': 'Grifs99',
			'preferredName': 'Grifs',
			'allSkills': true,
			'allCells': false,
			'seed': '26',
			'statsStartColumn': 'B11',
			'statsEndColumn': 'K11',
			'raceStatsStartColumn': 'B15',
			'raceStatsEndColumn': 'CP15'
		},
        {
			'id': 9,
			'name': 'bdbrufus',
			'preferredName': 'Rufus',
			'allSkills': true,
			'allCells': false,
			'seed': '31',
			'statsStartColumn': 'B3',
			'statsEndColumn': 'K3',
			'raceStatsStartColumn': 'B6',
			'raceStatsEndColumn': 'CP6'
		},
        {
			'id': 11,
			'name': 'UncleRonny',
			'preferredName': 'Ronny',
			'allSkills': true,
			'allCells': false,
			'seed': '1',
			'statsStartColumn': 'B32',
			'statsEndColumn': 'K32',
			'raceStatsStartColumn': 'B49',
			'raceStatsEndColumn': 'CP49'
		},
        {
			'id': 13,
			'name': 'nfnite',
			'preferredName': 'nfnite',
			'allSkills': true,
			'allCells': false,
			'seed': '9',
			'statsStartColumn': 'B23',
			'statsEndColumn': 'K23',
			'raceStatsStartColumn': 'B30',
			'raceStatsEndColumn': 'CP30'
		},
        {
			'id': 14,
			'name': 'MrGreeZ',
			'preferredName': 'GreeZ',
			'allSkills': true,
			'allCells': false,
			'seed': '19',
			'statsStartColumn': 'B22',
			'statsEndColumn': 'K22',
			'raceStatsStartColumn': 'B29',
			'raceStatsEndColumn': 'CP29'
		},
        {
			'id': 15,
			'name': 'Monkley6',
			'preferredName': 'Monkley',
			'allSkills': true,
			'allCells': false,
			'seed': '20',
			'statsStartColumn': 'B21',
			'statsEndColumn': 'K21',
			'raceStatsStartColumn': 'B28',
			'raceStatsEndColumn': 'CP28'
		},
        {
			'id': 16,
			'name': 'Willson',
			'preferredName': 'Willson',
			'allSkills': true,
			'allCells': false,
			'seed': '2',
			'statsStartColumn': 'B34',
			'statsEndColumn': 'K34',
			'raceStatsStartColumn': 'B52',
			'raceStatsEndColumn': 'CP52'
		},
        {
			'id': 19,
			'name': 'lurkingassassin',
			'preferredName': 'LurkingAssassin',
			'allSkills': true,
			'allCells': false,
			'seed': '6',
			'statsStartColumn': 'B18',
			'statsEndColumn': 'K18',
			'raceStatsStartColumn': 'B24',
			'raceStatsEndColumn': 'CP24'
		},
        {
			'id': 20,
			'name': 'Tritonite_',
			'preferredName': 'Tritonite',
			'allSkills': true,
			'allCells': false,
			'seed': '18',
			'statsStartColumn': 'B31',
			'statsEndColumn': 'K31',
			'raceStatsStartColumn': 'B45',
			'raceStatsEndColumn': 'CP45'
		},
        {
			'id': 21,
			'name': 'Cleanfel',
			'preferredName': 'Clean',
			'allSkills': true,
			'allCells': false,
			'seed': '24',
			'statsStartColumn': 'B7',
			'statsEndColumn': 'K7',
			'raceStatsStartColumn': 'B10',
			'raceStatsEndColumn': 'CP10'
		},
        {
			'id': 23,
			'name': 'Covert_Muffin',
			'preferredName': 'CovertMuffin',
			'allSkills': true,
			'allCells': false,
			'seed': '10',
			'statsStartColumn': 'B8',
			'statsEndColumn': 'K8',
			'raceStatsStartColumn': 'B11',
			'raceStatsEndColumn': 'CP11'
		},
        {
			'id': 24,
			'name': 'og1764',
			'preferredName': 'og1764',
			'allSkills': true,
			'allCells': false,
			'seed': '32',
			'statsStartColumn': 'B24',
			'statsEndColumn': 'K24',
			'raceStatsStartColumn': 'B32',
			'raceStatsEndColumn': 'CP32'
		},
        {
			'id': 25,
			'name': 'Sparik',
			'preferredName': 'Sparik',
			'allSkills': true,
			'allCells': false,
			'seed': '14',
			'statsStartColumn': 'B28',
			'statsEndColumn': 'K28',
			'raceStatsStartColumn': 'B40',
			'raceStatsEndColumn': 'CP40'
		},
        {
			'id': 26,
			'name': 'CheeseLover',
			'preferredName': 'Cheese Lover',
			'allSkills': true,
			'allCells': false,
			'seed': '15',
			'statsStartColumn': 'B6',
			'statsEndColumn': 'K6',
			'raceStatsStartColumn': 'B9',
			'raceStatsEndColumn': 'CP9'
		},
        {
			'id': 29,
			'name': 'loopyloo77',
			'preferredName': 'loopyloo',
			'allSkills': true,
			'allCells': false,
			'seed': '30',
			'statsStartColumn': 'B16',
			'statsEndColumn': 'K16',
			'raceStatsStartColumn': 'B22',
			'raceStatsEndColumn': 'CP22'
		},
        {
			'id': 30,
			'name': 'ogNdrahciR',
			'preferredName': 'ogNdrahciR',
			'allSkills': true,
			'allCells': false,
			'seed': '17',
			'statsStartColumn': 'B25',
			'statsEndColumn': 'K25',
			'raceStatsStartColumn': 'B33',
			'raceStatsEndColumn': 'CP33'
		},
        {
			'id': 31,
			'name': 'TAS_Snoop',
			'preferredName': 'Snoop',
			'allSkills': true,
			'allCells': false,
			'seed': '21',
			'statsStartColumn': 'B29',
			'statsEndColumn': 'K29',
			'raceStatsStartColumn': 'B41',
			'raceStatsEndColumn': 'CP41'
		},
        {
			'id': 32,
			'name': 'Lusther',
			'preferredName': 'LusTher',
			'allSkills': true,
			'allCells': false,
			'seed': '11',
			'statsStartColumn': 'B19',
			'statsEndColumn': 'K19',
			'raceStatsStartColumn': 'B26',
			'raceStatsEndColumn': 'CP26'
		},
        {
			'id': 33,
			'name': 'Foopyo',
			'preferredName': 'Foopyo',
			'allSkills': true,
			'allCells': false,
			'seed': '27',
			'statsStartColumn': 'B10',
			'statsEndColumn': 'K10',
			'raceStatsStartColumn': 'B14',
			'raceStatsEndColumn': 'CP14'
		},
        {
			'id': 34,
			'name': 'Mattermonkey',
			'preferredName': 'Mattermonkey',
			'allSkills': true,
			'allCells': false,
			'seed': '22',
			'statsStartColumn': 'B20',
			'statsEndColumn': 'K20',
			'raceStatsStartColumn': 'B27',
			'raceStatsEndColumn': 'CP27'
		},
        {
			'id': 37,
			'name': 'cereberon',
			'preferredName': 'cereberon',
			'allSkills': true,
			'allCells': false,
			'seed': '23',
			'statsStartColumn': 'B5',
			'statsEndColumn': 'K5',
			'raceStatsStartColumn': 'B8',
			'raceStatsEndColumn': 'CP8'
		},
        {
			'id': 39,
			'name': 'LostDedew',
			'preferredName': 'Dedew',
			'allSkills': true,
			'allCells': false,
			'seed': '5',
			'statsStartColumn': 'B17',
			'statsEndColumn': 'K17',
			'raceStatsStartColumn': 'B23',
			'raceStatsEndColumn': 'CP23'
		},
        {
			'id': 42,
			'name': 'primorix',
			'preferredName': 'Primorix',
			'allSkills': true,
			'allCells': false,
			'seed': '28',
			'statsStartColumn': 'B26',
			'statsEndColumn': 'K26',
			'raceStatsStartColumn': 'B35',
			'raceStatsEndColumn': 'CP35'
		},
        {
			'id': 44,
			'name': 'Jelluh24',
			'preferredName': 'Jelluh',
			'allSkills': true,
			'allCells': false,
			'seed': '29',
			'statsStartColumn': 'B15',
			'statsEndColumn': 'K15',
			'raceStatsStartColumn': 'B20',
			'raceStatsEndColumn': 'CP20'
		},
        {
			'id': 46,
			'name': 'Elojimmini',
			'preferredName': 'Elojimmini',
			'allSkills': true,
			'allCells': false,
			'seed': '3',
			'statsStartColumn': 'B9',
			'statsEndColumn': 'K9',
			'raceStatsStartColumn': 'B12',
			'raceStatsEndColumn': 'CP12'
		},
        {
			'id': 48,
			'name': 'Brynhold2',
			'preferredName': 'Brynhold',
			'allSkills': true,
			'allCells': false,
			'seed': '25',
			'statsStartColumn': 'B4',
			'statsEndColumn': 'K4',
			'raceStatsStartColumn': 'B7',
			'raceStatsEndColumn': 'CP7'
		},
        {
			'id': 50,
			'name': 'IMRaziel',
			'preferredName': 'Raziel',
			'allSkills': true,
			'allCells': false,
			'seed': '8',
			'statsStartColumn': 'B14',
			'statsEndColumn': 'K14',
			'raceStatsStartColumn': 'B18',
			'raceStatsEndColumn': 'CP18'
		},
        {
			'id': 53,
			'name': 'hitachihex',
			'preferredName': 'hitachihex',
			'allSkills': true,
			'allCells': false,
			'seed': '13',
			'statsStartColumn': 'B12',
			'statsEndColumn': 'K12',
			'raceStatsStartColumn': 'B16',
			'raceStatsEndColumn': 'CP16'
		}
      ];
}