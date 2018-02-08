import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { UserDetailService } from "../../../services/user-detail.service";
import { Headers } from '@angular/http';
@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {
  constructor(private http: Http, private userDetailService: UserDetailService) { }
  bookingUri: string = environment.currentServerURL + '/api/bookings';
  data: any = [];
  gotData: boolean = false;
  ngOnInit() {
    $(".button-collapse").sideNav();
    this.getBookings();
  }
  getBookings() {
     const authToken = localStorage.getItem("token");
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('Authorization', authToken);
    this.http.post(this.bookingUri, { email: this.userDetailService.email },{ headers: headers })
      .map((res) => res.json())
      .subscribe((resp) => {
        if (resp.data) {
          this.data = resp.data;
          this.gotData = true;
        }
      });
  }
}
