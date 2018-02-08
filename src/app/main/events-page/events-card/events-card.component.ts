import { Component, OnInit, Input } from '@angular/core';
import { UserDetailService } from "./../../../services/user-detail.service";
import { environment } from './../../../../environments/environment';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
@Component({
  selector: 'app-events-card',
  templateUrl: './events-card.component.html',
  styleUrls: ['./events-card.component.css']
})
export class EventsCardComponent implements OnInit {
  bookingId;
  eventId:any;
  show = false;
  constructor(private userDetailService: UserDetailService, private http: Http) { }
  url: string = environment.currentServerURL + "/api/eventBooking";
  @Input()
  event:{_id:string, location: {locality: string,country: string},title:string,description:string,imgURL:string,date:string}={_id:'',location: {locality:'',country:''},title:'',description:'',imgURL:'',date:''};
  lat = -37.8497;
  long = 144.968;

  ngOnInit() {
    $('.modal').modal();
     this.eventId=this.event._id;
    this.event.imgURL =environment.currentServerURL + "/api/event/thumbnail/" + this.event.imgURL + ".jpg"
    this.show = true;
  }
 
  booking(status) {
    if (this.userDetailService.isLoggedIn) {
      $('#modal1').modal('close');
      this.http.post(this.url, { event: this.event._id, email: this.userDetailService.email, status })
        .map((res) => res.json())
        .subscribe((response) => {
          let tempString = String(this.event._id);
          this.bookingId = tempString.substring(0, 5) + response.bookingId;
          // alert(response.data);
          this.toast(response.data, 4000, "green")
          if (response.data == 'Response Recorded Succesfully') {
            $('#bookingModel').modal('open');
          }
        })
    }
    else {
      // alert('please login first to book a ticket');
      this.toast('login to book a ticket !', 4000, "red")
      $('#modal1').modal('close');
    }
  }

  toast(message: string, duration: number, color: string) {
    Materialize.toast(message, duration, color);
  }
}

