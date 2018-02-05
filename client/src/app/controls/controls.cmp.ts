import { Component, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
import * as moment from 'moment';
import * as $ from 'jquery';
import io from 'socket.io-client';

@Component({
  templateUrl: './controls.html',
  styleUrls: ['./controls.css']
})
export class ControlsCMP {
  constructor() {} 

  ngOnInit(){
    this.socket.on('data', function(data: Information){
      if(data.seed !== this.seed)
        return;

      this.vm = data;
    }.bind(this));

    this.socket.on('timer', function(start: boolean, data: Information){
      if(data.seed !== this.seed)
        return;

      if(!start) {
        clearInterval(this.player1Interval);
        clearInterval(this.player2Interval);
        this.ticks1 = "0:00:00";
        this.ticks2 = "0:00:00";
      }
      else {
        var seconds = new Date().getTime(), last = seconds;
        this.player1Interval = setInterval(function(){
          if(this.timer1Paused)
            return;

          var now = new Date().getTime();
          last = now;
          this.ticks1 = moment().startOf('day').seconds((now - seconds) / 1000).format('H:mm:ss');
        }.bind(this), 100);

        this.player2Interval = setInterval(function(){
          if(this.timer2Paused)
            return;

          var now = new Date().getTime();
          last = now;
          this.ticks2 = moment().startOf('day').seconds((now - seconds) / 1000).format('H:mm:ss');
        }.bind(this), 100);
      }
    }.bind(this));

    this.socket.on('timer1', function(finished: boolean, data: Information) {
      if(data.seed !== this.seed)
        return;

      if(!finished) {
      }
      else {
        this._vm.player1_finishTime = this.ticks1;
        this.socket.emit('data', this.vm);
        clearInterval(this.player1Interval);
      }
    }.bind(this));

    this.socket.on('timer2', function(finished: boolean, data: Information) {
      if(data.seed !== this.seed)
        return;

      if(!finished) {
      } 
      else {
        this._vm.player2_finishTime = this.ticks2;
        this.socket.emit('data', this.vm);
        clearInterval(this.player2Interval);
      }
    }.bind(this));

    console.log(this.players);
  }

  playersList: any;

  timerStarted: boolean = false;
  timer1Paused: boolean = false;
  timer2Paused: boolean = false;
  hasPlayer1Finished: boolean = false;
  hasPlayer2Finished: boolean = false;

  canStartTimer: boolean = !this.timer1Paused && !this.timer2Paused && !this.timerStarted;

  ticks1: string = "0:00:00";
  ticks2: string = "0:00:00";
  player1Interval: any;
  player2Interval: any;
  public nameTimer: Observable<number> = Observable.timer(0, 1000);
  public timer2: Observable<number> = Observable.timer(0, 1000);
  private $timer2: Subscription;
  socket: any = io.connect('http://localhost:3000/');
  private isLinked: boolean = false;
  linkedInterval: any;

  setBackground(background: string) {
    this._vm.background = background;
  }

  linkTracker() {
    this.isLinked = true;
    this.linkedInterval = setInterval(function(){
      $.ajax({
        url: "https://www.meldontaragon.org/ori/testing/allskills/server.php?match=" + this._vm.seed,
        dataType: "json",
        error: function(response) {
          console.log(response);
        },
        success: function( response: any ) {
            this._vm.tracker = JSON.parse(JSON.stringify(response));
            this.socket.emit('data', this.vm);
        }.bind(this)
      });
    }.bind(this), 1000);
  }

  unlink(){
    this.isLinked = false;
    clearInterval(this.linkedInterval);
  }
  
  start() {
    if(this.timer1Paused){
      clearInterval(this.player1Interval);
      this.timer1Paused = false;

      var timer1 = this.player1Interval;
      var ticks1Array = this.ticks1.split(":");

      var newTicksSecondsHours = (parseInt(ticks1Array[0]) * 3600);
      var newTicksSecondsMinutes = (parseInt(ticks1Array[1]) * 60); 
      var newTicksSeconds = parseInt(ticks1Array[2]) + newTicksSecondsHours + newTicksSecondsMinutes;
      var newP1TimerTicks = moment().startOf('day').seconds(newTicksSeconds).format('H:mm:ss');

      var seconds = new Date().getTime() - (newTicksSeconds * 1000);

      this.player1Interval = setInterval(function(){
        if(this.timer1Paused)
          return;

          var now = new Date().getTime();

        this.ticks1 = moment().startOf('day').seconds((now - seconds) / 1000).format('H:mm:ss');
      }.bind(this), 100);

      return;
    }

    if(this.timer2Paused){
      clearInterval(this.player2Interval);
      this.timer2Paused = false;

      var timer2 = this.player2Interval;
      var ticks2Array = this.ticks2.split(":");

      var newTicksSecondsHours = (parseInt(ticks2Array[0]) * 3600);
      var newTicksSecondsMinutes = (parseInt(ticks2Array[1]) * 60); 
      var newTicksSeconds = parseInt(ticks2Array[2]) + newTicksSecondsHours + newTicksSecondsMinutes;
      var newP2TimerTicks = moment().startOf('day').seconds(newTicksSeconds).format('H:mm:ss');

      var seconds = new Date().getTime() - (newTicksSeconds * 1000);

      this.player2Interval = setInterval(function(){
        if(this.timer2Paused)
          return;

          var now = new Date().getTime();

        this.ticks2 = moment().startOf('day').seconds((now - seconds) / 1000).format('H:mm:ss');
      }.bind(this), 100);

      return;
    }

    if(this.hasPlayer1Finished && this.hasPlayer2Finished){
      return;
    }

    if(!this.timerStarted){
      this.socket.emit('timer', true, this.vm);
    }

    this.timerStarted = true;
    this.timer1Paused = false;
    this.timer2Paused = false;
  }

  player1Paused(){
    this.timer1Paused = true;
    
  }

  player2Paused(){
    this.timer2Paused = true;
  }
    
  reset() {
    this.timerStarted = false;
    this.timer1Paused = false;
    this.timer2Paused = false;
    this.hasPlayer1Finished = false;
    this.hasPlayer2Finished = false;
    this._vm.player1_finishTime = "0:00:00";
    this._vm.player2_finishTime = "0:00:00";
    this.socket.emit('data', this.vm);
    this.socket.emit('timer', false, this.vm);
  }

  player1Finished() {
    this.hasPlayer1Finished = true;
    this.socket.emit('timer1', true, this.vm);
  }

  player2Finished() {
    this.hasPlayer2Finished = true;
    this.socket.emit('timer2', true, this.vm);
  }

  private _vm: Information = new Information();
  public get vm(): Information {
    return this._vm;
  }

  public set vm(info: Information) {
    this._vm = info;
  }
  
  public get hidePlayer1Timer(): boolean {
    return this._vm.player1_timerVisible;
  }

  public set hidePlayer1Timer(timerSelected: boolean) {
    this._vm.player1_timerVisible = timerSelected;
  }

  public get hidePlayer2Timer(): boolean {
    return this._vm.player2_timerVisible;
  }

  public set hidePlayer2Timer(timerSelected: boolean) {
    this._vm.player2_timerVisible = timerSelected;
  }

  public set matchType(matchType: string){
    this._vm.matchType = matchType;
  }

  public get matchType(): string {
    return this._vm.matchType;
  }

  public set commentators(commentators: string){
    this._vm.commentators = commentators;
  }

  public get commentators(): string {
    return this._vm.commentators;
  }

public get seed(): string {
  return this._vm.seed;
}

public set seed(seed: string){
  this._vm.seed = seed;
}

  public get p1_name(): string {
    return this._vm.player1;
  }

  public set p1_name(p1: string) {
    this._vm.player1 = p1;
  }

  public get p2_name(): string {
    return this._vm.player2;
  }

  public set p2_name(p2: string) {
    this._vm.player2 = p2;
  }

  public get p1_twitch(): string {
    return this._vm.player1_twitch;
  }

  public set p1_twitch(p1: string){
    this._vm.player1_twitch = p1;
  }

  public get p2_twitch(): string {
    return this._vm.player2_twitch;
  }

  public set p2_twitch(p2: string){
    this._vm.player2_twitch = p2;
  }

  public get p1_seed(): string {
    return this._vm.player1_seed;
  }

  public set p1_seed(p1: string){
    this._vm.player1_seed = (p1 !== "" || undefined || null) ? p1 : null;
  }

  public get p2_seed(): string {
    return this._vm.player2_seed;
  }

  public set p2_seed(p2: string){
    this._vm.player2_seed = (p2 !== "" || undefined || null) ? p2 : null;
  }


  public get p1_audio(): boolean {
    return this._vm.currentAudioOnPlayer == 1;
  }

  public set p1_audio(audioSelected: boolean) {
    this._vm.currentAudioOnPlayer = audioSelected ? 1 : this._vm.currentAudioOnPlayer;
  }

  public get p2_audio(): boolean {
    return this._vm.currentAudioOnPlayer == 2;
  }

  public set p2_audio(audioSelected: boolean) {
    this._vm.currentAudioOnPlayer = audioSelected ? 2 : this._vm.currentAudioOnPlayer;
  }

  players = [ 
    {
        "name": "Terra21",
        "startColumn": "B56",
        "endColumn": "J56"
    },
    {
        "name": "Shedd_",
        "startColumn": "B48",
        "endColumn": "J48"
    },
    {
        "name": "TheRooseIsLoose89",
        "startColumn": "B57",
        "endColumn": "J57"
    },
    {
      "name": "chicken_supreme",
      "startColumn": "B8",
      "endColumn": "J8"
  }
 ]
}
