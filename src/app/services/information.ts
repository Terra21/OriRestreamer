import { Tracker } from './tracker';

export class Information {
    seed: string = null;

    player1: string = 'UncleRonny';
    player2: string = 'Willson';
    player1_twitch: string = 'UncleRonny';
    player2_twitch: string = 'Willson';
    player1_seed: string = '2';
    player2_seed: string = '3';
    player1_timerVisible: boolean = false;
    player2_timerVisible: boolean = false;
    player1_finishTime: string = '0:00:00';
    player2_finishTime: string = '0:00:00';
    player1_stats: number = 0;
    player2_stats: number = 0;
    currentAudioOnPlayer: number = 1;
    commentators: string = '';
    background: string = 'fil';
    groupName: string = 'Fil';
    matchType: string = this.groupName + ' Division';
    tracker: Tracker = new Tracker();
    zoomBracket: boolean = false;
    bestOf: number = 5;
    randomizer: boolean = false;
    player1_winCount: number = 0;
    player2_winCount: number = 0;
}