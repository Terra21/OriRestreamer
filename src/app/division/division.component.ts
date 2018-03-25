import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
import { Information } from '../services/information';
import io from 'socket.io-client';
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
	@Input() divData: Array<Array<any>>;
	division: Division = new Division();
	matches: Match[];
	shouldMirror = false;
	socket: any = io.connect(environment.socketPath);
	seed: string = window.location.href.split('=')[1];

	constructor(private sanitizer: DomSanitizer) { }

	public matchStyles(match: Match): SafeStyle {
		return this.sanitizer.bypassSecurityTrustStyle(
			`grid-row: ${match.name}-start / ${match.name}-end;` +
			`grid-column: ${match.round}-start / ${match.round}-end;`);
	}

	private mapSheetToDivision(division: string, response: any) {
		if (!response) {
			return;
		}
		if (division === 'Sol') {
			// S O L
			// this.division.matches.push(new Match('mQ1', 'mQ1', response.values[0][0], response.values[1][0], response.values[0][1], response.values[1][1], response.values[0][2], response.values[1][2]));
			// this.division.matches.push(new Match('mQ2', 'mQ2', response.values[4][0], response.values[5][0], response.values[4][1], response.values[5][1], response.values[4][2], response.values[5][2]));
			// this.division.matches.push(new Match('mQ3', 'mQ3', response.values[8][0], response.values[9][0], response.values[8][1], response.values[9][1], response.values[8][2], response.values[9][2]));
			// this.division.matches.push(new Match('mQ4', 'mQ4', response.values[12][0], response.values[13][0], response.values[12][1], response.values[13][1], response.values[12][2], response.values[13][2]));
			// this.division.matches.push(new Match('mS1', 'mS1', response.values[2][4], response.values[3][4], response.values[2][5], response.values[3][5], response.values[2][6], response.values[3][6]));
			// this.division.matches.push(new Match('mS2', 'mS2', response.values[10][4], response.values[11][4], response.values[10][5], response.values[11][5], response.values[10][6], response.values[11][6]));
			// this.division.matches.push(new Match('mF1', 'mF1', response.values[6][8], response.values[7][8], response.values[6][9], response.values[7][9], response.values[6][10], response.values[7][10]));
			this.division.matches.push(new Match('mQ1', 'mQ1', response[0][25], response[1][25], response[0][26], response[1][26], response[0][27], response[1][27]));
			this.division.matches.push(new Match('mQ2', 'mQ2', response[4][25], response[5][25], response[4][26], response[5][26], response[4][27], response[5][27]));
			this.division.matches.push(new Match('mQ3', 'mQ3', response[8][25], response[9][25], response[8][26], response[9][26], response[8][27], response[9][27]));
			this.division.matches.push(new Match('mQ4', 'mQ4', response[12][25], response[13][25], response[12][26], response[13][26], response[12][27], response[13][27]));
			this.division.matches.push(new Match('mS1', 'mS1', response[2][29], response[3][29], response[2][30], response[3][30], response[2][31], response[3][31]));
			this.division.matches.push(new Match('mS2', 'mS2', response[10][29], response[11][29], response[10][30], response[11][30], response[10][31], response[11][31]));
			this.division.matches.push(new Match('mF1', 'mF1', response[6][33], response[7][33], response[6][34], response[7][34], response[6][35], response[7][35]));
		} else {
			// Winners
			if (response[0][0] !== '') { // Not all divisions have prelim round
				this.division.matches.push(new Match('m2', 'pre', response[0][0], response[1][0], response[0][1], response[1][1], response[0][2], response[1][2]));
			}
			this.division.matches.push(new Match('m5', 'r1', response[0][4], response[1][4], response[0][5], response[1][5], response[0][6], response[1][6]));
			this.division.matches.push(new Match('m6', 'r1', response[4][4], response[5][4], response[4][5], response[5][5], response[4][6], response[5][6]));
			this.division.matches.push(new Match('m7', 'r2', response[2][12], response[3][12], response[2][13], response[3][13], response[2][14], response[3][14]));
			this.division.matches.push(new Match('m8', 'wb', response[2][20], response[3][20], response[2][21], response[3][21], response[2][22], response[3][22]));

			// Losers
			if (response[8][0] !== '') { // Not all divisions have loser's prelim round
				this.division.matches.push(new Match('mL5', 'pre', response[8][0], response[9][0], response[8][1], response[9][1], response[8][2], response[9][2]));
			}
			this.division.matches.push(new Match('mL9', 'r1', response[8][4], response[9][4], response[8][5], response[9][5], response[8][6], response[9][6]));
			this.division.matches.push(new Match('mL10', 'r1', response[12][4], response[13][4], response[12][5], response[13][5], response[12][6], response[13][6]));
			this.division.matches.push(new Match('mL11', 'lr1', response[8][8], response[9][8], response[8][9], response[9][9], response[8][10], response[9][10]));
			this.division.matches.push(new Match('mL12', 'lr1', response[12][8], response[13][8], response[12][9], response[13][9], response[12][10], response[13][10]));
			this.division.matches.push(new Match('mL13', 'r2', response[10][12], response[11][12], response[10][13], response[11][13], response[10][14], response[11][14]));
			this.division.matches.push(new Match('mL14', 'lr2', response[10][16], response[11][16], response[10][17], response[11][17], response[10][18], response[11][18]));
		}
	}

	ngOnInit() {
		this.division.name = this.name;
		this.shouldMirror = this.name === 'Ano'
			|| this.name === 'Ilo'
			|| this.name === 'Tatsu'
			|| this.name === 'Leru';

		this.socket.on('data', function(data: Information) {
			if (this.division.matches.length > 0) {
				this.division.matches = new Array<Match>();
			}
			this.mapSheetToDivision(this.division.name, this.divData);
		}.bind(this));

		// this.socket.on('data', function(data: Information) {
		// 	if (data.seed !== this.seed || !divCols)
		// 		return;
		//
		// }.bind(this));
	}

}
