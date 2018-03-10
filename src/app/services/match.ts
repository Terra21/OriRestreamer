export class Match {
    constructor(name: string = "",
				round: string = "",
				player1_seed: string = "",
                player2_seed: string = "",
                player1: string = "",
                player2: string = "",
                player1_result: string = "",
                player2_result: string = ""){
		this.name = name;
		this.round = round;
        this.player1 = this.getPlayerName(player1);
        this.player2 = this.getPlayerName(player2);
        this.player1_seed = player1_seed;
        this.player2_seed = player2_seed;
        this.player1_result = isNaN(parseInt(player1_result)) ? 0 : parseInt(player1_result);
        this.player2_result = isNaN(parseInt(player2_result)) ? 0 : parseInt(player2_result);
    }

	name: string;
	round: string;
    player1: string;
    player2: string;
    player1_seed: string;
    player2_seed: string;
    player1_result: number;
    player2_result: number;

    get player1Winner() {
        return this.player1_result > this.player2_result;
    }

    get player2Winner(){
        return this.player2_result > this.player1_result;
    }

    private getPlayerName(text: string): string {
        return text;
        //Used to filter out Winner 5 / Loser 9 ect
        //return (~ text.indexOf('Winner') || ~ text.indexOf('Loser') ? "" : text)
    }
}
