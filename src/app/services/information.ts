import { Tracker } from './tracker';

export class Information {
    seed: string = null;

    player1: string = 'Grimelios';
    player2: string = 'Terra';
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
    commentators: string = 'Mattermonkey, TheFlyingMarlin';
    background: string = 'brbms';
    groupName: string = 'Swiss - Round 3';
    matchType: string = this.groupName + ' (2-0)';
    zoomBracket: boolean = false;
    bestOf: number = 1;
    tournament: number = 3;
    randomizer: boolean = false;
    player1_winCount: number = 0;
    player2_winCount: number = 0;

    team1Id: number = 1;
	team2Id: number = 3;
	team1_FinishTime: number = 0;
	team2_FinishTime: number = 0;

    players: Array<any> = [
        {
            'id': 1,
            'name': 'Vulajin',
			'preferredName': 'Vulajin',
			'singles': true,
            'seed': null
        },
        {
			'id': 2,
			'name': 'Terra21',
			'preferredName': 'Terra',
			'singles': true,
			'seed': null
        },
        {
			'id': 3,
			'name': 'eikocastsholy',
			'preferredName': 'Eiko',
			'singles': true,
			'seed': null
        },
        {
			'id': 4,
			'name': 'Skulblaka17',
			'preferredName': 'Skulblaka',
			'singles': true,
			'seed': null
        },
        {
			'id': 5,
			'name': 'du_raziel',
			'preferredName': 'Raziel',
			'singles': true,
			'seed': null
		},
		{
			'id': 6,
			'name': 'sigmasin',
			'preferredName': 'sigma',
			'singles': true,
			'seed': null
		},
		{
			'id': 7,
			'name': 'Cleanfel',
			'preferredName': 'Cleanfel',
			'singles': true,
			'seed': null
		},
		{
			'id': 9,
			'name': 'jhobz296',
			'preferredName': 'JHobz',
			'singles': true,
			'seed': null
		},
		{
			'id': 10,
			'name': 'RebelWatt',
			'preferredName': 'Rebel',
			'singles': false,
			'seed': null
		},
		{
			'id': 11,
			'name': 'RooseSR',
			'preferredName': 'Roose',
			'singles': true,
			'seed': null
		},
		{
			'id': 12,
			'name': 'Covert_Muffin',
			'preferredName': 'CovertMuffin',
			'singles': true,
			'seed': null
		},
		{
			'id': 13,
			'name': 'oshiimine',
			'preferredName': 'oshiimine',
			'singles': true,
			'seed': null
		},
		{
			'id': 14,
			'name': 'shedd_',
			'preferredName': 'shedd',
			'singles': true,
			'seed': null
		},
		{
			'id': 15,
			'name': 'Grimelios',
			'preferredName': 'Grimelios',
			'singles': true,
			'seed': null
		},
		{
			'id': 16,
			'name': 'roryrai',
			'preferredName': 'roryrai',
			'singles': true,
			'seed': null
		},
		{
			'id': 17,
			'name': 'Synyadriel',
			'preferredName': 'Synyadriel',
			'singles': true,
			'seed': null
		},
		{
			'id': 18,
			'name': 'TAS_Snoop',
			'preferredName': 'Snoopy',
			'singles': true,
			'seed': null
		},
		{
			'id': 19,
			'name': 'TheFlyingMarlin',
			'preferredName': 'TheFlyingMarlin',
			'singles': true,
			'seed': null
		},
		{
			'id': 20,
			'name': 'nfnite',
			'preferredName': 'nfnite',
			'singles': true,
			'seed': null
		},
		{
			'id': 21,
			'name': 'Phant_TV',
			'preferredName': 'Phant',
			'singles': false,
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
			'name': 'Osey889',
			'preferredName': 'Osey',
			'singles': true,
			'seed': null
		},
		{
			'id': 25,
			'name': 'trojandude12',
			'preferredName': 'trojandude',
			'singles': true,
			'seed': null
		},
		{
			'id': 26,
			'name': 'cutieroo1',
			'preferredName': 'Cutieroo',
			'singles': true,
			'seed': null
		},
		{
			'id': 27,
			'name': 'SmashyLe',
			'preferredName': 'Smashy',
			'singles': false,
			'seed': null
		},
		{
			'id': 28,
			'name': 'MeldonTaragorn',
			'preferredName': 'Meldon',
			'singles': true,
			'seed': null
		},
		{
			'id': 29,
			'name': 'HydraSR',
			'preferredName': 'Hydra',
			'singles': true,
			'seed': null
		},
		{
			'id':30,
			'name': 'Willson',
			'preferredName': 'Willson',
			'singles': true,
			'seed': null
		},
		{
			'id':31,
			'name': 'sloaters27',
			'preferredName': 'sloaters',
			'singles': true,
			'seed': null
		},
		{
			'id':32,
			'name': 'LostDedew',
			'preferredName': 'Dedew',
			'singles': true,
			'seed': null
		},
		{
			'id':33,
			'name': 'ogndrahcir',
			'preferredName': 'Richard',
			'singles': true,
			'seed': null
		},
		{
			'id':34,
			'name': 'Brynhold2',
			'preferredName': 'Brynhold',
			'singles': true,
			'seed': null
		},
		{
			'id':35,
			'name': 'rainbowpoogle',
			'preferredName': 'rainbowpoogle',
			'singles': true,
			'seed': null
		},
		{
			'id':36,
			'name': 'UncleRonny',
			'preferredName': 'UncleRonny',
			'singles': true,
			'seed': null
		},
		{
			'id':37,
			'name': 'ephpls',
			'preferredName': 'Eph',
			'singles': false,
			'seed': null
		},
		{
			'id':38,
			'name': 'Lusther',
			'preferredName': 'Lusther',
			'singles': true,
			'seed': null
		},
		{
			'id':39,
			'name': 'FluffyPrower',
			'preferredName': 'FluffyPrower',
			'singles': false,
			'seed': null
		},
		{
			'id':40,
			'name': 'MrGreez',
			'preferredName': 'GreeZ',
			'singles': true,
			'seed': null
		},
		{
			'id':41,
			'name': 'Mattermonkey',
			'preferredName': 'Mattermonkey',
			'singles': true,
			'seed': null
		},
		{
			'id':42,
			'name': 'madinsane_',
			'preferredName': 'madinsane',
			'singles': true,
			'seed': null
		},
		{
			'id':43,
			'name': 'Dr_Tuen',
			'preferredName': 'Dr. Tuen',
			'singles': true,
			'seed': null
		},
		{
			'id':44,
			'name': 'j_halcyon',
			'preferredName': 'j_halcyon',
			'singles': true,
			'seed': null
		},
		{
			'id':45,
			'name': 'Lacke',
			'preferredName': 'lackedragon',
			'singles': true,
			'seed': null
		},
		{
			'id':46,
			'name': 'lhukblade',
			'preferredName': 'Lhuk',
			'singles': false,
			'seed': null
		},
		{
			'id':47,
			'name': 'gecko376',
			'preferredName': 'gecko',
			'singles': false,
			'seed': null
		},
		{
			'id':48,
			'name': 'SeaAverage',
			'preferredName': 'SeaAverage',
			'singles': true,
			'seed': null
		},
		{
			'id':49,
			'name': 'Chicken_Supreme',
			'preferredName': 'Chicken Supreme',
			'singles': false,
			'seed': null
		},
		{
			'id': 50,
			'name': 'its_galaxy',
			'preferredName': 'Galaxy',
			'singles': true,
			'seed': null
		},
		{
			'id': 51,
			'name': 'FlaggerMoose',
			'preferredName': 'Moose',
			'singles': true,
			'seed': null
		},
		{
			'id': 52,
			'name': 'Ushebti',
			'preferredName': 'Ushebti',
			'singles': true,
			'seed': null
		}
      ];
    
