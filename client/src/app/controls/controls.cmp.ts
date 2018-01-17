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
  socket: any = io.connect('https://ori-restreamer.azurewebsites.net/');
  
  setBackground(background: string) {
    this._vm.background = background;
  }

  linkTracker() {
    this.socket.emit('data', this.vm);
    $.ajax({
      url: "https://www.meldontaragon.org/ori/tracker/server.php?match=" + this.trackerId,
      dataType: "json",
      error: function(response) {
        console.log(response);
      },
      success: function( response: any ) {
          this._vm.tracker = JSON.parse(JSON.stringify(response));
          this.socket.emit('data', this.vm);
      }.bind(this)
    });
  }
  
  start() {
    this.timerStarted = true;
    this.socket.emit('timer', true);
  }
    
  reset() {
    this.timerStarted = false;
    this.socket.emit('timer', false);
  }

  player1Finished() {
    this.socket.emit('timer1', true);
  }

  player2Finished() {
    this.socket.emit('timer2', true);
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
