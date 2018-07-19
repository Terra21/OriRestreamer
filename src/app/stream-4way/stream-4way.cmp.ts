import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
import { Player } from '../services/player.enum';
import { environment } from '../../environments/environment';
import * as moment from 'moment';
import * as $ from 'jquery';
import io from 'socket.io-client';
import { Socket } from 'net';


@Component({
    templateUrl: './stream-4way.html',
    styleUrls: ['./stream-4way.css']
  })
  
  export class Stream4WayCMP {
    constructor() { }

    ngOnInit(){
        this.debug();

        this.socket.on('data', function(data: Information){
          if(data.seed !== this.seed)
            return;
    
          this.vm = data;
    
          this.p1FirstWin = this.vm.player1_winCount >= 1;
          this.p1SecondWin = this.vm.player1_winCount >= 2;
          this.p1ThirdWin = this.vm.player1_winCount >= 3;
    
          this.p2FirstWin = this.vm.player2_winCount >= 1;
          this.p2SecondWin = this.vm.player2_winCount >= 2;
          this.p2ThirdWin = this.vm.player2_winCount >= 3;
    
          this.team1Name = jQuery.grep(this.teams, function(n: any, i) {
            return n.id == data.team1Id;
          })[0].name;

          this.team2Name = jQuery.grep(this.teams, function(n: any, i) {
            return n.id == data.team2Id;
          })[0].name;

        }.bind(this));
  }

  debug(){
        this.team1Name = jQuery.grep(this.teams, function(n: any, i) {
            return n.id == this.vm.team1Id;
        }.bind(this))[0].name;

        this.player1Name = jQuery.grep(this.teams, function(n: any, i) {
          return n.id == this.vm.team1Id;
      }.bind(this))[0].p1Name;

        this.player2Name = jQuery.grep(this.teams, function(n: any, i) {
          return n.id == this.vm.team1Id;
      }.bind(this))[0].p2Name;

        this.team2Name = jQuery.grep(this.teams, function(n: any, i) {
            return n.id == this.vm.team2Id;
        }.bind(this))[0].name;

        this.player3Name = jQuery.grep(this.teams, function(n: any, i) {
          return n.id == this.vm.team2Id;
      }.bind(this))[0].p1Name;

      this.player4Name = jQuery.grep(this.teams, function(n: any, i) {
        return n.id == this.vm.team2Id;
    }.bind(this))[0].p2Name;

  }

  public vm: Information = new Information();
  socket: any = io.connect(environment.socketPath);
  seed: string = window.location.href.split('=')[1];

  team1Name: string;
  team2Name: string;

  player1Name: string;
  player2Name: string;
  player3Name: string;
  player4Name: string;

  players = [
    {
        'name': 'TheRooseIsLoose89',
        'preferredName': 'TheRooseIsLoose',
        'seed': '20'
    },
    {
      'name': 'Terra21',
      'preferredName': 'Terra',
      'seed': '19'
    },
  ];

  teams = [
    {
      'id': 1,
      'name': 'Team Zote',
      'p1Name': 'Terra',
      'p1PreferredName': 'Terra21',
      'p2Name': 'Grimelios',
      'p2PreferredName': 'Grimelios',
      'seed': '20'
    },
    {
      'id': 2,
      'name': 'Team Polarity Shift',
      'p1Name': 'eikocastsholy',
      'p1PreferredName': 'Eiko',
      'p2Name': 'Skulblaka17',
      'p2PreferredName': 'Skulblaka',
      'seed': '20'
    }
  ]
}