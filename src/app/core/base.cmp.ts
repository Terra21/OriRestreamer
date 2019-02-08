import { environment } from '../../environments/environment';
import io from 'socket.io-client';
import * as $ from 'jquery';
import { Information } from '../services/information';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/observable/fromPromise';

export class BaseCMP {
    socket: any = io.connect(environment.socketPath);
    seed: string = window.location.href.split('=')[1];
    vm: Information = new Information();
	player1: any;
	player2: any;
	player3: any;
    player4: any;
    
    getPlayerById(id: number) {
		return jQuery.grep(this.vm.players, function(n: any, i) {
				return n.id == id;
		}.bind(this))[0];
    }
    
    getGoogleSheet(url: string, params: string): Observable<any> {
        return fromPromise(
            $.get('https://sheets.googleapis.com/v4/spreadsheets/' + url + params + '?key=AIzaSyBg9fQgl81Zhk2shiOIYm1k4o9Kv3dvxHU')
        )
    }
}