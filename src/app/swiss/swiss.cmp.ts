import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
import { environment } from '../../environments/environment';
import io from 'socket.io-client';
import * as $ from 'jquery';
import { Socket } from 'net';

@Component({
	templateUrl: './swiss.html',
	styleUrls: ['./swiss.css']
})

export class SwissCMP {
	constructor() { }

	ngOnInit(){
		this.singlesMatchups.push({ p1: null, p2: null });
		this.doublesMatchups.push({ p1: null, p2: null });

		this.socket.on('data', function(data: Information){
			if(data.seed !== this.seed)
				return;

			this.vm = data;

		}.bind(this));

		this.socket.on('swissPlayerSelected', function(data: Information, id: number){
			if(data.seed !== this.seed)
				return;

			let player = this.getPlayerById(id);

			if(this.singlesMatchups[this.singlesMatchups.length - 1].p1 == null) {
				this.singlesMatchups[this.singlesMatchups.length - 1].p1 = player.name;
			}
			else if(this.singlesMatchups[this.singlesMatchups.length - 1].p2 == null) {
				this.singlesMatchups[this.singlesMatchups.length - 1].p2 = player.name;
				this.singlesMatchups.push({ p1: null, p2: null });
			}
		}.bind(this));

		this.socket.on('swissTeamSelected', function(data: Information, id: number){
			if(data.seed !== this.seed)
				return;

			let team = this.getTeamById(id);

			if(this.doublesMatchups[this.doublesMatchups.length - 1].p1 == null) {
				this.doublesMatchups[this.doublesMatchups.length - 1].p1 = team.name;
			}
			else if(this.doublesMatchups[this.doublesMatchups.length - 1].p2 == null) {
				this.doublesMatchups[this.doublesMatchups.length - 1].p2 = team.name;
				this.doublesMatchups.push({ p1: null, p2: null });
			}
		}.bind(this));
	}
	
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

	public vm: Information = new Information();

	socket: any = io.connect(environment.socketPath);
	seed: string = window.location.href.split('=')[1];

	singlesMatchups: Array<any> = new Array<any>();
	doublesMatchups: Array<any> = new Array<any>();
}
