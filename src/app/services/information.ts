import { Tracker } from './tracker';

export class Information {
    seed: string = null;

    player1Id: number = 1;
    player2Id: number = 2;
    player3Id: number = 1;
    player4Id: number = 1;
    player1_timerVisible: boolean = false;
    player2_timerVisible: boolean = false;
    player1_finishTime: string = '0:00:00';
    player2_finishTime: string = '0:00:00';
    player1_stats: number = 0;
    player2_stats: number = 0;
    currentAudioOnPlayer: number = 1;
    commentators: string = 'Sigmasin, RooseSR';
    background: string = 'iceless';
    // groupName: string = 'Round of 32/Round of 16/Quarterfinal/Semifinal/Final';
    groupName: string = 'Round of 32';
	matchType: string = this.groupName;
    zoomBracket: boolean = false;
    bestOf: number = 3;
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
      ];
}