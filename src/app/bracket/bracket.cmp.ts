import { Component, Input, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { environment } from '../../environments/environment';
import { Information } from '../services/information';
import { Division } from '../services/division';
import { BaseCMP } from '../core/base.cmp';

@Component({
	templateUrl: './bracket.html',
	styleUrls: ['./bracket.css']
})

export class BracketCMP extends BaseCMP {
	constructor(private sanitizer: DomSanitizer) {
		super();
	 }

	divisions: Array<string> = ['Singles (Left)', 'Singles (Right)', 'Top 8'];
	currentDivision: Division = new Division();
	shouldShowHeaders = true;
	zoomBracket = false;
	bracket: string = "Singles (Left)";
	vm: Information = new Information();

	public setOrigin(division: string): SafeStyle {
		const origins = {
			["Singles (Left)"]: 'left 66.6666%',
			["Singles (Right)"]: 'right 33.3333%',
			["Top 8"]: 'center'
		};
		return this.sanitizer.bypassSecurityTrustStyle(`--origin: ${origins[division]}`);
	}

	public divisionStyles(division: string): SafeStyle {
		return this.sanitizer.bypassSecurityTrustStyle(`--division: ${division.toLowerCase()}`);
	}

	ngOnInit() {
		this.socket.on('data', function(data: Information) {
			if (data.seed !== this.seed)
				return;

			this.vm = data;
			this.getData();
		}.bind(this));

		this.getData();
	}

	getData() {
		this.currentDivision.name = this.vm.bracket;
		this.zoomBracket = this.vm.zoomBracket;
		this.shouldShowHeaders = this.vm.zoomBracket;
	}
}