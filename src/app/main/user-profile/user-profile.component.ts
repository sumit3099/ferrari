import {Router} from '@angular/router';
import { UserDetailService } from './../../services/user-detail.service';
import { Component, OnInit } from '@angular/core';
import { AdalService } from 'ng2-adal/dist/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
isAdmin:Boolean=false;
  constructor( 
    private adalService: AdalService,
    private authService: AuthService,
    private userDetailService: UserDetailService,
    private router:Router) { }

  color: string = "#660000";
  name:string="";
  email: string = "";
  profilePicUrl: string = "";

  ngOnInit() {
    /* on load, slide to top of the page */
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $(".button-collapse").sideNav();
    
    this.email = this.userDetailService.email;
    this.profilePicUrl = this.userDetailService.profilePicUrl;
    this.name = this.userDetailService.name;    
    this.setColor(this.userDetailService.level);
      if(this.userDetailService.role==='admin')
      {
        this.isAdmin=true;
      }
  }

  setColor(level) {
    if (level == "III") {
      this.color = "#a32020";
    } else if (level == "II") {
      this.color = "#0a8e94";
    } else if (level == "I") {
      this.color = "#19b319";
    }
  }
   public logOut() {
     this.userDetailService.logOutUser();
     if(this.adalService.userInfo.isAuthenticated) {
        this.adalService.logOut();
     };
     this.router.navigate(['/']);  
  }
}
