import { Injectable, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Information } from './information';

@Injectable()
export class InformationService {
    public infoEvents: Subject<Information> = new Subject();
    public audioEvent: Subject<number> = new Subject();
    public timerTickCountEvent: Subject<number> = new Subject();
    public timerStarted: Subject<boolean> = new Subject();
    public timerStopped: Subject<boolean> = new Subject();
    public timerTicks: number = 0;

    public setInfo(info: Information): void{
        this.infoEvents.next(info);
    }

    public setAudio(player: number){
        this.audioEvent.next(player);
    }

    public setTimer(ticks: number){
        this.timerTickCountEvent.next(ticks);
        this.timerTicks = ticks;
    }

    public startTimer(){
        this.timerStarted.next(true);
    }
 
    public stopTimer(){
        this.timerStopped.next(true);
    }
}