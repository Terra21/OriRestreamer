import { Component, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
import { environment } from '../../environments/environment';
import io from 'socket.io-client';
import * as $ from 'jquery';
import { Socket } from 'net';

@Component({
	templateUrl: './groups.html',
	encapsulation: ViewEncapsulation.None,
	styleUrls: ['./groups.css']
})

export class GroupsCMP {
  	constructor() { }

 	 ngOnInit(){
		$.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('https://challonge.com/orirando2018singlesswiss') + '&callback=?', function(data){
			let webpage = data.contents;
			let swissTable = $(webpage).find('#scorecard');
			
			$('#standings').append(swissTable);
		});

    	this.socket.on('data', function(data: Information){
      
      	if(data.seed !== this.seed)
        	return;



    	}.bind(this));
  	}

  	public vm: Information = new Information();

  	swiss: any;
  	socket: any = io.connect(environment.socketPath);
  	seed: string = window.location.href.split('=')[1];
}
