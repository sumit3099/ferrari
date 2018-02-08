import { Component, OnInit } from '@angular/core';
import { UserDetailService } from "../../../services/user-detail.service";

@Component({
  selector: 'app-myrewards',
  templateUrl: './myrewards.component.html',
  styleUrls: ['./myrewards.component.css']
})
export class MyrewardsComponent implements OnInit {

  constructor(private userDetailService:UserDetailService) { }
  name:string="";
  points:number=0;
  level:string="I";
  ngOnInit() {
    $(".button-collapse").sideNav();
    this.name=this.userDetailService.name;
    this.points=this.userDetailService.points;
    this.level=this.userDetailService.level;
  }
}
