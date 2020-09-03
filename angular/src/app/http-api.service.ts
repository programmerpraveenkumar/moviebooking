import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CONSTANTS } from './CONSTATNS';
import { BookingService } from './booking.service';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpApiService {
  
  constructor(private http: HttpClient,private bookingservice:BookingService) { }
  //user/login
  
  POST(endpoint,params){
    //except login all urls should have token and user_id
   let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    if(endpoint.indexOf("login") < 0){
      if(this.bookingservice.checkToken())
      {
        console.log("setting the token ehere");
        httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            "user_id":this.bookingservice.getToken(CONSTANTS.USER_ID_TOKEN),
            "token":this.bookingservice.getToken(CONSTANTS.TOKEN_ID_TOKEN)
          })
        };
      }else{
        console.log("throwint error")
        throw throwError("Token is not exist");
      }
      
    }
    return this.http.post(CONSTANTS.API_ENDPOINT+endpoint,params,httpOptions);
  }
  GET(endpoint,params){
    // if(token != ""){
    //   this.httpOptions.headers['token'] = token;
    // }
    return this.http.get(CONSTANTS.API_ENDPOINT+endpoint,params);
  }
}
