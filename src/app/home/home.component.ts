import { Component, OnInit, ViewChild  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiHttp } from "../../core/services/api"
import { StorageService } from "../../core/services/storage.service";
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  @ViewChild('lineChart') private chartRef;
  chart: any;


  currency: string = '';
  coinsList: string[] = [];
  data: any;
  objectKeys = Object.keys;
  constructor(
    private storage: StorageService,
    private apiHttp: ApiHttp,
    public route: ActivatedRoute, ) { }

  getData(coins) {
    this.apiHttp.getCoins(coins).subscribe(
      (data) => {
        this.data = data;
        console.log(this.data);
      },
      (error) => console.log(error),

    );
  }


  getHistory(coin) {

    this.apiHttp.getCoinHistory(coin).subscribe(
      (data) => {
        console.log(data)
        this.charts(data.Data);
      },
      (err) => console.log(err),
      () => console.log('ok'));
  }


  c(e) {

  }
  changeCurency(coin) {
    let q = this.coinsList.find(q => q === coin);
    if (!q) {
      this.coinsList.push(this.currency);
      this.storage.setCoins(this.coinsList);
    }
   
    this.getData(this.coinsList);


  }
  showCharts() {

  }

  charts(data) {
    if (!data) {
      return;
    };

    let labels = [];
    labels = data.map(q => q.time).map(p => new Date(p).getMinutes());
    let series = data.map(q => q.high);
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels:labels , // your labels array
        datasets: [
          {
            data: series, // your data array
            borderColor: '#00AEFF',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

  ngOnInit() {
   
    
    this.coinsList = this.storage.getCoins() ? JSON.parse(this.storage.getCoins()) : undefined;
    console.log(this.coinsList);
    if (!this.coinsList) {
      this.coinsList = ["BTC", "ETH", "EOS"];
      this.storage.setCoins(this.coinsList);
      this.getData(this.coinsList);

    } else {

      this.getData(this.coinsList);
    }


  }

}
