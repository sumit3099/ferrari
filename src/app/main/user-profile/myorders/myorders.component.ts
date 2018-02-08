import {environment} from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { UserDetailService } from "./../../../services/user-detail.service";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Headers } from '@angular/http';
@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  orders: any=[];
  gotData:boolean=false;
  logoURL = environment.currentServerURL + "/api/logos/f1-logo.png";
  url: string = environment.currentServerURL + "/api/myorders";
  
  constructor(private userDetailService: UserDetailService, private http: Http) { }
  ngOnInit() {
     const authToken = localStorage.getItem("token");
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('Authorization', authToken);
    this.http.post(this.url, { userId: this.userDetailService.id }, { headers: headers })
      .map((res) => res.json())
      .subscribe((response) => {
        this.orders = response.data;
        this.gotData = true;
      })
    $(".button-collapse").sideNav();
  }
}
