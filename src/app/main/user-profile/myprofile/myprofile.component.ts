import { UserDetailService } from './../../../services/user-detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  isAdmin: boolean = false;
  constructor(private _data: UserDetailService) {
    //   if(_data)
    //   {
    //  _data.dob=_data.dob.substring(0,10);
    //   }
  }

  ngOnInit() {
    $(".button-collapse").sideNav();
    if (this._data.role === 'admin') {
      this.isAdmin = true;
    }
  }
}
