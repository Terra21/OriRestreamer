import { Component, Input, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { environment } from '../../environments/environment';
import { Information } from '../services/information';
import { Division } from '../services/division';
import io from 'socket.io-client';
import { Socket } from 'net';

@Component({
	templateUrl: './bracket.html',
	styleUrls: ['./bracket.css']
})

export class BracketCMP {
	socket: any = io.connect(environment.socketPath);
	seed: string = window.location.href.split('=')[1];
	divisions: Array<string> = ['Reem', 'Ano', 'Ilo', 'Eki', 'Fil', 'Tatsu', 'Leru', 'Nir', 'Sol', 'Semi Final'];
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
			Sol: 'center',
			["Semi Final"]: 'center'
		};
		return this.sanitizer.bypassSecurityTrustStyle(`--origin: ${origins[division]}`);
	}
	public divisionStyles(division: string): SafeStyle {
		return this.sanitizer.bypassSecurityTrustStyle(`--division: ${division.toLowerCase()}`);
	}

	ngOnInit() {
		this.socket.on('data', function(data: Information) {
			if (data.seed !== this.seed) {
				return;
			}
			this.currentDivision.name = data.groupName;
			this.zoomBracket = data.zoomBracket;

			this.shouldShowHeaders = data.zoomBracket;
		}.bind(this));
	}

}
