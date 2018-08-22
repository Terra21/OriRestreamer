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
				this.team1Name = team1.name;

				this.player1Name = this.getPlayerById(team1.p1Id).name;
				this.player2Name = this.getPlayerById(team1.p2Id).name;

				let team2 = this.getTeamById(this.vm.team2Id);
				this.team2Name = team2.name;

				this.player3Name = this.getPlayerById(team2.p1Id).name;
				this.player4Name = this.getPlayerById(team2.p2Id).name;

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
}