import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.css']
})
export class TeamsPageComponent implements OnInit {

  constructor(private http: Http) { }
  teamsDetails: any;
  ngOnInit() {
    /* on load, slide to top of the page */
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.materialboxed').materialbox();
    let teamsURL = environment.currentServerURL + "/api/teams";
    this.http.get(teamsURL)
      .map(resp => resp.json())
      .subscribe((res) => {
        this.teamsDetails = res.data;
      });
  }
}
