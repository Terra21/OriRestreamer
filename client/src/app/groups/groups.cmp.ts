import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
import io from 'socket.io-client';
import { Socket } from 'net';

@Component({
  templateUrl: './groups.html',
  styleUrls: ['./groups.css']
})

export class GroupsCMP {
  constructor() { }

  ngOnInit(){
    this.socket.on('data', function(data: Information){
      
    }.bind(this));
  }

  public vm: Information = new Information();
  socket: any = io.connect('https://ori-restreamer.azurewebsites.net/');
}
