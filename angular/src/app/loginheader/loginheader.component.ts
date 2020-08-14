import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../http-api.service';
import { BookingService } from '../booking.service';
import { CONSTANTS } from '../CONSTATNS';

@Component({
  selector: 'app-loginheader',
  templateUrl: './loginheader.component.html',
  styleUrls: ['./loginheader.component.css']
})
export class LoginheaderComponent implements OnInit {
login= {email:"","pwd":""}
  constructor(private apiService:HttpApiService,private bookingService:BookingService) { }

  ngOnInit() {
  }
  loginMethodCall(){
    let request = {
      "email":this.login.email,
      "password":this.login.pwd
    }
    console.log(request);
    this.apiService.POST("user/login",request).subscribe(res=>{
      
      this.bookingService.storeToken(CONSTANTS.USER_ID_TOKEN,res['id']);
      this.bookingService.storeToken(CONSTANTS.TOKEN_ID_TOKEN,res['token']);
    },err=>{
      this.bookingService.showAlert(err.error.message)
    })
    
  }
}
