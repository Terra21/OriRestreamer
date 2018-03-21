import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
import { Information } from '../services/information';
import io from 'socket.io-client';
import * as $ from 'jquery';
import { Division } from '../services/division';
import { Match } from '../services/match';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {
  @Input() name: string;
  @Input() shouldShowHeaders = false;
  division: Division = new Division();
  matches: Match[];
  shouldMirror = false;
  socket: any = io.connect(environment.socketPath);
  seed: string = window.location.href.split('=')[1];

  constructor(private sanitizer: DomSanitizer) { }

  public matchStyles(match: Match): SafeStyle {
	  let bg;
	  if (match.name.charAt(1) === 'L') {
		  bg = '--bg: rgba(32, 0, 0, 0.6);';
	  }
	  return this.sanitizer.bypassSecurityTrustStyle(
		  `grid-row: ${match.name}-start / ${match.name}-end;` +
		  `grid-column: ${match.round}-start / ${match.round}-end;` +
		  bg);
  }

  private mapSheetToDivision(division: string, response: any){
	if (division === 'Sol') {
		// S O L
		this.division.matches.push(new Match('mQ1', 'mQ1', response.values[0][0], response.values[1][0], response.values[0][1], response.values[1][1], response.values[0][2], response.values[1][2]));
		this.division.matches.push(new Match('mQ2', 'mQ2', response.values[4][0], response.values[5][0], response.values[4][1], response.values[5][1], response.values[4][2], response.values[5][2]));
		this.division.matches.push(new Match('mQ3', 'mQ3', response.values[8][0], response.values[9][0], response.values[8][1], response.values[9][1], response.values[8][2], response.values[9][2]));
		this.division.matches.push(new Match('mQ4', 'mQ4', response.values[12][0], response.values[13][0], response.values[12][1], response.values[13][1], response.values[12][2], response.values[13][2]));
		this.division.matches.push(new Match('mS1', 'mS1', response.values[2][4], response.values[3][4], response.values[2][5], response.values[3][5], response.values[2][6], response.values[3][6]));
		this.division.matches.push(new Match('mS2', 'mS2', response.values[10][4], response.values[11][4], response.values[10][5], response.values[11][5], response.values[10][6], response.values[11][6]));
		this.division.matches.push(new Match('mF1', 'mF1', response.values[6][8], response.values[7][8], response.values[6][9], response.values[7][9], response.values[6][10], response.values[7][10]));
	} else {
	    // Winners
		if (response.values[0][0] !== '') { // Not all divisions have prelim round
			this.division.matches.push(new Match('m2', 'pre', response.values[0][0], response.values[1][0], response.values[0][1], response.values[1][1], response.values[0][2], response.values[1][2]));
		}
	    this.division.matches.push(new Match('m5', 'r1', response.values[0][4], response.values[1][4], response.values[0][5], response.values[1][5], response.values[0][6], response.values[1][6]));
	    this.division.matches.push(new Match('m6', 'r1', response.values[4][4], response.values[5][4], response.values[4][5], response.values[5][5], response.values[4][6], response.values[5][6]));
	    this.division.matches.push(new Match('m7', 'r2', response.values[2][12], response.values[3][12], response.values[2][13], response.values[3][13], response.values[3][14], response.values[4][14]));
	    this.division.matches.push(new Match('m8', 'wb', response.values[2][20], response.values[3][20], response.values[2][21], response.values[3][21], response.values[3][22], response.values[4][22]));

	    // Losers
		if (response.values[8][0] !== '') { // Not all divisions have loser's prelim round
			this.division.matches.push(new Match('mL5', 'pre', response.values[8][0], response.values[9][0], response.values[8][1], response.values[9][1], response.values[8][2], response.values[9][2]));
		}
	    this.division.matches.push(new Match('mL9', 'r1', response.values[8][4], response.values[9][4], response.values[8][5], response.values[9][5], response.values[8][6], response.values[9][6]));
	    this.division.matches.push(new Match('mL10', 'r1', response.values[12][4], response.values[13][4], response.values[12][5], response.values[13][5], response.values[12][6], response.values[13][6]));
	    this.division.matches.push(new Match('mL11', 'lr1', response.values[8][8], response.values[9][8], response.values[8][9], response.values[9][9], response.values[8][10], response.values[9][10]));
	    this.division.matches.push(new Match('mL12', 'lr1', response.values[12][8], response.values[13][8], response.values[12][9], response.values[13][9], response.values[12][10], response.values[13][10]));
	    this.division.matches.push(new Match('mL13', 'r2', response.values[10][12], response.values[11][12], response.values[10][13], response.values[11][13], response.values[10][14], response.values[11][14]));
	    this.division.matches.push(new Match('mL14', 'lr2', response.values[10][16], response.values[11][16], response.values[10][17], response.values[11][17], response.values[10][18], response.values[11][18]));
	}
  }

  ngOnInit() {
      let divCols: string;

	  this.division.name = this.name;

      switch (this.name){
        case 'Reem':
          divCols = 'B6:X19';
		  this.shouldMirror = false;
          break;
        case 'Ano':
          divCols = 'B128:X142';
		  this.shouldMirror = true;
          break;
        case 'Ilo':
          divCols = 'B76:X90';
		  this.shouldMirror = true;
          break;
        case 'Eki':
          divCols = 'B58:X72';
		  this.shouldMirror = false;
          break;
        case 'Fil':
          divCols = 'B41:X55';
		  this.shouldMirror = false;
          break;
        case 'Tatsu':
          divCols = 'B93:X107';
		  this.shouldMirror = true;
          break;
        case 'Leru':
          divCols = 'B111:X125';
		  this.shouldMirror = true;
          break;
        case 'Nir':
          divCols = 'B23:X37';
		  this.shouldMirror = false;
          break;
		case 'Sol':
		  divCols = 'AA6:AK19';
		  this.shouldMirror = false;
		default:
		  console.log(this.name);
		  break;
      }

    this.socket.on('data', function(data: Information){
      if (data.seed !== this.seed || !divCols)
        return;

      $.ajax({
        url: 'https://sheets.googleapis.com/v4/spreadsheets/1ZNRh0DrZsY1YMd1EIiEOwmdk-3uGxmTNgX7qamzeozw/values/Bracket!' + divCols + '?key=AIzaSyDoT4WSyHDf4a1D0qc6lhdySl92d0tXVG0',
        dataType: 'json',
        error: function(response) {
          console.log(response);
        },
        success: function( response: any ) {
		  if (this.division.matches.length > 0) {
			  this.division.matches = new Array<Match>();
		  }

          //Pulled from
          //https://docs.google.com/spreadsheets/d/1ZNRh0DrZsY1YMd1EIiEOwmdk-3uGxmTNgX7qamzeozw/edit#gid=129944555

          this.mapSheetToDivision(this.division.name, response);
		  // $(`#${this.division.name}`).addClass('expand');
        }.bind(this)
      });
    }.bind(this));
  }

}
