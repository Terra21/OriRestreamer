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

      let groupCols = null;

      console.log(data.background);
      switch(data.background){
        case "forlorn":
          groupCols = "B4:D8";
          break;
        case "glades":
          groupCols = "F4:H8";
          break;
        case "grotto":
          groupCols = "J4:L8";
          break;
        case "ginso":
          groupCols = "N4:P8";
          break;
        case "swamp":
          groupCols = "B12:D15";
          break;
        case "valley":
          groupCols = "F12:H15";
          break;
        case "sorrow":
          groupCols = "J12:L15";
          break;
        case "horu":
          groupCols = "N12:P15";
          break;
        case "blackroot":
          groupCols = "B20:D23";
          break;
        case "lostgrove":
          groupCols = "F20:H23";
          break;
        case "misty":
          groupCols = "J20:L23";
          break;
        case "grove":
          groupCols = "N20:P23";
          break;
        case "spidercoves":
          groupCols = "B28:D31";
          break;
        case "moongrotto":
          groupCols = "F28:H31";
          break;
        case "spiritcaverns":
          groupCols = "J28:L31";
          break;
        case "swallowsnest":
          groupCols = "N28:P31";
          break;
        case "kurosnest":
          groupCols = "B36:D39";
          break;
      }

      $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/1ZNRh0DrZsY1YMd1EIiEOwmdk-3uGxmTNgX7qamzeozw/values/Group Standings!" + groupCols +"?key=AIzaSyDoT4WSyHDf4a1D0qc6lhdySl92d0tXVG0",
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
