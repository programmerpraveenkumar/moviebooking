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
  login= {email:"test1@gmail.com","pwd":"123456789"}
  is_login = false;
  constructor(private apiService:HttpApiService,private bookingService:BookingService) { 
    console.log("toke exisit..so shwoin login")
  }  
  ngOnInit() {
    console.log("toke exisit..so shwoin login")
    if(this.bookingService.checkToken()){
      console.log("toke exisit..so shwoin login")
      this.is_login = true;
    }else{
      console.log("toke no exisit..so logout")
      this.is_login = false;
    }
  }
  loginMethodCall(){
    let request = {
      "email":this.login.email,
      "password":this.login.pwd
    }
    console.log(request);
    this.apiService.POST("user/userlogin",request).subscribe(res=>{      
     // this.apiService.POST("login/userlogin",request).subscribe(res=>{      
      
      this.bookingService.storeToken(CONSTANTS.USER_ID_TOKEN,res['id']);
      this.bookingService.storeToken(CONSTANTS.TOKEN_ID_TOKEN,res['token']);
      window.location.reload();//for hiding login popup 
     // this.is_login = true;
    },err=>{
      this.bookingService.showAlert(err.error.message)
    })
    
  }
  logout(){
    //logout
  }
}
