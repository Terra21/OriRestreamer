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
      if(data.seed !== this.seed)
        return;

      this.vm = data;

      this.checkIfBothPlayersFinished();

      this.p1SpritFlameSkill = data.tracker["t1-skill-sein"];
      this.p1WallJumpSkill = data.tracker["t1-skill-walljump"];
      this.p1CFlameSkill = data.tracker["t1-skill-cflame"];
      this.p1DJumpSkill = data.tracker["t1-skill-djump"];
      this.p1DBashSkill = data.tracker["t1-skill-bash"];
      this.p1StompSkill = data.tracker["t1-skill-stomp"];
      this.p1GlideSkill = data.tracker["t1-skill-feather"];
      this.p1ClimbSkill = data.tracker["t1-skill-climb"];
      this.p1CJumpSkill = data.tracker["t1-skill-cjump"];
      this.p1GrenadeSkill = data.tracker["t1-skill-grenade"];
      this.p1DashSkill = data.tracker["t1-skill-dash"];

      this.p2SpritFlameSkill = data.tracker["t2-skill-sein"];
      this.p2WallJumpSkill = data.tracker["t2-skill-walljump"];
      this.p2CFlameSkill = data.tracker["t2-skill-cflame"];
      this.p2DJumpSkill = data.tracker["t2-skill-djump"];
      this.p2DBashSkill = data.tracker["t2-skill-bash"];
      this.p2StompSkill = data.tracker["t2-skill-stomp"];
      this.p2GlideSkill = data.tracker["t2-skill-feather"];
      this.p2ClimbSkill = data.tracker["t2-skill-climb"];
      this.p2CJumpSkill = data.tracker["t2-skill-cjump"];
      this.p2GrenadeSkill = data.tracker["t2-skill-grenade"];
      this.p2DashSkill = data.tracker["t2-skill-dash"];
    }.bind(this));

    this.socket.on('timer', function(start: boolean, data: Information){
      if(this.vm.seed !== this.seed)
        return;

      this.player1Finished = false;
      this.player2Finished = false;

      if(!start) {
        clearInterval(this.timerInterval);
        this.ticks = "0:00:00";
		$('.timer-main').addClass('paused');
        $(".timer-finish").removeClass('winner timer-animate');
      }
      else {
        var seconds = new Date().getTime(), last = seconds;
		$('.timer-main').removeClass('paused');
        this.timerInterval = setInterval(function(){
          var now = new Date().getTime();
          last = now;
          this.ticks = moment().startOf('day').seconds((now - seconds) / 1000).format('H:mm:ss');
        }.bind(this), 100);
      }
    }.bind(this));

    this.socket.on('timer1', function(finished: boolean, data: Information) {
      if(this.vm.seed !== this.seed)
        return;
      this.player1Finished = finished;
    }.bind(this));

    this.socket.on('timer2', function(finished: boolean, data: Information) {
      if(this.vm.seed !== this.seed)
        return;
      this.player2Finished = finished;
    }.bind(this));
  }

  checkIfBothPlayersFinished(){
    if(this.player1Finished && this.player2Finished){
       clearInterval(this.timerInterval);
	  $('.timer-main').addClass('paused');
    }
    else if (this.player1Finished && !this.player2Finished){
      $(".timer-finish.p1").addClass('winner');
    }
    else if(!this.player1Finished && this.player2Finished){
      $(".timer-finish.p2").addClass('winner');
    }
    if(this.player1Finished){
      $(".timer-finish.p1").addClass('timer-animate');

      if(this.player2Finished && $(".timer-finish.p2").hasClass('winner')){
        this.ticks = this.vm.player1_finishTime;
      }
    }

    if(this.player2Finished){
      $(".timer-finish.p2").addClass('timer-animate');

      if(this.player1Finished && $(".timer-finish.p1").hasClass('winner')){
        this.ticks = this.vm.player2_finishTime;
      }
    }
  }

  player1Finished = false;
  player2Finished = false;
  timerInterval: any;
  seed: string = window.location.href.split('=')[1];

  ticks: string = "0:00:00";
  public timer: any;
  public vm: Information = new Information();
  socket: any = io.connect('http://localhost:3000/');

  p1SpritFlameSkill: boolean;
  p1WallJumpSkill: boolean;
  p1CFlameSkill: boolean;
  p1DJumpSkill: boolean;
  p1DBashSkill: boolean;
  p1StompSkill: boolean;
  p1GlideSkill: boolean;
  p1ClimbSkill: boolean;
  p1CJumpSkill: boolean;
  p1GrenadeSkill: boolean;
  p1DashSkill: boolean;

  p2SpritFlameSkill: boolean;
  p2WallJumpSkill: boolean;
  p2CFlameSkill: boolean;
  p2DJumpSkill: boolean;
  p2DBashSkill: boolean;
  p2StompSkill: boolean;
  p2GlideSkill: boolean;
  p2ClimbSkill: boolean;
  p2CJumpSkill: boolean;
  p2GrenadeSkill: boolean;
  p2DashSkill: boolean;
}
