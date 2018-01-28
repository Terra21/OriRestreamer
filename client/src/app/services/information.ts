import { Tracker } from './tracker';

export class Information {
    seed: string = 'testmatchterra';

    player1: string = 'TheRooseIsLoose89';
    player2: string = 'Shedd';
    player1_twitch: string = 'TheRooseIsLoose89';
    player2_twitch: string = 'Shedd_';
    player1_timerVisible: boolean = false;
    player2_timerVisible: boolean = false;
    currentAudioOnPlayer: number = 1;
    commentators: string = 'MeldonTaragon, CovertMuffin';
    matchType: string = 'Exhibition';
    background: string = 'ginso'
    tracker: Tracker = new Tracker();
}