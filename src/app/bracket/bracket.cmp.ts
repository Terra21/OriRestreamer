import { Component, Input, OnDestroy } from '@angular/core';
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
  divisions: Array<string> = [ 'Reem', 'Ano', 'Ilo', 'Eki', 'Fil', 'Tatsu', 'Leru', 'Nir' ];
  currentDivision: Division = new Division();
  shouldShowHeaders: boolean = false;

  constructor() { }

  ngOnInit(){
    this.socket.on('data', function(data: Information){
      switch(data.groupName.toLowerCase()){
        case 'reem':
		  this.currentDivision.name = 'Reem';
          break;
        case 'ano':
		  this.currentDivision.name = 'Ano';
          break;
        case 'ilo':
		  this.currentDivision.name = 'Ilo';
          break;
        case 'eki':
		  this.currentDivision.name = 'Eki';
          break;
        case 'fil':
		  this.currentDivision.name = 'Fil';
          break;
        case 'tatsu':
		  this.currentDivision.name = 'Tatsu';
          break;
        case 'leru':
		  this.currentDivision.name = 'Leru';
          break;
        case 'nir':
		  this.currentDivision.name = 'Nir';
          break;
      }
	  $('.full-bracket').removeClass('Reem Ano Ilo Eki Fil Tatsu Leru Nir');

	  if (data.zoomBracket) {
		  $('.full-bracket').addClass(`zoom ${this.currentDivision.name}`);
	  } else {
		  $('.full-bracket').removeClass('zoom');
	  }

	  this.shouldShowHeaders = data.zoomBracket;
    }.bind(this));
  }

}
