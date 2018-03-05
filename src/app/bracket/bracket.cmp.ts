import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
import { environment } from '../../environments/environment';
import io from 'socket.io-client';
import * as $ from 'jquery';
import { Socket } from 'net';
import { Division } from '../services/division';
import { Match } from '../services/match';

@Component({
  templateUrl: './bracket.html',
  styleUrls: ['./bracket.css']
})

export class BracketCMP {
  constructor() { }

  private Division: Division = new Division();

  ngOnInit(){
    // this.socket.on('data', function(data: Information){
    //   if(data.seed !== this.seed)
    //     return;
        
      let divCols = "B6:N19";;

      switch("fil"){
        case "fil":
          divCols = "B6:X19";
          break;
      }

      $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/1ZNRh0DrZsY1YMd1EIiEOwmdk-3uGxmTNgX7qamzeozw/values/Bracket (WIP)!" + divCols +"?key=AIzaSyDoT4WSyHDf4a1D0qc6lhdySl92d0tXVG0",
        dataType: "json",
        error: function(response) {
          console.log(response);
        },
        success: function( response: any ) {
          console.log(response);

          //Pulled from
          //https://docs.google.com/spreadsheets/d/1ZNRh0DrZsY1YMd1EIiEOwmdk-3uGxmTNgX7qamzeozw/edit#gid=129944555

          this.mapSheetToDivision(response);

        }.bind(this)
      });
    // }.bind(this));
  }

  socket: any = io.connect(environment.socketPath);
  seed: string = window.location.href.split('=')[1];

  private mapSheetToDivision(response: any){
    //Winners
    this.Division.WinnersPrelim = new Match(response.values[0][0], response.values[1][0], response.values[0][1], response.values[1][1], response.values[0][2], response.values[1][2]);
    this.Division.WinnersRound1_1 = new Match(response.values[0][4], response.values[1][4], response.values[0][5], response.values[1][5], response.values[0][6], response.values[1][6]);
    this.Division.WinnersRound1_2 = new Match(response.values[4][4], response.values[5][4], response.values[4][5], response.values[5][5], response.values[4][6], response.values[5][6]);
    this.Division.WinnersRound2 = new Match(response.values[2][13], response.values[3][13], response.values[2][14], response.values[3][14], response.values[3][15], response.values[4][15]);
    this.Division.WinnersFinal = new Match(response.values[2][21], response.values[3][21], response.values[2][22], response.values[3][22], response.values[3][23], response.values[4][23])

    //Losers
    this.Division.LosersPrelim = new Match(response.values[8][0], response.values[9][0], response.values[8][1], response.values[9][1], response.values[8][2], response.values[9][2]);
    this.Division.LosersRound1_1 = new Match(response.values[8][4], response.values[9][4], response.values[8][5], response.values[9][5], response.values[8][6], response.values[9][6]);
    this.Division.LosersRound1_2 = new Match(response.values[12][4], response.values[13][4], response.values[12][5], response.values[13][5], response.values[12][6], response.values[13][6])
    this.Division.LosersLowerRound1_1 = new Match(response.values[8][8], response.values[9][8], response.values[8][9], response.values[9][9], response.values[8][10], response.values[9][10]);
    this.Division.LosersLowerRound1_2 = new Match(response.values[12][8], response.values[13][8], response.values[12][9], response.values[13][9], response.values[12][10], response.values[13][10]);
    this.Division.LosersRound2 = new Match(response.values[10][13], response.values[11][13], response.values[10][14], response.values[11][14], response.values[10][15], response.values[11][15]);
    this.Division.LosersFinal = new Match(response.values[10][17], response.values[11][17], response.values[10][18], response.values[11][18], response.values[10][19], response.values[11][19]);
  }
}
