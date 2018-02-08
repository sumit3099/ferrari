import { environment } from '../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { UserDetailService } from "../../../services/user-detail.service";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-stadium-collaborator',
  templateUrl: './stadium-collaborator.component.html',
  styleUrls: ['./stadium-collaborator.component.css']
})
export class StadiumCollaboratorComponent implements OnInit {

  constructor(private http: Http, private userDetailService: UserDetailService, private route: ActivatedRoute) { }
  StadiumCollaboratorUri: string = environment.currentServerURL + '/api/stadiumCollaborator';
  data = [];
  gotData: boolean = false;
  // rows:any=[];
  // cols:any=[];
  ngOnInit() {
    // this.rows = Array(5).fill(0).map((x,i)=>i);
    // this.cols = Array(10).fill(0).map((x,i)=>i);
    $(".button-collapse").sideNav();
    this.route.params.subscribe((params) => {
      this.getStadiumCollaboratorDetails(params.eventId);
    });
  }
  getStadiumCollaboratorDetails(id) {
    this.http.post(this.StadiumCollaboratorUri, { eventId: id })
      .map((res) => res.json())
      .subscribe((resp) => {
        if (resp.data) {
          this.data = resp.data.filter(item => {
            if (item.email != this.userDetailService.email) {
              return item;
            }
          });
          this.gotData = true;
        }
      });
  }
}
