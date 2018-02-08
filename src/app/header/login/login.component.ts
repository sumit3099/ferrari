import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http, Headers } from "@angular/http";
import { Router } from '@angular/router';
import "rxjs/add/operator/map";
import { environment } from './../../../environments/environment';
import { AdalService } from "ng2-adal/dist/core";
import { UserDetailService } from "../../services/user-detail.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() event: EventEmitter<string> = new EventEmitter();

  signup: string = 'signup';
  url: string = environment.currentServerURL + '/api/login';
  loginForm: FormGroup;
  toast;
  user: any = {};
  adalUSerApiUrl: string = environment.currentServerURL + "/api/adal";

  constructor(private fb: FormBuilder, private http: Http, private router: Router, private adalService: AdalService, private userDetailService: UserDetailService) {

    if (this.adalService.userInfo.isAuthenticated) {
      // this.test();
      this.getUserDetails();
      this.router.navigate(['']);
    }
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.email],
      pass: ['', Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')],

    });
  }

  result() {
    if (this.loginForm.valid) {
      this.http.post(this.url, { data: this.loginForm.value })
        .map((res) => res.json())
        .subscribe((response) => {
          localStorage.setItem("token", response.token);
          if (response.data === "") {
            this.toastM('Wrong Credentials !', 4000, "red")
          } else {
            this.toastM('Login Successfull !', 4000, "green")
            this.user = response.data;
            this.user.isLoggedIn = true;
            this.userDetailService.setUserDetails(response.data);
            localStorage.setItem("userpass", JSON.stringify(response.data));
            $('#modal-login').modal('close');
          }
        });
    } else {
      this.toastM('wrong Credentials !', 4000, "red")
    }
  }

  setSignUp(data) {
    this.event.emit(data);

  }

  ngOnInit() { }

  public logIn() {
    this.adalService.login();
  }
  /*
  test() {
    let context = new AuthenticationContext(this.adalService.config);
    context.acquireToken('https://graph.microsoft.com', (err, res) => {

    });
  } */
  getUserDetails() {
    this.http.post(this.adalUSerApiUrl, { name: this.adalService.userInfo.profile.name, email: this.adalService.userInfo.userName })
      .map(res => res.json())
      .subscribe((res) => {
        if (res.data) {
          this.user = res.data;
          this.userDetailService.setUserDetails(this.user);
        }
      })
  }

  toastM(message: string, duration: number, color: string) {
    Materialize.toast(message, duration, color);
  }
}

