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
	constructor(private sanitizer: DomSanitizer) { }

	@Input() name: string;
	@Input() shouldShowHeaders = false;
	division: Division = new Division();
	matches: Match[];
	shouldMirror = false;
	socket: any = io.connect(environment.socketPath);
	seed: string = window.location.href.split('=')[1];

	public matchStyles(match: Match): SafeStyle {
		let bg;
		return this.sanitizer.bypassSecurityTrustStyle(
			`grid-row: ${match.name}-start / ${match.name}-end;` +
			`grid-column: ${match.round}-start / ${match.round}-end;` +
			bg);
	}

	private mapSheetToDivision(division: string, response: any) {
		if(division == 'Top 8') {
			this.division.matches.push(new Match('mQ1', response.values[0][0], 'mQ1', response.values[0][1], response.values[1][1], response.values[0][2], response.values[1][2], response.values[0][3], response.values[1][3]));
			this.division.matches.push(new Match('mQ2', response.values[16][0], 'mQ2', response.values[16][1], response.values[17][1], response.values[16][2], response.values[17][2], response.values[16][3], response.values[17][3]));
			this.division.matches.push(new Match('mQ3', response.values[32][0], 'mQ3', response.values[32][1], response.values[33][1], response.values[32][2], response.values[33][2], response.values[32][3], response.values[33][3]));
			this.division.matches.push(new Match('mQ4', response.values[48][0], 'mQ4', response.values[48][1], response.values[49][1], response.values[48][2], response.values[49][2], response.values[48][3], response.values[49][3]));
			this.division.matches.push(new Match('mS1', response.values[8][4], 'mS1', response.values[8][5], response.values[9][5], response.values[8][6], response.values[9][6], response.values[8][7], response.values[9][7]));
			this.division.matches.push(new Match('mS2', response.values[40][4], 'mS2', response.values[40][5], response.values[41][5], response.values[40][6], response.values[41][6], response.values[40][7], response.values[41][7]));
			this.division.matches.push(new Match('mF1', response.values[24][9], 'mF1', response.values[24][10], response.values[25][10], response.values[24][11], response.values[25][11], response.values[24][12], response.values[25][12]));
		} else {
			this.division.matches.push(new Match('m1', response.values[0][0], 'pre', response.values[0][1], response.values[1][1], response.values[0][2], response.values[1][2], response.values[0][3], response.values[1][3]));
			this.division.matches.push(new Match('m2', response.values[4][0], 'pre', response.values[4][1], response.values[5][1], response.values[4][2], response.values[5][2], response.values[4][3], response.values[5][3]));
			this.division.matches.push(new Match('m3', response.values[8][0], 'pre', response.values[8][1], response.values[9][1], response.values[8][2], response.values[9][2], response.values[8][3], response.values[9][3]));
			this.division.matches.push(new Match('m4', response.values[12][0], 'pre', response.values[12][1], response.values[13][1], response.values[12][2], response.values[13][2], response.values[12][3], response.values[13][3]));
			this.division.matches.push(new Match('m5', response.values[16][0], 'pre', response.values[16][1], response.values[17][1], response.values[16][2], response.values[17][2], response.values[16][3], response.values[17][3]));
			this.division.matches.push(new Match('m6', response.values[20][0], 'pre', response.values[20][1], response.values[21][1], response.values[20][2], response.values[21][2], response.values[20][3], response.values[21][3]));
			this.division.matches.push(new Match('m7', response.values[24][0], 'pre', response.values[24][1], response.values[25][1], response.values[24][2], response.values[25][2], response.values[24][3], response.values[25][3]));
			this.division.matches.push(new Match('m8', response.values[28][0], 'pre', response.values[28][1], response.values[29][1], response.values[28][2], response.values[29][2], response.values[28][3], response.values[29][3]));
	
			this.division.matches.push(new Match('m9', response.values[2][4], 'r1', response.values[2][5], response.values[3][5], response.values[2][6], response.values[3][6], response.values[2][7], response.values[3][7]));
			this.division.matches.push(new Match('m10', response.values[10][4], 'r1', response.values[10][5], response.values[11][5], response.values[10][6], response.values[11][6], response.values[10][7], response.values[11][7]));
			this.division.matches.push(new Match('m11', response.values[18][4], 'r1', response.values[18][5], response.values[19][5], response.values[18][6], response.values[19][6], response.values[18][7], response.values[19][7]));
			this.division.matches.push(new Match('m12', response.values[26][4], 'r1', response.values[26][5], response.values[27][5], response.values[26][6], response.values[27][6], response.values[26][7], response.values[27][7]));
	
			this.division.matches.push(new Match('m13', response.values[6][8], 'r2', response.values[6][9], response.values[7][9], response.values[6][10], response.values[7][10], response.values[6][11], response.values[7][11]));
			this.division.matches.push(new Match('m14', response.values[22][8], 'r2', response.values[22][9], response.values[23][9], response.values[22][10], response.values[23][10], response.values[22][11], response.values[23][11]));
	
			this.division.matches.push(new Match('m15', response.values[14][12], 'wb', response.values[14][13], response.values[15][13], response.values[14][14], response.values[15][14], response.values[14][15], response.values[15][15]));
		}
	}

	ngOnInit() {
		let divCols: string;
		this.division.name = this.name;
		console.log('Name of Value: ' + this.name);

		switch (this.name){
			case 'Singles (Left)':
				divCols = 'A5:P34';
				this.shouldMirror = false;
			break;
			case 'Singles (Right)':
				divCols = 'A37:P66';
				this.shouldMirror = true;
			break;
			case 'Top 8':
				divCols = 'I11:U60';
				this.shouldMirror = false;
			default:
				console.log(this.name);
			break;
		}
		
		this.socket.on('data', function(data: Information){
			if (data.seed !== this.seed || !divCols)
				return;
						
			let url = data.tournament == 1 ? '1LAvyCLpxzfN7KTfy0aeNeSmHSUlZP_tnL8tW_XvJVWg' : '15-X1m1xy6-bxJ-8ZNwEvk6THf2-SfxQhRpiWrmi517s';
			this.division.name = data.bracket;

			$.ajax({
				url: 'https://sheets.googleapis.com/v4/spreadsheets/' + url + '/values/Bracket!' + divCols + '?key=AIzaSyBg9fQgl81Zhk2shiOIYm1k4o9Kv3dvxHU',
				dataType: 'json',
				error: function(response) {
					console.log(response);
				},
				
				success: function( response: any ) {
				if (this.division.matches.length > 0) {
					this.division.matches = new Array<Match>();
				}

				this.mapSheetToDivision(this.division.name, response);
				}.bind(this)
			});
		}.bind(this));
	}
}
