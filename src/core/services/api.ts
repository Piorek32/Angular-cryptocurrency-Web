import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class ApiHttp {
  constructor(
    private http: HttpClient

  ) { }
  apiKey = "53fbdabf6292c4ffbfcfe4fa9abceb4edc82799e269676267a93e0dbf1a0f94d";

  getCoins(coins) {
    let coinList = coins.join();
    return this.http.get(
      `https://min-api.cryptocompare.com/data/pricemulti?fsyms=`+ coinList +`&tsyms=BTC,USD,EUR&api_key=${this.apiKey}`);
  }

  getCoinHistory(coin?) {
  debugger 
    return this.http.get(`https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=USD&limit=10`);
  }


}