      teams: Array<any> = [
        {
			'id': 1,
			'name': 'Fanta Gin',
			'p1Id': 1,
			'p2Id': 21,
			'seed': null
        },
		{
			'id': 3,
			'name': 'Team Duo Leaves',
			'p1Id': 3,
			'p2Id': 4,
			'seed': null
		},
		{
			'id': 4,
			'name': 'That Is Still Faster',
			'p1Id': 5,
			'p2Id': 6,
			'seed': null
		},
		{
			'id': 5,
			'name': 'Asa Tims',
			'p1Id': 9,
			'p2Id': 10,
			'seed': null
		},
		{
			'id': 6,
			'name': 'Smasharoo',
			'p1Id': 11,
			'p2Id': 27,
			'seed': null
		},
		{
			'id': 7,
			'name': 'Team Heck',
			'p1Id': 13,
			'p2Id': 14,
			'seed': null
		},
		{
			'id': 8,
			'name': 'Skillless',
			'p1Id': 11,
			'p2Id': 27,
			'seed': null
		},
		{
			'id': 9,
			'name': 'City Escape',
			'p1Id': 25,
			'p2Id': 26,
			'seed': null
		},
		{
			'id': 10,
			'name': '3 HP Master Race',
			'p1Id': 25,
			'p2Id': 26,
			'seed': null
		},
		{
			'id': 11,
			'name': 'Transatlantic',
			'p1Id': 32,
			'p2Id': 37,
			'seed': null
		},
		{
			'id': 12,
			'name': 'TwiceTheBaguette',
			'p1Id': 38,
			'p2Id': 40,
			'seed': null
		},
		{
			'id': 13,
			'name': 'Team BRB',
			'p1Id': 39,
			'p2Id': 42,
			'seed': null
		},
		{
			'id': 14,
			'name': 'Infinity Death Gauntlet',
			'p1Id': 43,
			'p2Id': 44,
			'seed': null
		},
		{
			'id': 15,
			'name': 'Lacked Lhuk',
			'p1Id': 45,
			'p2Id': 46,
			'seed': null
		},
		{
			'id': 16,
			'name': 'Team Cockatrice',
			'p1Id': 47,
			'p2Id': 49,
			'seed': null
		},
		{
			'id': 17,
			'name': 'Slurp Squad',
			'p1Id': 50,
			'p2Id': 51,
			'seed': null
		}
	];
}