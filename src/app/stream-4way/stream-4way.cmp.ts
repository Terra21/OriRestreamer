import { Component } from '@angular/core';
import { Information } from '../services/information';
import { BaseCMP } from '../core/base.cmp';

@Component({
	templateUrl: './stream-4way.html',
	styleUrls: ['./stream-4way.css']
})
	
export class Stream4WayCMP extends BaseCMP {
	constructor() {
		super();
	 }

	ngOnInit() {
		this.socket.on('data', function(data: Information){
			if(data.seed !== this.seed)
				return;

			this.vm = data;
			this.setData();
		}.bind(this));

		this.setData();
	}

	setData() {
		this.player1 = this.getPlayerById(this.vm.player1Id);
		this.player2 = this.getPlayerById(this.vm.player2Id);
		this.player3 = this.getPlayerById(this.vm.player3Id);
		this.player4 = this.getPlayerById(this.vm.player4Id);
	}
}