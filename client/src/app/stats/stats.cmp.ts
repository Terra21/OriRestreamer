import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
import io from 'socket.io-client';
import * as $ from 'jquery';
import { Socket } from 'net';
import { read } from 'fs';

@Component({
  templateUrl: './stats.html',
  styleUrls: ['./stats.css']
})

export class StatsCMP {
  constructor() { }

  ngOnInit(){
    this.socket.on('data', function(data: Information){
      if(data.seed !== this.seed)
        return;

        console.log(data);

        var runner1 = jQuery.grep(this.players, function(n: any, i) {
            return n.name == data.player1_twitch;
        })[0];

        var runner2 = jQuery.grep(this.players, function(n: any, i) {
          return n.name == data.player2_twitch;
        })[0];

        $.ajax({
          url: "https://sheets.googleapis.com/v4/spreadsheets/1ZNRh0DrZsY1YMd1EIiEOwmdk-3uGxmTNgX7qamzeozw/values/Stream Stats!" + runner1.startColumn + ":"+ runner1.endColumn +"?key=AIzaSyDoT4WSyHDf4a1D0qc6lhdySl92d0tXVG0",
          dataType: "json",
          error: function(response) {
            console.log(response);
          },
          success: function( response: any ) {
            this.player1 = response.values[0];
          }.bind(this)
        });

        $.ajax({
          url: "https://sheets.googleapis.com/v4/spreadsheets/1ZNRh0DrZsY1YMd1EIiEOwmdk-3uGxmTNgX7qamzeozw/values/Stream Stats!" + runner2.startColumn + ":"+ runner2.endColumn +"?key=AIzaSyDoT4WSyHDf4a1D0qc6lhdySl92d0tXVG0",
          dataType: "json",
          error: function(response) {
            console.log(response);
          },
          success: function( response: any ) {
            this.player2 = response.values[0];
          }.bind(this)
        });

      this.vm = data;
    }.bind(this));
  }

  public vm: Information = new Information();

  socket: any = io.connect('https://ori-restreamer.azurewebsites.net/');
  seed: string = window.location.href.split('=')[1];
  player1: any;
  player2: any;

  players = [ 
    {
        "name": "acridstingray3",
        "preferredName": "Acrid",
        "startColumn": "B3",
        "endColumn": "J3"
    },
    {
        "name": "AHuntersPixxel",
        "preferredName": "Pixxel",
        "startColumn": "B4",
        "endColumn": "J4"
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
      "preferredName": "CovertCupcake",
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
      "name": "FluffyPrower",
      "preferredName": "Fluffy",
      "startColumn": "B20",
      "endColumn": "J20"
    },
    {
      "name": "Grifs99",
      "preferredName": "Grifs",
      "startColumn": "B21",
      "endColumn": "J21"
    },
    {
      "name": "Grimelios",
      "preferredName": "Grimelios",
      "startColumn": "B22",
      "endColumn": "J22"
    },
    {
      "name": "Hedidiit",
      "preferredName": "Hedidit",
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
      "preferredName": "LostDedew",
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
      "preferredName": "Lurking Assassin",
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
      "preferredName": "Meldon Taragon",
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
      "preferredName": "MrGreeZ",
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
      "preferredName": "ogndrahcir",
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
      "preferredName": "Rainbow Poogle",
      "startColumn": "B44",
      "endColumn": "J44"
    },
    {
      "name": "RedR3dRum",
      "preferredName": "RedR3dRum",
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
      "name": "sickynar",
      "preferredName": "Sickynar",
      "startColumn": "B48",
      "endColumn": "J48"
    },
    {
      "name": "sigmasin",
      "preferredName": "sigma",
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
      "preferredName": "Vennguard",
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
