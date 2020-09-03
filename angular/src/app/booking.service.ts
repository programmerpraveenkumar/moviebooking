import { Injectable } from '@angular/core';
import  {CONSTANTS} from './CONSTATNS';

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
  public checkToken(){
    if(this.getToken(CONSTANTS.TOKEN_ID_TOKEN) != undefined && this.getToken(CONSTANTS.TOKEN_ID_TOKEN) !=  ""){
      return true;
    }
    return false;
  }
  public clearUserDetails(){
    this.storeToken(CONSTANTS.TOKEN_ID_TOKEN,"");
    this.storeToken(CONSTANTS.USER_ID_TOKEN,"");
  }
}
