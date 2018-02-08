import { environment } from './../../../../../environments/environment';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { UserDetailService } from "./../../../../services/user-detail.service";

import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  seatNo: any;
  bookingId: string;
  show: Boolean = false;

  constructor(private userDetailService: UserDetailService, private http: Http) {
      
   }

  @Input()
  match: {circuitId:string,racename:string,_id:string,date:string}={circuitId:'',racename:"",_id:"",date:""};

  imgURL: any;
  url: string = environment.currentServerURL + "/api/ticketBooking";

  ngOnInit() {
    $('.modal').modal();
    $('.materialboxed').materialbox();
    this.imgURL = environment.currentServerURL + '/circuit_images/' + this.match.circuitId + '.png';
  }

  booking() {
    if (this.userDetailService.isLoggedIn) {
      this.http.post(this.url, { eventId: this.match._id, email: this.userDetailService.email })
        .map((res) => res.json())
        .subscribe((response) => {
          let tempString = String(this.match._id);
          this.bookingId = tempString.substring(0, 5) + response.bookingId;
          this.seatNo = response.bookingId;
          this.show = true;  
          this.userDetailService.updatePoints(10);          
          this.toast(response.data, 4000, "green")
          if (response.data == 'Ticket Booked Succesfully') {
            this.toast('Your Booking Id is '+this.bookingId +'. Seat no is '+this.seatNo, 8000, "green")
          }
        })
    }
    else {
      this.toast('login to book a ticket', 4000, "red")
    }
  }

  toast(message: string, duration: number, color: string) {
    Materialize.toast(message, duration, color);
  }

}
