import { Component, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
import * as $ from 'jquery';
import io from 'socket.io-client';

@Component({
  templateUrl: './controls.html',
  styleUrls: ['./controls.css']
})
export class ControlsCMP {
  constructor() { } 

  timerStarted: boolean = false;
  trackerId: string = 'covertmuffinvmadinsane';
  socket: any = io.connect('http://localhost:8080');
  
  setBackground(background: string) {
    this._vm.background = background;
  }

  linkTracker() {
    this.socket.emit('data', this.vm);
    
    // $.ajax({
    //   url: "http://www.dcmiller.org/ori/tracker/server.php?match=" + this.trackerId,
    //   dataType: "jsonp",
    //   data: {
    //       format: "json"
    //   },
    //   success: function( response ) {
    //       console.log(response);
    //       this._vm.tracker = response;
    //       this.infoService.setInfo(this._vm);
    //   }
    // });
  }

  start() {
    this.timerStarted = true;
    this.socket.emit('timer', true);
  }
    
  reset() {
    this.timerStarted = false;
    this.socket.emit('timer', false);
  }

  private _vm: Information = new Information();
  public get vm(): Information {
    return this._vm;
  }

  public set vm(info: Information) {
    this._vm = info;
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
}
