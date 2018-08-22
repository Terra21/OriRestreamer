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
    commentators: string = 'TheRooseIsLoose, TheFlyingMarlin';
    background: string = 'iceless';
    groupName: string = 'Swiss - Round 3';
    matchType: string = this.groupName + ' (2-0)';
    tracker: Tracker = new Tracker();
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

    players: Array<any> = [
        {
            'id': 1,
            'name': 'Vulajin',
            'preferredName': 'Vulajin',
            'seed': null
        },
        {
			'id': 2,
			'name': 'Terra21',
			'preferredName': 'Terra',
			'seed': null
        },
        {
			'id': 3,
			'name': 'eikocastsholy',
			'preferredName': 'Eiko',
			'seed': null
        },
        {
			'id': 4,
			'name': 'Skulblaka17',
			'preferredName': 'Skulblaka',
			'seed': null
        },
        {
			'id': 5,
			'name': 'du_raziel',
			'preferredName': 'Raziel',
			'seed': null
		},
		{
			'id': 6,
			'name': 'sigmasin',
			'preferredName': 'sigma',
			'seed': null
		},
		{
			'id': 7,
			'name': 'Cleanfel',
			'preferredName': 'Cleanfel',
			'seed': null
		},
		{
			'id': 8,
			'name': 'qusteka',
			'preferredName': 'questeka',
			'seed': null
		},
		{
			'id': 9,
			'name': 'jhobz296',
			'preferredName': 'JHobz',
			'seed': null
		},
		{
			'id': 10,
			'name': 'RebelWatt',
			'preferredName': 'Rebel',
			'seed': null
		},
		{
			'id': 11,
			'name': 'TheRooseIsLoose89',
			'preferredName': 'Roose',
			'seed': null
		},
		{
			'id': 12,
			'name': 'Covert_Muffin',
			'preferredName': 'CovertMuffin',
			'seed': null
		},
		{
			'id': 13,
			'name': 'oshiimine',
			'preferredName': 'oshiimine',
			'seed': null
		},
		{
			'id': 14,
			'name': 'shedd_',
			'preferredName': 'shedd',
			'seed': null
		},
		{
			'id': 15,
			'name': 'Grimelios',
			'preferredName': 'Grimelios',
			'seed': null
		},
		{
			'id': 16,
			'name': 'roryrai',
			'preferredName': 'roryrai',
			'seed': null
		},
		{
			'id': 17,
			'name': 'Synyadriel',
			'preferredName': 'Synyadriel',
			'seed': null
		},
		{
			'id': 18,
			'name': 'TAS_Snoop',
			'preferredName': 'Snoopy',
			'seed': null
		},
		{
			'id': 19,
			'name': 'TheFlyingMarlin',
			'preferredName': 'TheFlyingMarlin',
			'seed': null
		},
		{
			'id': 20,
			'name': 'nfnite',
			'preferredName': 'nfnite',
			'seed': null
		},
		{
			'id': 21,
			'name': 'Phant_TV',
			'preferredName': 'Phant',
			'seed': null
		},
		{
			'id': 22,
			'name': 'nfnite',
			'preferredName': 'nfnite',
			'seed': null
		},
		{
			'id': 23,
			'name': 'M3atShield',
			'preferredName': 'MeatShield',
			'seed': null
		},
		{
			'id': 24,
			'name': 'Osey889',
			'preferredName': 'Osey',
			'seed': null
		},
		{
			'id': 25,
			'name': 'trojandude12',
			'preferredName': 'trojandude',
			'seed': null
		},
		{
			'id': 26,
			'name': 'cutieroo1',
			'preferredName': 'Cutieroo',
			'seed': null
		},
		{
			'id': 27,
			'name': 'SmashyLe',
			'preferredName': 'Smashy',
			'seed': null
		},
		{
			'id': 28,
			'name': 'MeldonTaragorn',
			'preferredName': 'Meldon',
			'seed': null
		},
      ];
    
      teams: Array<any> = [
        {
			'id': 1,
			'name': 'TBD',
			'p1Id': 1,
			'p2Id': 21,
			'seed': null
        },
		{
			'id': 3,
			'name': 'Team Polarity Shift',
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
			'name': 'Team Smasharoo',
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
			'name': 'Team Skillless',
			'p1Id': 11,
			'p2Id': 27,
			'seed': null
		},
		{
			'id': 9,
			'name': 'Team City Escape',
			'p1Id': 25,
			'p2Id': 26,
			'seed': null
		},
	];
}