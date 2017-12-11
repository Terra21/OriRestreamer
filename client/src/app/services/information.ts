import { Tracker } from './tracker';

export class Information {
    player1: string = 'TheRooseIsLoose89';
    player2: string = 'Shedd';
    player1_twitch: string = 'TheRooseIsLoose89';
    player2_twitch: string = 'Shedd_';
    currentAudioOnPlayer: number = 1;
    commentators: string = 'MeldonTaragon, CovertMuffin';
    matchType: string = 'Exhibition';
    background: string = 'gumo'
    tracker: Tracker = new Tracker();
}