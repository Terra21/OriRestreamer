import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
import { Information } from '../services/information';
import io from 'socket.io-client';
import * as $ from 'jquery';
import { Division } from '../services/division';
import { Match } from '../services/match';
import { BaseCMP } from '../core/base.cmp';

@Component({
	selector: 'app-division',
	templateUrl: './division.component.html',
	styleUrls: ['./division.component.css']
})

export class DivisionComponent extends BaseCMP implements OnInit {
	constructor(private sanitizer: DomSanitizer) {
		super();
	}

	@Input() name: string;
	@Input() shouldShowHeaders = false;
	division: Division = new Division();
	shouldMirror = false;
	divCols: string;

	public matchStyles(match: Match): SafeStyle {
		return this.sanitizer.bypassSecurityTrustStyle(
			`grid-row: ${match.name}-start / ${match.name}-end;` +
			`grid-column: ${match.round}-start / ${match.round}-end;`);
	}

	private mapSheetToDivision(division: string, values: any) {
		if(division == 'Top 8') {
			this.division.matches.push(new Match('mQ1', values[0][0], 'mQ1', values[0][1], values[1][1], values[0][2], values[1][2], values[0][3], values[1][3]));
			this.division.matches.push(new Match('mQ2', values[16][0], 'mQ2', values[16][1], values[17][1], values[16][2], values[17][2], values[16][3], values[17][3]));
			this.division.matches.push(new Match('mQ3', values[32][0], 'mQ3', values[32][1], values[33][1], values[32][2], values[33][2], values[32][3], values[33][3]));
			this.division.matches.push(new Match('mQ4', values[48][0], 'mQ4', values[48][1], values[49][1], values[48][2], values[49][2], values[48][3], values[49][3]));
			this.division.matches.push(new Match('mS1', values[8][4], 'mS1', values[8][5], values[9][5], values[8][6], values[9][6], values[8][7], values[9][7]));
			this.division.matches.push(new Match('mS2', values[40][4], 'mS2', values[40][5], values[41][5], values[40][6], values[41][6], values[40][7], values[41][7]));
			this.division.matches.push(new Match('mF1', values[24][9], 'mF1', values[24][10], values[25][10], values[24][11], values[25][11], values[24][12], values[25][12]));
		} else {
			this.division.matches.push(new Match('m1', values[0][0], 'pre', values[0][1], values[1][1], values[0][2], values[1][2], values[0][3], values[1][3]));
			this.division.matches.push(new Match('m2', values[4][0], 'pre', values[4][1], values[5][1], values[4][2], values[5][2], values[4][3], values[5][3]));
			this.division.matches.push(new Match('m3', values[8][0], 'pre', values[8][1], values[9][1], values[8][2], values[9][2], values[8][3], values[9][3]));
			this.division.matches.push(new Match('m4', values[12][0], 'pre', values[12][1], values[13][1], values[12][2], values[13][2], values[12][3], values[13][3]));
			this.division.matches.push(new Match('m5', values[16][0], 'pre', values[16][1], values[17][1], values[16][2], values[17][2], values[16][3], values[17][3]));
			this.division.matches.push(new Match('m6', values[20][0], 'pre', values[20][1], values[21][1], values[20][2], values[21][2], values[20][3], values[21][3]));
			this.division.matches.push(new Match('m7', values[24][0], 'pre', values[24][1], values[25][1], values[24][2], values[25][2], values[24][3], values[25][3]));
			this.division.matches.push(new Match('m8', values[28][0], 'pre', values[28][1], values[29][1], values[28][2], values[29][2], values[28][3], values[29][3]));
	
			this.division.matches.push(new Match('m9', values[2][4], 'r1', values[2][5], values[3][5], values[2][6], values[3][6], values[2][7], values[3][7]));
			this.division.matches.push(new Match('m10', values[10][4], 'r1', values[10][5], values[11][5], values[10][6], values[11][6], values[10][7], values[11][7]));
			this.division.matches.push(new Match('m11', values[18][4], 'r1', values[18][5], values[19][5], values[18][6], values[19][6], values[18][7], values[19][7]));
			this.division.matches.push(new Match('m12', values[26][4], 'r1', values[26][5], values[27][5], values[26][6], values[27][6], values[26][7], values[27][7]));
	
			this.division.matches.push(new Match('m13', values[6][8], 'r2', values[6][9], values[7][9], values[6][10], values[7][10], values[6][11], values[7][11]));
			this.division.matches.push(new Match('m14', values[22][8], 'r2', values[22][9], values[23][9], values[22][10], values[23][10], values[22][11], values[23][11]));
	
			this.division.matches.push(new Match('m15', values[14][12], 'wb', values[14][13], values[15][13], values[14][14], values[15][14], values[14][15], values[15][15]));
		}
	}

	ngOnInit() {
		this.socket.on('data', function(data: Information){
			if (data.seed !== this.seed)
				return;
					
			this.vm = data;

			this.getData();
		}.bind(this));

		this.getData();
	}

	getData() {
		switch (this.vm.bracket){
			case 'Singles (Left)':
				this.divCols = 'A5:P34';
				this.shouldMirror = false;
			break;
			case 'Singles (Right)':
				this.divCols = 'A37:P66';
				this.shouldMirror = true;
			break;
			case 'Top 8':
				this.divCols = 'I11:U60';
				this.shouldMirror = false;
			break;
		}

		let url = this.vm.tournament == 1 ? '1LAvyCLpxzfN7KTfy0aeNeSmHSUlZP_tnL8tW_XvJVWg/values/Bracket!' : '15-X1m1xy6-bxJ-8ZNwEvk6THf2-SfxQhRpiWrmi517s/values/Bracket!';

		this.getGoogleSheet(url, this.divCols)
			.subscribe(result => {
				this.division.matches = new Array<Match>();
				this.division.name = this.vm.bracket;
				this.mapSheetToDivision(this.division.name, result.values);
			})
	}
}