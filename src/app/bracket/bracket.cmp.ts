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
	divisions: Array<string> = ['Singles (Left)', 'Singles (Right)'];
	currentDivision: Division = new Division();
	shouldShowHeaders = true;
	zoomBracket = false;
	bracket: string = "Singles (Left)";

	constructor(private sanitizer: DomSanitizer) { }

	public setOrigin(division: string): SafeStyle {
		const origins = {
			["Singles (Left)"]: 'left 66.6666%',
			["Singles (Right)"]: 'right 33.3333%',
			Doubles: 'center'
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

			this.currentDivision.name = data.bracket;
			this.zoomBracket = data.zoomBracket;

			this.shouldShowHeaders = data.zoomBracket;


		}.bind(this));
	}

}
