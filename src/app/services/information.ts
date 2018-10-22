import { Tracker } from './tracker';

export class Information {
    seed: string = null;

    player1: string = 'Terra';
    player2: string = 'Grimelios';
    player1_twitch: string = 'Terra21';
    player2_twitch: string = 'Grimelios';
    player1_seed: string = null;
    player2_seed: string = null;
    player1_timerVisible: boolean = false;
    player2_timerVisible: boolean = false;
    player1_finishTime: string = '0:00:00';
    player2_finishTime: string = '0:00:00';
    player1_stats: number = 0;
    player2_stats: number = 0;
    currentAudioOnPlayer: number = 1;
    commentators: string = '';
    background: string = 'iceless';
    groupName: string = 'Preliminary Round/Round of 16/Quarterfinal/Semifinal/Final';
	matchType: string = this.groupName;
    zoomBracket: boolean = false;
    bestOf: number = 3;
	tournament: number = 1;
	bracket: string = "Singles (Left)";
    randomizer: boolean = false;
    player1_winCount: number = 0;
	player2_winCount: number = 0;

    team1Id: number = 1
	team2Id: number = 3;
	team1_FinishTime: number = 0;
	team2_FinishTime: number = 0;

	soloWinner: number = 0;

	currentSeries: Array<any> = [{ winner: 0, name: 'Match 1'}, {winner: 0, name: 'Match 2'}, {winner: 0, name: 'Match 3'}];

    players: Array<any> = [
		{
			'id': 1,
			'name': 'Brynhold2',
			'preferredName': 'Brynhold',
			'singles': true,
			'seed': '9'
		},
		{
			'id': 3,
			'name': 'Cleanfel',
			'preferredName': 'Cleanfel',
			'singles': true,
			'seed': '6'
		},
		{
			'id': 4,
			'name': 'Covert_Muffin',
			'preferredName': 'CovertMuffin',
			'singles': true,
			'seed': '4'
		},
		{
			'id': 5,
			'name': 'CutieRoo1',
			'preferredName': 'Roo',
			'singles': true,
			'seed': null
		},
		{
			'id': 6,
			'name': 'Dr_Tuen',
			'preferredName': 'Dr. Tuen',
			'singles': true,
			'seed': null
		},
		{
			'id': 7,
			'name': 'IMRaziel',
			'preferredName': 'Raziel',
			'singles': true,
			'seed': '3'
		},
		{
			'id': 13,
			'name': 'Grimelios',
			'preferredName': 'Grimelios',
			'singles': true,
			'seed': '17'
		},
		{
			'id': 16,
			'name': 'J_Halcyon',
			'preferredName': 'Hal',
			'singles': true,
			'seed': null
		},
		{
			'id': 21,
			'name': 'LostDedew',
			'preferredName': 'Dedew',
			'singles': true,
			'seed': '1'
		},
		{
			'id': 24,
			'name': 'madinsane_',
			'preferredName': 'madinsane',
			'singles': true,
			'seed': '18'
		},
		{
			'id': 25,
			'name': 'Mattermonkey',
			'preferredName': 'Mattermonkey',
			'singles': true,
			'seed': '19'
		},
		{
			'id': 26,
			'name': 'MeldonTaragon',
			'preferredName': 'Meldon',
			'singles': true,
			'seed': '12'
		},
		{
			'id': 28,
			'name': 'nfnite',
			'preferredName': 'nfnite',
			'singles': true,
			'seed': '22'
		},
		{
			'id': 30,
			'name': 'ogNdrahciR',
			'preferredName': 'Richard',
			'singles': true,
			'seed': '20'
		},
		{
			'id': 32,
			'name': 'oshiimine',
			'preferredName': 'oshiimine',
			'singles': true,
			'seed': null
		},
		{
			'id': 33,
			'name': 'Phant_TV',
			'preferredName': 'Phant',
			'singles': false,
			'seed': null
		},
		{
			'id': 34,
			'name': 'RainbowPoogle',
			'preferredName': 'Poogle',
			'singles': true,
			'seed': null
		},
		{
			'id': 36,
			'name': 'RooseSR',
			'preferredName': 'Roose',
			'singles': true,
			'seed': '21'
		},
		{
			'id': 37,
			'name': 'Roryrai',
			'preferredName': 'Roryrai',
			'singles': true,
			'seed': '10'
		},
		{
			'id': 39,
			'name': 'shedd_',
			'preferredName': 'shedd',
			'singles': true,
			'seed': '5'
		},
		{
			'id': 40,
			'name': 'Sigmasin',
			'preferredName': 'Sigma',
			'singles': true,
			'seed': '2'
		},
		{
			'id': 41,
			'name': 'Skulblaka17',
			'preferredName': 'Skulblaka',
			'singles': true,
			'seed': '14'
		},
		{
			'id': 43,
			'name': 'SmashyLe',
			'preferredName': 'Smashy',
			'singles': false,
			'seed': null
		},
        {
			'id': 46,
			'name': 'Terra21',
			'preferredName': 'Terra',
			'singles': true,
			'seed': '15'
        },
		{
			'id': 48,
			'name': 'trojandude12',
			'preferredName': 'trojandude',
			'singles': true,
			'seed': '13'
		},
		{
			'id': 49,
			'name': 'UncleRonny',
			'preferredName': 'UncleRonny',
			'singles': true,
			'seed': '7'
		},
		{
			'id': 50,
			'name': 'Ushebti',
			'preferredName': 'Ushebti',
			'singles': true,
			'seed': '11'
		},
        {
            'id': 51,
            'name': 'Vulajin',
			'preferredName': 'Vulajin',
			'singles': true,
            'seed': '16'
        },
		{
			'id': 52,
			'name': 'Willson',
			'preferredName': 'Willson',
			'singles': true,
			'seed': '8'
		},
      ];
    
