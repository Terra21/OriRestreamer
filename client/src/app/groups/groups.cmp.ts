import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
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

      $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/1ZNRh0DrZsY1YMd1EIiEOwmdk-3uGxmTNgX7qamzeozw/values/Group Standings!B4:D8?key=AIzaSyDoT4WSyHDf4a1D0qc6lhdySl92d0tXVG0",
        dataType: "json",
        error: function(response) {
          console.log(response);
        },
        success: function( response: any ) {
          console.log(response);
          this.players = response.values;
          this.vm = data;
        }.bind(this)
      });

    }.bind(this));
  }

  public vm: Information = new Information();

  players: any;
  socket: any = io.connect('http://localhost:3000/');
  seed: string = window.location.href.split('=')[1];
}