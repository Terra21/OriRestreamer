import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Information } from '../services/information';
import { InformationService } from '../services/information.service';
import { Player } from '../services/player.enum';
import * as moment from 'moment';

@Component({
  selector: 'stream',
  templateUrl: './stream.html',
  styleUrls: ['./stream.css']
})
export class StreamCMP implements OnDestroy {
  constructor(private infoService: InformationService){
    this.infoService.infoEvents.subscribe((newObj) => {
      this.vm = newObj;
    });
 
    this.infoService.audioEvent.subscribe((player: number) => {
      this.vm.currentAudioOnPlayer = player;
    });

    this.infoService.timerTickCountEvent.subscribe((ticks: number) => {
      this.ticks = moment().startOf('day').seconds(ticks).format('H:mm:ss');
    });

    this.infoService.timerStopped.subscribe((stopped: boolean) => {
      this.ticks = "0:00:00";
    });

    this.nameTimer.subscribe((ticks: number) => {

    });
  }

  ticks: string = "0:00:00";
  public nameTimer: Observable<number> = Observable.timer(0, 1000);
  private vm: Information = new Information();

  ngOnDestroy(){
    this.infoService.timerTickCountEvent.unsubscribe();
  }
}