      teams: Array<any> = [
		{
			'id': 0,
			'name': 'Bye',
			'p1Id': 1,
			'p2Id': 2,
			'seed': null
		},
		{
			'id': 1,
			'name': '3 HP Master Race',
			'p1Id': 34,
			'p2Id': 49,
			'seed': '5'
		},
		{
			'id': 2,
			'name': 'Asa Tims',
			'p1Id': 17,
			'p2Id': 35,
			'seed': null
		},
        {
			'id': 3,
			'name': 'Fanta Gin',
			'p1Id': 51,
			'p2Id': 33,
			'seed': '7'
		},
		{
			'id': 4,
			'name': 'Fellows',
			'p1Id': 3,
			'p2Id': 19,
			'seed': null
		},
		{
			'id': 5,
			'name': '∞ Death Gauntlet',
			'p1Id': 6,
			'p2Id': 16,
			'seed': '8'
		},
		{
			'id': 6,
			'name': 'Lacked Lhuk',
			'p1Id': 18,
			'p2Id': 20,
			'seed': null
		},
		{
			'id': 7,
			'name': 'Slurp Squad',
			'p1Id': 15,
			'p2Id': 10,
			'seed': null
		},
		{
			'id': 8,
			'name': 'Team BRB',
			'p1Id': 24,
			'p2Id': 11,
			'seed': null
		},
		{
			'id': 9,
			'name': 'Team City Escape',
			'p1Id': 5,
			'p2Id': 48,
			'seed': '6'
		},
		
		{
			'id': 10,
			'name': 'Team Cockatrice',
			'p1Id': 12,
			'p2Id': 2,
			'seed': null
		},
		{
			'id': 11,
			'name': 'Team Duo Leaves',
			'p1Id': 8,
			'p2Id': 41,
			'seed': null
		},
		{
			'id': 12,
			'name': 'Team Heck',
			'p1Id': 32,
			'p2Id': 39,
			'seed': '4'
		},
		{
			'id': 13,
			'name': 'Team Skillless',
			'p1Id': 37,
			'p2Id': 26,
			'seed': '3'
		},
		{
			'id': 14,
			'name': 'Team Smasharoo',
			'p1Id': 36,
			'p2Id': 43,
			'seed': '9'
		},
		{
			'id': 15,
			'name': 'HalfTheBaguette',
			'p1Id': 21,
			'p2Id': 4,
			'seed': '2'
		},
		{
			'id': 16,
			'name': 'That Is Still Faster',
			'p1Id': 40,
			'p2Id': 7,
			'seed': '1'
		},
		{
			'id': 17,
			'name': 'TwiceTheBaguette',
			'p1Id': 22,
			'p2Id': 27,
			'seed': null
		}
	];
}