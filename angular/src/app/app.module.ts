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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnemoviedetailComponent,
    PaymentComponent,
    SelectshowComponent,
    LoginheaderComponent,
    MenuheaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
