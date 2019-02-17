import { Component } from '@angular/core';
import { Information } from '../services/information';
import { environment } from '../../environments/environment';
import * as $ from 'jquery';
import * as moment from 'moment';
import io from 'socket.io-client';

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

		this.vm.players.sort(function(a, b) {
			let nameA=a.preferredName.toLowerCase(), nameB = b.preferredName.toLowerCase();
			if(nameA < nameB)
				return -1;
			if(nameA > nameB)
				return 1;
			return 0;
		});
	}

	playersList: any;
	urlSeed: string = window.location.href.split('=')[1];
	timerStarted = false;
	timer1Paused = false;
	timer2Paused = false;
	hasPlayer1Finished = false;
	hasPlayer2Finished = false;

	canStartTimer: boolean = !this.timer1Paused && !this.timer2Paused && !this.timerStarted;

	t1P1_Time = '0:00:00';
	t1P2_Time = '0:00:00';
	t2P1_Time = '0:00:00';
	t2P2_Time = '0:00:00';

	socket: any = io.connect(environment.socketPath);

	p1StatsSelectionId = 0;
	p2StatsSelectionId = 0;

	player1Stats: any;
	player2Stats: any;

	p1StatsText: string;
	p2StatsText: string;

	setBackground(background: string) {
		this._vm.background = background;
	}

	updateInfo(){
		this.socket.emit('data', this.vm);
	}

	player1Winner() {
		this.vm.soloWinner = 1;
		this.socket.emit('data', this.vm);
	}

	player2Winner() {
		this.vm.soloWinner = 2;
		this.socket.emit('data', this.vm);
	}

	resetWinner() {
		this.vm.soloWinner = 0;
		this.vm.currentSeries = [{ winner: 0, name: 'Match 1'}, {winner: 0, name: 'Match 2'}, {winner: 0, name: 'Match 3'}];
		this.vm.player1_winCount = 0;
		this.vm.player2_winCount = 0;
		this.p1_wins = 0;
		this.p2_wins = 0;
		this.socket.emit('data', this.vm);
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
		return this.getPlayerById(this._vm.player1Id).name;
	}

	public get p2_name(): string {
		return this.getPlayerById(this._vm.player2Id).name;
	}

	public get p1_twitch(): number {
		return this._vm.player1Id;
	}

	public get p2_twitch(): number {
		return this._vm.player2Id;
	}

	public get p3_twitch(): number {
		return this._vm.player3Id;
	}

	public get p4_twitch(): number {
		return this._vm.player4Id;
	}

	public set p1_twitch(p1: number){
		this._vm.player1Id = p1;
	}

	public set p2_twitch(p2: number){
		this._vm.player2Id = p2;
	}

	public set p3_twitch(p3: number){
		this._vm.player3Id = p3;
	}

	public set p4_twitch(p4: number){
		this._vm.player4Id = p4;
	}
 
	public get p1_wins(): number {
		return this._vm.player1_winCount;
	}

	//Bug with angular that calls setters twice

	p1WinsSet: boolean = false;
	p2WinsSet: boolean = false;

	public set p1_wins(wins: number){
		if(wins === 0){
			this._vm.player1_winCount = 0;
			return;
		}

		if(!this.p1WinsSet){
			this.p1WinsSet = true;
			return;
		}
		else{
			for(let i = 0; i < this._vm.currentSeries.length; i++){
				if(this._vm.currentSeries[i].winner === 0){
					this._vm.currentSeries[i].winner = 1;
					console.log(this._vm.currentSeries);
					this._vm.player1_winCount = wins;
					this.p1WinsSet = false;
					return;
				}
			}
	
			this._vm.player1_winCount = wins;
		}
	}

	public get p2_wins(): number {
		return this._vm.player2_winCount;
	}

	public set p2_wins(wins: number){
		if(wins === 0){
			this._vm.player2_winCount = 0;
			return;
		}

		if(!this.p2WinsSet){
			this.p2WinsSet = true;
			return;
		}
		else{
			for(let i = 0; i < this._vm.currentSeries.length; i++){
				if(this._vm.currentSeries[i].winner === 0){
					this._vm.currentSeries[i].winner = 2;
					this._vm.player2_winCount = wins;
					this.p2WinsSet = false;
					return;
				}
			}
		}
	}

	public get bestOf(): number {
		return this._vm.bestOf;
	}

	public set tournament(tournament: number){
		this._vm.tournament = tournament;
	}

	public get tournament(): number {
		return this._vm.tournament;
	}
	
	public set bracket(bracket: string){
		this._vm.bracket = bracket;
	}

	public get bracket(): string {
		return this._vm.bracket;
	}

	public set bestOf(bestOf: number){
		this._vm.bestOf = bestOf;
	}

	public get p1_seed(): string {
		return this.getPlayerById(this._vm.player1Id).seed;
	}

	public get p2_seed(): string {
		return this.getPlayerById(this._vm.player2Id).seed;
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

	getPlayerById(id: number) {
		return  jQuery.grep(this.vm.players, function(n: any, i) {
			return n.id == id;
		}.bind(this))[0];
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

	
	calculateStat(playerId: number) {
		let title = jQuery.grep(this.stats, function(n: any, i) {
		  return n.index == this.p1StatsSelectionId;
		}.bind(this))[0];
	
		let player = this.getPlayerById(playerId);
		console.log(player);

		$.ajax({
		  url: 'https://sheets.googleapis.com/v4/spreadsheets/1cnJai1UJb9qmriC6lVpCiz0-wq_nbg-BxuywtmrrZ-8/values/Stats Summary!' + player.raceStatsStartColumn + ':' + player.raceStatsEndColumn + '?key=AIzaSyBg9fQgl81Zhk2shiOIYm1k4o9Kv3dvxHU',
		  dataType: 'json',
		  error: function(response) {
			console.log(response);
		  },
		  success: function( response: any ) {
			console.log(response.values[0]);
			this.player1Stats = response.values[0];
			console.log(this.player1Stats);
			if (this.player1Stats[this._vm.player1_stats] == '')
			this.player1Stats[this._vm.player1_stats] = 'Does not attempt';
		  else{
			if (title.convertToPercentage  && !isNaN(this.player1Stats[this._vm.player1_stats] * 100))
			this.player1Stats[this._vm.player1_stats] = (this.player1Stats[this._vm.player1_stats] * 100).toFixed(2) + '%';
		  }
	
		  console.log(this.player1Stats[this._vm.player1_stats]);
	
		  this.p1StatsText = title.name + ': ' + this.player1Stats[this._vm.player1_stats];
	
		  }.bind(this)
		});
	
	}

	matchTypes = [{
		name: 'Qualifier',
		value: 0
	},
	{
		name: 'Best of 1',
		value: 1
	},
	{
		name: 'Best of 3',
		value: 3
	}];

	tournaments = [{
		name: 'All Skills',
		value: 1
	},
	{
		name: 'All Cells',
		value: 2
	}];

	brackets = [{
		value: 'Singles (Left)',
		name: 'Left'
	},
	{
		value: 'Singles (Right)',
		name: 'Right'
	},
	{
		value: 'Top 8',
		name: 'Top 8'
	}];

stats = [{
    index: 0,
    name: 'Average Race Time',
    convertToPercentage: false
  },
  {
    index: 1,
    name: 'Best Race Time',
    convertToPercentage: false
  },
  {
    index: 2,
    name: 'Worst Race Time',
    convertToPercentage: false
  },
  {
    index: 12,
    name: 'Grotto Cycle (Success %)',
    convertToPercentage: true
  },
  {
    index: 19,
    name: 'Grotto Skip (Success %)',
    convertToPercentage: true
  },
  {
    index: 34,
    name: 'Swamp Entry (Success %)',
    convertToPercentage: true
  },
  {
    index: 43,
    name: 'Kuro CS Skip (Success %)',
    convertToPercentage: true
  },
  {
    index: 50,
    name: 'Stompless (Success %)',
    convertToPercentage: true
  },
  {
    index: 57,
    name: 'Sorrow Bash (Success %)',
    convertToPercentage: true
  },
  {
    index: 84,
    name: 'Door Warp (Success %)',
    convertToPercentage: true
  },
  {
    index: 87,
    name: 'Grenade Jump (Success %)',
    convertToPercentage: true
  },
  {
    index: 3,
    name: 'Wall Jump (Average)',
    convertToPercentage: false
  },
  {
    index: 4,
    name: 'Wall Jump (Best)',
    convertToPercentage: false
  },
  {
    index: 5,
    name: 'Wall Jump (Worst)',
    convertToPercentage: false
  },
  {
    index: 6,
    name: 'Dash (Average)',
    convertToPercentage: false
  },
  {
    index: 7,
    name: 'Dash (Best)',
    convertToPercentage: false
  },
  {
    index: 8,
    name: 'Dash (Worst)',
    convertToPercentage: false
  },
  {
    index: 13,
    name: 'Double Jump (Average)',
    convertToPercentage: false
  },
  {
    index: 14,
    name: 'Double Jump (Best)',
    convertToPercentage: false
  },
  {
    index: 15,
    name: 'Double Jump (Worst)',
    convertToPercentage: false
  },
  {
    index: 22,
    name: 'Enter Ginso (Average)',
    convertToPercentage: false
  },
  {
    index: 23,
    name: 'Enter Ginso (Best)',
    convertToPercentage: false
  },
  {
    index: 24,
    name: 'Enter Ginso (Worst)',
    convertToPercentage: false
  },
  {
    index: 28,
    name: 'Bash (Average)',
    convertToPercentage: false
  },
  {
    index: 29,
    name: 'Bash (Best)',
    convertToPercentage: false
  },
  {
    index: 30,
    name: 'Bash (Worst)',
    convertToPercentage: false
  },
  {
    index: 37,
    name: 'Stomp (Average)',
    convertToPercentage: false
  },
  {
    index: 38,
    name: 'Stomp (Best)',
    convertToPercentage: false
  },
  {
    index: 39,
    name: 'Stomp (Worst)',
    convertToPercentage: false
  },
  {
    index: 44,
    name: 'Charge Flame (Average)',
    convertToPercentage: false
  },
  {
    index: 45,
    name: 'Charge Flame (Best)',
    convertToPercentage: false
  },
  {
    index: 46,
    name: 'Charge Flame (Worst)',
    convertToPercentage: false
  },
  {
    index: 51,
    name: 'Feather (Average)',
    convertToPercentage: false
  },
  {
    index: 52,
    name: 'Feather (Best)',
    convertToPercentage: false
  },
  {
    index: 53,
    name: 'Feather (Worst)',
    convertToPercentage: false
  },
  {
    index: 60,
    name: 'Charge Jump (Average)',
    convertToPercentage: false
  },
  {
    index: 61,
    name: 'Charge Jump (Best)',
    convertToPercentage: false
  },
  {
    index: 62,
    name: 'Charge Jump (Worst)',
    convertToPercentage: false
  },
  {
    index: 66,
    name: 'Climb (Average)',
    convertToPercentage: false
  },
  {
    index: 67,
    name: 'Climb (Best)',
    convertToPercentage: false
  },
  {
    index: 68,
    name: 'Climb (Worst)',
    convertToPercentage: false
  },
  {
    index: 72,
    name: 'Grenade (Average)',
    convertToPercentage: false
  },
  {
    index: 73,
    name: 'Grenade (Best)',
    convertToPercentage: false
  },
  {
    index: 74,
    name: 'Grenade (Worst)',
    convertToPercentage: false
  },
  {
    index: 78,
    name: 'Enter Horu (Average)',
    convertToPercentage: false
  },
  {
    index: 79,
    name: 'Enter Horu (Best)',
    convertToPercentage: false
  },
  {
    index: 80,
    name: 'Enter Horu (Worst)',
    convertToPercentage: false
  }
];
}
