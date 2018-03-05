import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
import { environment } from '../../environments/environment';
import io from 'socket.io-client';
import * as $ from 'jquery';
import { Socket } from 'net';
import { Division } from '../services/division';

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
        
      let divCols = "C6:N19";;

      switch("fil"){
        case "fil":
          divCols = "C6:N19";
          break;
      }

      $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/1_Y2NpB4qp2govQmMmRWZLtVgg6g2LzOssR8IGrER0T8/values/Bracket!" + divCols +"?key=AIzaSyDoT4WSyHDf4a1D0qc6lhdySl92d0tXVG0",
        dataType: "json",
        error: function(response) {
          console.log(response);
        },
        success: function( response: any ) {
          console.log(response);

          //Pulled from
          //https://docs.google.com/spreadsheets/d/1_Y2NpB4qp2govQmMmRWZLtVgg6g2LzOssR8IGrER0T8/edit#gid=1672953942

          this.mapSheetToDivision(response);

        }.bind(this)
      });
    // }.bind(this));
  }

  socket: any = io.connect(environment.socketPath);
  seed: string = window.location.href.split('=')[1];

  private mapSheetToDivision(response: any){
    //Winners
    this.Division.WinnersPrelim.player1 = this.getPlayerName(response.values[0][0]);
    this.Division.WinnersPrelim.player2 = this.getPlayerName(response.values[1][0]);

    this.Division.WinnersRound1_1.player1 = this.getPlayerName(response.values[0][3]);
    this.Division.WinnersRound1_1.player2 = this.getPlayerName(response.values[1][3]);

    this.Division.WinnersRound1_2.player1 = this.getPlayerName(response.values[4][3]);
    this.Division.WinnersRound1_2.player2 = this.getPlayerName(response.values[5][3]);

    this.Division.WinnersRound2.player1 = this.getPlayerName(response.values[2][7]);
    this.Division.WinnersRound2.player2 = this.getPlayerName(response.values[3][7]);

    this.Division.WinnersFinal.player1 = this.getPlayerName(response.values[2][11]);
    this.Division.WinnersFinal.player2 = this.getPlayerName(response.values[3][11]);

    //Losers
    this.Division.LosersPrelim.player1 = this.getPlayerName(response.values[8][0]);
    this.Division.LosersPrelim.player2 = this.getPlayerName(response.values[9][0]);

    this.Division.LosersLowerRound1_1.player1 = this.getPlayerName(response.values[8][3]);
    this.Division.LosersLowerRound1_1.player2 = this.getPlayerName(response.values[9][3]);

    this.Division.LosersLowerRound1_2.player1 = this.getPlayerName(response.values[12][3]);
    this.Division.LosersLowerRound1_2.player2 = this.getPlayerName(response.values[13][3]);

    this.Division.LosersRound1_1.player1 = this.getPlayerName(response.values[8][5]);
    this.Division.LosersRound1_1.player2 = this.getPlayerName(response.values[9][5]);

    this.Division.LosersRound1_2.player1 = this.getPlayerName(response.values[12][5]);
    this.Division.LosersRound1_2.player2 = this.getPlayerName(response.values[13][5]);

    this.Division.LosersRound2.player1 = this.getPlayerName(response.values[10][7]);
    this.Division.LosersRound2.player2 = this.getPlayerName(response.values[11][7]);

    this.Division.LosersFinal.player1 = this.getPlayerName(response.values[10][9]);
    this.Division.LosersFinal.player2 = this.getPlayerName(response.values[11][9]);
  }

  private getPlayerName(text: string): string {
    //return text; <-- for testing and seeing text come back

    //returns nothing if the cell contains the word Winner or Loser
    return (~ text.indexOf('Winner') || ~ text.indexOf('Loser') ? "" : text)
  }
}
