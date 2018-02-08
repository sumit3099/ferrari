import { UserDetailService } from './../services/user-detail.service';
import { Component, OnInit } from '@angular/core';
import { AdalService } from 'ng2-adal/dist/core';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  signup: string = "login";
  constructor(
    private adalService: AdalService,
    private authService: AuthService,
    private _data: UserDetailService) { }

  isLogin = false;
  // errImage = '../../../src/assets/images/user.png';
  ngOnInit() {
    $('.modal').modal();
    $('.collapsible').collapsible();
    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function (el) { /* Do Stuff */ }, // A function to be called when sideNav is opened
      onClose: function (el) { /* Do Stuff */ }, // A function to be called when sideNav is closed
    });

    $('.dropdown-button').dropdown({
      hover: true, // Activate on hover
    }
    );


    /* on login header modification */
    if (this._data.isLoggedIn)
      this.isLogin = this._data.isLoggedIn;
  }
  setSignUp(data) {
    this.signup = data;

  }
  public logOut() {
    this.adalService.logOut();
  }
}