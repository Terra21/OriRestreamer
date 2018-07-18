import { Component, Input, transition } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
import { environment } from '../../environments/environment';
import * as moment from 'moment';
import * as $ from 'jquery';
import io from 'socket.io-client';
import { retry } from 'rxjs/operators/retry';

@Component({
  templateUrl: './controls.html',
  styleUrls: ['./controls.css']
})
export class ControlsCMP {
  constructor() {}

  ngOnInit(){
    this.seed = this.urlSeed;
    this.socket.on('data', function(data: Information){
      if (data.seed !== this.seed)
        return;

        if (this.updating)
          return;

      this.vm = data;


    }.bind(this));

    this.socket.on('timer', function(start: boolean, data: Information){
      if (data.seed !== this.seed)
        return;

      if (!start) {
        clearInterval(this.player1Interval);
        clearInterval(this.player2Interval);
        this.ticks1 = '0:00:00';
        this.ticks2 = '0:00:00';
      }
      else {
        if (this.timerStarted) return;

        this.timerStarted = true;
        let seconds = new Date().getTime(), last = seconds;
        this.player1Interval = setInterval(function(){
          if (this.timer1Paused)
            return;

          let now = new Date().getTime();
          last = now;
          this.ticks1 = moment().startOf('day').seconds((now - seconds) / 1000).format('H:mm:ss');
        }.bind(this), 100);

        this.player2Interval = setInterval(function(){
          if (this.timer2Paused)
            return;

          let now = new Date().getTime();
          last = now;
          this.ticks2 = moment().startOf('day').seconds((now - seconds) / 1000).format('H:mm:ss');
        }.bind(this), 100);
      }
    }.bind(this));

    this.socket.on('timer1', function(finished: boolean, data: Information) {
      if (data.seed !== this.seed)
        return;

      if (!finished) {
      }
      else {
        this._vm.player1_finishTime = this.ticks1;
        if(this._vm.player2_finishTime == '0:00:00')
          ++this._vm.player1_winCount;
        this.socket.emit('data', this.vm);
        clearInterval(this.player1Interval);
      }
    }.bind(this));

    this.socket.on('timer2', function(finished: boolean, data: Information) {
      if (data.seed !== this.seed)
        return;

      if (!finished) {
      }
      else {
        this._vm.player2_finishTime = this.ticks2;
        if(this._vm.player1_finishTime == '0:00:00')
          ++this._vm.player2_winCount;
        this.socket.emit('data', this.vm);
        clearInterval(this.player2Interval);
      }
    }.bind(this));

    console.log(this.players);
  }

  playersList: any;
  urlSeed: string = window.location.href.split('=')[1];
  timerStarted = false;
  timer1Paused = false;
  timer2Paused = false;
  hasPlayer1Finished = false;
  hasPlayer2Finished = false;

  canStartTimer: boolean = !this.timer1Paused && !this.timer2Paused && !this.timerStarted;

  ticks1 = '0:00:00';
  ticks2 = '0:00:00';
  player1Interval: any;
  player2Interval: any;
  public nameTimer: Observable<number> = Observable.timer(0, 1000);
  public timer2: Observable<number> = Observable.timer(0, 1000);
  private $timer2: Subscription;
  socket: any = io.connect(environment.socketPath);
  isLinked = false;
  linkedInterval: any;

  p1StatsSelectionId = 0;
  p2StatsSelectionId = 0;

  player1Stats: any;
  player2Stats: any;

  p1StatsText: string;
  p2StatsText: string;

  setBackground(background: string) {
    switch (background){
      case 'iceless':
        this._vm.groupName = 'Iceless';
        break;
    }
    this._vm.background = background;
  }

  private setDivisionName(name: string){
    return name + ' Division';
  }

  private setGroupName(name: string){
    return 'Group Stage - ' + name;
  }

  updateInfo(){
    this.socket.emit('data', this.vm);
  }

  linkTracker() {
    if (this.isLinked)
      return;

    this.isLinked = true;

    this.linkedInterval = setInterval(function(){
      $.ajax({
        url: 'https://www.meldontaragon.org/ori/tracker/allskills/server.php?match=' + this._vm.seed,
        dataType: 'json',
        error: function(response) {
          console.log(response);
        },
        success: function( response: any ) {
            this._vm.tracker = JSON.parse(JSON.stringify(response));
            this.socket.emit('tracker', this.vm);
        }.bind(this)
      });
    }.bind(this), 1000);
  }

