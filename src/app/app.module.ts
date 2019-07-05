import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiHttp } from "../core/services/api"
import { StorageService } from "../core/services/storage.service";
import { HomeComponent } from './home/home.component'
import { FormsModule } from '@angular/forms';
import { ErrorInterceptor } from "../core/interceptors/error.interceptors"

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ApiHttp,
    StorageService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
