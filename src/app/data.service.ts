import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map }  from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  result: any;

  constructor(private _http: HttpClient) { }

  getPrices(){
    return this._http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DASH,IOT,EOS,NEO,XRP,ZEC,TRX,ETC&tsyms=USD,EUR,INR')
    .pipe(map(result => this.result = result));
  
  }
}
