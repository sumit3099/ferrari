import { UserDetailService } from '../../../services/user-detail.service';
import { environment } from '../../../../environments/environment';
import { Http } from '@angular/http';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import "rxjs/add/operator/map";
// import {MessagesModule} from 'primeng/messages';
// import {MessageModule} from 'primeng/message';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private http: Http, private userDetailService: UserDetailService) { }
  keySent: boolean = false;
  verified: boolean = false;
  email: string;
  key: string;
  sendKeyUrl: string = environment.currentServerURL + '/api/sendKey';
  setPasswordUrl: string = environment.currentServerURL + '/api/setPassword';
  newPassword: any;
  confirmPassword: any;
  message: boolean = false;
  msg: string = '';
  buttonText: string = 'Send Reset Key';
  valid: boolean = false;
  @Output() event: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }

  sendKey() {
    this.message = false;
    this.http.post(this.sendKeyUrl, { email: this.email })
      .map((res) => res.json())
      .subscribe((res) => {
        if (res.data) {
          this.buttonText = 'Re-Send Reset Key';
          this.keySent = true;
          this.userDetailService.setResetKey(res.data);
        } else {
          this.msg = 'User Not Found. Please Enter correct Email Address';
          this.message = true;
          //alert('Something went wrong, please try again later');
          //Materialize.toast('Something went wrong, please try again later', 3000, 'rounded');            
        }
      })
  }
  verifyKey() {
    this.message = false;
    if (this.key != '') {
      if (this.key == this.userDetailService.resetKey) {
        this.verified = true;
      } else {
        this.msg = 'Incorrect Key';
        this.message = true;
        this.verified = false;
      }
    }
  }
  setNewPassword() {
    this.message = false;
    if (this.valid) {
      if (this.confirmPassword == this.newPassword) {
        this.http.post(this.setPasswordUrl, { email: this.email, password: this.newPassword })
          .map((res) => res.json())
          .subscribe((res) => {
            if (res.data) {
              this.msg = 'Password Updated Successfully';
              this.message = true;
              this.toast('Password Updated Successfully', 4000, "green")
              this.backToLogin();
              // Materialize.toast('Password Updated Successfully', 3000, 'rounded');
            } else {
              this.msg = 'Something went wrong, please try again later';
              this.message = true;
              this.backToLogin();
              //alert('Something went wrong, please try again later');
              //Materialize.toast('Something went wrong, please try again later', 3000, 'rounded');            
            }
          });
      } else {
        this.msg = "Password and Confirm Password did't match. Please try again";
        this.message = true;
      }
    } else {
      this.msg = "You have entered a Invalid Password. please enter password containing atleast 8 character, 1 uppercase, 1 lowercase,1 special character, 1 number ";
      this.message = true;
    }
  }
  backToLogin() {
    this.event.emit('login');
  }
  validatePassword() {
    var pattern = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
    if (pattern.test(this.newPassword)) {
      this.valid = true;
    } else {
      this.valid = false;
    }
  }

  toast(message: string, duration: number, color: string) {
    Materialize.toast(message, duration, color);
  }
}
