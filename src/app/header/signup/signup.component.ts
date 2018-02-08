import {environment} from '../../../environments/environment';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http } from "@angular/http";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  validDate: boolean = false;
  login: string = 'login';
  signupForm: FormGroup;
  url: string = environment.currentServerURL + "/api/signup";

  @Output() event: EventEmitter<string> = new EventEmitter();
  constructor(private fb: FormBuilder, private http: Http) {
    this.createForm();
  }

  createForm() {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]],
      email: ['', [Validators.required,Validators.pattern('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$')]],
      pass: ['', [Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]],
      repass: ['', Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')],
      mobile: ['', [Validators.required,Validators.pattern('^[7-9][0-9]{9}$')]],
      date: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }
  ngOnInit() {
    
     
  }
  datevalidate() {
    var today = new Date();
    var pickedDate = new Date(this.signupForm.controls.date.value);
    if (pickedDate > today) {
      this.validDate = true;
    }
    else {
      this.validDate = false;
    }
  }
  userentry() {
    if (this.signupForm.valid && !this.validDate) {
      this.http.post(this.url, { data: this.signupForm.value })
        .map((res) => res.json())
        .subscribe((response) => {
          this.toast(response.data, 4000, "green")
          if (response.data != 'user already exist') {
            this.signupForm.reset();
            this.event.emit(this.login);
          }
        });
    } else {
      this.toast('form details Invalid', 4000, "red")

    }
  }
  setlogin() {
    this.signupForm.reset();
    this.event.emit(this.login);
  }

  toast(message: string, duration: number, color: string) {
    Materialize.toast(message, duration, color);
  }
}
