import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
import { InformationService } from '../services/information.service';
import { Player } from '../services/player.enum';
import * as moment from 'moment';
import io from 'socket.io-client';
import { Socket } from 'net';

@Component({
  templateUrl: './stream.html',
  styleUrls: ['./stream.css']
})

export class StreamCMP {
  constructor(private infoService: InformationService){

  }

  ngOnInit(){
    this.socket.on('data', function(data: Information){
      this.vm = data;
    }.bind(this));

    this.socket.on('timer', function(start: boolean){
      console.log(start)
      if(!start) {
        this.$timer.unsubscribe();
        this.ticks = "0:00:00";
      }
      else {
        this.$timer = this.timer.subscribe((ticks: number) => {
          this.ticks = moment().startOf('day').seconds(ticks).format('H:mm:ss');
        });
    }
    }.bind(this));
  }

  ticks: string = "0:00:00";
  public nameTimer: Observable<number> = Observable.timer(0, 1000);
  public timer: Observable<number> = Observable.timer(0, 1000);
  private $timer: Subscription;
  public vm: Information = new Information();
  socket: any = io.connect('http://localhost:8080');
}
