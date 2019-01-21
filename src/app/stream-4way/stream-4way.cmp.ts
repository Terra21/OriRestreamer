import { Component } from '@angular/core';
import { Information } from '../services/information';
import { environment } from '../../environments/environment';
import io from 'socket.io-client';

@Component({
		templateUrl: './stream-4way.html',
		styleUrls: ['./stream-4way.css']
	})
	
export class Stream4WayCMP {
	constructor() { }

	ngOnInit() {
		this.socket.on('data', function(data: Information){
			if(data.seed !== this.seed)
				return;

		this.vm = data;

		this.player1 = this.getPlayerById(this.vm.player1Id);
		this.player2 = this.getPlayerById(this.vm.player2Id);
		this.player3 = this.getPlayerById(this.vm.player3Id);
		this.player4 = this.getPlayerById(this.vm.player4Id);

		}.bind(this));
	}

	public vm: Information = new Information();
	socket: any = io.connect(environment.socketPath);
	seed: string = window.location.href.split('=')[1];

	team1: any;
	team2: any;

	team1FinishTime: string;
	team2FinishTime: string;

	player1: any;
	player2: any;
	player3: any;
	player4: any;

	getPlayerById(id: number) {
		return  jQuery.grep(this.vm.players, function(n: any, i) {
				return n.id == id;
		}.bind(this))[0];
	}

	get p1WinCount(){ 
		let count = 0;
		this.vm.currentSeries.forEach(function (a) {
			if(a.winner === 1)
				count++;
		});
		return count;
	}

	get p2WinCount(){ 
		let count = 0;
		this.vm.currentSeries.forEach(function (a) {
			if(a.winner === 2)
				count++;
		});
		return count;
	}
}