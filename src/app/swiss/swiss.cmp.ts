import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
import { environment } from '../../environments/environment';
import io from 'socket.io-client';
import * as $ from 'jquery';
import { Socket } from 'net';

@Component({
  templateUrl: './swiss.html',
  styleUrls: ['./swiss.css']
})

export class SwissCMP {
  constructor() { }

  ngOnInit(){
    this.socket.on('data', function(data: Information){
      if(data.seed !== this.seed)
        return;

      this.vm = data;

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
}
