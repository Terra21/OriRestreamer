import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
import { environment } from '../../environments/environment';
import io from 'socket.io-client';
import * as $ from 'jquery';
import { Socket } from 'net';

@Component({
  templateUrl: './groups.html',
  styleUrls: ['./groups.css']
})

export class GroupsCMP {
  constructor() { }

  ngOnInit(){
    this.socket.on('data', function(data: Information){
      
      if(data.seed !== this.seed)
        return;

      

    }.bind(this));
  }

  public vm: Information = new Information();

  swiss: any;
  socket: any = io.connect(environment.socketPath);
  seed: string = window.location.href.split('=')[1];
}
