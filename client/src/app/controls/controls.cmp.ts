import { Component, Input, transition } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
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
      if(data.seed !== this.seed)
        return;

        if(this.updating)
          return;

      this.vm = data;
    }.bind(this));

    this.socket.on('timer', function(start: boolean, data: Information){
      if(data.seed !== this.seed)
        return;

      if(!start) {
        clearInterval(this.player1Interval);
        clearInterval(this.player2Interval);
        this.ticks1 = "0:00:00";
        this.ticks2 = "0:00:00";
      }
      else {
        if(this.timerStarted) return;

        this.timerStarted = true;
        var seconds = new Date().getTime(), last = seconds;
        this.player1Interval = setInterval(function(){
          if(this.timer1Paused)
            return;

          var now = new Date().getTime();
          last = now;
          this.ticks1 = moment().startOf('day').seconds((now - seconds) / 1000).format('H:mm:ss');
        }.bind(this), 100);

        this.player2Interval = setInterval(function(){
          if(this.timer2Paused)
            return;

          var now = new Date().getTime();
          last = now;
          this.ticks2 = moment().startOf('day').seconds((now - seconds) / 1000).format('H:mm:ss');
        }.bind(this), 100);
      }
    }.bind(this));

    this.socket.on('timer1', function(finished: boolean, data: Information) {
      if(data.seed !== this.seed)
        return;

      if(!finished) {
      }
      else {
        this._vm.player1_finishTime = this.ticks1;
        this.socket.emit('data', this.vm);
        clearInterval(this.player1Interval);
      }
    }.bind(this));

    this.socket.on('timer2', function(finished: boolean, data: Information) {
      if(data.seed !== this.seed)
        return;

      if(!finished) {
      }
      else {
        this._vm.player2_finishTime = this.ticks2;
        this.socket.emit('data', this.vm);
        clearInterval(this.player2Interval);
      }
    }.bind(this));

    console.log(this.players);
  }

  playersList: any;
  urlSeed: string = window.location.href.split('=')[1];
  timerStarted: boolean = false;
  timer1Paused: boolean = false;
  timer2Paused: boolean = false;
  hasPlayer1Finished: boolean = false;
  hasPlayer2Finished: boolean = false;

  canStartTimer: boolean = !this.timer1Paused && !this.timer2Paused && !this.timerStarted;

  ticks1: string = "0:00:00";
  ticks2: string = "0:00:00";
  player1Interval: any;
  player2Interval: any;
  public nameTimer: Observable<number> = Observable.timer(0, 1000);
  public timer2: Observable<number> = Observable.timer(0, 1000);
  private $timer2: Subscription;
  socket: any = io.connect('https://ori-restreamer.azurewebsites.net/');
  private isLinked: boolean = false;
  linkedInterval: any;

  setBackground(background: string) {
    this._vm.background = background;
  }

  updateInfo(){
    this.socket.emit('data', this.vm);
  }

  linkTracker() {
    if(this.isLinked)
      return;

    this.isLinked = true;

    this.linkedInterval = setInterval(function(){
      $.ajax({
        url: "https://www.meldontaragon.org/ori/tracker/allskills/server.php?match=" + this._vm.seed,
        dataType: "json",
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
    var changedTimer = false;
    if(this.timer1Paused){
      changedTimer = true;
      clearInterval(this.player1Interval);
      this.timer1Paused = false;

      var ticks1Array = this.ticks1.split(":");

      var newTicksSecondsHours = (parseInt(ticks1Array[0]) * 3600);
      var newTicksSecondsMinutes = (parseInt(ticks1Array[1]) * 60);
      var newTicksSeconds = parseInt(ticks1Array[2]) + newTicksSecondsHours + newTicksSecondsMinutes;
      var newP1TimerTicks = moment().startOf('day').seconds(newTicksSeconds).format('H:mm:ss');

      var p1seconds = new Date().getTime() - (newTicksSeconds * 1000);

      this.player1Interval = setInterval(function(){
        if(this.timer1Paused)
          return;

          var now = new Date().getTime();

        this.ticks1 = moment().startOf('day').seconds((now - p1seconds) / 1000).format('H:mm:ss');
      }.bind(this), 100);
    }

    if(this.timer2Paused){
      changedTimer = true;
      clearInterval(this.player2Interval);
      this.timer2Paused = false;

      var ticks2Array = this.ticks2.split(":");

      var newTicks2SecondsHours = (parseInt(ticks2Array[0]) * 3600);
      var newTicks2SecondsMinutes = (parseInt(ticks2Array[1]) * 60);
      var newTicks2Seconds = parseInt(ticks2Array[2]) + newTicks2SecondsHours + newTicks2SecondsMinutes;
      var newP2TimerTicks = moment().startOf('day').seconds(newTicks2Seconds).format('H:mm:ss');

      var p2seconds = new Date().getTime() - (newTicks2Seconds * 1000);

      this.player2Interval = setInterval(function(){
        if(this.timer2Paused)
          return;

          var now = new Date().getTime();

        this.ticks2 = moment().startOf('day').seconds((now - p2seconds) / 1000).format('H:mm:ss');
      }.bind(this), 100);

    }

    if(changedTimer){
      console.log(p2seconds);
      console.log(p1seconds);
      if(p2seconds > p1seconds){
        if(p1seconds !== undefined)
        this.socket.emit('timer-set', p1seconds, this.vm);
        else
        this.socket.emit('timer-set', p2seconds, this.vm);
      } else {
        if(p2seconds !== undefined)
          this.socket.emit('timer-set', p2seconds, this.vm);
          else
          this.socket.emit('timer-set', p1seconds, this.vm);
      }
      changedTimer = false;
    }

    if(this.timer2Paused){
      return;
    }

    if(this.hasPlayer1Finished && this.hasPlayer2Finished){
      return;
    }

    if(!this.timerStarted){
      this.socket.emit('timer', true, this.vm);
    }

    this.timer1Paused = false;
    this.timer2Paused = false;
  }

  player1Paused(){
    this.timer1Paused = true;

  }

  player2Paused(){
    this.timer2Paused = true;
  }

  reset() {
  if(!confirm("Reset?"))
  return;

    this.timerStarted = false;
    this.timer1Paused = false;
    this.timer2Paused = false;
    this.hasPlayer1Finished = false;
    this.hasPlayer2Finished = false;
    this._vm.player1_finishTime = "0:00:00";
    this._vm.player2_finishTime = "0:00:00";
    this.socket.emit('data', this.vm);
    this.socket.emit('timer', false, this.vm);
  }

  player1Finished() {
    if(this.hasPlayer1Finished){
      this._vm.player1_finishTime = this.ticks1;
      this.socket.emit('data', this.vm);
      return;
    }

    this.hasPlayer1Finished = true;
    this.socket.emit('timer1', true, this.vm);
  }

  player2Finished() {
    if(this.hasPlayer2Finished){
      this._vm.player2_finishTime = this.ticks2;
      this.socket.emit('data', this.vm);
      return;
    }

    this.hasPlayer2Finished = true;
    this.socket.emit('timer2', true, this.vm);
  }

  setP1Name(event: any){
    var runner = jQuery.grep(this.players, function(n: any, i) {
      return n.name == event;
    })[0];
    this.vm.player1 = runner.preferredName;
  }

  setP2Name(event: any){
    var runner = jQuery.grep(this.players, function(n: any, i) {
      return n.name == event;
    })[0];
    this.vm.player2 = runner.preferredName;
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

  public get p1_seed(): string {
    return this._vm.player1_seed;
  }

  public set p1_seed(p1: string){
    this._vm.player1_seed = (p1 !== "" || undefined || null) ? p1 : null;
  }

  public get p2_seed(): string {
    return this._vm.player2_seed;
  }

  public set p2_seed(p2: string){
    this._vm.player2_seed = (p2 !== "" || undefined || null) ? p2 : null;
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

  players = [
    {
        "name": "acridstingray3",
        "preferredName": "Acrid",
        "startColumn": "B3",
        "endColumn": "J3"
    },
    {
        "name": "AHuntersPixxel",
        "preferredName": "Pix",
        "startColumn": "B4",
        "endColumn": "B4"
    },
    {
        "name": "Axetox",
        "preferredName": "Noxitu",
        "startColumn": "B5",
        "endColumn": "J5"
    },
    {
      "name": "bdbrufus",
      "preferredName": "Rufus",
      "startColumn": "B6",
      "endColumn": "J6"
    },
    {
      "name": "Brynhold2",
      "preferredName": "Brynhold",
      "startColumn": "B7",
      "endColumn": "J7"
    },
    {
      "name": "Cereberon",
      "preferredName": "Cereberon",
      "startColumn": "B8",
      "endColumn": "J8"
    },
    {
      "name": "CheeseLover",
      "preferredName": "Cheese Lover",
      "startColumn": "B9",
      "endColumn": "J9"
    },
    {
      "name": "chicken_supreme",
      "preferredName": "Chicken Supreme",
      "startColumn": "B10",
      "endColumn": "J10"
    },
    {
      "name": "Cleanfel",
      "preferredName": "Clean",
      "startColumn": "B11",
      "endColumn": "J11"
    },
    {
      "name": "Covert_Muffin",
      "preferredName": "CovertMuffin",
      "startColumn": "B12",
      "endColumn": "J12"
    },
    {
      "name": "Cubby131313",
      "preferredName": "Cubby",
      "startColumn": "B13",
      "endColumn": "J13"
    },
    {
      "name": "cutieroo1",
      "preferredName": "Cutieroo",
      "startColumn": "B14",
      "endColumn": "J14"
    },
    {
      "name": "Dileira",
      "preferredName": "Dileira",
      "startColumn": "B15",
      "endColumn": "J15"
    },
    {
      "name": "elojimmini",
      "preferredName": "Elojimmini",
      "startColumn": "B16",
      "endColumn": "J16"
    },
    {
      "name": "ephpls",
      "preferredName": "Eph",
      "startColumn": "B17",
      "endColumn": "J17"
    },
    {
      "name": "Eviona2",
      "preferredName": "Eviona",
      "startColumn": "B18",
      "endColumn": "J18"
    },
    {
      "name": "Evooki",
      "preferredName": "Evooki",
      "startColumn": "B19",
      "endColumn": "J19"
    },
    {
      "name": "Grifs99",
      "preferredName": "Grifs",
      "startColumn": "B20",
      "endColumn": "J20"
    },
    {
      "name": "Grimelios",
      "preferredName": "Grimelios",
      "startColumn": "B21",
      "endColumn": "J21"
    },
    {
      "name": "Hedidiit",
      "preferredName": "Hedidit",
      "startColumn": "B22",
      "endColumn": "J22"
    },
    {
      "name": "FluffyPrower",
      "preferredName": "Fluffy",
      "startColumn": "B23",
      "endColumn": "J23"
    },
    {
      "name": "HydraSR",
      "preferredName": "Hydra",
      "startColumn": "B24",
      "endColumn": "J24"
    },
    {
      "name": "ICED37",
      "preferredName": "ICED",
      "startColumn": "B25",
      "endColumn": "J25"
    },
    {
      "name": "IMRaziel",
      "preferredName": "Raziel",
      "startColumn": "B26",
      "endColumn": "J26"
    },
    {
      "name": "j_halcyon",
      "preferredName": "J Halcyon",
      "startColumn": "B27",
      "endColumn": "J27"
    },
    {
      "name": "jhobz296",
      "preferredName": "JHobz Numbers",
      "startColumn": "B28",
      "endColumn": "J28"
    },
    {
      "name": "kirefel",
      "preferredName": "Kirefel",
      "startColumn": "B29",
      "endColumn": "J29"
    },
    {
      "name": "LostDedew",
      "preferredName": "Dedew",
      "startColumn": "B30",
      "endColumn": "J30"
    },
    {
      "name": "Lucidus16",
      "preferredName": "Lucidus",
      "startColumn": "B31",
      "endColumn": "J31"
    },
    {
      "name": "LurkingAssassin",
      "preferredName": "Lurking",
      "startColumn": "B32",
      "endColumn": "J32"
    },
    {
      "name": "madinsane_",
      "preferredName": "madinsane",
      "startColumn": "B33",
      "endColumn": "J33"
    },
    {
      "name": "mathluco",
      "preferredName": "mathluco",
      "startColumn": "B34",
      "endColumn": "J34"
    },
    {
      "name": "MeldonTaragon",
      "preferredName": "Meldon",
      "startColumn": "B35",
      "endColumn": "J35"
    },
    {
      "name": "millsmess123",
      "preferredName": "millsmess",
      "startColumn": "B36",
      "endColumn": "J36"
    },
    {
      "name": "monkley6",
      "preferredName": "Monkley",
      "startColumn": "B37",
      "endColumn": "J37"
    },
    {
      "name": "MrGreeZ",
      "preferredName": "GreeZ",
      "startColumn": "B38",
      "endColumn": "J38"
    },
    {
      "name": "MrRandomson",
      "preferredName": "MrRandomson",
      "startColumn": "B39",
      "endColumn": "J39"
    },
    {
      "name": "ogndrahcir",
      "preferredName": "Richard",
      "startColumn": "B40",
      "endColumn": "J40"
    },
    {
      "name": "oshiimine",
      "preferredName": "oshiimine",
      "startColumn": "B41",
      "endColumn": "J41"
    },
    {
      "name": "Phant_TV",
      "preferredName": "Phant",
      "startColumn": "B42",
      "endColumn": "J42"
    },
    {
      "name": "qqstafoo",
      "preferredName": "Stafoo",
      "startColumn": "B43",
      "endColumn": "J43"
    },
    {
      "name": "rainbowpoogle",
      "preferredName": "Poogle",
      "startColumn": "B44",
      "endColumn": "J44"
    },
    {
      "name": "RedR3dRum",
      "preferredName": "Red",
      "startColumn": "B45",
      "endColumn": "J45"
    },
    {
      "name": "Roryrai",
      "preferredName": "Roryrai",
      "startColumn": "B46",
      "endColumn": "J46"
    },
    {
      "name": "shedd_",
      "preferredName": "shedd",
      "startColumn": "B47",
      "endColumn": "J47"
    },
    {
      "name": "sigmasin",
      "preferredName": "sigma",
      "startColumn": "B48",
      "endColumn": "J48"
    },
    {
      "name": "sickynar",
      "preferredName": "Sickynar",
      "startColumn": "B49",
      "endColumn": "J49"
    },
    {
      "name": "Skulblaka17",
      "preferredName": "Skulblaka",
      "startColumn": "B50",
      "endColumn": "J50"
    },
    {
      "name": "SkyFouxx",
      "preferredName": "SkyFouxx",
      "startColumn": "B51",
      "endColumn": "J51"
    },
    {
      "name": "sloaters27",
      "preferredName": "sloaters",
      "startColumn": "B52",
      "endColumn": "J52"
    },
    {
      "name": "SmashyLe",
      "preferredName": "Smashy",
      "startColumn": "B53",
      "endColumn": "J53"
    },
    {
      "name": "SomniRespiratoryFlux",
      "preferredName": "Flux",
      "startColumn": "B54",
      "endColumn": "J54"
    },
    {
      "name": "SonikBuster",
      "preferredName": "SonikBuster",
      "startColumn": "B55",
      "endColumn": "J55"
    },
    {
      "name": "TAS_Snoop",
      "preferredName": "Snoopy",
      "startColumn": "B56",
      "endColumn": "J56"
    },
    {
      "name": "Terra21",
      "preferredName": "Terra",
      "startColumn": "B57",
      "endColumn": "J57"
    },
    {
      "name": "TheRooseIsLoose89",
      "preferredName": "TheRooseIsLoose",
      "startColumn": "B58",
      "endColumn": "J58"
    },
    {
      "name": "thesparik",
      "preferredName": "Sparik",
      "startColumn": "B59",
      "endColumn": "J59"
    },
    {
      "name": "TheStimon456",
      "preferredName": "Stimon",
      "startColumn": "B60",
      "endColumn": "J60"
    },
    {
      "name": "ThisIsNotSully",
      "preferredName": "ThisIsNotSully",
      "startColumn": "B61",
      "endColumn": "J61"
    },
    {
      "name": "Tritonite_",
      "preferredName": "Tritonite",
      "startColumn": "B62",
      "endColumn": "J62"
    },
    {
      "name": "trojandude12",
      "preferredName": "Trojandude",
      "startColumn": "B63",
      "endColumn": "J63"
    },
    {
      "name": "uncleronny",
      "preferredName": "Ronny",
      "startColumn": "B64",
      "endColumn": "J64"
    },
    {
      "name": "Vennguard",
      "preferredName": "Venn",
      "startColumn": "B65",
      "endColumn": "J65"
    },
    {
      "name": "Vulajin",
      "preferredName": "Vulajin",
      "startColumn": "B66",
      "endColumn": "J66"
    },
    {
      "name": "Willson",
      "preferredName": "Willson",
      "startColumn": "B67",
      "endColumn": "J67"
    },
    {
      "name": "Vulajin",
      "preferredName": "Vulajin",
      "startColumn": "B66",
      "endColumn": "J66"
    },
    {
      "name": "Willson",
      "preferredName": "Willson",
      "startColumn": "B67",
      "endColumn": "J67"
    },
    {
      "name": "xaviershay",
      "preferredName": "Xavier",
      "startColumn": "B68",
      "endColumn": "J68"
    },
    {
      "name": "Xeirla",
      "preferredName": "Xeirla",
      "startColumn": "B69",
      "endColumn": "J69"
    },
    {
      "name": "xephros",
      "preferredName": "Xeph",
      "startColumn": "B70",
      "endColumn": "J70"
    },
    {
      "name": "Yoco21",
      "preferredName": "Yoco",
      "startColumn": "B71",
      "endColumn": "J71"
    },
    {
      "name": "Zacknir",
      "preferredName": "Zacknir",
      "startColumn": "B72",
      "endColumn": "J72"
    },
    {
      "name": "Zic3",
      "preferredName": "Zic",
      "startColumn": "B73",
      "endColumn": "J73"
    },
 ]
}
