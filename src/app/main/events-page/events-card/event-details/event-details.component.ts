import { environment } from './../../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from "@angular/router";
import { UserDetailService } from "./../../../../services/user-detail.service";
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  constructor(private http: Http, private route: ActivatedRoute, private userDetailService: UserDetailService) { }

  eventDetails: any;
  show;
  imgURL;

  ngOnInit() {
    /* on load, slide to top of the page */
    $("html, body").animate({ scrollTop: 0 }, "slow");

    this.route.params.subscribe((params) => {
      this.getEventDetails(params.eventId);
    });
  }
  eventurl: string = environment.currentServerURL + "/api/eventBooking";
  getEventDetails(eventId) {
    let eventURL = environment.currentServerURL + "/api/upcoming-events/event?eventId=" + eventId;
    this.http.get(eventURL)
      .map(res => res.json())
      .subscribe((resp) => {
        this.assignData(resp);
      });
  }

  booking(status) {

    if (this.userDetailService.isLoggedIn) {
      this.http.post(this.eventurl, { event: this.eventDetails._id, email: this.userDetailService.email, status })
        .map((res) => res.json())
        .subscribe((response) => {
          if (response.data == 'Response Recorded Succesfully') {
            if (status == 'Accept') {
              this.userDetailService.updatePoints(10);
              this.toast('Invitation Accepted Succesfully! We hope to see you there', 4000, "green")
            }
            if (status == 'Reject') {
              this.userDetailService.updatePoints(10);
              this.toast('Invitation Rejected Succesfully', 4000, "green")
            }
            if (status == 'Tentative') {
              this.userDetailService.updatePoints(10);
              this.toast('Invitation Response Recorded Successfully', 4000, "green")
            }

          } else {
            this.toast('You Invitation Response Has Been Already Registered', 4000, "green")
          }
        })
    }
    else {
      this.toast('login first to perform this action', 4000, "red")
    }
  }

  assignData(resp) {
    this.eventDetails = resp.data;
    this.imgURL = environment.currentServerURL + "/api/event/thumbnail/" + this.eventDetails.imgURL + ".jpg";
    this.show = true;
    var desc = <HTMLInputElement>document.getElementById("desc");
    desc.innerHTML = this.eventDetails.description;
  }

  toast(message: string, duration: number, color: string) {
    Materialize.toast(message, duration, color);
  }

}
