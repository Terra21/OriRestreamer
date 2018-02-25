import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
import io from 'socket.io-client';
import * as $ from 'jquery';
import * as moment from 'moment';
import { Socket } from 'net';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  templateUrl: './intermission.html',
  styleUrls: ['./intermission.css']
})

export class IntermissionCMP {
  constructor() { }

  ngOnInit(){
	  //TODO: Add next match info
  }
}
