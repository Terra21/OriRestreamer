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
  templateUrl: './stream.html',
  styleUrls: ['./stream.css']
})

export class StreamCMP {
  constructor() { }

  ngOnInit(){
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

      this.checkIfBothPlayersFinished();
    }.bind(this));

    this.socket.on('tracker', function(data: Information){
      if(data.seed !== this.seed)
        return;

      if(data.tracker["playerLead"] == undefined)
        return;

      this.p1SpritFlameSkill = data.tracker["t1-skill-sein"];
      this.p1WallJumpSkill = data.tracker["t1-skill-walljump"];
      this.p1CFlameSkill = data.tracker["t1-skill-cflame"];
      this.p1DJumpSkill = data.tracker["t1-skill-djump"];
      this.p1DBashSkill = data.tracker["t1-skill-bash"];
      this.p1StompSkill = data.tracker["t1-skill-stomp"];
      this.p1GlideSkill = data.tracker["t1-skill-feather"];
      this.p1ClimbSkill = data.tracker["t1-skill-climb"];
      this.p1CJumpSkill = data.tracker["t1-skill-cjump"];
      this.p1GrenadeSkill = data.tracker["t1-skill-grenade"];
      this.p1DashSkill = data.tracker["t1-skill-dash"];
      this.p1First = data.tracker["playerLead"].p1 == 1;

      this.p2SpritFlameSkill = data.tracker["t2-skill-sein"];
      this.p2WallJumpSkill = data.tracker["t2-skill-walljump"];
      this.p2CFlameSkill = data.tracker["t2-skill-cflame"];
      this.p2DJumpSkill = data.tracker["t2-skill-djump"];
      this.p2DBashSkill = data.tracker["t2-skill-bash"];
      this.p2StompSkill = data.tracker["t2-skill-stomp"];
      this.p2GlideSkill = data.tracker["t2-skill-feather"];
      this.p2ClimbSkill = data.tracker["t2-skill-climb"];
      this.p2CJumpSkill = data.tracker["t2-skill-cjump"];
      this.p2GrenadeSkill = data.tracker["t2-skill-grenade"];
      this.p2DashSkill = data.tracker["t2-skill-dash"];
      this.p2First = data.tracker["playerLead"].p2 == 1;

    }.bind(this));

    this.socket.on('p1Stats', function(data: Information, text: string){
      if(data.seed !== this.seed)
        return;

        this.p1StatsText = text;
        let statbox = $('.stat-flyin.p1').addClass('show');
		setTimeout(() => statbox.removeClass('show'), 8000);

    }.bind(this));

    this.socket.on('p2Stats', function(data: Information, text: string){
      if(data.seed !== this.seed)
        return;


        this.p2StatsText = text;
        let statbox = $('.stat-flyin.p2').addClass('show');
		setTimeout(() => statbox.removeClass('show'), 8000);

    }.bind(this));

    this.socket.on('timer-set', function(ticks: number, data: Information){
      if(data.seed !== this.seed)
        return;

        clearInterval(this.timerInterval);

        this.timerInterval = setInterval(function(){
            var now = new Date().getTime();

          this.ticks = moment().startOf('day').seconds((now - ticks) / 1000).format('H:mm:ss');
        }.bind(this), 100);

    }.bind(this));

    this.socket.on('timer', function(start: boolean, data: Information){
      if(data.seed !== this.seed)
        return;

      this.player1Finished = false;
      this.player2Finished = false;

      if(!start) {
        this.timerStarted = false;
        clearInterval(this.timerInterval);
        this.ticks = "0:00:00";
		$('.timer-main').addClass('paused');
        $(".timer-finish").removeClass('winner timer-animate');
      }
      else {
        if(this.timerStarted) return;

        this.timerStarted = true;
        var seconds = new Date().getTime(), last = seconds;
		$('.timer-main').removeClass('paused');
        this.timerInterval = setInterval(function(){
          var now = new Date().getTime();
          last = now;
          this.ticks = moment().startOf('day').seconds((now - seconds) / 1000).format('H:mm:ss');
        }.bind(this), 100);
      }
    }.bind(this));

    this.socket.on('timer1', function(finished: boolean, data: Information) {
      if(data.seed !== this.seed)
        return;
      this.player1Finished = finished;
    }.bind(this));

    this.socket.on('timer2', function(finished: boolean, data: Information) {
      if(data.seed !== this.seed)
        return;
      this.player2Finished = finished;
    }.bind(this));
  }

  checkIfBothPlayersFinished(){
    if(this.player1Finished && this.player2Finished){
       clearInterval(this.timerInterval);
	  $('.timer-main').addClass('paused');
    }
    else if (this.player1Finished && !this.player2Finished){
      $(".timer-finish.p1").addClass('winner');
    }
    else if(!this.player1Finished && this.player2Finished){
      $(".timer-finish.p2").addClass('winner');
    }
    if(this.player1Finished){
      $(".timer-finish.p1").addClass('timer-animate');

      if(this.player2Finished && $(".timer-finish.p2").hasClass('winner')){
        this.ticks = this.vm.player1_finishTime;
      }
    }

    if(this.player2Finished){
      $(".timer-finish.p2").addClass('timer-animate');

      if(this.player1Finished && $(".timer-finish.p1").hasClass('winner')){
        this.ticks = this.vm.player2_finishTime;
      }
    }
  }

  player1Finished = false;
  player2Finished = false;
  timerInterval: any;
  seed: string = window.location.href.split('=')[1];

  ticks: string = "0:00:00";
  public timer: any;
  timerStarted: boolean = false;
  public vm: Information = new Information();
  socket: any = io.connect(environment.socketPath);

  p1SpritFlameSkill: boolean;
  p1WallJumpSkill: boolean;
  p1CFlameSkill: boolean;
  p1DJumpSkill: boolean;
  p1DBashSkill: boolean;
  p1StompSkill: boolean;
  p1GlideSkill: boolean;
  p1ClimbSkill: boolean;
  p1CJumpSkill: boolean;
  p1GrenadeSkill: boolean;
  p1DashSkill: boolean;

  p2SpritFlameSkill: boolean;
  p2WallJumpSkill: boolean;
  p2CFlameSkill: boolean;
  p2DJumpSkill: boolean;
  p2DBashSkill: boolean;
  p2StompSkill: boolean;
  p2GlideSkill: boolean;
  p2ClimbSkill: boolean;
  p2CJumpSkill: boolean;
  p2GrenadeSkill: boolean;
  p2DashSkill: boolean;

  p1First: boolean;
  p2First: boolean;

  p1StatsText: string;
  p2StatsText: string;

  p1FirstWin: boolean;
  p1SecondWin: boolean;
  p1ThirdWin: boolean;

  p2FirstWin: boolean;
  p2SecondWin: boolean;
  p2ThirdWin: boolean;

  players = [
    {
        "name": "acridstingray3",
        "preferredName": "Acrid",
        "startColumn": "B3",
        "endColumn": "J3",
        "statsStartColumn": "B3",
        "statsEndColumn": "CP3",
        "seed": "52"
    },
    {
        "name": "AHuntersPixxel",
        "preferredName": "Pixxel",
        "startColumn": "B4",
        "endColumn": "J4",
        "statsStartColumn": "B4",
        "statsEndColumn": "CP4",
        "seed": "55"
    },
    {
        "name": "Axetox",
        "preferredName": "Noxitu",
        "startColumn": "B5",
        "endColumn": "J5",
        "statsStartColumn": "B5",
        "statsEndColumn": "CP5",
        "seed": "44"
    },
    {
      "name": "bdbrufus",
      "preferredName": "Rufus",
      "startColumn": "B6",
      "endColumn": "J6",
      "statsStartColumn": "B6",
      "statsEndColumn": "CP6",
      "seed": "47"
    },
    {
      "name": "Brynhold2",
      "preferredName": "Brynhold",
      "startColumn": "B7",
      "endColumn": "J7",
      "statsStartColumn": "B7",
      "statsEndColumn": "CP7",
      "seed": "19"
    },
    {
      "name": "Cereberon",
      "preferredName": "Cereberon",
      "startColumn": "B8",
      "endColumn": "J8",
      "statsStartColumn": "B8",
      "statsEndColumn": "CP8",
      "seed": "39"
    },
    {
      "name": "CheeseLover",
      "preferredName": "Cheese Lover",
      "startColumn": "B9",
      "endColumn": "J9",
      "statsStartColumn": "B9",
      "statsEndColumn": "CP9",
      "seed": "8"
    },
    {
      "name": "chicken_supreme",
      "preferredName": "Chicken Supreme",
      "startColumn": "B10",
      "endColumn": "J10",
      "statsStartColumn": "B10",
      "statsEndColumn": "CP10",
      "seed": "23"
    },
    {
      "name": "Cleanfel",
      "preferredName": "Clean",
      "startColumn": "B11",
      "endColumn": "J11",
      "statsStartColumn": "B11",
      "statsEndColumn": "CP11",
      "seed": "57"
    },
    {
      "name": "Covert_Muffin",
      "preferredName": "CovertCupcake",
      "startColumn": "B12",
      "endColumn": "J12",
      "statsStartColumn": "B12",
      "statsEndColumn": "CP12",
      "seed": "13"
    },
    {
      "name": "Cubby131313",
      "preferredName": "Cubby",
      "startColumn": "B13",
      "endColumn": "J13",
      "statsStartColumn": "B13",
      "statsEndColumn": "CP13",
      "seed": "26"
    },
    {
      "name": "cutieroo1",
      "preferredName": "Cutieroo",
      "startColumn": "B14",
      "endColumn": "J14",
      "statsStartColumn": "B14",
      "statsEndColumn": "CP14",
      "seed": "67"
    },
    {
      "name": "Dileira",
      "preferredName": "Dileira",
      "startColumn": "B15",
      "endColumn": "J15",
      "statsStartColumn": "B15",
      "statsEndColumn": "CP15",
      "seed": "22"
    },
    {
      "name": "elojimmini",
      "preferredName": "Elojimmini",
      "startColumn": "B16",
      "endColumn": "J16",
      "statsStartColumn": "B16",
      "statsEndColumn": "CP16",
      "seed": "3"
    },
    {
      "name": "ephpls",
      "preferredName": "Eph",
      "startColumn": "B17",
      "endColumn": "J17",
      "statsStartColumn": "B17",
      "statsEndColumn": "CP17",
      "seed": "46"
    },
    {
      "name": "Eviona2",
      "preferredName": "Eviona",
      "startColumn": "B18",
      "endColumn": "J18",
      "statsStartColumn": "B18",
      "statsEndColumn": "CP18",
      "seed": "11"
    },
    {
      "name": "Evooki",
      "preferredName": "Evooki",
      "startColumn": "B19",
      "endColumn": "J19",
      "statsStartColumn": "B19",
      "statsEndColumn": "CP19",
      "seed": "69"
    },
    {
      "name": "FluffyPrower",
      "preferredName": "Fluffy",
      "startColumn": "B20",
      "endColumn": "J20",
      "statsStartColumn": "B20",
      "statsEndColumn": "CP20",
      "seed": "30"
    },
    {
      "name": "Grifs99",
      "preferredName": "Grifs",
      "startColumn": "B21",
      "endColumn": "J21",
      "statsStartColumn": "B21",
      "statsEndColumn": "CP21",
      "seed": "33"
    },
    {
      "name": "Grimelios",
      "preferredName": "Grimelios",
      "startColumn": "B22",
      "endColumn": "J22",
      "statsStartColumn": "B22",
      "statsEndColumn": "CP22",
      "seed": "35"
    },
    {
      "name": "Hedidiit",
      "preferredName": "Hedidit",
      "startColumn": "B23",
      "endColumn": "J23",
      "statsStartColumn": "B23",
      "statsEndColumn": "CP23",
      "seed": "65"
    },
    {
      "name": "HydraSR",
      "preferredName": "Hydra",
      "startColumn": "B24",
      "endColumn": "J24",
      "statsStartColumn": "B24",
      "statsEndColumn": "CP24",
      "seed": "1"
    },
    {
      "name": "ICED37",
      "preferredName": "ICED",
      "startColumn": "B25",
      "endColumn": "J25",
      "statsStartColumn": "B25",
      "statsEndColumn": "CP25",
      "seed": "60"
    },
    {
      "name": "IMRaziel",
      "preferredName": "Raziel",
      "startColumn": "B26",
      "endColumn": "J26",
      "statsStartColumn": "B26",
      "statsEndColumn": "CP26",
      "seed": "4"
    },
    {
      "name": "j_halcyon",
      "preferredName": "J Halcyon",
      "startColumn": "B27",
      "endColumn": "J27",
      "statsStartColumn": "B27",
      "statsEndColumn": "CP27",
      "seed": "59"
    },
    {
      "name": "JHobz296",
      "preferredName": "JHobz",
      "startColumn": "B28",
      "endColumn": "J28",
      "statsStartColumn": "B28",
      "statsEndColumn": "CP28",
      "seed": "29"
    },
    {
      "name": "kirefel",
      "preferredName": "Kirefel",
      "startColumn": "B29",
      "endColumn": "J29",
      "statsStartColumn": "B29",
      "statsEndColumn": "CP29",
      "seed": "49"
    },
    {
      "name": "LostDedew",
      "preferredName": "LostDedew",
      "startColumn": "B30",
      "endColumn": "J30",
      "statsStartColumn": "B30",
      "statsEndColumn": "CP30",
      "seed": "25"
    },
    {
      "name": "Lucidus16",
      "preferredName": "Lucidus",
      "startColumn": "B31",
      "endColumn": "J31",
      "statsStartColumn": "B31",
      "statsEndColumn": "CP31",
      "seed": ""
    },
    {
      "name": "LurkingAssassin",
      "preferredName": "Lurking Assassin",
      "startColumn": "B32",
      "endColumn": "J32",
      "statsStartColumn": "B32",
      "statsEndColumn": "CP32",
      "seed": "50"
    },
    {
      "name": "madinsane_",
      "preferredName": "madinsane",
      "startColumn": "B33",
      "endColumn": "J33",
      "statsStartColumn": "B33",
      "statsEndColumn": "CP33",
      "seed": "40"
    },
    {
      "name": "mathluco",
      "preferredName": "mathluco",
      "startColumn": "B34",
      "endColumn": "J34",
      "statsStartColumn": "B34",
      "statsEndColumn": "CP34",
      "seed": "54"
    },
    {
      "name": "MeldonTaragon",
      "preferredName": "Meldon Taragon",
      "startColumn": "B35",
      "endColumn": "J35",
      "statsStartColumn": "B35",
      "statsEndColumn": "CP35",
      "seed": "38"
    },
    {
      "name": "millsmess123",
      "preferredName": "millsmess",
      "startColumn": "B36",
      "endColumn": "J36",
      "statsStartColumn": "B36",
      "statsEndColumn": "CP36",
      "seed": "62"
    },
    {
      "name": "monkley6",
      "preferredName": "Monkley",
      "startColumn": "B37",
      "endColumn": "J37",
      "statsStartColumn": "B37",
      "statsEndColumn": "CP37",
      "seed": "17"
    },
    {
      "name": "MrGreeZ",
      "preferredName": "MrGreeZ",
      "startColumn": "B38",
      "endColumn": "J38",
      "statsStartColumn": "B38",
      "statsEndColumn": "CP38",
      "seed": "32"
    },
    {
      "name": "MrRandomson",
      "preferredName": "MrRandomson",
      "startColumn": "B39",
      "endColumn": "J39",
      "statsStartColumn": "B39",
      "statsEndColumn": "CP39",
      "seed": "20"
    },
    {
      "name": "ogndrahcir",
      "preferredName": "ogndrahcir",
      "startColumn": "B40",
      "endColumn": "J40",
      "statsStartColumn": "B40",
      "statsEndColumn": "CP40",
      "seed": "16"
    },
    {
      "name": "oshiimine",
      "preferredName": "oshiimine",
      "startColumn": "B41",
      "endColumn": "J41",
      "statsStartColumn": "B41",
      "statsEndColumn": "CP41",
      "seed": "28"
    },
    {
      "name": "Phant_TV",
      "preferredName": "Phant",
      "startColumn": "B42",
      "endColumn": "J42",
      "statsStartColumn": "B42",
      "statsEndColumn": "CP42",
      "seed": "36"
    },
    {
      "name": "qqstafoo",
      "preferredName": "Stafoo",
      "startColumn": "B43",
      "endColumn": "J43",
      "statsStartColumn": "B43",
      "statsEndColumn": "CP43",
      "seed": "12"
    },
    {
      "name": "rainbowpoogle",
      "preferredName": "Rainbow Poogle",
      "startColumn": "B44",
      "endColumn": "J44",
      "statsStartColumn": "B44",
      "statsEndColumn": "CP44",
      "seed": "61"
    },
    {
      "name": "RedR3dRum",
      "preferredName": "RedR3dRum",
      "startColumn": "B45",
      "endColumn": "J45",
      "statsStartColumn": "B45",
      "statsEndColumn": "CP45",
      "seed": "43"
    },
    {
      "name": "Roryrai",
      "preferredName": "Roryrai",
      "startColumn": "B46",
      "endColumn": "J46",
      "statsStartColumn": "B46",
      "statsEndColumn": "CP46",
      "seed": "21"
    },
    {
      "name": "shedd_",
      "preferredName": "shedd",
      "startColumn": "B47",
      "endColumn": "J47",
      "statsStartColumn": "B47",
      "statsEndColumn": "CP47",
      "seed": "7"
    },
    {
      "name": "sickynar",
      "preferredName": "Sickynar",
      "startColumn": "B48",
      "endColumn": "J48",
      "statsStartColumn": "B38",
      "statsEndColumn": "CP48",
      "seed": "58"
    },
    {
      "name": "sigmasin",
      "preferredName": "sigma",
      "startColumn": "B49",
      "endColumn": "J49",
      "statsStartColumn": "B49",
      "statsEndColumn": "CP49",
      "seed": "6"
    },
    {
      "name": "Skulblaka17",
      "preferredName": "Skulblaka",
      "startColumn": "B50",
      "endColumn": "J50",
      "statsStartColumn": "B50",
      "statsEndColumn": "CP50",
      "seed": "45"
    },
    {
      "name": "SkyFouxx",
      "preferredName": "SkyFouxx",
      "startColumn": "B51",
      "endColumn": "J51",
      "statsStartColumn": "B51",
      "statsEndColumn": "CP51",
      "seed": "41"
    },
    {
      "name": "sloaters27",
      "preferredName": "sloaters",
      "startColumn": "B52",
      "endColumn": "J52",
      "statsStartColumn": "B52",
      "statsEndColumn": "CP52",
      "seed": "31"
    },
    {
      "name": "SmashyLe",
      "preferredName": "Smashy",
      "startColumn": "B53",
      "endColumn": "J53",
      "statsStartColumn": "B53",
      "statsEndColumn": "CP53",
      "seed": "18"
    },
    {
      "name": "SomniRespiratoryFlux",
      "preferredName": "Flux",
      "startColumn": "B54",
      "endColumn": "J54",
      "statsStartColumn": "B54",
      "statsEndColumn": "CP54",
      "seed": "68"
    },
    {
      "name": "SonikBuster",
      "preferredName": "SonikBuster",
      "startColumn": "B55",
      "endColumn": "J55",
      "statsStartColumn": "B55",
      "statsEndColumn": "CP55",
      "seed": "64"
    },
    {
      "name": "TAS_Snoop",
      "preferredName": "Snoopy",
      "startColumn": "B56",
      "endColumn": "J56",
      "statsStartColumn": "B56",
      "statsEndColumn": "CP56",
      "seed": "37"
    },
    {
      "name": "Terra21",
      "preferredName": "Terra",
      "startColumn": "B57",
      "endColumn": "J57",
      "statsStartColumn": "B57",
      "statsEndColumn": "CP57",
      "seed": "14"
    },
    {
      "name": "TheRooseIsLoose89",
      "preferredName": "TheRooseIsLoose",
      "startColumn": "B58",
      "endColumn": "J58",
      "statsStartColumn": "B58",
      "statsEndColumn": "CP58",
      "seed": "15"
    },
    {
      "name": "thesparik",
      "preferredName": "Sparik",
      "startColumn": "B59",
      "endColumn": "J59",
      "statsStartColumn": "B59",
      "statsEndColumn": "CP59",
      "seed": "27"
    },
    {
      "name": "TheStimon456",
      "preferredName": "Stimon",
      "startColumn": "B60",
      "endColumn": "J60",
      "statsStartColumn": "B60",
      "statsEndColumn": "CP60",
      "seed": "24"
    },
    {
      "name": "ThisIsNotSully",
      "preferredName": "ThisIsNotSully",
      "startColumn": "B61",
      "endColumn": "J61",
      "statsStartColumn": "B61",
      "statsEndColumn": "CP61",
      "seed": "34"
    },
    {
      "name": "Tritonite_",
      "preferredName": "Tritonite",
      "startColumn": "B62",
      "endColumn": "J62",
      "statsStartColumn": "B62",
      "statsEndColumn": "CP62",
      "seed": "48"
    },
    {
      "name": "trojandude12",
      "preferredName": "Trojandude",
      "startColumn": "B63",
      "endColumn": "J63",
      "statsStartColumn": "B63",
      "statsEndColumn": "CP63",
      "seed": "9"
    },
    {
      "name": "uncleronny",
      "preferredName": "Ronny",
      "startColumn": "B64",
      "endColumn": "J64",
      "statsStartColumn": "B64",
      "statsEndColumn": "CP64",
      "seed": "2"
    },
    {
      "name": "Vennguard",
      "preferredName": "Vennguard",
      "startColumn": "B65",
      "endColumn": "J65",
      "statsStartColumn": "B65",
      "statsEndColumn": "CP65",
      "seed": "63"
    },
    {
      "name": "Vulajin",
      "preferredName": "Vulajin",
      "startColumn": "B66",
      "endColumn": "J66",
      "statsStartColumn": "B66",
      "statsEndColumn": "CP66",
      "seed": "10"
    },
    {
      "name": "Willson",
      "preferredName": "Willson",
      "startColumn": "B67",
      "endColumn": "J67",
      "statsStartColumn": "B67",
      "statsEndColumn": "CP67",
      "seed": "5"
    },
    {
      "name": "xaviershay",
      "preferredName": "Xavier",
      "startColumn": "B68",
      "endColumn": "J68",
      "statsStartColumn": "B68",
      "statsEndColumn": "CP68",
      "seed": "53"
    },
    {
      "name": "Xeirla",
      "preferredName": "Xeirla",
      "startColumn": "B69",
      "endColumn": "J69",
      "statsStartColumn": "B69",
      "statsEndColumn": "CP69",
      "seed": "70"
    },
    {
      "name": "xephros",
      "preferredName": "Xeph",
      "startColumn": "B70",
      "endColumn": "J70",
      "statsStartColumn": "B70",
      "statsEndColumn": "CP70",
      "seed": "56"
    },
    {
      "name": "Yoco21",
      "preferredName": "Yoco",
      "startColumn": "B71",
      "endColumn": "J71",
      "statsStartColumn": "B71",
      "statsEndColumn": "CP71",
      "seed": "66"
    },
    {
      "name": "Zacknir",
      "preferredName": "Zacknir",
      "startColumn": "B72",
      "endColumn": "J72",
      "statsStartColumn": "B72",
      "statsEndColumn": "CP72",
      "seed": "42"
    },
    {
      "name": "Zic3",
      "preferredName": "Zic",
      "startColumn": "B73",
      "endColumn": "J73",
      "statsStartColumn": "B73",
      "statsEndColumn": "CP73",
      "seed": "51"
    },
 ]
}
