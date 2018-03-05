import { Tracker } from './tracker';

export class Information {
    seed: string = null;

    player1: string = 'TheRooseIsLoose89';
    player2: string = 'chicken_supreme';
    player1_twitch: string = 'TheRooseIsLoose89';
    player2_twitch: string = 'chicken_supreme';
    player1_seed: string = '';
    player2_seed: string = '';
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
}