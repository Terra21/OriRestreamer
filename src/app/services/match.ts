export class Match {
    constructor(name: string = "",
                friendlyMatchName: string = "",
                round: string = "",
				player1_seed: string = "",
                player2_seed: string = "",
                player1: string = "",
                player2: string = "",
                player1_result: string = "",
                player2_result: string = ""){
        this.name = name;
        this.friendlyMatchName = friendlyMatchName;
		this.round = round;
        this.player1 = player1;
        this.player2 = player2;
        this.player1_seed = player1_seed;
        this.player2_seed = player2_seed;
        this.player1_result = player1_result;
        this.player2_result = player2_result;

        if(round !== "pre")
            this.winner = player1_result === "2" ? player1 : player2_result === "2" ? player2 : null;
        else
            this.winner = player1_result === "1" ? player1 : player2_result === "1" ? player2 : null;

        if(this.player1_seed != "" && this.player2_seed != "" && this.player1_result == "")
            this.player1_result = "0";

        if(this.player2_seed != "" && this.player1_seed != "" && this.player2_result == "")
            this.player2_result = "0";
    }

    name: string;
    friendlyMatchName: string;
	round: string;
    player1: string;
    player2: string;
    player1_seed: string;
    player2_seed: string;
    winner: string;
    player1_result: string;
    player2_result: string;
}
