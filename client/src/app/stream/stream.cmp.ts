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
        this.$timer1.unsubscribe();
        this.$timer2.unsubscribe();
        this.ticks1 = "0:00:00";
        this.ticks2 = "0:00:00";
      }
      else {
        this.$timer1 = this.timer1.subscribe((ticks: number) => {
          this.ticks1 = moment().startOf('day').seconds(ticks).format('H:mm:ss');
        });
        this.$timer2 = this.timer2.subscribe((ticks: number) => {
          this.ticks2 = moment().startOf('day').seconds(ticks).format('H:mm:ss');
        });
      }
    }.bind(this));

    this.socket.on('timer1', function(finished: boolean) {
      if(!finished) {
        this.$timer1.unsubscribe();
        this.ticks1 = "0:00:00";
        console.log('not finished 1');
      }
      else {
        this.$timer1.unsubscribe();
        console.log('finished 1');
      }
    }.bind(this));

    this.socket.on('timer2', function(finished: boolean) {
      if(!finished) {
        this.$timer2.unsubscribe();
        this.ticks2 = "0:00:00";
        console.log('not finished 2');
      }
      else {
        this.$timer2.unsubscribe();
        console.log('finished 2');
      }
    }.bind(this));
  }

  ticks1: string = "0:00:00";
  ticks2: string = "0:00:00";
  public nameTimer: Observable<number> = Observable.timer(0, 1000);
  public timer1: Observable<number> = Observable.timer(0, 1000);
  public timer2: Observable<number> = Observable.timer(0, 1000);
  private $timer1: Subscription;
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
