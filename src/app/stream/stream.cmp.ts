import { Component } from '@angular/core';
import { Information } from '../services/information';
import * as $ from 'jquery';
import { BaseCMP } from '../core/base.cmp';

@Component({
  templateUrl: './stream.html',
  styleUrls: ['./stream.css']
})

export class StreamCMP extends BaseCMP {
  	constructor() {
	  	super();
   	}

	ngOnInit(){
		this.player1 = this.getPlayerById(this.vm.player1Id);
		this.player2 = this.getPlayerById(this.vm.player2Id);

		this.socket.on('data', function(data: Information){
			if(data.seed !== this.seed)
				return;

			this.vm = data;
			this.getData();
		}.bind(this));

		this.getData();

		this.socket.on('p1Stats', function(data: Information, text: string){
			if(data.seed !== this.seed)
				return;

			this.p1StatsText = text;
			let statbox = $('.stat-flyin.p1').addClass('show');
			setTimeout(() => statbox.removeClass('show'), 8000);
		}.bind(this));

		this.socket.on('p2Stats', function(data: Information, text: string){
			if(data.seed !== this.seed)
				return;

			this.p2StatsText = text;
			let statbox = $('.stat-flyin.p2').addClass('show');
			setTimeout(() => statbox.removeClass('show'), 8000);
		}.bind(this));
	}

	getData() {
		this.p1FirstWin = this.vm.player1_winCount >= 1;
		this.p1SecondWin = this.vm.player1_winCount >= 2;
		this.p1ThirdWin = this.vm.player1_winCount >= 3;

		this.p2FirstWin = this.vm.player2_winCount >= 1;
		this.p2SecondWin = this.vm.player2_winCount >= 2;
		this.p2ThirdWin = this.vm.player2_winCount >= 3;
		this.player1 = this.getPlayerById(this.vm.player1Id);
		this.player2 = this.getPlayerById(this.vm.player2Id);

		this.p1WinCount = this.vm.player1_winCount;
		this.p2WinCount = this.vm.player2_winCount;

		this.vm.currentSeries.forEach(function(m) {
			if(m.winner == 1)
				this.p1WinCount++;
			if(m.winner == 2)
				this.p2WinCount++;
		}.bind(this));

		this.p1GamesLeft = (3 - this.p1WinCount);
		this.p2GamesLeft = (3 - this.p2WinCount);
	}

	p1First: boolean;
	p2First: boolean;

	p1StatsText: string;
	p2StatsText: string;

	p1FirstWin: boolean;
	p1SecondWin: boolean;
	p1ThirdWin: boolean;

	p2FirstWin: boolean;
	p2SecondWin: boolean;
	p2ThirdWin: boolean;

	p1WinCount: number;
	p2WinCount: number;

	p1GamesLeft: number;
	p2GamesLeft: number;
}