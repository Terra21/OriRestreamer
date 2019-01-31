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
			this.setData();
		}.bind(this));

		this.setData();
	}

	setData() {
		this.player1 = this.getPlayerById(this.vm.player1Id);
		this.player2 = this.getPlayerById(this.vm.player2Id);
		this.player3 = this.getPlayerById(this.vm.player3Id);
		this.player4 = this.getPlayerById(this.vm.player4Id);
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
	player1: any;
	player2: any;
	player3: any;
	player4: any;
}
