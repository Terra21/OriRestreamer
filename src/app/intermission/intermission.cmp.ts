import { Component } from '@angular/core';
import { Information } from '../services/information';
import { BaseCMP } from '../core/base.cmp';

@Component({
  templateUrl: './intermission.html',
  styleUrls: ['./intermission.css', '../app.component.css']
})

export class IntermissionCMP extends BaseCMP {
  constructor() {
	  super();
   }

	ngOnInit(){
		this.socket.on('data', function(data: Information){
			if (data.seed !== this.seed)
				return;

			this.vm = data;

		}.bind(this));
	}
}
