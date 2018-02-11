import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
import io from 'socket.io-client';
import * as $ from 'jquery';
import { Socket } from 'net';

@Component({
  templateUrl: './bracket.html',
  styleUrls: ['./bracket.css']
})

export class BracketCMP {
  constructor() { }

  ngOnInit(){
    this.socket.on('data-read', function(data: Information){
      if(data.seed !== this.seed)
        return;

      this.vm = data;
    }.bind(this));
  }

  public vm: Information = new Information();

  socket: any = io.connect('https://ori-restreamer.azurewebsites.net/');
  seed: string = window.location.href.split('=')[1];
}
