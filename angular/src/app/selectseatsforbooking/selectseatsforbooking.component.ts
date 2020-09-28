import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../http-api.service';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selectseatsforbooking',
  templateUrl: './selectseatsforbooking.component.html',
  styleUrls: ['./selectseatsforbooking.component.css']
})
export class SelectseatsforbookingComponent implements OnInit {
 bookingCountRequested = 0;
seatRowsArray = []
 bookedSeatDetail = []
 constructor(private route: ActivatedRoute,private router: Router,private apiService:HttpApiService,private bookingService:BookingService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bookingCountRequested = params['count'];
    });
    this.bookedSeatDetail = [];//clearning..
    //TOOD check how many people to book..
    // [{"seatno":"1"},{"seatno":"2"},{"seatno":"3"}],
  //[{"seatno":"11"},{"seatno":"12"},{"seatno":"13"}]
  let seatNO = 1;
    for(let seatRow = 1;seatRow<=10;seatRow++){
      let tmp = [];
      let isBooked = false;
      for(let seatColumn = 1;seatColumn<=10;seatColumn++){
        if(seatNO == 15){
          isBooked = true;
        }else{
          isBooked = false;
        }
          tmp.push({seatNo:seatNO,"isBooked":isBooked,"currentBooked":false})
          seatNO++ ;
      }
      this.seatRowsArray.push(tmp);
      
  }
}
  seatSelection(coloumn){
    if(coloumn.isBooked){
      return;
    }
    if(Number(this.bookedSeatDetail.length) < this.bookingCountRequested){
      coloumn.currentBooked = true
      this.bookedSeatDetail.push([coloumn.seatNo]);
    }else{
      this.bookingService.showAlert("Exceeds limit "+this.bookedSeatDetail.length);
    }
    
   //alert(row+"-- "+coloumn);
  }
 startBooking(){
   //TODO how many people to book.
  // 
  if(Number(this.bookedSeatDetail.length) != this.bookingCountRequested){
    console.log(this.bookedSeatDetail);
    this.bookingService.showAlert("Please select "+this.bookingCountRequested);
    return;
  }
  
  let requstParams = {
    "movie_id":"3",
	"no_of_people":this.bookingCountRequested,
  "seats":this.bookedSeatDetail.join(),
	"user_id":1,
	"theatre_id":"1",
	"price":"205",
	"movie_time":"2020-08-03 09:00:00"};
  this.apiService.POST("booking/bookformovie",requstParams).subscribe(res=>{
    this.bookingService.showAlert("Booked Successsully!!!");
  },error=>{
    this.bookingService.showAlert("Error while Booking!!!");
  })
 }
}
