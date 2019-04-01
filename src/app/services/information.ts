export class Information {
    seed: string = null;

    player1Id: number = 4;
    player2Id: number = 5;
    player3Id: number = 5;
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
	groupName: string = 'Qualifier/Quarterfinal/Semifinal/Grand Final';
	matchType: string = this.groupName;
    zoomBracket: boolean = false;
    bestOf: number = 3;
	tournament: number = 2;
	bracket: string = "Top 8";
    randomizer: boolean = false;
    player1_winCount: number = 0;
	player2_winCount: number = 0;

	soloWinner: number = 0;

	currentSeries: Array<any> = [];

    players: Array<any> = [
        {
			'id': 4,
			'name': 'shedd_bird',
			'preferredName': 'shedd',
			'allSkills': true,
			'allCells': false,
			'seed': '3',
			'statsStartColumn': 'B7',
			'statsEndColumn': 'K7'
		},
		{
			'id': 5,
			'name': 'eviona2',
			'preferredName': 'Eviona',
			'allSkills': true,
			'allCells': false,
			'seed': '4',
			'statsStartColumn': 'B9',
			'statsEndColumn': 'K9'
		},
		{
			'id': 6,
			'name': 'J_Halcyon',
			'preferredName': 'Hal',
			'allSkills': true,
			'allCells': false,
			'seed': '8',
			'statsStartColumn': 'B10',
			'statsEndColumn': 'K10'
        },
        {
			'id': 11,
			'name': 'UncleRonny',
			'preferredName': 'Ronny',
			'allSkills': true,
			'allCells': false,
			'seed': '1',
			'statsStartColumn': 'B8',
			'statsEndColumn': 'K8'
		},
        {
			'id': 13,
			'name': 'nfnite',
			'preferredName': 'nfnite',
			'allSkills': true,
			'allCells': false,
			'seed': '7',
			'statsStartColumn': 'B6',
			'statsEndColumn': 'K6'
		},
        {
			'id': 32,
			'name': 'Lusther',
			'preferredName': 'LusTher',
			'allSkills': true,
			'allCells': false,
			'seed': '5',
			'statsStartColumn': 'B4',
			'statsEndColumn': 'K4'
		},
        {
			'id': 34,
			'name': 'Mattermonkey',
			'preferredName': 'Mattermonkey',
			'allSkills': true,
			'allCells': false,
			'seed': '6',
			'statsStartColumn': 'B5',
			'statsEndColumn': 'K5'
		},
        {
			'id': 50,
			'name': 'IMRaziel',
			'preferredName': 'Raziel',
			'allSkills': true,
			'allCells': false,
			'seed': '2',
			'statsStartColumn': 'B3',
			'statsEndColumn': 'K3'
		}
      ];
}