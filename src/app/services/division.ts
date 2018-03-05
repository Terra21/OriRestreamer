import { Match } from './match';

export class Division {
    WinnersPrelim: Match = new Match;
    LosersPrelim: Match = new Match;

    WinnersRound1_1: Match = new Match;
    WinnersRound1_2: Match = new Match;
    WinnersRound2: Match = new Match;
    WinnersFinal: Match = new Match;

    LosersRound1_1: Match = new Match;
    LosersRound1_2: Match = new Match;
    LosersLowerRound1_1: Match = new Match;
    LosersLowerRound1_2: Match = new Match;
    LosersRound2: Match = new Match;
    LosersFinal: Match = new Match;

    get hasWinnersPrelim() { return !(this.WinnersPrelim.player1 == "" || this.WinnersPrelim.player2 == "") }
    get hasLosersPrelim() { return !(this.LosersPrelim.player1 == "" || this.LosersPrelim.player2 == "") }
}
