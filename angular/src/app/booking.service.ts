import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }
  
  showAlert(message){
    alert(message);
  }
  storeToken(key,val){
    localStorage.setItem(key,val);
  }
  getToken(key){
    return localStorage.getItem(key);
  }
}
