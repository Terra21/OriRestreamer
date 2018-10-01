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
    groupName: string = 'Swiss - Round 1';
    matchType: string = this.groupName + ' (0-0)';
    zoomBracket: boolean = false;
    bestOf: number = 1;
    tournament: number = 2;
    randomizer: boolean = false;
    player1_winCount: number = 0;
    player2_winCount: number = 0;

    team1Id: number = 1;
	team2Id: number = 3;
	team1_FinishTime: number = 0;
	team2_FinishTime: number = 0;

	soloWinner: number = 0;

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
			'name': 'Chicken_Supreme',
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
			'name': 'cutieroo1',
			'preferredName': 'Cutieroo',
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
			'preferredName': 'Gecko',
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
			'name': 'its_galaxi',
			'preferredName': 'Galaxi',
			'singles': true,
			'seed': null
		},
		{
			'id': 16,
			'name': 'j_halcyon',
			'preferredName': 'J_Halcyon',
			'singles': true,
			'seed': null
		},
		{
			'id': 17,
			'name': 'jhobz296',
			'preferredName': 'JHobz',
			'singles': true,
			'seed': null
		},
		{
			'id': 18,
			'name': 'lackedragon',
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
			'name': 'lhukblade',
			'preferredName': 'Lhuk',
			'singles': false,
			'seed': null
		},
		{
			'id': 21,
			'name': 'LostDedew',
			'preferredName': 'Dedew',
			'singles': true,
			'seed': null
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
			'preferredName': 'Madinsane',
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
			'preferredName': 'Nfnite',
			'singles': true,
			'seed': null
		},
		{
			'id': 29,
			'name': 'og1764',
			'preferredName': 'Og1764',
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
			'preferredName': 'Oshiimine',
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
			'preferredName': 'RainbowPoogle',
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
			'preferredName': 'Shedd',
			'singles': true,
			'seed': null
		},
		{
			'id': 40,
			'name': 'sigmasin',
			'preferredName': 'Sigma',
			'singles': true,
			'seed': null
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
			'preferredName': 'Sloaters',
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
			'preferredName': 'Trojandude',
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
			'p2Id': 9,
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