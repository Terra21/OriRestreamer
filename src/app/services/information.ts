import { Tracker } from './tracker';

export class Information {
    seed: string = null;

    player1: string = 'TheRooseIsLoose';
    player2: string = 'Terra';
    player1_twitch: string = 'TheRooseIsLoose89';
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
    commentators: string = 'Sigmasin, JHobz296';
    background: string = 'iceless';
    groupName: string = 'Swiss - Round 2';
    matchType: string = this.groupName + ' (2-0)';
    tracker: Tracker = new Tracker();
    zoomBracket: boolean = false;
    bestOf: number = 1;
    tournament: number = 1;
    randomizer: boolean = false;
    player1_winCount: number = 0;
    player2_winCount: number = 0;

    team1Id: number = 1;
    team2Id: number = 2;



    players: Array<any> = [
        {
            'id': 1,
            'name': 'TheRooseIsLoose89',
            'preferredName': 'TheRooseIsLoose',
            'seed': '20'
        },
        {
          'id': 2,
          'name': 'Terra21',
          'preferredName': 'Terra',
          'seed': '19'
        },
      ];
    
      teams: Array<any> = [
        {
          'id': 1,
          'name': 'Team Zote',
          'p1Id': 1,
          'p2Id': 2,
          'seed': '20'
        },
        {
          'id': 2,
          'name': 'Team Polarity Shift',
          'p1Id': 2,
          'p2Id': 1,
          'seed': '20'
        }];
}