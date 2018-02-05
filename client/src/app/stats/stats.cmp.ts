import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
import io from 'socket.io-client';
import * as $ from 'jquery';
import { Socket } from 'net';
import { read } from 'fs';

@Component({
  templateUrl: './stats.html',
  styleUrls: ['./stats.css']
})

export class StatsCMP {
  constructor() { }

  ngOnInit(){
    this.socket.on('data', function(data: Information){
      if(data.seed !== this.seed)
        return;

        console.log(data);

        var runner1 = jQuery.grep(this.players, function(n: any, i) {
            return n.name == data.player1_twitch;
        })[0];

        var runner2 = jQuery.grep(this.players, function(n: any, i) {
          return n.name == data.player2_twitch;
        })[0];

        $.ajax({
          url: "https://sheets.googleapis.com/v4/spreadsheets/1ZNRh0DrZsY1YMd1EIiEOwmdk-3uGxmTNgX7qamzeozw/values/Stream Stats!" + runner1.startColumn + ":"+ runner1.endColumn +"?key=AIzaSyDoT4WSyHDf4a1D0qc6lhdySl92d0tXVG0",
          dataType: "json",
          error: function(response) {
            console.log(response);
          },
          success: function( response: any ) {
            console.log("p1");
            console.log(response);
            this.player1 = response.values[0];
          }.bind(this)
        });

        $.ajax({
          url: "https://sheets.googleapis.com/v4/spreadsheets/1ZNRh0DrZsY1YMd1EIiEOwmdk-3uGxmTNgX7qamzeozw/values/Stream Stats!" + runner2.startColumn + ":"+ runner2.endColumn +"?key=AIzaSyDoT4WSyHDf4a1D0qc6lhdySl92d0tXVG0",
          dataType: "json",
          error: function(response) {
            console.log(response);
          },
          success: function( response: any ) {
            console.log("p2");
            console.log(response);
            this.player2 = response.values[0];
          }.bind(this)
        });

      this.vm = data;
    }.bind(this));
  }

  public vm: Information = new Information();

  socket: any = io.connect('http://localhost:3000/');
  seed: string = window.location.href.split('=')[1];
  player1: any;
  player2: any;

  players = [ 
    {
        "name": "Terra21",
        "startColumn": "B56",
        "endColumn": "G56"
    },
    {
        "name": "Shedd_",
        "startColumn": "B48",
        "endColumn": "G48"
    },
    {
        "name": "TheRooseIsLoose89",
        "startColumn": "B57",
        "endColumn": "G57"
    },
    {
      "name": "chicken_supreme",
      "startColumn": "B8",
      "endColumn": "G8"
  }
 ]
}
