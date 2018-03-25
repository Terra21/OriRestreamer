import { Component, Input, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { environment } from '../../environments/environment';
import { Information } from '../services/information';
import { Division } from '../services/division';
import io from 'socket.io-client';
import * as $ from 'jquery';
import { Match } from '../services/match';

@Component({
	templateUrl: './bracket.html',
	styleUrls: ['./bracket.css']
})

export class BracketCMP {
	socket: any = io.connect(environment.socketPath);
	seed: string = window.location.href.split('=')[1];
	divisions: Array<string> = ['Reem', 'Ano', 'Ilo', 'Eki', 'Fil', 'Tatsu', 'Leru', 'Nir', 'Sol'];
	divData: Object = {};
	currentDivision: Division = new Division();
	shouldShowHeaders = false;
	zoomBracket = false;

	constructor(private sanitizer: DomSanitizer) { }

	public setOrigin(division: string): SafeStyle {
		const origins = {
			Reem: 'left top',
			Ano: 'right bottom',
			Ilo: 'right top',
			Eki: 'left bottom',
			Fil: 'left 66.6666%',
			Tatsu: 'right 33.3333%',
			Leru: 'right 66.6666%',
			Nir: 'left 33.3333%',
			Sol: 'center'
		};
		return this.sanitizer.bypassSecurityTrustStyle(`--origin: ${origins[division]}`);
	}
	public divisionStyles(division: string): SafeStyle {
		return this.sanitizer.bypassSecurityTrustStyle(`--division: ${division.toLowerCase()};`
			+ `--division-bg: url('../../assets/divisions/${division.toLowerCase()}_small.png')`);
	}

	ngOnInit() {
		this.socket.on('data', function(data: Information) {
			if (data.seed !== this.seed) {
				return;
			}
			this.currentDivision.name = data.groupName;
			this.zoomBracket = data.zoomBracket;
			this.shouldShowHeaders = data.zoomBracket;

			$.ajax({
				url: 'https://sheets.googleapis.com/v4/spreadsheets/1ZNRh0DrZsY1YMd1EIiEOwmdk-3uGxmTNgX7qamzeozw/values/Bracket!B6:AK141?key=AIzaSyDoT4WSyHDf4a1D0qc6lhdySl92d0tXVG0',
				dataType: 'json',
				error: function(response: any) {
					console.log(response);
				},
				success: function(response: any) {
					this.divisions.forEach(division => {
						this.divData[division] = response.values.filter((row, r) => {
							switch (division) {
								case 'Reem':
								case 'Sol':
									// B6:AK19
									return r >= 0 && r <= 13;
								case 'Ano':
									// B128:AK142
									return r >= 122 && r <= 136;
								case 'Ilo':
									// B76:AK90
									return r >= 70 && r <= 84;
								case 'Eki':
									// B58:AK72
									return r >= 52 && r <= 66;
								case 'Fil':
									// B41:AK55
									return r >= 35 && r <= 49;
								case 'Tatsu':
									// B93:AK107
									return r >= 87 && r <= 101;
								case 'Leru':
									// B111:AK125
									return r >= 105 && r <= 119;
								case 'Nir':
									// B23:AK37
									return r >= 17 && r <= 31;
							}
						});
					});
				}.bind(this)
			});
		}.bind(this));
	}

}
