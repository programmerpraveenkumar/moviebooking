import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../http-api.service';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService:HttpApiService,private bookingService:BookingService) { }
  movieList :any;
  ngOnInit() {
    console.log("inside home component")
    this.getAllMovie();
  }
  getAllMovie(){
  //
  
  this.apiService.POST("theatre/getByMovie","MOVIE1").subscribe(res=>{
    this.movieList = res;
  },error=>{
    alert(error.error.message)
  })
  }
}