  unlink(){
    this.isLinked = false;
    clearInterval(this.linkedInterval);
  }

  start() {
    let changedTimer = false;
    if (this.timer1Paused){
      changedTimer = true;
      clearInterval(this.player1Interval);
      this.timer1Paused = false;

      let ticks1Array = this.ticks1.split(':');

      let newTicksSecondsHours = (parseInt(ticks1Array[0]) * 3600);
      let newTicksSecondsMinutes = (parseInt(ticks1Array[1]) * 60);
      let newTicksSeconds = parseInt(ticks1Array[2]) + newTicksSecondsHours + newTicksSecondsMinutes;
      let newP1TimerTicks = moment().startOf('day').seconds(newTicksSeconds).format('H:mm:ss');

      var p1seconds = new Date().getTime() - (newTicksSeconds * 1000);

      this.player1Interval = setInterval(function(){
        if (this.timer1Paused)
          return;

          let now = new Date().getTime();

        this.ticks1 = moment().startOf('day').seconds((now - p1seconds) / 1000).format('H:mm:ss');
      }.bind(this), 100);
    }

    if (this.timer2Paused){
      changedTimer = true;
      clearInterval(this.player2Interval);
      this.timer2Paused = false;

      let ticks2Array = this.ticks2.split(':');

      let newTicks2SecondsHours = (parseInt(ticks2Array[0]) * 3600);
      let newTicks2SecondsMinutes = (parseInt(ticks2Array[1]) * 60);
      let newTicks2Seconds = parseInt(ticks2Array[2]) + newTicks2SecondsHours + newTicks2SecondsMinutes;
      let newP2TimerTicks = moment().startOf('day').seconds(newTicks2Seconds).format('H:mm:ss');

      var p2seconds = new Date().getTime() - (newTicks2Seconds * 1000);

      this.player2Interval = setInterval(function(){
        if (this.timer2Paused)
          return;

          let now = new Date().getTime();

        this.ticks2 = moment().startOf('day').seconds((now - p2seconds) / 1000).format('H:mm:ss');
      }.bind(this), 100);

    }

    if (changedTimer){
      console.log(p2seconds);
      console.log(p1seconds);
      if (p2seconds > p1seconds){
        if (p1seconds !== undefined)
        this.socket.emit('timer-set', p1seconds, this.vm);
        else
        this.socket.emit('timer-set', p2seconds, this.vm);
      } else {
        if (p2seconds !== undefined)
          this.socket.emit('timer-set', p2seconds, this.vm);
          else
          this.socket.emit('timer-set', p1seconds, this.vm);
      }
      changedTimer = false;
    }

    if (this.timer2Paused){
      return;
    }

    if (this.hasPlayer1Finished && this.hasPlayer2Finished){
      return;
    }

    if (!this.timerStarted){
      this.socket.emit('timer', true, this.vm);
    }

    this.timer1Paused = false;
    this.timer2Paused = false;
  }

  player1Paused(){
    if (this.timerStarted)
      this.timer1Paused = true;

  }

  player2Paused(){
    if (this.timerStarted)
      this.timer2Paused = true;
  }

  reset() {
  if (!confirm('Reset?'))
  return;

    this.timerStarted = false;
    this.timer1Paused = false;
    this.timer2Paused = false;
    this.hasPlayer1Finished = false;
    this.hasPlayer2Finished = false;
    this._vm.player1_finishTime = '0:00:00';
    this._vm.player2_finishTime = '0:00:00';
    this.socket.emit('data', this.vm);
    this.socket.emit('timer', false, this.vm);
  }

  player1Finished() {
    if (this.hasPlayer1Finished){
      this._vm.player1_finishTime = this.ticks1;
      this.socket.emit('data', this.vm);
      return;
    }

    this.hasPlayer1Finished = true;
    this.socket.emit('timer1', true, this.vm);
  }

  player2Finished() {
    if (this.hasPlayer2Finished){
      this._vm.player2_finishTime = this.ticks2;
      this.socket.emit('data', this.vm);
      return;
    }

    this.hasPlayer2Finished = true;
    this.socket.emit('timer2', true, this.vm);
  }

  setP1Name(event: any){
    let runner = jQuery.grep(this.players, function(n: any, i) {
      return n.name == event;
    })[0];
    this.vm.player1 = runner.preferredName;
    this.vm.player1_seed = runner.seed;
  }

  setP2Name(event: any){
    let runner = jQuery.grep(this.players, function(n: any, i) {
      return n.name == event;
    })[0];
    this.vm.player2 = runner.preferredName;
    this.vm.player2_seed = runner.seed;
  }

