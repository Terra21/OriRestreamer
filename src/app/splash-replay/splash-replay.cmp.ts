import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
import { environment } from '../../environments/environment';
import io from 'socket.io-client';
import * as $ from 'jquery';
import { Socket } from 'net';

@Component({
  templateUrl: './splash-replay.html',
  styleUrls: ['./splash-replay.css']
})

export class SplashReplayCMP {
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
  }

  public vm: Information = new Information();

  socket: any = io.connect(environment.socketPath);
  seed: string = window.location.href.split('=')[1];

  p1FirstWin: boolean;
  p1SecondWin: boolean;
  p1ThirdWin: boolean;

  p2FirstWin: boolean;
  p2SecondWin: boolean;
  p2ThirdWin: boolean;
}
