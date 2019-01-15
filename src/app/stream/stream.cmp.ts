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
  templateUrl: './stream.html',
  styleUrls: ['./stream.css']
})

export class StreamCMP {
  constructor() { }

  ngOnInit(){
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

    }.bind(this));

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

  seed: string = window.location.href.split('=')[1];

  public vm: Information = new Information();
  socket: any = io.connect(environment.socketPath);

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
