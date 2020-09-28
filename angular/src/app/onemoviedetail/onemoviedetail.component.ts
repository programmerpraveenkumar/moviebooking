import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../http-api.service';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-onemoviedetail',
  templateUrl: './onemoviedetail.component.html',
  styleUrls: ['./onemoviedetail.component.css']
})
export class OnemoviedetailComponent implements OnInit {
 bookedSeats = 0;
 movie_Name = "asdf";
 theatre_name = "";
 avaialableSeats = 0;
 book_user_count = 0;
  constructor(private router: Router,private apiService:HttpApiService,private bookingService:BookingService) { }

  ngOnInit() {
    this.apiService.POST("theatre/getByMovie","MOVIE1").subscribe(res=>{
      let data = res[0];
      
      this.bookedSeats = data['bookedSeats'];
      this.movie_Name = data['name'];
      this.theatre_name = data['theatre_id'];
      this.avaialableSeats = data['total_seats']- data['bookedSeats'];
    },err=>{
      alert("Error while getting details");
    });
  }
  bookMovie(){
    if(this.avaialableSeats <=0 ){
      this.bookingService.showAlert("Booking not allowed, as seats are not available..");
      return;
    }
    if(this.book_user_count <=0){
      this.bookingService.showAlert("Please enter the booking count.");
      return;
    }else if(this.book_user_count > this.avaialableSeats){
      this.bookingService.showAlert("Booking is not allowed, Booking count is more than seats available..");
      return;
    }
    this.router.navigate(['/selectseatsforbooking',this.book_user_count]);
    //selectseatsforbooking
  }
  
}
