import { Component, OnInit } from '@angular/core';
import { ApiHttp } from "../core/services/api"
import { HttpClient, HttpParams } from '@angular/common/http';
import { StorageService } from "../core/services/storage.service";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    private apiHttp: ApiHttp,
    private  storage: StorageService

  ) { }
  data: any;
  objectKeys = Object.keys;
  coinsList;
 

  


  ngOnInit() {
  
  }
}
