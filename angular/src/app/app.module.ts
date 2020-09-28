import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OnemoviedetailComponent } from './onemoviedetail/onemoviedetail.component';
import { PaymentComponent } from './payment/payment.component';
import { SelectshowComponent } from './selectshow/selectshow.component';
import { LoginheaderComponent } from './loginheader/loginheader.component';
import { MenuheaderComponent } from './menuheader/menuheader.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SelectseatsforbookingComponent } from './selectseatsforbooking/selectseatsforbooking.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnemoviedetailComponent,
    PaymentComponent,
    SelectshowComponent,
    LoginheaderComponent,
    MenuheaderComponent,
    FooterComponent,
    SelectseatsforbookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,AngularFontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