  private _vm: Information = new Information();
  public get vm(): Information {
    return this._vm;
  }

  public set vm(info: Information) {
    this._vm = info;
  }

  public get hidePlayer1Timer(): boolean {
    return this._vm.player1_timerVisible;
  }

  public set hidePlayer1Timer(timerSelected: boolean) {
    this._vm.player1_timerVisible = timerSelected;
  }

  public get hidePlayer2Timer(): boolean {
    return this._vm.player2_timerVisible;
  }

  public set hidePlayer2Timer(timerSelected: boolean) {
    this._vm.player2_timerVisible = timerSelected;
  }

  public set matchType(matchType: string){
    this._vm.matchType = matchType;
  }

  public get matchType(): string {
    return this._vm.matchType;
  }

  public set commentators(commentators: string){
    this._vm.commentators = commentators;
  }

  public get commentators(): string {
    return this._vm.commentators;
  }

  public set zoomBracket(zoomBracket: boolean){
    this._vm.zoomBracket = zoomBracket;
  }

  public get zoomBracket(): boolean {
    return this._vm.zoomBracket;
  }

public get seed(): string {
  return this._vm.seed;
}

public set seed(seed: string){
  this._vm.seed = seed;
}

  public get p1_name(): string {
    return this._vm.player1;
  }

  public set p1_name(p1: string) {
    this._vm.player1 = p1;
  }

  public get p2_name(): string {
    return this._vm.player2;
  }

  public set p2_name(p2: string) {
    this._vm.player2 = p2;
  }

  public get p1_twitch(): string {
    return this._vm.player1_twitch;
  }

  public set p1_twitch(p1: string){
    this._vm.player1_twitch = p1;
  }

  public get p2_twitch(): string {
    return this._vm.player2_twitch;
  }

  public set p2_twitch(p2: string){
    this._vm.player2_twitch = p2;
  }
 
  public get p1_wins(): number {
    return this._vm.player1_winCount;
  }

  public set p1_wins(wins: number){
    this._vm.player1_winCount = wins;
  }

  public get p2_wins(): number {
    return this._vm.player2_winCount;
  }

  public set p2_wins(wins: number){
    this._vm.player2_winCount = wins;
  }

  public get bestOf(): number {
    return this._vm.bestOf;
  }

  public set bestOf(bestOf: number){
    this._vm.bestOf = bestOf;
  }

  public get p1_seed(): string {
    return this._vm.player1_seed;
  }

  public set p1_seed(p1: string){
    this._vm.player1_seed = (p1 !== '' || undefined || null) ? p1 : null;
  }

  public get p2_seed(): string {
    return this._vm.player2_seed;
  }

  public set p2_seed(p2: string){
    this._vm.player2_seed = (p2 !== '' || undefined || null) ? p2 : null;
  }

  public get randomizer(){
    return this._vm.randomizer;
  }

  public set randomizer(randomizer: boolean){
    this._vm.randomizer = randomizer;
  }

  public get p1_audio(): boolean {
    return this._vm.currentAudioOnPlayer == 1;
  }

  public set p1_audio(audioSelected: boolean) {
    this._vm.currentAudioOnPlayer = audioSelected ? 1 : this._vm.currentAudioOnPlayer;
  }

  public get p2_audio(): boolean {
    return this._vm.currentAudioOnPlayer == 2;
  }

  public set p2_audio(audioSelected: boolean) {
    this._vm.currentAudioOnPlayer = audioSelected ? 2 : this._vm.currentAudioOnPlayer;
  }

  public get t1Id(): number {
    return this._vm.team1Id;
  }

  public set t1Id(id: number) {
    this._vm.team1Id = id;
  }

  public get t2Id(): number {
    return this._vm.team2Id;
  }

  public set t2Id(id: number) {
    this._vm.team2Id = id;
  }

  setP1Stats(){
    this.socket.emit('p1Stats', this._vm, this.p1StatsText);
  }

  setP2Stats() {
    this.socket.emit('p2Stats', this._vm, this.p2StatsText);
  }

  setBothStats(){
    this.setP1Stats();
    this.setP2Stats();
  }

  matchTypes = [{
    name: 'Best of 1',
    value: 1
  },
  {
    name: 'Best of 3',
    value: 3
  },
  {
    name: 'Best of 5',
    value: 5
  }];

  stats = [{
    index: 0,
    name: 'Free Text',
    convertToPercentage: false
  }
];
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
