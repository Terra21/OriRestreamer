import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
import { Player } from '../services/player.enum';
import * as moment from 'moment';
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
      this.vm = data;
      this.sein = data.tracker["t1-skill-sein"];
      this.wallJumpSkill = data.tracker["t1-skill-walljump"];
      this.dJumpSkill = data.tracker["t1-skill-djump"];
    }.bind(this));

    this.socket.on('timer', function(start: boolean){
      if(!start) {
        clearInterval(this.player1Interval);
        clearInterval(this.player2Interval);
        this.ticks1 = "0:00:00";
        this.ticks2 = "0:00:00";
      }
      else {
        var seconds = new Date().getTime(), last = seconds;
        this.player1Interval = setInterval(function(){
          var now = new Date().getTime();
          last = now;
          this.ticks1 = moment().startOf('day').seconds((now - seconds) / 1000).format('H:mm:ss');
        }.bind(this), 100);

        this.player2Interval = setInterval(function(){
          var now = new Date().getTime();
          last = now;
          this.ticks2 = moment().startOf('day').seconds((now - seconds) / 1000).format('H:mm:ss');
        }.bind(this), 100);
      }
    }.bind(this));

    this.socket.on('timer1', function(finished: boolean) {
      if(!finished) {
      }
      else {
        clearInterval(this.player1Interval);
      }
    }.bind(this));

    this.socket.on('timer2', function(finished: boolean) {
      if(!finished) {
      }
      else {
        clearInterval(this.player2Interval);
      }
    }.bind(this));
  }

  ticks1: string = "0:00:00";
  ticks2: string = "0:00:00";
  player1Interval: any;
  player2Interval: any;
  public nameTimer: Observable<number> = Observable.timer(0, 1000);
  public timer2: Observable<number> = Observable.timer(0, 1000);
  private $timer2: Subscription;
  public vm: Information = new Information();
  socket: any = io.connect('https://ori-restreamer.azurewebsites.net/');

  sein: boolean;
  wallJumpSkill: boolean;
  dashSkill: boolean;
  dJumpSkill: boolean;
  bashSkill: boolean;
  stompSkill: boolean;
  cFlameSkill: boolean;
  glideSkill: boolean;
  cJumpSkill: boolean;
  climbSkill: boolean;
  grandeSkill: boolean;
}
