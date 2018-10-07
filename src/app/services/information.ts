import { Tracker } from './tracker';

export class Information {
    seed: string = null;

    player1: string = 'Terra';
    player2: string = 'Grimelios';
    player1_twitch: string = 'Grimelios';
    player2_twitch: string = 'Terra21';
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
    groupName: string = 'Preliminary/Round of 16/Quarter Final/Semi Final/Final';
	matchType: string = this.groupName;
    zoomBracket: boolean = false;
    bestOf: number = 3;
	tournament: number = 2;
	bracket: string = "Singles (Left)";
    randomizer: boolean = false;
    player1_winCount: number = 0;
	player2_winCount: number = 0;

    team1Id: number = 1
	team2Id: number = 3;
	team1_FinishTime: number = 0;
	team2_FinishTime: number = 0;

	soloWinner: number = 0;

	currentSeries: Array<any> = [{ winner: 0}, {winner: 0}, {winner: 0}];

    players: Array<any> = [
		{
			'id': 0,
			'name': 'Bye',
			'preferredName': 'Bye',
			'singles': true,
			'seed': null
		},
		{
			'id': 1,
			'name': 'Brynhold2',
			'preferredName': 'Brynhold',
			'singles': true,
			'seed': null
		},
		{
			'id': 2,
			'name': 'chicken_supreme',
			'preferredName': 'Chicken Supreme',
			'singles': false,
			'seed': null
		},
		{
			'id': 3,
			'name': 'Cleanfel',
			'preferredName': 'Cleanfel',
			'singles': true,
			'seed': null
		},
		{
			'id': 4,
			'name': 'Covert_Muffin',
			'preferredName': 'CovertMuffin',
			'singles': true,
			'seed': null
		},
		{
			'id': 5,
			'name': 'Cutieroo1',
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
			'seed': null
		},
		{
			'id': 8,
			'name': 'eikocastsholy',
			'preferredName': 'Eiko',
			'singles': true,
			'seed': null
		},
		{
			'id': 9,
			'name': 'ephpls',
			'preferredName': 'Eph',
			'singles': false,
			'seed': null
		},
		{
			'id': 10,
			'name': 'MooseSR',
			'preferredName': 'Moose',
			'singles': true,
			'seed': null
		},
		{
			'id': 11,
			'name': 'FluffyPrower',
			'preferredName': 'FluffyPrower',
			'singles': true,
			'seed': null
		},
		{
			'id': 12,
			'name': 'gecko376',
			'preferredName': 'gecko',
			'singles': true,
			'seed': null
		},
		{
			'id': 13,
			'name': 'Grimelios',
			'preferredName': 'Grimelios',
			'singles': true,
			'seed': null
		},
		{
			'id': 14,
			'name': 'HydraSR',
			'preferredName': 'Hydra',
			'singles': true,
			'seed': null
		},
		{
			'id': 15,
			'name': 'Its_Galaxi',
			'preferredName': 'Galaxi',
			'singles': true,
			'seed': null
		},
		{
			'id': 16,
			'name': 'J_Halcyon',
			'preferredName': 'Hal',
			'singles': true,
			'seed': null
		},
		{
			'id': 17,
			'name': 'JHobz296',
			'preferredName': 'JHobz',
			'singles': true,
			'seed': null
		},
		{
			'id': 18,
			'name': 'LackeDragon',
			'preferredName': 'Lacke',
			'singles': true,
			'seed': null
		},
		{
			'id': 19,
			'name': 'Kirefel',
			'preferredName': 'Kirefel',
			'singles': false,
			'seed': null
		},
		{
			'id': 20,
			'name': 'LhukBlade',
			'preferredName': 'Lhuk',
			'singles': false,
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
			'id': 22,
			'name': 'Lusther',
			'preferredName': 'Lusther',
			'singles': true,
			'seed': null
		},
		{
			'id': 23,
			'name': 'M3atShield',
			'preferredName': 'MeatShield',
			'singles': true,
			'seed': null
		},
		{
			'id': 24,
			'name': 'madinsane_',
			'preferredName': 'madinsane',
			'singles': true,
			'seed': null
		},
		{
			'id': 25,
			'name': 'Mattermonkey',
			'preferredName': 'Mattermonkey',
			'singles': true,
			'seed': null
		},
		{
			'id': 26,
			'name': 'MeldonTaragon',
			'preferredName': 'Meldon',
			'singles': true,
			'seed': null
		},
		{
			'id': 27,
			'name': 'MrGreez',
			'preferredName': 'GreeZ',
			'singles': true,
			'seed': null
		},
		{
			'id': 28,
			'name': 'nfnite',
			'preferredName': 'nfnite',
			'singles': true,
			'seed': null
		},
		{
			'id': 29,
			'name': 'og1764',
			'preferredName': 'og1764',
			'singles': true,
			'seed': null
		},
		{
			'id': 30,
			'name': 'ogNdrahciR',
			'preferredName': 'Richard',
			'singles': true,
			'seed': null
		},
		{
			'id': 31,
			'name': 'Osey889',
			'preferredName': 'Osey',
			'singles': true,
			'seed': null
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
			'id': 35,
			'name': 'RebelWatt',
			'preferredName': 'Rebel',
			'singles': false,
			'seed': null
		},
		{
			'id': 36,
			'name': 'RooseSR',
			'preferredName': 'Roose',
			'singles': true,
			'seed': null
		},
		{
			'id': 37,
			'name': 'Roryrai',
			'preferredName': 'Roryrai',
			'singles': true,
			'seed': null
		},
		{
			'id': 38,
			'name': 'SeaAverage',
			'preferredName': 'SeaAverage',
			'singles': true,
			'seed': null
		},
		{
			'id': 39,
			'name': 'shedd_',
			'preferredName': 'shedd',
			'singles': true,
			'seed': null
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
			'seed': null
		},
		{
			'id': 42,
			'name': 'sloaters27',
			'preferredName': 'sloaters',
			'singles': true,
			'seed': null
		},
		{
			'id': 43,
			'name': 'SmashyLe',
			'preferredName': 'Smashy',
			'singles': false,
			'seed': null
		},
		{
			'id': 44,
			'name': 'Synyadriel',
			'preferredName': 'Synyadriel',
			'singles': true,
			'seed': null
		},
		{
			'id': 45,
			'name': 'TAS_Snoop',
			'preferredName': 'Snoopy',
			'singles': true,
			'seed': null
		},
        {
			'id': 46,
			'name': 'Terra21',
			'preferredName': 'Terra',
			'singles': true,
			'seed': null
        },
		{
			'id': 47,
			'name': 'TheFlyingMarlin',
			'preferredName': 'TheFlyingMarlin',
			'singles': true,
			'seed': null
		},
		{
			'id': 48,
			'name': 'trojandude12',
			'preferredName': 'trojandude',
			'singles': true,
			'seed': null
		},
		{
			'id': 49,
			'name': 'UncleRonny',
			'preferredName': 'UncleRonny',
			'singles': true,
			'seed': null
		},
		{
			'id': 50,
			'name': 'Ushebti',
			'preferredName': 'Ushebti',
			'singles': true,
			'seed': null
		},
        {
            'id': 51,
            'name': 'Vulajin',
			'preferredName': 'Vulajin',
			'singles': true,
            'seed': null
        },
		{
			'id': 52,
			'name': 'Willson',
			'preferredName': 'Willson',
			'singles': true,
			'seed': null
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
			'seed': null
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
			'seed': null
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
			'seed': null
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
			'seed': null
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
			'seed': null
		},
		{
			'id': 13,
			'name': 'Team Skillless',
			'p1Id': 37,
			'p2Id': 26,
			'seed': null
		},
		{
			'id': 14,
			'name': 'Team Smasharoo',
			'p1Id': 36,
			'p2Id': 43,
			'seed': null
		},
		{
			'id': 15,
			'name': 'HalfTheBaguette',
			'p1Id': 21,
			'p2Id': 4,
			'seed': null
		},
		{
			'id': 16,
			'name': 'That Is Still Faster',
			'p1Id': 40,
			'p2Id': 7,
			'seed': null
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