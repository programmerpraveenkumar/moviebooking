import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OnemoviedetailComponent } from './onemoviedetail/onemoviedetail.component';
import { SelectseatsforbookingComponent } from './selectseatsforbooking/selectseatsforbooking.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'single',component:OnemoviedetailComponent},
  {path:'bookmovie',component:OnemoviedetailComponent},
  {path:'selectseatsforbooking/:count',component:SelectseatsforbookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
