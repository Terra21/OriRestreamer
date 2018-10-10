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
	  return this.sanitizer.bypassSecurityTrustStyle(
		  `grid-row: ${match.name}-start / ${match.name}-end;` +
		  `grid-column: ${match.round}-start / ${match.round}-end;` +
		  bg);
  }

  private mapSheetToDivision(division: string, response: any){
	// Prelims
	if (response.values[0][0] !== '') {
    if (division === "Singles (Right)")
      this.division.matches.push(new Match('m1', 'Match P4', 'pre', response.values[0][0], response.values[1][0], response.values[0][1], response.values[1][1], response.values[0][2], response.values[1][2]));
    else
      this.division.matches.push(new Match('m1', 'Match P1', 'pre', response.values[0][0], response.values[1][0], response.values[0][1], response.values[1][1], response.values[0][2], response.values[1][2]));
	}

	if (response.values[8][0] !== '') {
    if (division === "Singles (Right)")
      this.division.matches.push(new Match('m2', 'Match P5','pre', response.values[8][0], response.values[9][0], response.values[8][1], response.values[9][1], response.values[8][2], response.values[9][2]));
    else
      this.division.matches.push(new Match('m2', 'Match P2','pre', response.values[8][0], response.values[9][0], response.values[8][1], response.values[9][1], response.values[8][2], response.values[9][2]));
	}

	if (response.values[12][0] !== '') {
    if (division === "Singles (Right)")
      this.division.matches.push(new Match('m3', 'Match P6','pre', response.values[12][0], response.values[13][0], response.values[12][1], response.values[13][1], response.values[12][2], response.values[13][2]));
    else
      this.division.matches.push(new Match('m3', 'Match P3','pre', response.values[12][0], response.values[13][0], response.values[12][1], response.values[13][1], response.values[12][2], response.values[13][2]));
	}

	this.division.matches.push(new Match('m9', response.values[0][3], 'r1', response.values[0][4], response.values[1][4], response.values[0][5], response.values[1][5], response.values[0][6], response.values[1][6]));
	this.division.matches.push(new Match('m7', response.values[4][3], 'r1', response.values[4][4], response.values[5][4], response.values[4][5], response.values[5][5], response.values[4][6], response.values[5][6]));
	this.division.matches.push(new Match('m15', response.values[2][7], 'r2', response.values[2][8], response.values[3][8], response.values[2][9], response.values[3][9], response.values[2][10], response.values[3][10]));
	this.division.matches.push(new Match('m19', response.values[6][11], 'wb', response.values[6][12], response.values[7][12], response.values[6][13], response.values[7][13], response.values[6][14], response.values[7][14]));


	this.division.matches.push(new Match('m10', response.values[8][3], 'r1', response.values[8][4], response.values[9][4], response.values[8][5], response.values[9][5], response.values[8][6], response.values[9][6]));
	this.division.matches.push(new Match('m11',  response.values[12][3], 'r1', response.values[12][4], response.values[13][4], response.values[12][5], response.values[13][5], response.values[12][6], response.values[13][6]));
	this.division.matches.push(new Match('m16', response.values[10][7], 'r2', response.values[10][8], response.values[11][8], response.values[10][9], response.values[11][9], response.values[10][10], response.values[11][10]));
  }

  ngOnInit() {
      let divCols: string;

		this.division.name = this.name;
		console.log(this.name);

      switch (this.name){
        case 'Singles (Left)':
          	divCols = 'B6:P19';
		    this.shouldMirror = false;
          break;
        case 'Singles (Right)':
        	divCols = 'B23:P36';
		    this.shouldMirror = true;
          break;
        case 'Doubles':
			  divCols = 'B45:P58';
		    this.shouldMirror = false;
          break;
		default:
		  console.log(this.name);
		  break;
    }
    
    $.ajax({
      url: 'https://sheets.googleapis.com/v4/spreadsheets/1WTLveLqtSkyCo_lyg8bjn0mgOLpbs6xSjHSES6dcrUc/values/Bracket!' + divCols + '?key=AIzaSyBg9fQgl81Zhk2shiOIYm1k4o9Kv3dvxHU',
      dataType: 'json',
      error: function(response) {
        console.log(response);
      },
      success: function( response: any ) {
    if (this.division.matches.length > 0) {
      this.division.matches = new Array<Match>();
    }
        //Pulled from
        //https://docs.google.com/spreadsheets/d/1WTLveLqtSkyCo_lyg8bjn0mgOLpbs6xSjHSES6dcrUc/edit#gid=1820809674

        console.log(response);
        this.mapSheetToDivision(this.division.name, response);
    // $(`#${this.division.name}`).addClass('expand');
      }.bind(this)
    });

    this.socket.on('data', function(data: Information){
      if (data.seed !== this.seed || !divCols)
				return;
				
      $.ajax({
        url: 'https://sheets.googleapis.com/v4/spreadsheets/1WTLveLqtSkyCo_lyg8bjn0mgOLpbs6xSjHSES6dcrUc/values/Bracket!' + divCols + '?key=AIzaSyBg9fQgl81Zhk2shiOIYm1k4o9Kv3dvxHU',
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
