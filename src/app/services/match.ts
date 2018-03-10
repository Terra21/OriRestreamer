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
        this.player1 = player1;
        this.player2 = player2;
        this.player1_seed = player1_seed;
        this.player2_seed = player2_seed;
        this.winner = player1_result === "W" ? player1 : player2_result === "W" ? player2 : "";
    }

	name: string;
	round: string;
    player1: string;
    player2: string;
    player1_seed: string;
    player2_seed: string;
	winner: string;
}
