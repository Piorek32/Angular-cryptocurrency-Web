import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component"
import { CorpoListResolver } from "../core/resolvers/corpo-list.resolver"

const routes: Routes = [
  //{
  //  path: '',
  //  redirectTo: 'login',
  //  pathMatch: 'full'
  //},
  //{
  //  path: 'home',
  //  component: HomeComponent,
  //  resolve: {
  //    coinList : CorpoListResolver
  //  }
    
  //}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    CorpoListResolver
  ]
})
export class AppRoutingModule { }
