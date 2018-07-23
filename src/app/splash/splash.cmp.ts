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

      //Singles
      if(data.tournament == 1) {
        this.opponent1 = data.player1;
        this.opponent2 = data.player2;
      } 
      //Doubles
      else if(data.tournament == 2 ) {
        let team1 = this.getTeamById(data.team1Id);
        this.opponent1 = team1.name;
      }

    }.bind(this));
  }
  
  getPlayerById(id: number) {
    return  jQuery.grep(this.vm.players, function(n: any, i) {
        return n.id == id;
    }.bind(this))[0];
  }

  getTeamById(id: number) {
      return  jQuery.grep(this.vm.teams, function(n: any, i) {
          return n.id == id;
      }.bind(this))[0];
  }

  public vm: Information = new Information();

  socket: any = io.connect(environment.socketPath);
  seed: string = window.location.href.split('=')[1];
  opponent1: string;
  opponent2: string;
}
