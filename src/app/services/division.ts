import { Match } from './match';

export class Division {
	matches: Match[] = new Array<Match>();
	name: string = '';

    get hasWinnersPrelim() { return this.matches.length == 12 }
    get hasLosersPrelim() { return this.matches.length == 11 }
}
