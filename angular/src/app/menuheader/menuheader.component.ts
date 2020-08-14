import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../http-api.service';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-menuheader',
  templateUrl: './menuheader.component.html',
  styleUrls: ['./menuheader.component.css']
})
export class MenuheaderComponent implements OnInit {

  constructor(private apiService:HttpApiService,private bookingService:BookingService) { }

  ngOnInit() {
  }
  

}
