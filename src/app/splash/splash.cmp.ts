import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
import { environment } from '../../environments/environment';
import io from 'socket.io-client';
import * as $ from 'jquery';
import { Socket } from 'net';

@Component({
	templateUrl: './splash.html',
	styleUrls: ['./splash.css']
})

export class SplashCMP {
	constructor() { }

	ngOnInit(){
		this.socket.on('data', function(data: Information){
			if(data.seed !== this.seed)
				return;

			this.vm = data;

			//Singles
			if(this.vm.tournament == 1) {
				this.opponent1 = this.vm.player1;
				this.opponent2 = this.vm.player2;
			} 
			//Doubles
			else if(this.vm.tournament == 2 ) {
				let team1 = this.getTeamById(this.vm.team1Id);
				this.opponent1 = team1.name + ' ('+ this.getPlayerById(team1.p1Id) + ', ' + this.getPlayerById(team1.p2Id) + ')';

				let team2 = this.getTeamById(this.vm.team2Id);
				this.opponent2 = team2.name;
			}

			this.debug();
		}.bind(this));

		this.debug();
	}

	debug() {
		this.opponent1 = this.vm.player1;
		this.opponent2 = this.vm.player2;
	}
	
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

	public vm: Information = new Information();

	socket: any = io.connect(environment.socketPath);
	seed: string = window.location.href.split('=')[1];
	opponent1: string;
	opponent2: string;
	opponent1Seed: string;
	opponent2Seed: string;
	players1: string;
	players2: string;
}
