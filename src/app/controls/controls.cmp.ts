import { Component, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
import { InformationService } from '../services/information.service';
import * as $ from 'jquery';

@Component({
  selector: 'controls',
  templateUrl: './controls.html',
  styleUrls: ['./controls.css']
})
export class ControlsCMP {
  constructor(public infoService: InformationService) {

  } 

  public timer: Observable<number> = Observable.timer(0, 1000);
  private $timer: Subscription; 
  timerStarted: boolean = false;
  trackerId: string = 'covertmuffinvmadinsane';

  setBackground(background: string) {
    this._vm.background = background;
    this.infoService.setInfo(this._vm);
  }

  linkTracker() {
    $.ajax({
      url: "http://www.dcmiller.org/ori/tracker/server.php?match=" + this.trackerId,
      dataType: "jsonp",
      data: {
          format: "json"
      },
      success: function( response ) {
          console.log(response);
          this._vm.tracker = response;
          this.infoService.setInfo(this._vm);
      }
    });
  }

  start() {
    this.timerStarted = true;
    this.$timer = this.timer.subscribe(t => {
      this.ticks = t;
      this.infoService.setTimer(this.ticks);
    });

    this.infoService.startTimer();
  }
    
  reset() {
    this.infoService.stopTimer();
    this.$timer.unsubscribe();
    this.timerStarted = false;
    this.ticks = 0;
  }

  ticks: number = 0;

  private _vm: Information = new Information();
  public get vm(): Information {
    return this._vm;
  }

  public set vm(info: Information) {
    this._vm = info;
    this.infoService.setInfo(info);
  }
  
public set matchType(matchType: string){
  this._vm.matchType = matchType;
  this.infoService.setInfo(this._vm);
}

public get matchType(): string {
  return this._vm.matchType;
}

  public set commentators(commentators: string){
    this._vm.commentators = commentators;
    this.infoService.setInfo(this._vm);
  }

  public get commentators(): string {
    return this._vm.commentators;
  }

  public get p1_name(): string {
    return this._vm.player1;
  }

  public set p1_name(p1: string) {
    this._vm.player1 = p1;
    this.infoService.setInfo(this._vm);
  }

  public get p2_name(): string {
    return this._vm.player2;
  }

  public set p2_name(p2: string) {
    this._vm.player2 = p2;
    this.infoService.setInfo(this._vm);
  }

  public get p1_twitch(): string {
    return this._vm.player1_twitch;
  }

  public set p1_twitch(p1: string){
    this._vm.player1_twitch = p1;
    this.infoService.setInfo(this._vm);
  }

  public get p2_twitch(): string {
    return this._vm.player2_twitch;
  }

  public set p2_twitch(p2: string){
    this._vm.player2_twitch = p2;
    this.infoService.setInfo(this._vm);
  }

  public get p1_audio(): boolean {
    return this._vm.currentAudioOnPlayer == 1;
  }

  public set p1_audio(audioSelected: boolean) {
    this._vm.currentAudioOnPlayer = audioSelected ? 1 : this._vm.currentAudioOnPlayer;
    this.infoService.setInfo(this._vm);
    this.infoService.setAudio(1);
  }

  public get p2_audio(): boolean {
    return this._vm.currentAudioOnPlayer == 2;
  }

  public set p2_audio(audioSelected: boolean) {
    this._vm.currentAudioOnPlayer = audioSelected ? 2 : this._vm.currentAudioOnPlayer;
    this.infoService.setInfo(this._vm);
    this.infoService.setAudio(2);
  }
}
