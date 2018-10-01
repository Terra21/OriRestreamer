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

	resetAverage() {
		this.vm.team1_FinishTime = 0;
		this.vm.team2_FinishTime = 0;
		this.t1P1_Time = "0:00:00";
		this.t1P2_Time = "0:00:00";
		this.t2P1_Time = "0:00:00";
		this.t2P2_Time = "0:00:00";

		this.socket.emit('data', this.vm);
	}

	calcAverage() {
		this.calcTeam1Average();
		this.calcTeam2Average();

		this.socket.emit('data', this.vm);
	}

	calcTeam1Average() {
		let a = this.t1P1_Time.split(':');
		let b = this.t1P2_Time.split(':');
		let p1Ticks = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
		let p2Ticks = (+b[0]) * 60 * 60 + (+b[1]) * 60 + (+b[2]);

		let average = (p1Ticks + p2Ticks) / 2;
		if(p1Ticks != 0 && p2Ticks != 0) {
			this.vm.team1_FinishTime = average;
		}
	}
		
	calcTeam2Average() {
		let a = this.t2P1_Time.split(':');
		let b = this.t2P2_Time.split(':');
		let p1Ticks = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
		let p2Ticks = (+b[0]) * 60 * 60 + (+b[1]) * 60 + (+b[2]);

		let average = (p1Ticks + p2Ticks) / 2;

		if(p1Ticks != 0 && p2Ticks != 0) {
			this.vm.team2_FinishTime = average;
		}
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
		this.socket.emit('data', this.vm);
	}

	addRemovePlayer(event: any, id: number, name: string){
		this.socket.emit('swissPlayerSelected', this.vm, id, event.target.checked);
	}
	
	addRemoveTeam(event: any, id: number, name: string){
		this.socket.emit('swissTeamSelected', this.vm, id, event.target.checked);
	}

	resetSwiss() {
		this.socket.emit('resetSwiss', this.vm);
		$('input[type=checkbox]').prop('checked',false);
		$('input[type=checkbox]').prop('disabled',false);
	}

	undoSwissSingles() {
		this.socket.emit('undoSwissSingles', this.vm);
	}

	undoSwissDoubles() {
		this.socket.emit('undoSwissDoubles', this.vm);
	}

	setP1Name(event: any){
		let runner = jQuery.grep(this.vm.players, function(n: any, i) {
			return n.name == event;
		})[0];
		this.vm.player1 = runner.preferredName;
		this.vm.player1_seed = runner.seed;
	}

	setP2Name(event: any){
		let runner = jQuery.grep(this.vm.players, function(n: any, i) {
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

	public set tournament(tournament: number){
		this._vm.tournament = tournament;

		if(tournament == 2)
			this.bracket = "Doubles";
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

	tournaments = [{
		name: 'Singles',
		value: 1
	},
	{
		name: 'Doubles',
		value: 2
	}];

	brackets = [{
		value: 'Singles (Left)',
		name: 'Left'
	},
	{
		value: 'Singles (Right)',
		name: 'Right'
	}];

	stats = [{
		index: 0,
		name: 'Free Text',
		convertToPercentage: false
	}
];
}
