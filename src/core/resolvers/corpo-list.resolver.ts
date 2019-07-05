import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { StorageService } from './../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CorpoListResolver implements Resolve<boolean> {

  constructor(
    private storageService: StorageService,
  ) {
   
  }

  async resolve(): Promise<any> {
    
    let c = await this.storageService.getCoins();
    if (c) {
      return c;
    } else {
      return "BTC, USD, EUR";
    }

    
    //let coins = new Promise((resolve, reject) => {
    //  let list = this.storageService.getCoins();
    //  if (list !== null) {
    //    resolve(list);
    //  } else {
    //    reject();
    //  }
    //});

    //return coins;


  }}
