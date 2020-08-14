import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CONSTANTS } from './CONSTATNS';
import { BookingService } from './booking.service';
@Injectable({
  providedIn: 'root'
})
export class HttpApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http: HttpClient,private bookingservice:BookingService) { }
  //user/login
  
  POST(endpoint,params){
    //except login all urls should have token and user_id
    if(endpoint.indexOf("login") < 0){
      this.httpOptions.headers['token'] = this.bookingservice.getToken(CONSTANTS.USER_ID_TOKEN);
      this.httpOptions.headers['user_id'] = this.bookingservice.getToken(CONSTANTS.TOKEN_ID_TOKEN);;
    }
    
    return this.http.post(CONSTANTS.API_ENDPOINT+endpoint,params,this.httpOptions);
  }
  GET(endpoint,params){
    // if(token != ""){
    //   this.httpOptions.headers['token'] = token;
    // }
    return this.http.get(CONSTANTS.API_ENDPOINT+endpoint,params);
  }
}
