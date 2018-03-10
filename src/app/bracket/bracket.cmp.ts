import { Component, Input, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  constructor(private sanitizer:DomSanitizer) { }

  public matchStyles(match: Match) {
	  return this.sanitizer.bypassSecurityTrustStyle(
		  `grid-row: ${match.name}-start / ${match.name}-end;` +
		  `grid-column: ${match.round}-start / ${match.round}-end;`);
  }

  Division: Division = new Division();

  ngOnInit(){
    this.socket.on('data', function(data: Information){
      if(data.seed !== this.seed)
        return;

	  if (this.Division.matches.length > 0) {
		  this.Division.matches = new Array<Match>();
	  }

      let divCols: string;

      switch(data.groupName.toLowerCase()){
        case 'reem':
          divCols = 'B6:X19';
		  this.Division.name = 'Reem';
          break;
        case 'ano':
          divCols = 'B128:X142';
		  this.Division.name = 'Ano';
          break;
        case 'ilo':
          divCols = 'B76:X90';
		  this.Division.name = 'Ilo';
          break;
        case 'eki':
          divCols = 'B58:X72';
		  this.Division.name = 'Eki';
          break;
        case 'fil':
          divCols = 'B41:X55';
		  this.Division.name = 'Fil';
          break;
        case 'tatsu':
          divCols = 'B93:X107';
		  this.Division.name = 'Tatsu';
          break;
        case 'leru':
          divCols = 'B111:X125';
		  this.Division.name = 'Leru';
          break;
        case 'nir':
          divCols = 'B23:X37';
		  this.Division.name = 'Nir';
          break;
      }

      $.ajax({
        url: "https://sheets.googleapis.com/v4/spreadsheets/1ZNRh0DrZsY1YMd1EIiEOwmdk-3uGxmTNgX7qamzeozw/values/Bracket!" + divCols +"?key=AIzaSyDoT4WSyHDf4a1D0qc6lhdySl92d0tXVG0",
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
    }.bind(this));
  }

  matches: Match[];
  socket: any = io.connect(environment.socketPath);
  seed: string = window.location.href.split('=')[1];

  private mapSheetToDivision(response: any){
    //Winners
	if (response.values[0][0] !== '') { // Not all divisions have prelim round
		this.Division.matches.push(new Match('m2', 'pre', response.values[0][0], response.values[1][0], response.values[0][1], response.values[1][1], response.values[0][2], response.values[1][2]));
	}
    this.Division.matches.push(new Match('m5', 'r1', response.values[0][4], response.values[1][4], response.values[0][5], response.values[1][5], response.values[0][6], response.values[1][6]));
    this.Division.matches.push(new Match('m6', 'r1', response.values[4][4], response.values[5][4], response.values[4][5], response.values[5][5], response.values[4][6], response.values[5][6]));
    this.Division.matches.push(new Match('m7', 'r2', response.values[2][12], response.values[3][12], response.values[2][13], response.values[3][13], response.values[3][14], response.values[4][14]));
    this.Division.matches.push(new Match('m8', 'wb', response.values[2][20], response.values[3][20], response.values[2][21], response.values[3][21], response.values[3][22], response.values[4][22]));

    //Losers
	if (response.values[8][0] !== '') { // Not all divisions have loser's prelim round
		this.Division.matches.push(new Match('mL5', 'pre', response.values[8][0], response.values[9][0], response.values[8][1], response.values[9][1], response.values[8][2], response.values[9][2]));
	}
    this.Division.matches.push(new Match('mL9', 'r1', response.values[8][4], response.values[9][4], response.values[8][5], response.values[9][5], response.values[8][6], response.values[9][6]));
    this.Division.matches.push(new Match('mL10', 'r1', response.values[12][4], response.values[13][4], response.values[12][5], response.values[13][5], response.values[12][6], response.values[13][6]));
    this.Division.matches.push(new Match('mL11', 'lr1', response.values[8][8], response.values[9][8], response.values[8][9], response.values[9][9], response.values[8][10], response.values[9][10]));
    this.Division.matches.push(new Match('mL12', 'lr1', response.values[12][8], response.values[13][8], response.values[12][9], response.values[13][9], response.values[12][10], response.values[13][10]));
    this.Division.matches.push(new Match('mL13', 'r2', response.values[10][12], response.values[11][12], response.values[10][13], response.values[11][13], response.values[10][14], response.values[11][14]));
    this.Division.matches.push(new Match('mL14', 'lr2', response.values[10][16], response.values[11][16], response.values[10][17], response.values[11][17], response.values[10][18], response.values[11][18]));
  }
}
