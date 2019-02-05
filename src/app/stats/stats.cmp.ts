import { Component } from '@angular/core';
import { Information } from '../services/information';
import { BaseCMP } from '../core/base.cmp';

@Component({
  templateUrl: './stats.html',
  styleUrls: ['./stats.css']
})

export class StatsCMP extends BaseCMP {
	constructor() {
		super();
	}

	statsUrl: string = "1LAvyCLpxzfN7KTfy0aeNeSmHSUlZP_tnL8tW_XvJVWg/values/Stream Stats!";
	player1Stats: any;
	player2Stats: any;

	ngOnInit() {
		this.socket.on('data', function(data: Information) {
			if(data.seed !== this.seed)
				return;

			this.vm = data;
			this.getData();
		}.bind(this));

		this.getData();
	}

	getData() {
		this.player1 = this.getPlayerById(this.vm.player1Id);
		this.player2 = this.getPlayerById(this.vm.player2Id);
		this.getGoogleSheet(this.statsUrl, this.player1.statsStartColumn + ':' + this.player1.statsEndColumn)
			.subscribe(result => {
				console.log(result.values[0]);
				this.player1Stats = result.values[0];
		});

		this.getGoogleSheet(this.statsUrl, this.player2.statsStartColumn + ':' + this.player2.statsEndColumn)
			.subscribe(result => {
				this.player2Stats = result.values[0];
		});
	}
}