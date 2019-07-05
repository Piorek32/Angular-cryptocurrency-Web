
import { Injectable } from '@angular/core';





@Injectable()
export class StorageService {
  constructor(
    
  ) { }
  coins = "coins";


  setCoins(coins) {
  
    localStorage.setItem(this.coins, JSON.stringify(coins));
  }

  getCoins() {
    return localStorage.getItem(this.coins);
  } 
  

}
