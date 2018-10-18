import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
import { Player } from '../services/player.enum';
import { environment } from '../../environments/environment';
import * as moment from 'moment';
import * as $ from 'jquery';
import io from 'socket.io-client';
import { Socket } from 'net';


@Component({
		templateUrl: './stream-4way.html',
		styleUrls: ['./stream-4way.css']
	})
	
export class Stream4WayCMP {
	constructor() { }

	ngOnInit() {
		this.setDefaults();
		this.socket.on('data', function(data: Information){
			if(data.seed !== this.seed)
				return;

		this.vm = data;

		this.p1FirstWin = this.vm.player1_winCount >= 1;
		this.p1SecondWin = this.vm.player1_winCount >= 2;
		this.p1ThirdWin = this.vm.player1_winCount >= 3;

		this.p2FirstWin = this.vm.player2_winCount >= 1;
		this.p2SecondWin = this.vm.player2_winCount >= 2;
		this.p2ThirdWin = this.vm.player2_winCount >= 3;

		let team1 = this.getTeamById(this.vm.team1Id);
		this.team1 = team1;

		this.player1 = this.getPlayerById(team1.p1Id);
		this.player2 = this.getPlayerById(team1.p2Id);

		let team2 = this.getTeamById(this.vm.team2Id);
		this.team2 = team2;

		this.player3 = this.getPlayerById(team2.p1Id);
		this.player4 = this.getPlayerById(team2.p2Id);

		if(this.vm.team1_FinishTime > 0)
			this.team1FinishTime = moment().startOf('day').seconds((data.team1_FinishTime)).format('H:mm:ss');

		if(this.vm.team2_FinishTime > 0)
			this.team2FinishTime = moment().startOf('day').seconds((data.team2_FinishTime)).format('H:mm:ss');

			console.log(data.team1_FinishTime);
			console.log(this.team1FinishTime);

		}.bind(this));
	}

	setDefaults(){
		this.team1 = this.getTeamById(this.vm.team1Id);
		this.team2 = this.getTeamById(this.vm.team2Id);

		this.player1 = this.getPlayerById(this.team1.p1Id);
		this.player2 = this.getPlayerById(this.team1.p2Id);

		this.player3 = this.getPlayerById(this.team2.p1Id);
		this.player4 = this.getPlayerById(this.team2.p2Id);
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

	getTeamById(id: number) {
			return  jQuery.grep(this.vm.teams, function(n: any, i) {
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